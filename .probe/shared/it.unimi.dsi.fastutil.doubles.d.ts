declare module "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $DoubleFunction } from "java.util.function.DoubleFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Double2ReferenceFunction<V = any> extends $Function$0<double, V>, $DoubleFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<double, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Double2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Double2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Double2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Double2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Double2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Double2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Double2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Double2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Double2ShortFunction
"apply"(double0: double): V
"apply"(double0: double): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, V>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2ReferenceFunction<V>
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(double0: double): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(double0: double, v1: V): V
"put"(double0: double, v1: V): V
/** @deprecated */
"put"(double0: double, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(double0: double): V
"size"(): integer
}

export namespace $Double2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2ReferenceFunction$$Static<V = any> implements $Double2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleBidirectionalIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $DoubleConsumer$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import { $DoubleConsumer$$Type as $DoubleConsumer$0$$Type } from "java.util.function.DoubleConsumer"
import { $ObjectBidirectionalIterator } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"

export interface $DoubleBidirectionalIterator extends $DoubleIterator, $ObjectBidirectionalIterator<double> {
"back"(int0: integer): integer
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$0$$Type): void
"hasNext"(): boolean
"hasPrevious"(): boolean
/** @deprecated */
"next"(): double
"nextDouble"(): double
/** @deprecated */
"previous"(): double
"previousDouble"(): double
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $DoubleBidirectionalIterator {
const probejs$$marker: never
}
export abstract class $DoubleBidirectionalIterator$$Static implements $DoubleBidirectionalIterator {
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import { $DoubleConsumer$$Type as $DoubleConsumer$0$$Type } from "java.util.function.DoubleConsumer"
import { $Iterable } from "java.lang.Iterable"

export interface $DoubleIterable extends $Iterable<double> {
"doubleIterator"(): $DoubleIterator
"doubleSpliterator"(): $DoubleSpliterator
"forEach"(doubleConsumer0: $DoubleConsumer$0$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<double>): void
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
}

export namespace $DoubleIterable {
const probejs$$marker: never
}
export abstract class $DoubleIterable$$Static implements $DoubleIterable {
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleSpliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Spliterator$OfDouble } from "java.util.Spliterator$OfDouble"
import { $DoubleConsumer$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import { $DoubleConsumer$$Type as $DoubleConsumer$0$$Type } from "java.util.function.DoubleConsumer"

export interface $DoubleSpliterator extends $Spliterator$OfDouble {
"characteristics"(): integer
"estimateSize"(): long
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$0$$Type): void
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
/** @deprecated */
"tryAdvance"(consumer0: $Consumer$$Type<double>): boolean
"tryAdvance"(doubleConsumer0: $DoubleConsumer$$Type): boolean
"tryAdvance"(doubleConsumer0: $DoubleConsumer$0$$Type): boolean
get "exactSizeIfKnown"(): long
}

export namespace $DoubleSpliterator {
const probejs$$marker: never
}
export abstract class $DoubleSpliterator$$Static implements $DoubleSpliterator {
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleBinaryOperator" {
import { $DoubleBinaryOperator as $DoubleBinaryOperator$0 } from "java.util.function.DoubleBinaryOperator"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"
import { $BinaryOperator } from "java.util.function.BinaryOperator"

export interface $DoubleBinaryOperator extends $BinaryOperator<double>, $DoubleBinaryOperator$0 {
"andThen"<V>(function0: $Function$$Type<double, V>): $BiFunction<double, double, V>
/** @deprecated */
"apply"(double0: double, double1: double): double
"apply"(double0: double, double1: double): double
/** @deprecated */
"applyAsDouble"(double0: double, double1: double): double
}

export namespace $DoubleBinaryOperator {
function maxBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
function minBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
export abstract class $DoubleBinaryOperator$$Static implements $DoubleBinaryOperator {
static "maxBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
static "minBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2ShortFunction" {
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Double2ShortFunction extends $Function$0<double, short>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<double, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Double2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): short
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, short>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2ShortFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2ShortFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2ShortFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2ShortFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2ShortFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2ShortFunction
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(short0: short): void
"defaultReturnValue"(): short
"get"(double0: double): short
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(double0: double, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"put"(double0: double, short1: short): short
"put"(double0: double, short1: short): short
"remove"(double0: double): short
"size"(): integer
}

export namespace $Double2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2ShortFunction$$Static implements $Double2ShortFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoublePredicate" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $DoublePredicate as $DoublePredicate$0, $DoublePredicate$$Type as $DoublePredicate$0$$Type } from "java.util.function.DoublePredicate"

export interface $DoublePredicate extends $Predicate<double>, $DoublePredicate$0 {
"and"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
/** @deprecated */
"and"(predicate0: $Predicate$$Type<double>): $Predicate<double>
"or"(doublePredicate0: $DoublePredicate$0$$Type): $DoublePredicate
"or"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
/** @deprecated */
"or"(predicate0: $Predicate$$Type<double>): $Predicate<double>
/** @deprecated */
"test"(double0: double): boolean
"test"(double0: double): boolean
}

export namespace $DoublePredicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $DoublePredicate$$Static implements $DoublePredicate {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $DoubleFunction } from "java.util.function.DoubleFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Double2ObjectFunction<V = any> extends $Function$0<double, V>, $DoubleFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<double, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Double2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Double2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Double2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Double2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Double2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Double2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Double2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Double2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Double2ShortFunction
"apply"(double0: double): V
"apply"(double0: double): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, V>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2ObjectFunction<V>
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(double0: double): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(double0: double, v1: V): V
"put"(double0: double, v1: V): V
/** @deprecated */
"put"(double0: double, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(double0: double): V
"size"(): integer
}

export namespace $Double2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2ObjectFunction$$Static<V = any> implements $Double2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleList" {
import { $DoubleComparator$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleComparator"
import { $DoubleCollection, $DoubleCollection$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleCollection"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import { $DoubleUnaryOperator$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleUnaryOperator"
import { $DoubleConsumer$$Type as $DoubleConsumer$0$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleUnaryOperator$$Type as $DoubleUnaryOperator$0$$Type } from "java.util.function.DoubleUnaryOperator"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $DoublePredicate$$Type } from "it.unimi.dsi.fastutil.doubles.DoublePredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $DoubleListIterator } from "it.unimi.dsi.fastutil.doubles.DoubleListIterator"
import { $Stream } from "java.util.stream.Stream"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $Comparable } from "java.lang.Comparable"
import { $DoublePredicate$$Type as $DoublePredicate$0$$Type } from "java.util.function.DoublePredicate"
import { $Comparator$$Type } from "java.util.Comparator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $DoubleList extends $List<double>, $Comparable<$List<double>>, $DoubleCollection {
/** @deprecated */
"add"(double0: double): boolean
"add"(int0: integer, double1: double): void
/** @deprecated */
"add"(int0: integer, double1: double): void
"add"(double0: double): boolean
"addAll"(int0: integer, doubleList1: $DoubleList$$Type): boolean
"addAll"(int0: integer, doubleCollection1: $DoubleCollection$$Type): boolean
"addAll"(doubleList0: $DoubleList$$Type): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<double>): boolean
"addAll"(collection0: $Collection$$Type<double>): boolean
"addAll"(doubleCollection0: $DoubleCollection$$Type): boolean
"addElements"(int0: integer, double1s: double[]): void
"addElements"(int0: integer, double1s: double[], int2: integer, int3: integer): void
"clear"(): void
"compareTo"(list0: $List$$Type<double>): integer
/** @deprecated */
"contains"(object0: any): boolean
"contains"(double0: double): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"containsAll"(doubleCollection0: $DoubleCollection$$Type): boolean
"doubleIterator"(): $DoubleIterator
"doubleParallelStream"(): $DoubleStream
"doubleSpliterator"(): $DoubleSpliterator
"doubleStream"(): $DoubleStream
"equals"(object0: any): boolean
"forEach"(doubleConsumer0: $DoubleConsumer$0$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<double>): void
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
/** @deprecated */
"get"(int0: integer): double
"getDouble"(int0: integer): double
"getElements"(int0: integer, double1s: double[], int2: integer, int3: integer): void
"hashCode"(): integer
"indexOf"(double0: double): integer
/** @deprecated */
"indexOf"(object0: any): integer
"isEmpty"(): boolean
/** @deprecated */
"lastIndexOf"(object0: any): integer
"lastIndexOf"(double0: double): integer
"listIterator"(): $DoubleListIterator
/** @deprecated */
"parallelStream"(): $Stream<double>
"rem"(double0: double): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeAll"(doubleCollection0: $DoubleCollection$$Type): boolean
"removeDouble"(int0: integer): double
"removeElements"(int0: integer, int1: integer): void
"removeIf"(doublePredicate0: $DoublePredicate$0$$Type): boolean
"removeIf"(doublePredicate0: $DoublePredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<double>): boolean
/** @deprecated */
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<double>): void
"replaceAll"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): void
"replaceAll"(doubleUnaryOperator0: $DoubleUnaryOperator$0$$Type): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"retainAll"(doubleCollection0: $DoubleCollection$$Type): boolean
/** @deprecated */
"set"(int0: integer, double1: double): double
"set"(int0: integer, double1: double): double
"setElements"(int0: integer, double1s: double[], int2: integer, int3: integer): void
"setElements"(double0s: double[]): void
"setElements"(int0: integer, double1s: double[]): void
"size"(int0: integer): void
"size"(): integer
"sort"(doubleComparator0: $DoubleComparator$$Type): void
/** @deprecated */
"sort"(comparator0: $Comparator$$Type<double>): void
"spliterator"(): $DoubleSpliterator
/** @deprecated */
"stream"(): $Stream<double>
"subList"(int0: integer, int1: integer): $DoubleList
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(double0s: double[]): double[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
"toDoubleArray"(double0s: double[]): double[]
"toDoubleArray"(): double[]
/** @deprecated */
"unstableSort"(comparator0: $Comparator$$Type<double>): void
"unstableSort"(doubleComparator0: $DoubleComparator$$Type): void
get "empty"(): boolean
set "elements"(value: double[])
}

export namespace $DoubleList {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of(...double0s: double[]): $DoubleList
function of(double0: double, double1: double): $DoubleList
function of(double0: double): $DoubleList
function of(): $DoubleList
function of(double0: double, double1: double, double2: double): $DoubleList
function of<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
function of<E>(e0: E, e1: E, e2: E): $List<E>
function of<E>(e0: E, e1: E): $List<E>
function of<E>(e0: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
function of<E>(...e0s: E[]): $List<E>
}
export abstract class $DoubleList$$Static implements $DoubleList {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"(...double0s: double[]): $DoubleList
static "of"(double0: double, double1: double): $DoubleList
static "of"(double0: double): $DoubleList
static "of"(): $DoubleList
static "of"(double0: double, double1: double, double2: double): $DoubleList
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E): $List<E>
static "of"<E>(e0: E, e1: E): $List<E>
static "of"<E>(e0: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
static "of"<E>(...e0s: E[]): $List<E>
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction" {
import { $Double2ShortFunction, $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction, $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Double2FloatFunction, $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Long2DoubleFunction, $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $DoubleUnaryOperator, $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $Int2DoubleFunction, $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction, $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Double2LongFunction, $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction, $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction, $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Double2CharFunction, $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction, $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction, $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction, $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction, $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Double2DoubleFunction extends $Function<double, double>, $DoubleUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<double, T>): $Function$0<double, T>
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Double2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): double
"applyAsDouble"(double0: double): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, double>): $Function$0<T, double>
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2DoubleFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2DoubleFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2DoubleFunction
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): double
"defaultReturnValue"(double0: double): void
"get"(double0: double): double
/** @deprecated */
"get"(object0: any): double
"getOrDefault"(double0: double, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(double0: double, double1: double): double
"put"(double0: double, double1: double): double
/** @deprecated */
"remove"(object0: any): double
"remove"(double0: double): double
"size"(): integer
}

