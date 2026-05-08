declare module "it.unimi.dsi.fastutil.longs.LongBinaryOperator" {
import { $LongBinaryOperator as $LongBinaryOperator$0 } from "java.util.function.LongBinaryOperator"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"
import { $BinaryOperator } from "java.util.function.BinaryOperator"

export interface $LongBinaryOperator extends $BinaryOperator<long>, $LongBinaryOperator$0 {
"andThen"<V>(function0: $Function$$Type<long, V>): $BiFunction<long, long, V>
/** @deprecated */
"apply"(long0: long, long1: long): long
"apply"(long0: long, long1: long): long
/** @deprecated */
"applyAsLong"(long0: long, long1: long): long
}

export namespace $LongBinaryOperator {
function maxBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
function minBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
export abstract class $LongBinaryOperator$$Static implements $LongBinaryOperator {
static "maxBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
static "minBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
}

declare module "it.unimi.dsi.fastutil.longs.LongBidirectionalIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $LongBidirectionalIterator } from "it.unimi.dsi.fastutil.longs.LongBidirectionalIterator"
import { $LongIterable } from "it.unimi.dsi.fastutil.longs.LongIterable"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongConsumer$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "java.util.function.LongConsumer"

export interface $LongBidirectionalIterable extends $LongIterable {
"forEach"(longConsumer0: $LongConsumer$0$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<long>): void
"forEach"(longConsumer0: $LongConsumer$$Type): void
"iterator"(): $LongBidirectionalIterator
"longIterator"(): $LongIterator
"longSpliterator"(): $LongSpliterator
}

export namespace $LongBidirectionalIterable {
const probejs$$marker: never
}
export abstract class $LongBidirectionalIterable$$Static implements $LongBidirectionalIterable {
}
}

declare module "it.unimi.dsi.fastutil.longs.LongComparator" {
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $Function$$Type } from "java.util.function.Function"

export interface $LongComparator extends $Comparator<long> {
"compare"(long0: long, long1: long): integer
/** @deprecated */
"compare"(long0: long, long1: long): integer
"equals"(object0: any): boolean
"reversed"(): $LongComparator
"thenComparing"(comparator0: $Comparator$$Type<long>): $Comparator<long>
"thenComparing"(longComparator0: $LongComparator$$Type): $LongComparator
"thenComparing"<U>(function0: $Function$$Type<long, U>, comparator1: $Comparator$$Type<U>): $Comparator<long>
"thenComparing"<U extends $Comparable<U>>(function0: $Function$$Type<long, U>): $Comparator<long>
"thenComparingDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<long>): $Comparator<long>
"thenComparingInt"(toIntFunction0: $ToIntFunction$$Type<long>): $Comparator<long>
"thenComparingLong"(toLongFunction0: $ToLongFunction$$Type<long>): $Comparator<long>
}

export namespace $LongComparator {
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
export abstract class $LongComparator$$Static implements $LongComparator {
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

declare module "it.unimi.dsi.fastutil.longs.LongOpenHashSet" {
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $Cloneable } from "java.lang.Cloneable"
import { $LongStream, $LongStream$$Type } from "java.util.stream.LongStream"
import { $Iterator$$Type } from "java.util.Iterator"
import { $Hash } from "it.unimi.dsi.fastutil.Hash"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $LongIterator, $LongIterator$$Type } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $AbstractLongSet } from "it.unimi.dsi.fastutil.longs.AbstractLongSet"
import { $LongPredicate$$Type } from "java.util.function.LongPredicate"
import { $LongCollection$$Type } from "it.unimi.dsi.fastutil.longs.LongCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $LongOpenHashSet extends $AbstractLongSet implements $Serializable, $Cloneable, $Hash {
constructor(long0s: long[], int1: integer, int2: integer)
constructor(long0s: long[], float1: float)
constructor(long0s: long[])
constructor(int0: integer, float1: float)
constructor(longCollection0: $LongCollection$$Type, float1: float)
constructor(longIterator0: $LongIterator$$Type, float1: float)
constructor(int0: integer)
constructor(iterator0: $Iterator$$Type<any>, float1: float)
constructor(longIterator0: $LongIterator$$Type)
constructor(longCollection0: $LongCollection$$Type)
constructor(long0s: long[], int1: integer, int2: integer, float3: float)
constructor(iterator0: $Iterator$$Type<any>)
constructor()
constructor(collection0: $Collection$$Type<long>, float1: float)
constructor(collection0: $Collection$$Type<long>)

/** @deprecated */
public "add"(long0: long): boolean
/** @deprecated */
public "contains"(object0: any): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(longConsumer0: $LongConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<long>): void
public "longIterator"(): $LongIterator
public "longParallelStream"(): $LongStream
public "longSpliterator"(): $LongSpliterator
public "longStream"(): $LongStream
public static "of"(): $LongOpenHashSet
public static "of"(...long0s: long[]): $LongOpenHashSet
public static "of"(long0: long, long1: long, long2: long): $LongOpenHashSet
public static "of"(long0: long, long1: long): $LongOpenHashSet
public static "of"(long0: long): $LongOpenHashSet
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
public "parallelStream"(): $Stream<long>
/** @deprecated */
public "remove"(object0: any): boolean
public "removeIf"(longPredicate0: $LongPredicate$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<long>): boolean
/** @deprecated */
public "stream"(): $Stream<long>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "toSet"(longStream0: $LongStream$$Type): $LongOpenHashSet
public static "toSetWithExpectedSize"(longStream0: $LongStream$$Type, int1: integer): $LongOpenHashSet
public "trim"(): boolean
public "trim"(int0: integer): boolean
}
}

declare module "it.unimi.dsi.fastutil.longs.LongBidirectionalIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongConsumer$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "java.util.function.LongConsumer"
import { $ObjectBidirectionalIterator } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"

export interface $LongBidirectionalIterator extends $LongIterator, $ObjectBidirectionalIterator<long> {
"back"(int0: integer): integer
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"forEachRemaining"(longConsumer0: $LongConsumer$0$$Type): void
"hasNext"(): boolean
"hasPrevious"(): boolean
/** @deprecated */
"next"(): long
"nextLong"(): long
/** @deprecated */
"previous"(): long
"previousLong"(): long
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $LongBidirectionalIterator {
const probejs$$marker: never
}
export abstract class $LongBidirectionalIterator$$Static implements $LongBidirectionalIterator {
}
}

