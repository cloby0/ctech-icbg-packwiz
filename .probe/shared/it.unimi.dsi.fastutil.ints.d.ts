declare module "it.unimi.dsi.fastutil.ints.Int2BooleanFunction" {
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $IntPredicate, $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2BooleanFunction extends $Function$0<integer, boolean>, $IntPredicate {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<integer, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Int2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, boolean>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2BooleanFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2BooleanFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2BooleanFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(int0: integer): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"get"(int0: integer): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(int0: integer, boolean1: boolean): boolean
"negate"(): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"put"(integer0: integer, boolean1: boolean): boolean
"put"(int0: integer, boolean1: boolean): boolean
"remove"(int0: integer): boolean
"size"(): integer
"test"(int0: integer): boolean
}

export namespace $Int2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Int2BooleanFunction$$Static implements $Int2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.ints.IntBinaryOperator" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $IntBinaryOperator as $IntBinaryOperator$0 } from "java.util.function.IntBinaryOperator"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"
import { $BinaryOperator } from "java.util.function.BinaryOperator"

export interface $IntBinaryOperator extends $BinaryOperator<integer>, $IntBinaryOperator$0 {
"andThen"<V>(function0: $Function$$Type<integer, V>): $BiFunction<integer, integer, V>
/** @deprecated */
"apply"(integer0: integer, integer1: integer): integer
"apply"(int0: integer, int1: integer): integer
/** @deprecated */
"applyAsInt"(int0: integer, int1: integer): integer
}

export namespace $IntBinaryOperator {
function maxBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
function minBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
export abstract class $IntBinaryOperator$$Static implements $IntBinaryOperator {
static "maxBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
static "minBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2LongFunction" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $IntToLongFunction } from "java.util.function.IntToLongFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2LongFunction extends $Function$0<integer, long>, $IntToLongFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<integer, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Int2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): long
"applyAsLong"(int0: integer): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, long>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2LongFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2LongFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2LongFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2LongFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2LongFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2LongFunction
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(long0: long): void
"defaultReturnValue"(): long
"get"(int0: integer): long
/** @deprecated */
"get"(object0: any): long
"getOrDefault"(int0: integer, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(integer0: integer, long1: long): long
"put"(int0: integer, long1: long): long
"remove"(int0: integer): long
"size"(): integer
}

export namespace $Int2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Int2LongFunction$$Static implements $Int2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.ints.AbstractIntSet" {
import { $IntStream } from "java.util.stream.IntStream"
import { $Cloneable } from "java.lang.Cloneable"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Set } from "java.util.Set"
import { $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $AbstractIntCollection } from "it.unimi.dsi.fastutil.ints.AbstractIntCollection"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $Stream } from "java.util.stream.Stream"
import { $IntSet } from "it.unimi.dsi.fastutil.ints.IntSet"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractIntSet extends $AbstractIntCollection implements $Cloneable, $IntSet {
/** @deprecated */
public "add"(integer0: integer): boolean
public "clear"(): void
/** @deprecated */
public "contains"(object0: any): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(intConsumer0: $IntConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<integer>): void
public "intIterator"(): $IntIterator
public "intParallelStream"(): $IntStream
public "intSpliterator"(): $IntSpliterator
public "intStream"(): $IntStream
public "isEmpty"(): boolean
public static "of"(int0: integer, int1: integer): $IntSet
public static "of"(): $IntSet
public static "of"(...int0s: integer[]): $IntSet
public static "of"(int0: integer): $IntSet
public static "of"(int0: integer, int1: integer, int2: integer): $IntSet
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
/** @deprecated */
public "parallelStream"(): $Stream<integer>
public "remove"(int0: integer): boolean
/** @deprecated */
public "remove"(object0: any): boolean
public "removeIf"(intPredicate0: $IntPredicate$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<integer>): boolean
public "size"(): integer
public "spliterator"(): $IntSpliterator
/** @deprecated */
public "stream"(): $Stream<integer>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2DoubleFunction extends $Function$0<integer, double>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<integer, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Int2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): double
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, double>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2DoubleFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2DoubleFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2DoubleFunction
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
"get"(int0: integer): double
/** @deprecated */
"get"(object0: any): double
"getOrDefault"(int0: integer, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(integer0: integer, double1: double): double
"put"(int0: integer, double1: double): double
"remove"(int0: integer): double
"size"(): integer
}

export namespace $Int2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Int2DoubleFunction$$Static implements $Int2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2ObjectFunction" {
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2ObjectFunction<V = any> extends $Function$0<integer, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<integer, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Int2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Int2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Int2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Int2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Int2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Int2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Int2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Int2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Int2ShortFunction
"apply"(int0: integer): V
"apply"(integer0: integer): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, V>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2ObjectFunction<V>
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(int0: integer): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(int0: integer, v1: V): V
"put"(int0: integer, v1: V): V
/** @deprecated */
"put"(integer0: integer, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(int0: integer): V
"size"(): integer
}