export namespace $Double2DoubleFunction {
function identity(): $Double2DoubleFunction
}
export abstract class $Double2DoubleFunction$$Static implements $Double2DoubleFunction {
static "identity"(): $Double2DoubleFunction
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2LongFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $DoubleToLongFunction } from "java.util.function.DoubleToLongFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Double2LongFunction extends $Function$0<double, long>, $DoubleToLongFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<double, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Double2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): long
"applyAsLong"(double0: double): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, long>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2LongFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2LongFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2LongFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2LongFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2LongFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2LongFunction
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(long0: long): void
"defaultReturnValue"(): long
"get"(double0: double): long
/** @deprecated */
"get"(object0: any): long
"getOrDefault"(double0: double, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(double0: double, long1: long): long
"put"(double0: double, long1: long): long
"remove"(double0: double): long
"size"(): integer
}

export namespace $Double2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2LongFunction$$Static implements $Double2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2IntFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Double2IntFunction extends $Function$0<double, integer>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<double, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Double2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): integer
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, integer>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2IntFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2IntFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2IntFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2IntFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2IntFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2IntFunction
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
"get"(double0: double): integer
/** @deprecated */
"get"(object0: any): integer
"getOrDefault"(double0: double, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(double0: double, integer1: integer): integer
"put"(double0: double, int1: integer): integer
"remove"(double0: double): integer
"size"(): integer
}