declare module "it.unimi.dsi.fastutil.longs.LongPredicate" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $LongPredicate as $LongPredicate$0, $LongPredicate$$Type as $LongPredicate$0$$Type } from "java.util.function.LongPredicate"

export interface $LongPredicate extends $Predicate<long>, $LongPredicate$0 {
"and"(longPredicate0: $LongPredicate$$Type): $LongPredicate
/** @deprecated */
"and"(predicate0: $Predicate$$Type<long>): $Predicate<long>
"or"(longPredicate0: $LongPredicate$0$$Type): $LongPredicate
"or"(longPredicate0: $LongPredicate$$Type): $LongPredicate
/** @deprecated */
"or"(predicate0: $Predicate$$Type<long>): $Predicate<long>
/** @deprecated */
"test"(long0: long): boolean
"test"(long0: long): boolean
}

export namespace $LongPredicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $LongPredicate$$Static implements $LongPredicate {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "it.unimi.dsi.fastutil.longs.LongIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongConsumer$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $Iterable } from "java.lang.Iterable"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "java.util.function.LongConsumer"

export interface $LongIterable extends $Iterable<long> {
"forEach"(longConsumer0: $LongConsumer$0$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<long>): void
"forEach"(longConsumer0: $LongConsumer$$Type): void
"longIterator"(): $LongIterator
"longSpliterator"(): $LongSpliterator
}

export namespace $LongIterable {
const probejs$$marker: never
}
export abstract class $LongIterable$$Static implements $LongIterable {
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2CharFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $LongToIntFunction } from "java.util.function.LongToIntFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Long2CharFunction extends $Function$0<long, character>, $LongToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<long, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Long2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): character
"applyAsInt"(long0: long): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, character>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2CharFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2CharFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2CharFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2CharFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2CharFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2CharFunction
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(char0: character): void
"defaultReturnValue"(): character
"get"(long0: long): character
/** @deprecated */
"get"(object0: any): character
"getOrDefault"(long0: long, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(long0: long, character1: character): character
"put"(long0: long, char1: character): character
"remove"(long0: long): character
"size"(): integer
}

export namespace $Long2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2CharFunction$$Static implements $Long2CharFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2ByteFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $LongToIntFunction } from "java.util.function.LongToIntFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Long2ByteFunction extends $Function$0<long, byte>, $LongToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<long, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Long2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): byte
"applyAsInt"(long0: long): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, byte>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ByteFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ByteFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ByteFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ByteFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ByteFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ByteFunction
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
"get"(long0: long): byte
/** @deprecated */
"get"(object0: any): byte
"getOrDefault"(long0: long, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(long0: long, byte1: byte): byte
"put"(long0: long, byte1: byte): byte
"remove"(long0: long): byte
"size"(): integer
}

export namespace $Long2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2ByteFunction$$Static implements $Long2ByteFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2BooleanFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $LongPredicate, $LongPredicate$$Type } from "java.util.function.LongPredicate"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Long2BooleanFunction extends $Function$0<long, boolean>, $LongPredicate {
"and"(longPredicate0: $LongPredicate$$Type): $LongPredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<long, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Long2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, boolean>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2BooleanFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2BooleanFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2BooleanFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(long0: long): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"get"(long0: long): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(long0: long, boolean1: boolean): boolean
"negate"(): $LongPredicate
"or"(longPredicate0: $LongPredicate$$Type): $LongPredicate
/** @deprecated */
"put"(long0: long, boolean1: boolean): boolean
"put"(long0: long, boolean1: boolean): boolean
"remove"(long0: long): boolean
"size"(): integer
"test"(long0: long): boolean
}

export namespace $Long2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2BooleanFunction$$Static implements $Long2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.LongUnaryOperator" {
import { $LongUnaryOperator as $LongUnaryOperator$0, $LongUnaryOperator$$Type as $LongUnaryOperator$0$$Type } from "java.util.function.LongUnaryOperator"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $LongUnaryOperator extends $UnaryOperator<long>, $LongUnaryOperator$0 {
"andThen"(longUnaryOperator0: $LongUnaryOperator$0$$Type): $LongUnaryOperator$0
"andThen"<V>(function0: $Function$$Type<long, V>): $Function<long, V>
"apply"(long0: long): long
/** @deprecated */
"apply"(long0: long): long
/** @deprecated */
"applyAsLong"(long0: long): long
"compose"(longUnaryOperator0: $LongUnaryOperator$0$$Type): $LongUnaryOperator$0
"compose"<V>(function0: $Function$$Type<V, long>): $Function<V, long>
}