export namespace $Int2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Int2ObjectFunction$$Static<V = any> implements $Int2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.ints.IntCollection" {
import { $IntStream } from "java.util.stream.IntStream"
import { $IntPredicate$$Type } from "it.unimi.dsi.fastutil.ints.IntPredicate"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $IntPredicate$$Type as $IntPredicate$0$$Type } from "java.util.function.IntPredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $Stream } from "java.util.stream.Stream"
import { $IntIterable } from "it.unimi.dsi.fastutil.ints.IntIterable"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $IntCollection extends $Collection<integer>, $IntIterable {
"add"(int0: integer): boolean
/** @deprecated */
"add"(integer0: integer): boolean
"addAll"(intCollection0: $IntCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<integer>): boolean
"clear"(): void
"contains"(int0: integer): boolean
/** @deprecated */
"contains"(object0: any): boolean
"containsAll"(intCollection0: $IntCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(intConsumer0: $IntConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<integer>): void
"forEach"(intConsumer0: $IntConsumer$0$$Type): void
"hashCode"(): integer
"intIterator"(): $IntIterator
"intParallelStream"(): $IntStream
"intSpliterator"(): $IntSpliterator
"intStream"(): $IntStream
"isEmpty"(): boolean
/** @deprecated */
"parallelStream"(): $Stream<integer>
"rem"(int0: integer): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(intCollection0: $IntCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(intPredicate0: $IntPredicate$0$$Type): boolean
"removeIf"(intPredicate0: $IntPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<integer>): boolean
"retainAll"(intCollection0: $IntCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $IntSpliterator
/** @deprecated */
"stream"(): $Stream<integer>
"toArray"(int0s: integer[]): integer[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
/** @deprecated */
"toIntArray"(int0s: integer[]): integer[]
"toIntArray"(): integer[]
get "empty"(): boolean
}

export namespace $IntCollection {
const probejs$$marker: never
}
export abstract class $IntCollection$$Static implements $IntCollection {
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2ShortFunction extends $Function$0<integer, short>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<integer, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Int2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): short
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, short>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2ShortFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2ShortFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2ShortFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2ShortFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2ShortFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2ShortFunction
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(short0: short): void
"defaultReturnValue"(): short
"get"(int0: integer): short
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(int0: integer, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"put"(integer0: integer, short1: short): short
"put"(int0: integer, short1: short): short
"remove"(int0: integer): short
"size"(): integer
}

export namespace $Int2ShortFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Int2ShortFunction$$Static implements $Int2ShortFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2ObjectMap" {
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Int2ObjectMap$Entry } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap$Entry"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2ObjectMap<V = any> extends $Int2ObjectFunction<V>, $Map<integer, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<integer, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Int2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Int2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Int2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Int2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Int2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Int2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Int2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Int2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Int2ShortFunction
"apply"(int0: integer): V
"apply"(integer0: integer): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, V>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2ObjectFunction<V>
"compute"(int0: integer, biFunction1: $BiFunction$$Type<integer, V, V>): V
"compute"(integer0: integer, biFunction1: $BiFunction$$Type<integer, V, V>): V
"computeIfAbsent"(int0: integer, int2ObjectFunction1: $Int2ObjectFunction$$Type<V>): V
"computeIfAbsent"(int0: integer, intFunction1: $IntFunction$$Type<V>): V
"computeIfAbsent"(integer0: integer, function1: $Function$$Type<integer, V>): V
/** @deprecated */
"computeIfAbsentPartial"(int0: integer, int2ObjectFunction1: $Int2ObjectFunction$$Type<V>): V
"computeIfPresent"(int0: integer, biFunction1: $BiFunction$$Type<integer, V, V>): V
"computeIfPresent"(integer0: integer, biFunction1: $BiFunction$$Type<integer, V, V>): V
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(int0: integer): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<integer, V>): void
/** @deprecated */
"get"(object0: any): V
"get"(int0: integer): V
"getOrDefault"(int0: integer, v1: V): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"int2ObjectEntrySet"(): $ObjectSet<$Int2ObjectMap$Entry<V>>
"isEmpty"(): boolean
"merge"(int0: integer, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"merge"(integer0: integer, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
/** @deprecated */
"put"(integer0: integer, v1: V): V
"put"(int0: integer, v1: V): V
"putAll"(map0: $Map$$Type<integer, V>): void
"putIfAbsent"(int0: integer, v1: V): V
"putIfAbsent"(integer0: integer, v1: V): V
"remove"(int0: integer, object1: any): boolean
/** @deprecated */
"remove"(object0: any): V
"remove"(int0: integer): V
"remove"(object0: any, object1: any): boolean
"replace"(int0: integer, v1: V): V
"replace"(int0: integer, v1: V, v2: V): boolean
"replace"(integer0: integer, v1: V): V
"replace"(integer0: integer, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<integer, V, V>): void
"size"(): integer
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Int2ObjectMap {
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
export abstract class $Int2ObjectMap$$Static<V = any> implements $Int2ObjectMap<V> {
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

declare module "it.unimi.dsi.fastutil.ints.Int2FloatFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2FloatFunction extends $Function$0<integer, float>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<integer, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Int2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): float
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, float>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2FloatFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2FloatFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2FloatFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2FloatFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2FloatFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2FloatFunction
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
"get"(int0: integer): float
/** @deprecated */
"get"(object0: any): float
"getOrDefault"(int0: integer, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(integer0: integer, float1: float): float
"put"(int0: integer, float1: float): float
"remove"(int0: integer): float
"size"(): integer
}

export namespace $Int2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Int2FloatFunction$$Static implements $Int2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2IntMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Int2IntMap$Entry extends $Map$Entry<integer, integer> {
"equals"(object0: any): boolean
"getIntKey"(): integer
"getIntValue"(): integer
"hashCode"(): integer
"setValue"(int0: integer): integer
/** @deprecated */
"setValue"(integer0: integer): integer
get "intKey"(): integer
get "intValue"(): integer
set "value"(value: integer)
set "value"(value: integer)
}

export namespace $Int2IntMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Int2IntMap$Entry$$Static implements $Int2IntMap$Entry {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.ints.AbstractIntCollection" {
import { $IntStream } from "java.util.stream.IntStream"
import { $IntPredicate$$Type } from "it.unimi.dsi.fastutil.ints.IntPredicate"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $IntCollection, $IntCollection$$Type } from "it.unimi.dsi.fastutil.ints.IntCollection"
import { $IntPredicate$$Type as $IntPredicate$0$$Type } from "java.util.function.IntPredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $AbstractCollection } from "java.util.AbstractCollection"
import { $Stream } from "java.util.stream.Stream"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractIntCollection extends $AbstractCollection<integer> implements $IntCollection {
/** @deprecated */
public "add"(integer0: integer): boolean
public "add"(int0: integer): boolean
public "addAll"(intCollection0: $IntCollection$$Type): boolean
public "contains"(int0: integer): boolean
public "containsAll"(intCollection0: $IntCollection$$Type): boolean
public "equals"(object0: any): boolean
public "forEach"(intConsumer0: $IntConsumer$0$$Type): void
public "forEach"(intConsumer0: $IntConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<integer>): void
public "hashCode"(): integer
public "intIterator"(): $IntIterator
public "intParallelStream"(): $IntStream
public "intSpliterator"(): $IntSpliterator
public "intStream"(): $IntStream
/** @deprecated */
public "parallelStream"(): $Stream<integer>
public "rem"(int0: integer): boolean
public "removeAll"(intCollection0: $IntCollection$$Type): boolean
public "removeIf"(intPredicate0: $IntPredicate$$Type): boolean
public "removeIf"(intPredicate0: $IntPredicate$0$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<integer>): boolean
public "retainAll"(intCollection0: $IntCollection$$Type): boolean
public "spliterator"(): $IntSpliterator
/** @deprecated */
public "stream"(): $Stream<integer>
public "toArray"(int0s: integer[]): integer[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "toIntArray"(): integer[]
/** @deprecated */
public "toIntArray"(int0s: integer[]): integer[]
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2DoubleMap" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $DoubleCollection } from "it.unimi.dsi.fastutil.doubles.DoubleCollection"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction, $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $DoubleBinaryOperator$$Type } from "java.util.function.DoubleBinaryOperator"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $DoubleBinaryOperator$$Type as $DoubleBinaryOperator$0$$Type } from "it.unimi.dsi.fastutil.doubles.DoubleBinaryOperator"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction$$Type } from "java.util.function.IntToDoubleFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Int2DoubleMap$Entry } from "it.unimi.dsi.fastutil.ints.Int2DoubleMap$Entry"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $IntSet } from "it.unimi.dsi.fastutil.ints.IntSet"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2DoubleMap extends $Int2DoubleFunction, $Map<integer, double> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<integer, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Int2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): double
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, double>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2DoubleFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2DoubleFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2DoubleFunction
/** @deprecated */
"compute"(integer0: integer, biFunction1: $BiFunction$$Type<integer, double, double>): double
"compute"(int0: integer, biFunction1: $BiFunction$$Type<integer, double, double>): double
"computeIfAbsent"(int0: integer, intToDoubleFunction1: $IntToDoubleFunction$$Type): double
/** @deprecated */
"computeIfAbsent"(integer0: integer, function1: $Function$$Type<integer, double>): double
"computeIfAbsent"(int0: integer, int2DoubleFunction1: $Int2DoubleFunction$$Type): double
"computeIfAbsentNullable"(int0: integer, intFunction1: $IntFunction$$Type<double>): double
/** @deprecated */
"computeIfAbsentPartial"(int0: integer, int2DoubleFunction1: $Int2DoubleFunction$$Type): double
/** @deprecated */
"computeIfPresent"(integer0: integer, biFunction1: $BiFunction$$Type<integer, double, double>): double
"computeIfPresent"(int0: integer, biFunction1: $BiFunction$$Type<integer, double, double>): double
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(double0: double): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<integer, double>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<integer, double>): void
"get"(int0: integer): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
"getOrDefault"(int0: integer, double1: double): double
"hashCode"(): integer
"int2DoubleEntrySet"(): $ObjectSet<$Int2DoubleMap$Entry>
"isEmpty"(): boolean
"keySet"(): $IntSet
/** @deprecated */
"merge"(integer0: integer, double1: double, biFunction2: $BiFunction$$Type<double, double, double>): double
"merge"(int0: integer, double1: double, biFunction2: $BiFunction$$Type<double, double, double>): double
"mergeDouble"(int0: integer, double1: double, doubleBinaryOperator2: $DoubleBinaryOperator$$Type): double
"mergeDouble"(int0: integer, double1: double, doubleBinaryOperator2: $DoubleBinaryOperator$0$$Type): double
/** @deprecated */
"put"(integer0: integer, double1: double): double
"put"(int0: integer, double1: double): double
"putAll"(map0: $Map$$Type<integer, double>): void
"putIfAbsent"(int0: integer, double1: double): double
/** @deprecated */
"putIfAbsent"(integer0: integer, double1: double): double
"remove"(int0: integer, double1: double): boolean
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"remove"(int0: integer): double
"replace"(int0: integer, double1: double, double2: double): boolean
"replace"(int0: integer, double1: double): double
/** @deprecated */
"replace"(integer0: integer, double1: double, double2: double): boolean
/** @deprecated */
"replace"(integer0: integer, double1: double): double
"replaceAll"(biFunction0: $BiFunction$$Type<integer, double, double>): void
"size"(): integer
"values"(): $DoubleCollection
[index: string | number]: double
get "empty"(): boolean
}

export namespace $Int2DoubleMap {
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
export abstract class $Int2DoubleMap$$Static implements $Int2DoubleMap {
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

declare module "it.unimi.dsi.fastutil.ints.Int2IntMap" {
import { $Int2ShortFunction, $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Int2ByteFunction, $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction, $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $IntCollection } from "it.unimi.dsi.fastutil.ints.IntCollection"
import { $Int2DoubleFunction, $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction, $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction, $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction, $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction, $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Int2FloatFunction, $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction, $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Int2LongFunction, $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Int2IntMap$Entry } from "it.unimi.dsi.fastutil.ints.Int2IntMap$Entry"
import { $IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type } from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import { $IntSet } from "it.unimi.dsi.fastutil.ints.IntSet"
import { $Double2IntFunction, $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction, $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction, $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2IntMap extends $Int2IntFunction, $Map<integer, integer> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<integer, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): integer
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, integer>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2IntFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2IntFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2IntFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2IntFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2IntFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2IntFunction
/** @deprecated */
"compute"(integer0: integer, biFunction1: $BiFunction$$Type<integer, integer, integer>): integer
"compute"(int0: integer, biFunction1: $BiFunction$$Type<integer, integer, integer>): integer
"computeIfAbsent"(int0: integer, intUnaryOperator1: $IntUnaryOperator$$Type): integer
/** @deprecated */
"computeIfAbsent"(integer0: integer, function1: $Function$$Type<integer, integer>): integer
"computeIfAbsent"(int0: integer, int2IntFunction1: $Int2IntFunction$$Type): integer
"computeIfAbsentNullable"(int0: integer, intFunction1: $IntFunction$$Type<integer>): integer
/** @deprecated */
"computeIfAbsentPartial"(int0: integer, int2IntFunction1: $Int2IntFunction$$Type): integer
/** @deprecated */
"computeIfPresent"(integer0: integer, biFunction1: $BiFunction$$Type<integer, integer, integer>): integer
"computeIfPresent"(int0: integer, biFunction1: $BiFunction$$Type<integer, integer, integer>): integer
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(int0: integer): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<integer, integer>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<integer, integer>): void
"get"(int0: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(int0: integer, int1: integer): integer
"hashCode"(): integer
"int2IntEntrySet"(): $ObjectSet<$Int2IntMap$Entry>
"isEmpty"(): boolean
"keySet"(): $IntSet
/** @deprecated */
"merge"(integer0: integer, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"merge"(int0: integer, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(int0: integer, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
"mergeInt"(int0: integer, int1: integer, intBinaryOperator2: $IntBinaryOperator$0$$Type): integer
/** @deprecated */
"put"(integer0: integer, integer1: integer): integer
"put"(int0: integer, int1: integer): integer
"putAll"(map0: $Map$$Type<integer, integer>): void
"putIfAbsent"(int0: integer, int1: integer): integer
/** @deprecated */
"putIfAbsent"(integer0: integer, integer1: integer): integer
/** @deprecated */
"remove"(object0: any): integer
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"remove"(int0: integer, int1: integer): boolean
"remove"(int0: integer): integer
"replace"(int0: integer, int1: integer, int2: integer): boolean
"replace"(int0: integer, int1: integer): integer
/** @deprecated */
"replace"(integer0: integer, integer1: integer, integer2: integer): boolean
/** @deprecated */
"replace"(integer0: integer, integer1: integer): integer
"replaceAll"(biFunction0: $BiFunction$$Type<integer, integer, integer>): void
"size"(): integer
"values"(): $IntCollection
[index: string | number]: integer
get "empty"(): boolean
}

export namespace $Int2IntMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity(): $Int2IntFunction
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
export abstract class $Int2IntMap$$Static implements $Int2IntMap {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"(): $Int2IntFunction
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

declare module "it.unimi.dsi.fastutil.ints.IntIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PrimitiveIterator$OfInt } from "java.util.PrimitiveIterator$OfInt"
import { $IntConsumer$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "java.util.function.IntConsumer"

export interface $IntIterator extends $PrimitiveIterator$OfInt {
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"forEachRemaining"(intConsumer0: $IntConsumer$0$$Type): void
"hasNext"(): boolean
/** @deprecated */
"next"(): integer
"nextInt"(): integer
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $IntIterator {
const probejs$$marker: never
}
export abstract class $IntIterator$$Static implements $IntIterator {
}
}

declare module "it.unimi.dsi.fastutil.ints.IntSpliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Spliterator$OfInt } from "java.util.Spliterator$OfInt"
import { $IntConsumer$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "java.util.function.IntConsumer"

export interface $IntSpliterator extends $Spliterator$OfInt {
"characteristics"(): integer
"estimateSize"(): long
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"forEachRemaining"(intConsumer0: $IntConsumer$0$$Type): void
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
/** @deprecated */
"tryAdvance"(consumer0: $Consumer$$Type<integer>): boolean
"tryAdvance"(intConsumer0: $IntConsumer$$Type): boolean
"tryAdvance"(intConsumer0: $IntConsumer$0$$Type): boolean
get "exactSizeIfKnown"(): long
}

export namespace $IntSpliterator {
const probejs$$marker: never
}
export abstract class $IntSpliterator$$Static implements $IntSpliterator {
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction" {
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2ReferenceFunction<V = any> extends $Function$0<integer, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<integer, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Int2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Int2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Int2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Int2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Int2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Int2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Int2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Int2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Int2ShortFunction
"apply"(int0: integer): V
"apply"(integer0: integer): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, V>
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2ReferenceFunction<V>
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(int0: integer): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(int0: integer, v1: V): V
"put"(int0: integer, v1: V): V
/** @deprecated */
"put"(integer0: integer, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(int0: integer): V
"size"(): integer
}

export namespace $Int2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Int2ReferenceFunction$$Static<V = any> implements $Int2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.ints.IntIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $IntConsumer$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "java.util.function.IntConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $IntIterable extends $Iterable<integer> {
"forEach"(intConsumer0: $IntConsumer$0$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<integer>): void
"forEach"(intConsumer0: $IntConsumer$$Type): void
"intIterator"(): $IntIterator
"intSpliterator"(): $IntSpliterator
}

export namespace $IntIterable {
const probejs$$marker: never
}
export abstract class $IntIterable$$Static implements $IntIterable {
}
}

declare module "it.unimi.dsi.fastutil.ints.IntBidirectionalIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $IntConsumer$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "java.util.function.IntConsumer"
import { $ObjectBidirectionalIterator } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"

export interface $IntBidirectionalIterator extends $IntIterator, $ObjectBidirectionalIterator<integer> {
"back"(int0: integer): integer
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"forEachRemaining"(intConsumer0: $IntConsumer$0$$Type): void
"hasNext"(): boolean
"hasPrevious"(): boolean
/** @deprecated */
"next"(): integer
"nextInt"(): integer
/** @deprecated */
"previous"(): integer
"previousInt"(): integer
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $IntBidirectionalIterator {
const probejs$$marker: never
}
export abstract class $IntBidirectionalIterator$$Static implements $IntBidirectionalIterator {
}
}

declare module "it.unimi.dsi.fastutil.ints.IntListIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ListIterator } from "java.util.ListIterator"
import { $IntConsumer$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "java.util.function.IntConsumer"
import { $IntBidirectionalIterator } from "it.unimi.dsi.fastutil.ints.IntBidirectionalIterator"

export interface $IntListIterator extends $IntBidirectionalIterator, $ListIterator<integer> {
/** @deprecated */
"add"(integer0: integer): void
"add"(int0: integer): void
"back"(int0: integer): integer
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"forEachRemaining"(intConsumer0: $IntConsumer$0$$Type): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"nextIndex"(): integer
"nextInt"(): integer
"previousIndex"(): integer
"previousInt"(): integer
"remove"(): void
/** @deprecated */
"set"(integer0: integer): void
"set"(int0: integer): void
"skip"(int0: integer): integer
}

export namespace $IntListIterator {
const probejs$$marker: never
}
export abstract class $IntListIterator$$Static implements $IntListIterator {
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2ObjectMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Int2ObjectMap$Entry<V = any> extends $Map$Entry<integer, V> {
"equals"(object0: any): boolean
"getIntKey"(): integer
/** @deprecated */
"getKey"(): integer
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "intKey"(): integer
get "key"(): integer
get "value"(): V
set "value"(value: V)
}

export namespace $Int2ObjectMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Int2ObjectMap$Entry$$Static<V = any> implements $Int2ObjectMap$Entry<V> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.ints.IntSet" {
import { $IntStream } from "java.util.stream.IntStream"
import { $IntPredicate$$Type } from "it.unimi.dsi.fastutil.ints.IntPredicate"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Set } from "java.util.Set"
import { $IntCollection, $IntCollection$$Type } from "it.unimi.dsi.fastutil.ints.IntCollection"
import { $IntPredicate$$Type as $IntPredicate$0$$Type } from "java.util.function.IntPredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $Stream } from "java.util.stream.Stream"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $IntSet extends $IntCollection, $Set<integer> {
/** @deprecated */
"add"(integer0: integer): boolean
"add"(int0: integer): boolean
"addAll"(intCollection0: $IntCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<integer>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(int0: integer): boolean
"containsAll"(intCollection0: $IntCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(intConsumer0: $IntConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<integer>): void
"forEach"(intConsumer0: $IntConsumer$0$$Type): void
"hashCode"(): integer
"intIterator"(): $IntIterator
"intParallelStream"(): $IntStream
"intSpliterator"(): $IntSpliterator
"intStream"(): $IntStream
"isEmpty"(): boolean
/** @deprecated */
"parallelStream"(): $Stream<integer>
/** @deprecated */
"rem"(int0: integer): boolean
"remove"(int0: integer): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(intCollection0: $IntCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(intPredicate0: $IntPredicate$0$$Type): boolean
"removeIf"(intPredicate0: $IntPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<integer>): boolean
"retainAll"(intCollection0: $IntCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $IntSpliterator
/** @deprecated */
"stream"(): $Stream<integer>
"toArray"(int0s: integer[]): integer[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
"toIntArray"(int0s: integer[]): integer[]
"toIntArray"(): integer[]
get "empty"(): boolean
}

export namespace $IntSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of(int0: integer, int1: integer): $IntSet
function of(): $IntSet
function of(...int0s: integer[]): $IntSet
function of(int0: integer): $IntSet
function of(int0: integer, int1: integer, int2: integer): $IntSet
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(...e0s: E[]): $Set<E>
function of<E>(e0: E, e1: E, e2: E): $Set<E>
function of<E>(e0: E, e1: E): $Set<E>
}
export abstract class $IntSet$$Static implements $IntSet {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"(int0: integer, int1: integer): $IntSet
static "of"(): $IntSet
static "of"(...int0s: integer[]): $IntSet
static "of"(int0: integer): $IntSet
static "of"(int0: integer, int1: integer, int2: integer): $IntSet
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(...e0s: E[]): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
static "of"<E>(e0: E, e1: E): $Set<E>
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2CharFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Int2CharFunction extends $Function$0<integer, character>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<integer, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Int2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): character
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, character>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2CharFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2CharFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2CharFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2CharFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2CharFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2CharFunction
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(char0: character): void
"defaultReturnValue"(): character
"get"(int0: integer): character
/** @deprecated */
"get"(object0: any): character
"getOrDefault"(int0: integer, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(integer0: integer, character1: character): character
"put"(int0: integer, char1: character): character
"remove"(int0: integer): character
"size"(): integer
}

export namespace $Int2CharFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Int2CharFunction$$Static implements $Int2CharFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.ints.IntList" {
import { $IntStream } from "java.util.stream.IntStream"
import { $IntUnaryOperator$$Type } from "it.unimi.dsi.fastutil.ints.IntUnaryOperator"
import { $IntPredicate$$Type } from "it.unimi.dsi.fastutil.ints.IntPredicate"
import { $IntUnaryOperator$$Type as $IntUnaryOperator$0$$Type } from "java.util.function.IntUnaryOperator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $IntCollection, $IntCollection$$Type } from "it.unimi.dsi.fastutil.ints.IntCollection"
import { $IntPredicate$$Type as $IntPredicate$0$$Type } from "java.util.function.IntPredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $Stream } from "java.util.stream.Stream"
import { $IntConsumer$$Type as $IntConsumer$0$$Type } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $IntListIterator } from "it.unimi.dsi.fastutil.ints.IntListIterator"
import { $Comparable } from "java.lang.Comparable"
import { $IntComparator$$Type } from "it.unimi.dsi.fastutil.ints.IntComparator"
import { $Comparator$$Type } from "java.util.Comparator"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $IntList extends $List<integer>, $Comparable<$List<integer>>, $IntCollection {
/** @deprecated */
"add"(integer0: integer): boolean
"add"(int0: integer, int1: integer): void
/** @deprecated */
"add"(int0: integer, integer1: integer): void
"add"(int0: integer): boolean
"addAll"(int0: integer, intList1: $IntList$$Type): boolean
"addAll"(int0: integer, intCollection1: $IntCollection$$Type): boolean
"addAll"(intList0: $IntList$$Type): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<integer>): boolean
"addAll"(collection0: $Collection$$Type<integer>): boolean
"addAll"(intCollection0: $IntCollection$$Type): boolean
"addElements"(int0: integer, int1s: integer[]): void
"addElements"(int0: integer, int1s: integer[], int2: integer, int3: integer): void
"clear"(): void
"compareTo"(list0: $List$$Type<integer>): integer
/** @deprecated */
"contains"(object0: any): boolean
"contains"(int0: integer): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"containsAll"(intCollection0: $IntCollection$$Type): boolean
"equals"(object0: any): boolean
"forEach"(intConsumer0: $IntConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<integer>): void
"forEach"(intConsumer0: $IntConsumer$0$$Type): void
/** @deprecated */
"get"(int0: integer): integer
"getElements"(int0: integer, int1s: integer[], int2: integer, int3: integer): void
"getInt"(int0: integer): integer
"hashCode"(): integer
"indexOf"(int0: integer): integer
/** @deprecated */
"indexOf"(object0: any): integer
"intIterator"(): $IntIterator
"intParallelStream"(): $IntStream
"intSpliterator"(): $IntSpliterator
"intStream"(): $IntStream
"isEmpty"(): boolean
/** @deprecated */
"lastIndexOf"(object0: any): integer
"lastIndexOf"(int0: integer): integer
"listIterator"(): $IntListIterator
/** @deprecated */
"parallelStream"(): $Stream<integer>
"rem"(int0: integer): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeAll"(intCollection0: $IntCollection$$Type): boolean
"removeElements"(int0: integer, int1: integer): void
"removeIf"(intPredicate0: $IntPredicate$0$$Type): boolean
"removeIf"(intPredicate0: $IntPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<integer>): boolean
"removeInt"(int0: integer): integer
/** @deprecated */
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<integer>): void
"replaceAll"(intUnaryOperator0: $IntUnaryOperator$$Type): void
"replaceAll"(intUnaryOperator0: $IntUnaryOperator$0$$Type): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"retainAll"(intCollection0: $IntCollection$$Type): boolean
/** @deprecated */
"set"(int0: integer, integer1: integer): integer
"set"(int0: integer, int1: integer): integer
"setElements"(int0: integer, int1s: integer[], int2: integer, int3: integer): void
"setElements"(int0s: integer[]): void
"setElements"(int0: integer, int1s: integer[]): void
"size"(int0: integer): void
"size"(): integer
"sort"(intComparator0: $IntComparator$$Type): void
/** @deprecated */
"sort"(comparator0: $Comparator$$Type<integer>): void
"spliterator"(): $IntSpliterator
/** @deprecated */
"stream"(): $Stream<integer>
"subList"(int0: integer, int1: integer): $IntList
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(int0s: integer[]): integer[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
"toIntArray"(int0s: integer[]): integer[]
"toIntArray"(): integer[]
/** @deprecated */
"unstableSort"(comparator0: $Comparator$$Type<integer>): void
"unstableSort"(intComparator0: $IntComparator$$Type): void
get "empty"(): boolean
set "elements"(value: integer[])
}

export namespace $IntList {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of(...int0s: integer[]): $IntList
function of(int0: integer, int1: integer): $IntList
function of(int0: integer): $IntList
function of(): $IntList
function of(int0: integer, int1: integer, int2: integer): $IntList
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
export abstract class $IntList$$Static implements $IntList {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"(...int0s: integer[]): $IntList
static "of"(int0: integer, int1: integer): $IntList
static "of"(int0: integer): $IntList
static "of"(): $IntList
static "of"(int0: integer, int1: integer, int2: integer): $IntList
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

declare module "it.unimi.dsi.fastutil.ints.Int2DoubleMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Int2DoubleMap$Entry extends $Map$Entry<integer, double> {
"equals"(object0: any): boolean
"getDoubleValue"(): double
"getIntKey"(): integer
"hashCode"(): integer
"setValue"(double0: double): double
/** @deprecated */
"setValue"(double0: double): double
get "doubleValue"(): double
get "intKey"(): integer
set "value"(value: double)
set "value"(value: double)
}

export namespace $Int2DoubleMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Int2DoubleMap$Entry$$Static implements $Int2DoubleMap$Entry {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.ints.IntPredicate" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $IntPredicate as $IntPredicate$0, $IntPredicate$$Type as $IntPredicate$0$$Type } from "java.util.function.IntPredicate"

export interface $IntPredicate extends $Predicate<integer>, $IntPredicate$0 {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"and"(predicate0: $Predicate$$Type<integer>): $Predicate<integer>
"or"(intPredicate0: $IntPredicate$0$$Type): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"or"(predicate0: $Predicate$$Type<integer>): $Predicate<integer>
/** @deprecated */
"test"(integer0: integer): boolean
"test"(int0: integer): boolean
}

export namespace $IntPredicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $IntPredicate$$Static implements $IntPredicate {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "it.unimi.dsi.fastutil.ints.IntOpenHashSet" {
import { $IntStream, $IntStream$$Type } from "java.util.stream.IntStream"
import { $Cloneable } from "java.lang.Cloneable"
import { $Iterator$$Type } from "java.util.Iterator"
import { $Hash } from "it.unimi.dsi.fastutil.Hash"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Set } from "java.util.Set"
import { $IntCollection$$Type } from "it.unimi.dsi.fastutil.ints.IntCollection"
import { $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator, $IntIterator$$Type } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $Stream } from "java.util.stream.Stream"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $AbstractIntSet } from "it.unimi.dsi.fastutil.ints.AbstractIntSet"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $IntOpenHashSet extends $AbstractIntSet implements $Serializable, $Cloneable, $Hash {
constructor(int0s: integer[], int1: integer, int2: integer)
constructor(int0s: integer[], float1: float)
constructor(int0s: integer[])
constructor(int0: integer, float1: float)
constructor(intCollection0: $IntCollection$$Type, float1: float)
constructor(intIterator0: $IntIterator$$Type, float1: float)
constructor(int0: integer)
constructor(iterator0: $Iterator$$Type<any>, float1: float)
constructor(intIterator0: $IntIterator$$Type)
constructor(intCollection0: $IntCollection$$Type)
constructor(int0s: integer[], int1: integer, int2: integer, float3: float)
constructor(iterator0: $Iterator$$Type<any>)
constructor()
constructor(collection0: $Collection$$Type<integer>, float1: float)
constructor(collection0: $Collection$$Type<integer>)

/** @deprecated */
public "add"(integer0: integer): boolean
/** @deprecated */
public "contains"(object0: any): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(intConsumer0: $IntConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<integer>): void
public "intIterator"(): $IntIterator
public "intParallelStream"(): $IntStream
public "intSpliterator"(): $IntSpliterator
public "intStream"(): $IntStream
public static "of"(): $IntOpenHashSet
public static "of"(...int0s: integer[]): $IntOpenHashSet
public static "of"(int0: integer, int1: integer, int2: integer): $IntOpenHashSet
public static "of"(int0: integer, int1: integer): $IntOpenHashSet
public static "of"(int0: integer): $IntOpenHashSet
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
/** @deprecated */
public "parallelStream"(): $Stream<integer>
/** @deprecated */
public "remove"(object0: any): boolean
public "removeIf"(intPredicate0: $IntPredicate$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<integer>): boolean
/** @deprecated */
public "stream"(): $Stream<integer>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "toSet"(intStream0: $IntStream$$Type): $IntOpenHashSet
public static "toSetWithExpectedSize"(intStream0: $IntStream$$Type, int1: integer): $IntOpenHashSet
public "trim"(): boolean
public "trim"(int0: integer): boolean
}
}

declare module "it.unimi.dsi.fastutil.ints.IntConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $IntConsumer as $IntConsumer$0 } from "java.util.function.IntConsumer"

export interface $IntConsumer extends $Consumer<integer>, $IntConsumer$0 {
/** @deprecated */
"accept"(integer0: integer): void
"accept"(int0: integer): void
"andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<integer>): $Consumer<integer>
}

export namespace $IntConsumer {
const probejs$$marker: never
}
export abstract class $IntConsumer$$Static implements $IntConsumer {
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2ByteFunction" {
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2ByteFunction extends $Function$0<integer, byte>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<integer, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Int2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): byte
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, integer>): $Function<T, byte>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2ByteFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2ByteFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2ByteFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2ByteFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2ByteFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2ByteFunction
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
"get"(int0: integer): byte
/** @deprecated */
"get"(object0: any): byte
"getOrDefault"(int0: integer, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(integer0: integer, byte1: byte): byte
"put"(int0: integer, byte1: byte): byte
"remove"(int0: integer): byte
"size"(): integer
}

export namespace $Int2ByteFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Int2ByteFunction$$Static implements $Int2ByteFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.ints.IntUnaryOperator" {
import { $IntUnaryOperator as $IntUnaryOperator$0, $IntUnaryOperator$$Type as $IntUnaryOperator$0$$Type } from "java.util.function.IntUnaryOperator"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $IntUnaryOperator extends $UnaryOperator<integer>, $IntUnaryOperator$0 {
"andThen"(intUnaryOperator0: $IntUnaryOperator$0$$Type): $IntUnaryOperator$0
"andThen"<V>(function0: $Function$$Type<integer, V>): $Function<integer, V>
"apply"(int0: integer): integer
/** @deprecated */
"apply"(integer0: integer): integer
/** @deprecated */
"applyAsInt"(int0: integer): integer
"compose"(intUnaryOperator0: $IntUnaryOperator$0$$Type): $IntUnaryOperator$0
"compose"<V>(function0: $Function$$Type<V, integer>): $Function<V, integer>
}

export namespace $IntUnaryOperator {
function identity(): $IntUnaryOperator
function negation(): $IntUnaryOperator
}
export abstract class $IntUnaryOperator$$Static implements $IntUnaryOperator {
static "identity"(): $IntUnaryOperator
static "negation"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.ints.Int2IntFunction" {
import { $Int2FloatFunction, $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Int2ShortFunction, $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Int2ByteFunction, $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction, $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction, $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction, $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Int2LongFunction, $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Float2IntFunction, $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction, $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction, $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction, $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Double2IntFunction, $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction, $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction, $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Int2IntFunction extends $Function<integer, integer>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<integer, T>): $Function$0<integer, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Int2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Int2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Int2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Int2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Int2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2ShortFunction
"apply"(integer0: integer): integer
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, integer>): $Function$0<T, integer>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2IntFunction
"composeChar"(char2IntFunction0: $Char2IntFunction$$Type): $Char2IntFunction
"composeDouble"(double2IntFunction0: $Double2IntFunction$$Type): $Double2IntFunction
"composeFloat"(float2IntFunction0: $Float2IntFunction$$Type): $Float2IntFunction
"composeInt"(int2IntFunction0: $Int2IntFunction$$Type): $Int2IntFunction
"composeLong"(long2IntFunction0: $Long2IntFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2IntFunction0: $Object2IntFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2IntFunction0: $Reference2IntFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2IntFunction0: $Short2IntFunction$$Type): $Short2IntFunction
"containsKey"(int0: integer): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
"get"(int0: integer): integer
/** @deprecated */
"get"(object0: any): integer
"getOrDefault"(int0: integer, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(integer0: integer, integer1: integer): integer
"put"(int0: integer, int1: integer): integer
/** @deprecated */
"remove"(object0: any): integer
"remove"(int0: integer): integer
"size"(): integer
}

export namespace $Int2IntFunction {
function identity(): $Int2IntFunction
}
export abstract class $Int2IntFunction$$Static implements $Int2IntFunction {
static "identity"(): $Int2IntFunction
}
}

declare module "it.unimi.dsi.fastutil.ints.IntComparator" {
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $Function$$Type } from "java.util.function.Function"

export interface $IntComparator extends $Comparator<integer> {
"compare"(int0: integer, int1: integer): integer
/** @deprecated */
"compare"(integer0: integer, integer1: integer): integer
"equals"(object0: any): boolean
"reversed"(): $IntComparator
"thenComparing"(comparator0: $Comparator$$Type<integer>): $Comparator<integer>
"thenComparing"(intComparator0: $IntComparator$$Type): $IntComparator
"thenComparing"<U>(function0: $Function$$Type<integer, U>, comparator1: $Comparator$$Type<U>): $Comparator<integer>
"thenComparing"<U extends $Comparable<U>>(function0: $Function$$Type<integer, U>): $Comparator<integer>
"thenComparingDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<integer>): $Comparator<integer>
"thenComparingInt"(toIntFunction0: $ToIntFunction$$Type<integer>): $Comparator<integer>
"thenComparingLong"(toLongFunction0: $ToLongFunction$$Type<integer>): $Comparator<integer>
}

export namespace $IntComparator {
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
export abstract class $IntComparator$$Static implements $IntComparator {
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