export namespace $Double2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2IntFunction$$Static implements $Double2IntFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2ByteFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Double2ByteFunction extends $Function$0<double, byte>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<double, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Double2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): byte
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, byte>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2ByteFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2ByteFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2ByteFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2ByteFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2ByteFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2ByteFunction
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
"get"(double0: double): byte
/** @deprecated */
"get"(object0: any): byte
"getOrDefault"(double0: double, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(double0: double, byte1: byte): byte
"put"(double0: double, byte1: byte): byte
"remove"(double0: double): byte
"size"(): integer
}

export namespace $Double2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2ByteFunction$$Static implements $Double2ByteFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2FloatFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $DoubleUnaryOperator, $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Double2FloatFunction extends $Function$0<double, float>, $DoubleUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<double, T>
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Double2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): float
"applyAsDouble"(double0: double): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, float>
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2FloatFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2FloatFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2FloatFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2FloatFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2FloatFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2FloatFunction
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
"get"(double0: double): float
/** @deprecated */
"get"(object0: any): float
"getOrDefault"(double0: double, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(double0: double, float1: float): float
"put"(double0: double, float1: float): float
"remove"(double0: double): float
"size"(): integer
}

export namespace $Double2FloatFunction {
function identity(): $DoubleUnaryOperator
}
export abstract class $Double2FloatFunction$$Static implements $Double2FloatFunction {
static "identity"(): $DoubleUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2CharFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Double2CharFunction extends $Function$0<double, character>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<double, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Double2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): character
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, character>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2CharFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2CharFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2CharFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2CharFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2CharFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2CharFunction
"containsKey"(double0: double): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(char0: character): void
"defaultReturnValue"(): character
"get"(double0: double): character
/** @deprecated */
"get"(object0: any): character
"getOrDefault"(double0: double, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(double0: double, character1: character): character
"put"(double0: double, char1: character): character
"remove"(double0: double): character
"size"(): integer
}