export namespace $LongUnaryOperator {
function identity(): $LongUnaryOperator
function negation(): $LongUnaryOperator
}
export abstract class $LongUnaryOperator$$Static implements $LongUnaryOperator {
static "identity"(): $LongUnaryOperator
static "negation"(): $LongUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $ObjectSortedSet } from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import { $Hash } from "it.unimi.dsi.fastutil.Hash"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Long2ObjectSortedMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectSortedMap"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $LongFunction$$Type } from "java.util.function.LongFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $AbstractLong2ObjectSortedMap } from "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectSortedMap"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Serializable } from "java.io.Serializable"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Long2ObjectMap$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $Long2ObjectLinkedOpenHashMap<V = any> extends $AbstractLong2ObjectSortedMap<V> implements $Serializable, $Cloneable, $Hash {
constructor(int0: integer, float1: float)
constructor()
constructor(map0: $Map$$Type<long, V>, float1: float)
constructor(map0: $Map$$Type<long, V>)
constructor(long2ObjectMap0: $Long2ObjectMap$$Type<V>, float1: float)
constructor(long2ObjectMap0: $Long2ObjectMap$$Type<V>)
constructor(long0s: long[], v1s: V[])
constructor(int0: integer)
constructor(long0s: long[], v1s: V[], float2: float)

public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Long2ByteFunction
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Long2CharFunction
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Long2DoubleFunction
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Long2FloatFunction
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Long2IntFunction
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Long2LongFunction
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Long2ShortFunction
public "apply"(long0: long): V
public "apply"(long0: long): V
public "clear"(): void
/** @deprecated */
public "compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
public "composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<V>
public "composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ObjectFunction<V>
public "composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ObjectFunction<V>
public "composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ObjectFunction<V>
public "composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ObjectFunction<V>
public "composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ObjectFunction<V>
public "composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ObjectFunction<V>
public "compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "computeIfAbsent"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
public "computeIfAbsent"(long0: long, longFunction1: $LongFunction$$Type<V>): V
public "computeIfAbsent"(long0: long, function1: $Function$$Type<long, V>): V
/** @deprecated */
public "computeIfAbsentPartial"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
public "computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
/** @deprecated */
public "containsKey"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(): V
public "defaultReturnValue"(v0: V): void
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
/** @deprecated */
public "entrySet"(): $ObjectSortedSet<$Map$Entry<long, V>>
/** @deprecated */
public "firstKey"(): long
public "firstLongKey"(): long
public "forEach"(biConsumer0: $BiConsumer$$Type<long, V>): void
public "get"(long0: long): V
/** @deprecated */
public "get"(object0: any): V
public "getAndMoveToFirst"(long0: long): V
public "getAndMoveToLast"(long0: long): V
public "getOrDefault"(long0: long, v1: V): V
/** @deprecated */
public "getOrDefault"(object0: any, v1: V): V
public "headMap"(long0: long): $Long2ObjectSortedMap<V>
/** @deprecated */
public "headMap"(long0: long): $Long2ObjectSortedMap<V>
public static "identity"<T>(): $Function<T, T>
public "lastLongKey"(): long
public "merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public "merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
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
public "put"(long0: long, v1: V): V
/** @deprecated */
public "put"(long0: long, v1: V): V
public "putAndMoveToFirst"(long0: long, v1: V): V
public "putAndMoveToLast"(long0: long, v1: V): V
public "putIfAbsent"(long0: long, v1: V): V
public "putIfAbsent"(long0: long, v1: V): V
public "remove"(long0: long): V
public "remove"(long0: long, object1: any): boolean
/** @deprecated */
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "removeFirst"(): V
public "removeLast"(): V
public "replace"(long0: long, v1: V): V
public "replace"(long0: long, v1: V, v2: V): boolean
public "replace"(long0: long, v1: V): V
public "replace"(long0: long, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<long, V, V>): void
public "size"(): integer
public "subMap"(long0: long, long1: long): $Long2ObjectSortedMap<V>
/** @deprecated */
public "subMap"(long0: long, long1: long): $Long2ObjectSortedMap<V>
public "tailMap"(long0: long): $Long2ObjectSortedMap<V>
/** @deprecated */
public "tailMap"(long0: long): $Long2ObjectSortedMap<V>
public "trim"(int0: integer): boolean
public "trim"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $LongToIntFunction } from "java.util.function.LongToIntFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"

export interface $Long2ShortFunction extends $Function$0<long, short>, $LongToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<long, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Long2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): short
"applyAsInt"(long0: long): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, short>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ShortFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ShortFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ShortFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ShortFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ShortFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ShortFunction
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(short0: short): void
"defaultReturnValue"(): short
"get"(long0: long): short
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(long0: long, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"put"(long0: long, short1: short): short
"put"(long0: long, short1: short): short
"remove"(long0: long): short
"size"(): integer
}

export namespace $Long2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2ShortFunction$$Static implements $Long2ShortFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2FloatFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $LongToDoubleFunction } from "java.util.function.LongToDoubleFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Long2FloatFunction extends $Function$0<long, float>, $LongToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<long, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Long2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): float
"applyAsDouble"(long0: long): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, float>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2FloatFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2FloatFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2FloatFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2FloatFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2FloatFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2FloatFunction
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
"get"(long0: long): float
/** @deprecated */
"get"(object0: any): float
"getOrDefault"(long0: long, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(long0: long, float1: float): float
"put"(long0: long, float1: float): float
"remove"(long0: long): float
"size"(): integer
}