export namespace $Double2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2CharFunction$$Static implements $Double2CharFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PrimitiveIterator$OfDouble } from "java.util.PrimitiveIterator$OfDouble"
import { $DoubleConsumer$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import { $DoubleConsumer$$Type as $DoubleConsumer$0$$Type } from "java.util.function.DoubleConsumer"

export interface $DoubleIterator extends $PrimitiveIterator$OfDouble {
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$0$$Type): void
"hasNext"(): boolean
/** @deprecated */
"next"(): double
"nextDouble"(): double
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $DoubleIterator {
const probejs$$marker: never
}
export abstract class $DoubleIterator$$Static implements $DoubleIterator {
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleCollection" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import { $DoubleConsumer$$Type as $DoubleConsumer$0$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $DoublePredicate$$Type } from "it.unimi.dsi.fastutil.doubles.DoublePredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DoubleIterable } from "it.unimi.dsi.fastutil.doubles.DoubleIterable"
import { $Stream } from "java.util.stream.Stream"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $DoublePredicate$$Type as $DoublePredicate$0$$Type } from "java.util.function.DoublePredicate"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $DoubleCollection extends $Collection<double>, $DoubleIterable {
/** @deprecated */
"add"(double0: double): boolean
"add"(double0: double): boolean
"addAll"(doubleCollection0: $DoubleCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<double>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(double0: double): boolean
"containsAll"(doubleCollection0: $DoubleCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"doubleIterator"(): $DoubleIterator
"doubleParallelStream"(): $DoubleStream
"doubleSpliterator"(): $DoubleSpliterator
"doubleStream"(): $DoubleStream
"equals"(object0: any): boolean
"forEach"(doubleConsumer0: $DoubleConsumer$0$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<double>): void
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $DoubleIterator
/** @deprecated */
"parallelStream"(): $Stream<double>
"rem"(double0: double): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(doubleCollection0: $DoubleCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(doublePredicate0: $DoublePredicate$0$$Type): boolean
"removeIf"(doublePredicate0: $DoublePredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<double>): boolean
"retainAll"(doubleCollection0: $DoubleCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $DoubleSpliterator
/** @deprecated */
"stream"(): $Stream<double>
"toArray"(double0s: double[]): double[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
/** @deprecated */
"toDoubleArray"(double0s: double[]): double[]
"toDoubleArray"(): double[]
get "empty"(): boolean
}

export namespace $DoubleCollection {
const probejs$$marker: never
}
export abstract class $DoubleCollection$$Static implements $DoubleCollection {
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleListIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ListIterator } from "java.util.ListIterator"
import { $DoubleBidirectionalIterator } from "it.unimi.dsi.fastutil.doubles.DoubleBidirectionalIterator"
import { $DoubleConsumer$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import { $DoubleConsumer$$Type as $DoubleConsumer$0$$Type } from "java.util.function.DoubleConsumer"

export interface $DoubleListIterator extends $DoubleBidirectionalIterator, $ListIterator<double> {
/** @deprecated */
"add"(double0: double): void
"add"(double0: double): void
"back"(int0: integer): integer
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$0$$Type): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"nextDouble"(): double
"nextIndex"(): integer
"previousDouble"(): double
"previousIndex"(): integer
"remove"(): void
/** @deprecated */
"set"(double0: double): void
"set"(double0: double): void
"skip"(int0: integer): integer
}

export namespace $DoubleListIterator {
const probejs$$marker: never
}
export abstract class $DoubleListIterator$$Static implements $DoubleListIterator {
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleComparator" {
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $Function$$Type } from "java.util.function.Function"

export interface $DoubleComparator extends $Comparator<double> {
"compare"(double0: double, double1: double): integer
/** @deprecated */
"compare"(double0: double, double1: double): integer
"equals"(object0: any): boolean
"reversed"(): $DoubleComparator
"thenComparing"(comparator0: $Comparator$$Type<double>): $Comparator<double>
"thenComparing"(doubleComparator0: $DoubleComparator$$Type): $DoubleComparator
"thenComparing"<U>(function0: $Function$$Type<double, U>, comparator1: $Comparator$$Type<U>): $Comparator<double>
"thenComparing"<U extends $Comparable<U>>(function0: $Function$$Type<double, U>): $Comparator<double>
"thenComparingDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<double>): $Comparator<double>
"thenComparingInt"(toIntFunction0: $ToIntFunction$$Type<double>): $Comparator<double>
"thenComparingLong"(toLongFunction0: $ToLongFunction$$Type<double>): $Comparator<double>
}

export namespace $DoubleComparator {
function comparing<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
function comparing<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
function comparingDouble<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
function comparingInt<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
function comparingLong<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
function naturalOrder<T extends $Comparable<T>>(): $Comparator<T>
function nullsFirst<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function nullsLast<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function reverseOrder<T extends $Comparable<T>>(): $Comparator<T>
}
export abstract class $DoubleComparator$$Static implements $DoubleComparator {
static "comparing"<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
static "comparing"<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
static "comparingDouble"<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
static "comparingInt"<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
static "comparingLong"<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
static "naturalOrder"<T extends $Comparable<T>>(): $Comparator<T>
static "nullsFirst"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "nullsLast"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "reverseOrder"<T extends $Comparable<T>>(): $Comparator<T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $DoublePredicate, $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Double2BooleanFunction extends $Function$0<double, boolean>, $DoublePredicate {
"and"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<double, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Double2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Double2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Double2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Double2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Double2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Double2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Double2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Double2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Double2ShortFunction
"apply"(double0: double): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, double>): $Function<T, boolean>
"composeByte"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2BooleanFunction
"composeInt"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2BooleanFunction
"composeLong"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2DoubleFunction0: $Object2DoubleFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2BooleanFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(double0: double): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"get"(double0: double): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(double0: double, boolean1: boolean): boolean
"negate"(): $DoublePredicate
"or"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
/** @deprecated */
"put"(double0: double, boolean1: boolean): boolean
"put"(double0: double, boolean1: boolean): boolean
"remove"(double0: double): boolean
"size"(): integer
"test"(double0: double): boolean
}

export namespace $Double2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Double2BooleanFunction$$Static implements $Double2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleUnaryOperator" {
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $DoubleUnaryOperator as $DoubleUnaryOperator$0, $DoubleUnaryOperator$$Type as $DoubleUnaryOperator$0$$Type } from "java.util.function.DoubleUnaryOperator"

export interface $DoubleUnaryOperator extends $UnaryOperator<double>, $DoubleUnaryOperator$0 {
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$0$$Type): $DoubleUnaryOperator$0
"andThen"<V>(function0: $Function$$Type<double, V>): $Function<double, V>
"apply"(double0: double): double
/** @deprecated */
"apply"(double0: double): double
/** @deprecated */
"applyAsDouble"(double0: double): double
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$0$$Type): $DoubleUnaryOperator$0
"compose"<V>(function0: $Function$$Type<V, double>): $Function<V, double>
}

export namespace $DoubleUnaryOperator {
function identity(): $DoubleUnaryOperator
function negation(): $DoubleUnaryOperator
}
export abstract class $DoubleUnaryOperator$$Static implements $DoubleUnaryOperator {
static "identity"(): $DoubleUnaryOperator
static "negation"(): $DoubleUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.doubles.DoubleConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $DoubleConsumer as $DoubleConsumer$0 } from "java.util.function.DoubleConsumer"

export interface $DoubleConsumer extends $Consumer<double>, $DoubleConsumer$0 {
/** @deprecated */
"accept"(double0: double): void
"accept"(double0: double): void
"andThen"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleConsumer
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<double>): $Consumer<double>
}

export namespace $DoubleConsumer {
const probejs$$marker: never
}
export abstract class $DoubleConsumer$$Static implements $DoubleConsumer {
}
}