export namespace $Long2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2FloatFunction$$Static implements $Long2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2ObjectSortedMap" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $ObjectSortedSet } from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $LongSortedSet } from "it.unimi.dsi.fastutil.longs.LongSortedSet"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $LongFunction$$Type } from "java.util.function.LongFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Long2ObjectMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $SortedMap } from "java.util.SortedMap"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Long2ObjectSortedMap<V = any> extends $Long2ObjectMap<V>, $SortedMap<long, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Long2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Long2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Long2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Long2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Long2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Long2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Long2ShortFunction
"apply"(long0: long): V
"apply"(long0: long): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ObjectFunction<V>
"compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
"compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
"computeIfAbsent"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
"computeIfAbsent"(long0: long, longFunction1: $LongFunction$$Type<V>): V
"computeIfAbsent"(long0: long, function1: $Function$$Type<long, V>): V
/** @deprecated */
"computeIfAbsentPartial"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
"computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
"computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(long0: long): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
/** @deprecated */
"entrySet"(): $ObjectSortedSet<$Map$Entry<long, V>>
"equals"(object0: any): boolean
/** @deprecated */
"firstKey"(): long
"firstLongKey"(): long
"forEach"(biConsumer0: $BiConsumer$$Type<long, V>): void
/** @deprecated */
"get"(object0: any): V
"get"(long0: long): V
"getOrDefault"(long0: long, v1: V): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"headMap"(long0: long): $Long2ObjectSortedMap<V>
/** @deprecated */
"headMap"(long0: long): $Long2ObjectSortedMap<V>
"isEmpty"(): boolean
"keySet"(): $LongSortedSet
"lastLongKey"(): long
"merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
/** @deprecated */
"put"(long0: long, v1: V): V
"put"(long0: long, v1: V): V
"putAll"(map0: $Map$$Type<long, V>): void
"putIfAbsent"(long0: long, v1: V): V
"putIfAbsent"(long0: long, v1: V): V
"remove"(long0: long, object1: any): boolean
/** @deprecated */
"remove"(object0: any): V
"remove"(long0: long): V
"remove"(object0: any, object1: any): boolean
"replace"(long0: long, v1: V): V
"replace"(long0: long, v1: V, v2: V): boolean
"replace"(long0: long, v1: V): V
"replace"(long0: long, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<long, V, V>): void
"size"(): integer
"subMap"(long0: long, long1: long): $Long2ObjectSortedMap<V>
/** @deprecated */
"subMap"(long0: long, long1: long): $Long2ObjectSortedMap<V>
/** @deprecated */
"tailMap"(long0: long): $Long2ObjectSortedMap<V>
"tailMap"(long0: long): $Long2ObjectSortedMap<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Long2ObjectSortedMap {
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
export abstract class $Long2ObjectSortedMap$$Static<V = any> implements $Long2ObjectSortedMap<V> {
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

declare module "it.unimi.dsi.fastutil.longs.LongIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PrimitiveIterator$OfLong } from "java.util.PrimitiveIterator$OfLong"
import { $LongConsumer$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "java.util.function.LongConsumer"

export interface $LongIterator extends $PrimitiveIterator$OfLong {
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"forEachRemaining"(longConsumer0: $LongConsumer$0$$Type): void
"hasNext"(): boolean
/** @deprecated */
"next"(): long
"nextLong"(): long
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $LongIterator {
const probejs$$marker: never
}
export abstract class $LongIterator$$Static implements $LongIterator {
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $LongToDoubleFunction } from "java.util.function.LongToDoubleFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Long2DoubleFunction extends $Function$0<long, double>, $LongToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<long, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Long2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): double
"applyAsDouble"(long0: long): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, double>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2DoubleFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2DoubleFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2DoubleFunction
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
"get"(long0: long): double
/** @deprecated */
"get"(object0: any): double
"getOrDefault"(long0: long, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(long0: long, double1: double): double
"put"(long0: long, double1: double): double
"remove"(long0: long): double
"size"(): integer
}

export namespace $Long2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2DoubleFunction$$Static implements $Long2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.LongList" {
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $LongStream } from "java.util.stream.LongStream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $LongComparator$$Type } from "it.unimi.dsi.fastutil.longs.LongComparator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $LongPredicate$$Type } from "it.unimi.dsi.fastutil.longs.LongPredicate"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $LongListIterator } from "it.unimi.dsi.fastutil.longs.LongListIterator"
import { $LongUnaryOperator$$Type } from "it.unimi.dsi.fastutil.longs.LongUnaryOperator"
import { $LongUnaryOperator$$Type as $LongUnaryOperator$0$$Type } from "java.util.function.LongUnaryOperator"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $Comparable } from "java.lang.Comparable"
import { $LongPredicate$$Type as $LongPredicate$0$$Type } from "java.util.function.LongPredicate"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $Comparator$$Type } from "java.util.Comparator"
import { $LongCollection, $LongCollection$$Type } from "it.unimi.dsi.fastutil.longs.LongCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $LongList extends $List<long>, $Comparable<$List<long>>, $LongCollection {
/** @deprecated */
"add"(long0: long): boolean
"add"(int0: integer, long1: long): void
/** @deprecated */
"add"(int0: integer, long1: long): void
"add"(long0: long): boolean
"addAll"(int0: integer, longList1: $LongList$$Type): boolean
"addAll"(int0: integer, longCollection1: $LongCollection$$Type): boolean
"addAll"(longList0: $LongList$$Type): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<long>): boolean
"addAll"(collection0: $Collection$$Type<long>): boolean
"addAll"(longCollection0: $LongCollection$$Type): boolean
"addElements"(int0: integer, long1s: long[]): void
"addElements"(int0: integer, long1s: long[], int2: integer, int3: integer): void
"clear"(): void
"compareTo"(list0: $List$$Type<long>): integer
/** @deprecated */
"contains"(object0: any): boolean
"contains"(long0: long): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"containsAll"(longCollection0: $LongCollection$$Type): boolean
"equals"(object0: any): boolean
"forEach"(longConsumer0: $LongConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<long>): void
"forEach"(longConsumer0: $LongConsumer$0$$Type): void
/** @deprecated */
"get"(int0: integer): long
"getElements"(int0: integer, long1s: long[], int2: integer, int3: integer): void
"getLong"(int0: integer): long
"hashCode"(): integer
"indexOf"(long0: long): integer
/** @deprecated */
"indexOf"(object0: any): integer
"isEmpty"(): boolean
/** @deprecated */
"lastIndexOf"(object0: any): integer
"lastIndexOf"(long0: long): integer
"listIterator"(): $LongListIterator
"longIterator"(): $LongIterator
"longParallelStream"(): $LongStream
"longSpliterator"(): $LongSpliterator
"longStream"(): $LongStream
/** @deprecated */
"parallelStream"(): $Stream<long>
"rem"(long0: long): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeAll"(longCollection0: $LongCollection$$Type): boolean
"removeElements"(int0: integer, int1: integer): void
"removeIf"(longPredicate0: $LongPredicate$0$$Type): boolean
"removeIf"(longPredicate0: $LongPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<long>): boolean
"removeLong"(int0: integer): long
/** @deprecated */
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<long>): void
"replaceAll"(longUnaryOperator0: $LongUnaryOperator$$Type): void
"replaceAll"(longUnaryOperator0: $LongUnaryOperator$0$$Type): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"retainAll"(longCollection0: $LongCollection$$Type): boolean
/** @deprecated */
"set"(int0: integer, long1: long): long
"set"(int0: integer, long1: long): long
"setElements"(int0: integer, long1s: long[], int2: integer, int3: integer): void
"setElements"(long0s: long[]): void
"setElements"(int0: integer, long1s: long[]): void
"size"(int0: integer): void
"size"(): integer
"sort"(longComparator0: $LongComparator$$Type): void
/** @deprecated */
"sort"(comparator0: $Comparator$$Type<long>): void
"spliterator"(): $LongSpliterator
/** @deprecated */
"stream"(): $Stream<long>
"subList"(int0: integer, int1: integer): $LongList
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(long0s: long[]): long[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
"toLongArray"(long0s: long[]): long[]
"toLongArray"(): long[]
/** @deprecated */
"unstableSort"(comparator0: $Comparator$$Type<long>): void
"unstableSort"(longComparator0: $LongComparator$$Type): void
get "empty"(): boolean
set "elements"(value: long[])
}

export namespace $LongList {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of(...long0s: long[]): $LongList
function of(long0: long, long1: long): $LongList
function of(long0: long): $LongList
function of(): $LongList
function of(long0: long, long1: long, long2: long): $LongList
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
export abstract class $LongList$$Static implements $LongList {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"(...long0s: long[]): $LongList
static "of"(long0: long, long1: long): $LongList
static "of"(long0: long): $LongList
static "of"(): $LongList
static "of"(long0: long, long1: long, long2: long): $LongList
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

declare module "it.unimi.dsi.fastutil.longs.AbstractLongCollection" {
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $LongStream } from "java.util.stream.LongStream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $LongPredicate$$Type } from "it.unimi.dsi.fastutil.longs.LongPredicate"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractCollection } from "java.util.AbstractCollection"
import { $Stream } from "java.util.stream.Stream"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongPredicate$$Type as $LongPredicate$0$$Type } from "java.util.function.LongPredicate"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongCollection, $LongCollection$$Type } from "it.unimi.dsi.fastutil.longs.LongCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractLongCollection extends $AbstractCollection<long> implements $LongCollection {
/** @deprecated */
public "add"(long0: long): boolean
public "add"(long0: long): boolean
public "addAll"(longCollection0: $LongCollection$$Type): boolean
public "contains"(long0: long): boolean
public "containsAll"(longCollection0: $LongCollection$$Type): boolean
public "equals"(object0: any): boolean
public "forEach"(longConsumer0: $LongConsumer$0$$Type): void
public "forEach"(longConsumer0: $LongConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<long>): void
public "hashCode"(): integer
public "longIterator"(): $LongIterator
public "longParallelStream"(): $LongStream
public "longSpliterator"(): $LongSpliterator
public "longStream"(): $LongStream
/** @deprecated */
public "parallelStream"(): $Stream<long>
public "rem"(long0: long): boolean
public "removeAll"(longCollection0: $LongCollection$$Type): boolean
public "removeIf"(longPredicate0: $LongPredicate$$Type): boolean
public "removeIf"(longPredicate0: $LongPredicate$0$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<long>): boolean
public "retainAll"(longCollection0: $LongCollection$$Type): boolean
public "spliterator"(): $LongSpliterator
/** @deprecated */
public "stream"(): $Stream<long>
public "toArray"(long0s: long[]): long[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "toLongArray"(): long[]
/** @deprecated */
public "toLongArray"(long0s: long[]): long[]
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2ObjectFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $LongFunction } from "java.util.function.LongFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Long2ObjectFunction<V = any> extends $Function$0<long, V>, $LongFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Long2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Long2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Long2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Long2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Long2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Long2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Long2ShortFunction
"apply"(long0: long): V
"apply"(long0: long): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ObjectFunction<V>
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(long0: long): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(long0: long, v1: V): V
"put"(long0: long, v1: V): V
/** @deprecated */
"put"(long0: long, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(long0: long): V
"size"(): integer
}

export namespace $Long2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2ObjectFunction$$Static<V = any> implements $Long2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.LongConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $LongConsumer as $LongConsumer$0 } from "java.util.function.LongConsumer"

export interface $LongConsumer extends $Consumer<long>, $LongConsumer$0 {
/** @deprecated */
"accept"(long0: long): void
"accept"(long0: long): void
"andThen"(longConsumer0: $LongConsumer$$Type): $LongConsumer
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<long>): $Consumer<long>
}

export namespace $LongConsumer {
const probejs$$marker: never
}
export abstract class $LongConsumer$$Static implements $LongConsumer {
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2LongFunction" {
import { $Long2FloatFunction, $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Long2ShortFunction, $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $Byte2LongFunction, $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Float2LongFunction, $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2LongFunction, $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Long2DoubleFunction, $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $Int2LongFunction, $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2LongFunction, $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction, $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction, $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $LongUnaryOperator, $LongUnaryOperator$$Type } from "java.util.function.LongUnaryOperator"
import { $Long2CharFunction, $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Reference2LongFunction, $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction, $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction, $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"

export interface $Long2LongFunction extends $Function<long, long>, $LongUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<long, T>): $Function$0<long, T>
"andThen"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongUnaryOperator
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Long2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): long
"applyAsLong"(long0: long): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, long>): $Function$0<T, long>
"compose"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongUnaryOperator
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2LongFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2LongFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2LongFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2LongFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2LongFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2LongFunction
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
"get"(long0: long): long
/** @deprecated */
"get"(object0: any): long
"getOrDefault"(long0: long, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(long0: long, long1: long): long
"put"(long0: long, long1: long): long
/** @deprecated */
"remove"(object0: any): long
"remove"(long0: long): long
"size"(): integer
}

export namespace $Long2LongFunction {
function identity(): $Long2LongFunction
}
export abstract class $Long2LongFunction$$Static implements $Long2LongFunction {
static "identity"(): $Long2LongFunction
}
}

declare module "it.unimi.dsi.fastutil.longs.AbstractLongSet" {
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $Cloneable } from "java.lang.Cloneable"
import { $LongStream } from "java.util.stream.LongStream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $AbstractLongCollection } from "it.unimi.dsi.fastutil.longs.AbstractLongCollection"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongPredicate$$Type } from "java.util.function.LongPredicate"
import { $LongSet } from "it.unimi.dsi.fastutil.longs.LongSet"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractLongSet extends $AbstractLongCollection implements $Cloneable, $LongSet {
/** @deprecated */
public "add"(long0: long): boolean
public "clear"(): void
/** @deprecated */
public "contains"(object0: any): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(longConsumer0: $LongConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<long>): void
public "isEmpty"(): boolean
public "longIterator"(): $LongIterator
public "longParallelStream"(): $LongStream
public "longSpliterator"(): $LongSpliterator
public "longStream"(): $LongStream
public static "of"(long0: long, long1: long): $LongSet
public static "of"(): $LongSet
public static "of"(...long0s: long[]): $LongSet
public static "of"(long0: long): $LongSet
public static "of"(long0: long, long1: long, long2: long): $LongSet
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
public "parallelStream"(): $Stream<long>
public "remove"(long0: long): boolean
/** @deprecated */
public "remove"(object0: any): boolean
public "removeIf"(longPredicate0: $LongPredicate$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<long>): boolean
public "size"(): integer
public "spliterator"(): $LongSpliterator
/** @deprecated */
public "stream"(): $Stream<long>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.longs.LongSortedSet" {
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $LongBidirectionalIterator } from "it.unimi.dsi.fastutil.longs.LongBidirectionalIterator"
import { $LongStream } from "java.util.stream.LongStream"
import { $SortedSet } from "java.util.SortedSet"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $LongPredicate$$Type } from "it.unimi.dsi.fastutil.longs.LongPredicate"
import { $LongBidirectionalIterable } from "it.unimi.dsi.fastutil.longs.LongBidirectionalIterable"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongPredicate$$Type as $LongPredicate$0$$Type } from "java.util.function.LongPredicate"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongCollection$$Type } from "it.unimi.dsi.fastutil.longs.LongCollection"
import { $LongSet } from "it.unimi.dsi.fastutil.longs.LongSet"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $LongSortedSet extends $LongSet, $SortedSet<long>, $LongBidirectionalIterable {
/** @deprecated */
"add"(long0: long): boolean
"add"(long0: long): boolean
"addAll"(longCollection0: $LongCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<long>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(long0: long): boolean
"containsAll"(longCollection0: $LongCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
/** @deprecated */
"first"(): long
"firstLong"(): long
"forEach"(longConsumer0: $LongConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<long>): void
"forEach"(longConsumer0: $LongConsumer$0$$Type): void
"hashCode"(): integer
/** @deprecated */
"headSet"(long0: long): $LongSortedSet
"headSet"(long0: long): $LongSortedSet
"isEmpty"(): boolean
"iterator"(long0: long): $LongBidirectionalIterator
/** @deprecated */
"last"(): long
"lastLong"(): long
"longIterator"(): $LongIterator
"longParallelStream"(): $LongStream
"longSpliterator"(): $LongSpliterator
"longStream"(): $LongStream
/** @deprecated */
"parallelStream"(): $Stream<long>
/** @deprecated */
"rem"(long0: long): boolean
"remove"(long0: long): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(longCollection0: $LongCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(longPredicate0: $LongPredicate$0$$Type): boolean
"removeIf"(longPredicate0: $LongPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<long>): boolean
"retainAll"(longCollection0: $LongCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
/** @deprecated */
"stream"(): $Stream<long>
/** @deprecated */
"subSet"(long0: long, long1: long): $LongSortedSet
"subSet"(long0: long, long1: long): $LongSortedSet
/** @deprecated */
"tailSet"(long0: long): $LongSortedSet
"tailSet"(long0: long): $LongSortedSet
"toArray"(long0s: long[]): long[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
"toLongArray"(long0s: long[]): long[]
"toLongArray"(): long[]
get "empty"(): boolean
}

export namespace $LongSortedSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of(long0: long, long1: long): $LongSet
function of(): $LongSet
function of(...long0s: long[]): $LongSet
function of(long0: long): $LongSet
function of(long0: long, long1: long, long2: long): $LongSet
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
export abstract class $LongSortedSet$$Static implements $LongSortedSet {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"(long0: long, long1: long): $LongSet
static "of"(): $LongSet
static "of"(...long0s: long[]): $LongSet
static "of"(long0: long): $LongSet
static "of"(long0: long, long1: long, long2: long): $LongSet
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

declare module "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectMap" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2ObjectMap$Entry } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap$Entry"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $LongFunction$$Type } from "java.util.function.LongFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $ObjectCollection } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Serializable } from "java.io.Serializable"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Long2ObjectMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $AbstractLong2ObjectFunction } from "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $AbstractLong2ObjectMap<V = any> extends $AbstractLong2ObjectFunction<V> implements $Long2ObjectMap<V>, $Serializable {
public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Long2ByteFunction
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Long2CharFunction
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Long2DoubleFunction
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Long2FloatFunction
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Long2IntFunction
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Long2LongFunction
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Long2ShortFunction
public "apply"(long0: long): V
public "apply"(long0: long): V
public "clear"(): void
/** @deprecated */
public "compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
public "composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<V>
public "composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ObjectFunction<V>
public "composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ObjectFunction<V>
public "composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ObjectFunction<V>
public "composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ObjectFunction<V>
public "composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ObjectFunction<V>
public "composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ObjectFunction<V>
public "compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "computeIfAbsent"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
public "computeIfAbsent"(long0: long, longFunction1: $LongFunction$$Type<V>): V
public "computeIfAbsent"(long0: long, function1: $Function$$Type<long, V>): V
/** @deprecated */
public "computeIfAbsentPartial"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
public "computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "containsKey"(long0: long): boolean
/** @deprecated */
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(): V
public "defaultReturnValue"(v0: V): void
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "forEach"(biConsumer0: $BiConsumer$$Type<long, V>): void
/** @deprecated */
public "get"(object0: any): V
public "get"(long0: long): V
public "getOrDefault"(long0: long, v1: V): V
/** @deprecated */
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "isEmpty"(): boolean
public "long2ObjectEntrySet"(): $ObjectSet<$Long2ObjectMap$Entry<V>>
public "merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public "merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
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
public "put"(long0: long, v1: V): V
public "put"(long0: long, v1: V): V
public "putAll"(map0: $Map$$Type<long, V>): void
public "putIfAbsent"(long0: long, v1: V): V
public "putIfAbsent"(long0: long, v1: V): V
public "remove"(long0: long, object1: any): boolean
/** @deprecated */
public "remove"(object0: any): V
public "remove"(long0: long): V
public "remove"(object0: any, object1: any): boolean
public "replace"(long0: long, v1: V): V
public "replace"(long0: long, v1: V, v2: V): boolean
public "replace"(long0: long, v1: V): V
public "replace"(long0: long, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<long, V, V>): void
public "size"(): integer
public "values"(): $ObjectCollection<V>
[index: string | number]: V
get "empty"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $LongFunction } from "java.util.function.LongFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Long2ReferenceFunction<V = any> extends $Function$0<long, V>, $LongFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Long2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Long2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Long2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Long2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Long2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Long2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Long2ShortFunction
"apply"(long0: long): V
"apply"(long0: long): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ReferenceFunction<V>
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(long0: long): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(long0: long, v1: V): V
"put"(long0: long, v1: V): V
/** @deprecated */
"put"(long0: long, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(long0: long): V
"size"(): integer
}

export namespace $Long2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2ReferenceFunction$$Static<V = any> implements $Long2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.LongListIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LongBidirectionalIterator } from "it.unimi.dsi.fastutil.longs.LongBidirectionalIterator"
import { $ListIterator } from "java.util.ListIterator"
import { $LongConsumer$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "java.util.function.LongConsumer"

export interface $LongListIterator extends $LongBidirectionalIterator, $ListIterator<long> {
/** @deprecated */
"add"(long0: long): void
"add"(long0: long): void
"back"(int0: integer): integer
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"forEachRemaining"(longConsumer0: $LongConsumer$0$$Type): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"nextIndex"(): integer
"nextLong"(): long
"previousIndex"(): integer
"previousLong"(): long
"remove"(): void
/** @deprecated */
"set"(long0: long): void
"set"(long0: long): void
"skip"(int0: integer): integer
}

export namespace $LongListIterator {
const probejs$$marker: never
}
export abstract class $LongListIterator$$Static implements $LongListIterator {
}
}

declare module "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectSortedMap" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $ObjectSortedSet } from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $AbstractLong2ObjectMap } from "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectMap"
import { $Long2ObjectSortedMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectSortedMap"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $LongFunction$$Type } from "java.util.function.LongFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $AbstractLong2ObjectSortedMap<V = any> extends $AbstractLong2ObjectMap<V> implements $Long2ObjectSortedMap<V> {
public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Long2ByteFunction
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Long2CharFunction
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Long2DoubleFunction
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Long2FloatFunction
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Long2IntFunction
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Long2LongFunction
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Long2ShortFunction
public "apply"(long0: long): V
public "apply"(long0: long): V
public "clear"(): void
/** @deprecated */
public "compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
public "composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<V>
public "composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ObjectFunction<V>
public "composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ObjectFunction<V>
public "composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ObjectFunction<V>
public "composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ObjectFunction<V>
public "composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ObjectFunction<V>
public "composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ObjectFunction<V>
public "compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "computeIfAbsent"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
public "computeIfAbsent"(long0: long, longFunction1: $LongFunction$$Type<V>): V
public "computeIfAbsent"(long0: long, function1: $Function$$Type<long, V>): V
/** @deprecated */
public "computeIfAbsentPartial"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
public "computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
public "computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
/** @deprecated */
public "containsKey"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(): V
public "defaultReturnValue"(v0: V): void
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
/** @deprecated */
public "entrySet"(): $ObjectSortedSet<$Map$Entry<long, V>>
/** @deprecated */
public "firstKey"(): long
public "firstLongKey"(): long
public "forEach"(biConsumer0: $BiConsumer$$Type<long, V>): void
/** @deprecated */
public "get"(object0: any): V
public "get"(long0: long): V
public "getOrDefault"(long0: long, v1: V): V
/** @deprecated */
public "getOrDefault"(object0: any, v1: V): V
public "headMap"(long0: long): $Long2ObjectSortedMap<V>
/** @deprecated */
public "headMap"(long0: long): $Long2ObjectSortedMap<V>
public static "identity"<T>(): $Function<T, T>
public "lastLongKey"(): long
public "merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public "merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
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
public "put"(long0: long, v1: V): V
public "put"(long0: long, v1: V): V
public "putIfAbsent"(long0: long, v1: V): V
public "putIfAbsent"(long0: long, v1: V): V
public "remove"(long0: long, object1: any): boolean
/** @deprecated */
public "remove"(object0: any): V
public "remove"(long0: long): V
public "remove"(object0: any, object1: any): boolean
public "replace"(long0: long, v1: V): V
public "replace"(long0: long, v1: V, v2: V): boolean
public "replace"(long0: long, v1: V): V
public "replace"(long0: long, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<long, V, V>): void
public "size"(): integer
public "subMap"(long0: long, long1: long): $Long2ObjectSortedMap<V>
/** @deprecated */
public "subMap"(long0: long, long1: long): $Long2ObjectSortedMap<V>
/** @deprecated */
public "tailMap"(long0: long): $Long2ObjectSortedMap<V>
public "tailMap"(long0: long): $Long2ObjectSortedMap<V>
}
}

declare module "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Serializable } from "java.io.Serializable"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $AbstractLong2ObjectFunction<V = any> implements $Long2ObjectFunction<V>, $Serializable {
public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Long2ByteFunction
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Long2CharFunction
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Long2DoubleFunction
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Long2FloatFunction
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Long2IntFunction
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Long2LongFunction
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Long2ShortFunction
public "apply"(long0: long): V
public "apply"(long0: long): V
public "clear"(): void
/** @deprecated */
public "compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
public "composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<V>
public "composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ObjectFunction<V>
public "composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ObjectFunction<V>
public "composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ObjectFunction<V>
public "composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ObjectFunction<V>
public "composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ObjectFunction<V>
public "composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ObjectFunction<V>
public "containsKey"(long0: long): boolean
/** @deprecated */
public "containsKey"(object0: any): boolean
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public "get"(long0: long): V
/** @deprecated */
public "get"(object0: any): V
/** @deprecated */
public "getOrDefault"(object0: any, v1: V): V
public "getOrDefault"(long0: long, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "put"(long0: long, v1: V): V
/** @deprecated */
public "put"(long0: long, v1: V): V
/** @deprecated */
public "remove"(object0: any): V
public "remove"(long0: long): V
public "size"(): integer
}
}

declare module "it.unimi.dsi.fastutil.longs.LongSet" {
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $LongStream } from "java.util.stream.LongStream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $LongPredicate$$Type } from "it.unimi.dsi.fastutil.longs.LongPredicate"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongPredicate$$Type as $LongPredicate$0$$Type } from "java.util.function.LongPredicate"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongCollection, $LongCollection$$Type } from "it.unimi.dsi.fastutil.longs.LongCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $LongSet extends $LongCollection, $Set<long> {
/** @deprecated */
"add"(long0: long): boolean
"add"(long0: long): boolean
"addAll"(longCollection0: $LongCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<long>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(long0: long): boolean
"containsAll"(longCollection0: $LongCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(longConsumer0: $LongConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<long>): void
"forEach"(longConsumer0: $LongConsumer$0$$Type): void
"hashCode"(): integer
"isEmpty"(): boolean
"longIterator"(): $LongIterator
"longParallelStream"(): $LongStream
"longSpliterator"(): $LongSpliterator
"longStream"(): $LongStream
/** @deprecated */
"parallelStream"(): $Stream<long>
/** @deprecated */
"rem"(long0: long): boolean
"remove"(long0: long): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(longCollection0: $LongCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(longPredicate0: $LongPredicate$0$$Type): boolean
"removeIf"(longPredicate0: $LongPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<long>): boolean
"retainAll"(longCollection0: $LongCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $LongSpliterator
/** @deprecated */
"stream"(): $Stream<long>
"toArray"(long0s: long[]): long[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
"toLongArray"(long0s: long[]): long[]
"toLongArray"(): long[]
get "empty"(): boolean
}

export namespace $LongSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of(long0: long, long1: long): $LongSet
function of(): $LongSet
function of(...long0s: long[]): $LongSet
function of(long0: long): $LongSet
function of(long0: long, long1: long, long2: long): $LongSet
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
export abstract class $LongSet$$Static implements $LongSet {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"(long0: long, long1: long): $LongSet
static "of"(): $LongSet
static "of"(...long0s: long[]): $LongSet
static "of"(long0: long): $LongSet
static "of"(long0: long, long1: long, long2: long): $LongSet
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

declare module "it.unimi.dsi.fastutil.longs.Long2ObjectMap" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2ObjectMap$Entry } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap$Entry"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $LongFunction$$Type } from "java.util.function.LongFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Long2ObjectMap<V = any> extends $Long2ObjectFunction<V>, $Map<long, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<long, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Long2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Long2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Long2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Long2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Long2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Long2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Long2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Long2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Long2ShortFunction
"apply"(long0: long): V
"apply"(long0: long): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, V>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2ObjectFunction<V>
"compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
"compute"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
"computeIfAbsent"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
"computeIfAbsent"(long0: long, longFunction1: $LongFunction$$Type<V>): V
"computeIfAbsent"(long0: long, function1: $Function$$Type<long, V>): V
/** @deprecated */
"computeIfAbsentPartial"(long0: long, long2ObjectFunction1: $Long2ObjectFunction$$Type<V>): V
"computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
"computeIfPresent"(long0: long, biFunction1: $BiFunction$$Type<long, V, V>): V
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(long0: long): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<long, V>): void
/** @deprecated */
"get"(object0: any): V
"get"(long0: long): V
"getOrDefault"(long0: long, v1: V): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"long2ObjectEntrySet"(): $ObjectSet<$Long2ObjectMap$Entry<V>>
"merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"merge"(long0: long, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
/** @deprecated */
"put"(long0: long, v1: V): V
"put"(long0: long, v1: V): V
"putAll"(map0: $Map$$Type<long, V>): void
"putIfAbsent"(long0: long, v1: V): V
"putIfAbsent"(long0: long, v1: V): V
"remove"(long0: long, object1: any): boolean
/** @deprecated */
"remove"(object0: any): V
"remove"(long0: long): V
"remove"(object0: any, object1: any): boolean
"replace"(long0: long, v1: V): V
"replace"(long0: long, v1: V, v2: V): boolean
"replace"(long0: long, v1: V): V
"replace"(long0: long, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<long, V, V>): void
"size"(): integer
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Long2ObjectMap {
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
export abstract class $Long2ObjectMap$$Static<V = any> implements $Long2ObjectMap<V> {
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

declare module "it.unimi.dsi.fastutil.longs.Long2IntFunction" {
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $LongToIntFunction } from "java.util.function.LongToIntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Long2IntFunction extends $Function$0<long, integer>, $LongToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<long, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Long2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Long2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Long2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Long2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Long2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Long2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Long2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Long2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Long2ShortFunction
"apply"(long0: long): integer
"applyAsInt"(long0: long): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, long>): $Function<T, integer>
"composeByte"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2IntFunction
"composeChar"(char2LongFunction0: $Char2LongFunction$$Type): $Char2IntFunction
"composeDouble"(double2LongFunction0: $Double2LongFunction$$Type): $Double2IntFunction
"composeFloat"(float2LongFunction0: $Float2LongFunction$$Type): $Float2IntFunction
"composeInt"(int2LongFunction0: $Int2LongFunction$$Type): $Int2IntFunction
"composeLong"(long2LongFunction0: $Long2LongFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2LongFunction0: $Object2LongFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2LongFunction0: $Reference2LongFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2LongFunction0: $Short2LongFunction$$Type): $Short2IntFunction
"containsKey"(long0: long): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
"get"(long0: long): integer
/** @deprecated */
"get"(object0: any): integer
"getOrDefault"(long0: long, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(long0: long, integer1: integer): integer
"put"(long0: long, int1: integer): integer
"remove"(long0: long): integer
"size"(): integer
}

export namespace $Long2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Long2IntFunction$$Static implements $Long2IntFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.longs.LongCollection" {
import { $LongSpliterator } from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import { $LongStream } from "java.util.stream.LongStream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $LongPredicate$$Type } from "it.unimi.dsi.fastutil.longs.LongPredicate"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $LongIterable } from "it.unimi.dsi.fastutil.longs.LongIterable"
import { $LongIterator } from "it.unimi.dsi.fastutil.longs.LongIterator"
import { $LongPredicate$$Type as $LongPredicate$0$$Type } from "java.util.function.LongPredicate"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $LongCollection extends $Collection<long>, $LongIterable {
/** @deprecated */
"add"(long0: long): boolean
"add"(long0: long): boolean
"addAll"(longCollection0: $LongCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<long>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(long0: long): boolean
"containsAll"(longCollection0: $LongCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(longConsumer0: $LongConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<long>): void
"forEach"(longConsumer0: $LongConsumer$0$$Type): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $LongIterator
"longIterator"(): $LongIterator
"longParallelStream"(): $LongStream
"longSpliterator"(): $LongSpliterator
"longStream"(): $LongStream
/** @deprecated */
"parallelStream"(): $Stream<long>
"rem"(long0: long): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(longCollection0: $LongCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(longPredicate0: $LongPredicate$0$$Type): boolean
"removeIf"(longPredicate0: $LongPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<long>): boolean
"retainAll"(longCollection0: $LongCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $LongSpliterator
/** @deprecated */
"stream"(): $Stream<long>
"toArray"(long0s: long[]): long[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
/** @deprecated */
"toLongArray"(long0s: long[]): long[]
"toLongArray"(): long[]
get "empty"(): boolean
}

export namespace $LongCollection {
const probejs$$marker: never
}
export abstract class $LongCollection$$Static implements $LongCollection {
}
}

declare module "it.unimi.dsi.fastutil.longs.LongSpliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Spliterator$OfLong } from "java.util.Spliterator$OfLong"
import { $LongConsumer$$Type } from "it.unimi.dsi.fastutil.longs.LongConsumer"
import { $LongConsumer$$Type as $LongConsumer$0$$Type } from "java.util.function.LongConsumer"

export interface $LongSpliterator extends $Spliterator$OfLong {
"characteristics"(): integer
"estimateSize"(): long
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"forEachRemaining"(longConsumer0: $LongConsumer$0$$Type): void
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
/** @deprecated */
"tryAdvance"(consumer0: $Consumer$$Type<long>): boolean
"tryAdvance"(longConsumer0: $LongConsumer$$Type): boolean
"tryAdvance"(longConsumer0: $LongConsumer$0$$Type): boolean
get "exactSizeIfKnown"(): long
}

export namespace $LongSpliterator {
const probejs$$marker: never
}
export abstract class $LongSpliterator$$Static implements $LongSpliterator {
}
}

declare module "it.unimi.dsi.fastutil.longs.Long2ObjectMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Long2ObjectMap$Entry<V = any> extends $Map$Entry<long, V> {
"equals"(object0: any): boolean
/** @deprecated */
"getKey"(): long
"getLongKey"(): long
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "key"(): long
get "longKey"(): long
get "value"(): V
set "value"(value: V)
}

export namespace $Long2ObjectMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Long2ObjectMap$Entry$$Static<V = any> implements $Long2ObjectMap$Entry<V> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

