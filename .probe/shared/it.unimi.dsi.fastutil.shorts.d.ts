declare module "it.unimi.dsi.fastutil.shorts.ShortSet" {
import { $IntStream } from "java.util.stream.IntStream"
import { $ShortCollection, $ShortCollection$$Type } from "it.unimi.dsi.fastutil.shorts.ShortCollection"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Set } from "java.util.Set"
import { $ShortPredicate$$Type } from "it.unimi.dsi.fastutil.shorts.ShortPredicate"
import { $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $Stream } from "java.util.stream.Stream"
import { $ShortSpliterator } from "it.unimi.dsi.fastutil.shorts.ShortSpliterator"
import { $ShortConsumer$$Type } from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ShortSet extends $ShortCollection, $Set<short> {
/** @deprecated */
"add"(short0: short): boolean
"add"(short0: short): boolean
"addAll"(shortCollection0: $ShortCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<short>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(short0: short): boolean
"containsAll"(shortCollection0: $ShortCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(shortConsumer0: $ShortConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<short>): void
"forEach"(intConsumer0: $IntConsumer$$Type): void
"hashCode"(): integer
"intIterator"(): $IntIterator
"intParallelStream"(): $IntStream
"intSpliterator"(): $IntSpliterator
"intStream"(): $IntStream
"isEmpty"(): boolean
/** @deprecated */
"parallelStream"(): $Stream<short>
/** @deprecated */
"rem"(short0: short): boolean
"remove"(short0: short): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(shortCollection0: $ShortCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(shortPredicate0: $ShortPredicate$$Type): boolean
"removeIf"(intPredicate0: $IntPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<short>): boolean
"retainAll"(shortCollection0: $ShortCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $ShortSpliterator
/** @deprecated */
"stream"(): $Stream<short>
"toArray"(short0s: short[]): short[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
"toShortArray"(short0s: short[]): short[]
"toShortArray"(): short[]
get "empty"(): boolean
}

export namespace $ShortSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of(short0: short, short1: short): $ShortSet
function of(): $ShortSet
function of(...short0s: short[]): $ShortSet
function of(short0: short): $ShortSet
function of(short0: short, short1: short, short2: short): $ShortSet
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
export abstract class $ShortSet$$Static implements $ShortSet {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"(short0: short, short1: short): $ShortSet
static "of"(): $ShortSet
static "of"(...short0s: short[]): $ShortSet
static "of"(short0: short): $ShortSet
static "of"(short0: short, short1: short, short2: short): $ShortSet
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

declare module "it.unimi.dsi.fastutil.shorts.ShortPredicate" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $IntPredicate } from "java.util.function.IntPredicate"

export interface $ShortPredicate extends $Predicate<short>, $IntPredicate {
/** @deprecated */
"and"(predicate0: $Predicate$$Type<short>): $Predicate<short>
"and"(shortPredicate0: $ShortPredicate$$Type): $ShortPredicate
"negate"(): $ShortPredicate
/** @deprecated */
"or"(predicate0: $Predicate$$Type<short>): $Predicate<short>
"or"(shortPredicate0: $ShortPredicate$$Type): $ShortPredicate
"test"(short0: short): boolean
/** @deprecated */
"test"(int0: integer): boolean
/** @deprecated */
"test"(short0: short): boolean
}

export namespace $ShortPredicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ShortPredicate$$Static implements $ShortPredicate {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "it.unimi.dsi.fastutil.shorts.ShortCollection" {
import { $IntStream } from "java.util.stream.IntStream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $ShortPredicate$$Type } from "it.unimi.dsi.fastutil.shorts.ShortPredicate"
import { $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $ShortIterable } from "it.unimi.dsi.fastutil.shorts.ShortIterable"
import { $Stream } from "java.util.stream.Stream"
import { $ShortSpliterator } from "it.unimi.dsi.fastutil.shorts.ShortSpliterator"
import { $ShortConsumer$$Type } from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ShortCollection extends $Collection<short>, $ShortIterable {
"add"(short0: short): boolean
/** @deprecated */
"add"(short0: short): boolean
"addAll"(shortCollection0: $ShortCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<short>): boolean
"clear"(): void
"contains"(short0: short): boolean
/** @deprecated */
"contains"(object0: any): boolean
"containsAll"(shortCollection0: $ShortCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(shortConsumer0: $ShortConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<short>): void
"forEach"(intConsumer0: $IntConsumer$$Type): void
"hashCode"(): integer
"intIterator"(): $IntIterator
"intParallelStream"(): $IntStream
"intSpliterator"(): $IntSpliterator
"intStream"(): $IntStream
"isEmpty"(): boolean
/** @deprecated */
"parallelStream"(): $Stream<short>
"rem"(short0: short): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(shortCollection0: $ShortCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(shortPredicate0: $ShortPredicate$$Type): boolean
"removeIf"(intPredicate0: $IntPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<short>): boolean
"retainAll"(shortCollection0: $ShortCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $ShortSpliterator
/** @deprecated */
"stream"(): $Stream<short>
"toArray"(short0s: short[]): short[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
/** @deprecated */
"toShortArray"(short0s: short[]): short[]
"toShortArray"(): short[]
get "empty"(): boolean
}

export namespace $ShortCollection {
const probejs$$marker: never
}
export abstract class $ShortCollection$$Static implements $ShortCollection {
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $IntPredicate, $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Short2BooleanFunction extends $Function$0<short, boolean>, $IntPredicate {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<short, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Short2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, boolean>
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2BooleanFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2BooleanFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2BooleanFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(short0: short): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"get"(short0: short): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(short0: short, boolean1: boolean): boolean
"negate"(): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"put"(short0: short, boolean1: boolean): boolean
"put"(short0: short, boolean1: boolean): boolean
"remove"(short0: short): boolean
"size"(): integer
/** @deprecated */
"test"(int0: integer): boolean
}

export namespace $Short2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Short2BooleanFunction$$Static implements $Short2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2ByteFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Short2ByteFunction extends $Function$0<short, byte>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<short, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Short2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): byte
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, byte>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2ByteFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2ByteFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2ByteFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2ByteFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2ByteFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2ByteFunction
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
"get"(short0: short): byte
/** @deprecated */
"get"(object0: any): byte
"getOrDefault"(short0: short, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(short0: short, byte1: byte): byte
"put"(short0: short, byte1: byte): byte
"remove"(short0: short): byte
"size"(): integer
}

export namespace $Short2ByteFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Short2ByteFunction$$Static implements $Short2ByteFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Short2ObjectFunction<V = any> extends $Function$0<short, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<short, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Short2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Short2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Short2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Short2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Short2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Short2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Short2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Short2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Short2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(short0: short): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, V>
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2ObjectFunction<V>
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(short0: short): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(short0: short, v1: V): V
"put"(short0: short, v1: V): V
/** @deprecated */
"put"(short0: short, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(short0: short): V
"size"(): integer
}

export namespace $Short2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Short2ObjectFunction$$Static<V = any> implements $Short2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2ShortFunction" {
import { $Double2ShortFunction, $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction, $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction, $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Byte2ShortFunction, $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Short2ReferenceFunction, $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Reference2ShortFunction, $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction, $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction, $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $Float2ShortFunction, $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction, $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Short2DoubleFunction, $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Short2ByteFunction, $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction, $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction, $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"

export interface $Short2ShortFunction extends $Function<short, short>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<short, T>): $Function$0<short, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Short2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): short
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, short>): $Function$0<T, short>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2ShortFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2ShortFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2ShortFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2ShortFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2ShortFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2ShortFunction
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
"get"(short0: short): short
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(short0: short, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"put"(short0: short, short1: short): short
"put"(short0: short, short1: short): short
/** @deprecated */
"remove"(object0: any): short
"remove"(short0: short): short
"size"(): integer
}

export namespace $Short2ShortFunction {
function identity(): $Short2ShortFunction
}
export abstract class $Short2ShortFunction$$Static implements $Short2ShortFunction {
static "identity"(): $Short2ShortFunction
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2LongFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $IntToLongFunction } from "java.util.function.IntToLongFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"

export interface $Short2LongFunction extends $Function$0<short, long>, $IntToLongFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<short, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Short2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): long
/** @deprecated */
"applyAsLong"(int0: integer): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, long>
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2LongFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2LongFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2LongFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2LongFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2LongFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2LongFunction
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(long0: long): void
"defaultReturnValue"(): long
"get"(short0: short): long
/** @deprecated */
"get"(object0: any): long
"getOrDefault"(short0: short, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(short0: short, long1: long): long
"put"(short0: short, long1: long): long
"remove"(short0: short): long
"size"(): integer
}

export namespace $Short2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Short2LongFunction$$Static implements $Short2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.shorts.ShortSpliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Spliterator$OfPrimitive } from "java.util.Spliterator$OfPrimitive"
import { $ShortConsumer, $ShortConsumer$$Type } from "it.unimi.dsi.fastutil.shorts.ShortConsumer"

export interface $ShortSpliterator extends $Spliterator$OfPrimitive<short, $ShortConsumer, $ShortSpliterator> {
"characteristics"(): integer
"estimateSize"(): long
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<short>): void
"forEachRemaining"(shortConsumer0: $ShortConsumer$$Type): void
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
/** @deprecated */
"tryAdvance"(consumer0: $Consumer$$Type<short>): boolean
"tryAdvance"(shortConsumer0: $ShortConsumer$$Type): boolean
"trySplit"(): $ShortSpliterator
get "exactSizeIfKnown"(): long
}

export namespace $ShortSpliterator {
const probejs$$marker: never
}
export abstract class $ShortSpliterator$$Static implements $ShortSpliterator {
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2CharFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Short2CharFunction extends $Function$0<short, character>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<short, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Short2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): character
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, character>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2CharFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2CharFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2CharFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2CharFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2CharFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2CharFunction
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(char0: character): void
"defaultReturnValue"(): character
"get"(short0: short): character
/** @deprecated */
"get"(object0: any): character
"getOrDefault"(short0: short, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(short0: short, character1: character): character
"put"(short0: short, char1: character): character
"remove"(short0: short): character
"size"(): integer
}

export namespace $Short2CharFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Short2CharFunction$$Static implements $Short2CharFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.shorts.ShortIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $ShortConsumer$$Type } from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $ShortIterable extends $Iterable<short> {
"forEach"(shortConsumer0: $ShortConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<short>): void
"forEach"(intConsumer0: $IntConsumer$$Type): void
"intIterator"(): $IntIterator
"intSpliterator"(): $IntSpliterator
}

export namespace $ShortIterable {
const probejs$$marker: never
}
export abstract class $ShortIterable$$Static implements $ShortIterable {
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Short2DoubleFunction extends $Function$0<short, double>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<short, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Short2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): double
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, double>
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2DoubleFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2DoubleFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2DoubleFunction
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
"get"(short0: short): double
/** @deprecated */
"get"(object0: any): double
"getOrDefault"(short0: short, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(short0: short, double1: double): double
"put"(short0: short, double1: double): double
"remove"(short0: short): double
"size"(): integer
}

export namespace $Short2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Short2DoubleFunction$$Static implements $Short2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2IntFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Short2IntFunction extends $Function$0<short, integer>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<short, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Short2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): integer
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, integer>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2IntFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2IntFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2IntFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2IntFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2IntFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2IntFunction
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
"get"(short0: short): integer
/** @deprecated */
"get"(object0: any): integer
"getOrDefault"(short0: short, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(short0: short, integer1: integer): integer
"put"(short0: short, int1: integer): integer
"remove"(short0: short): integer
"size"(): integer
}

export namespace $Short2IntFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Short2IntFunction$$Static implements $Short2IntFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2FloatFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"

export interface $Short2FloatFunction extends $Function$0<short, float>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<short, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Short2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Short2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Short2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Short2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Short2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Short2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Short2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Short2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Short2ShortFunction
"apply"(short0: short): float
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, float>
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2FloatFunction
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2FloatFunction
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2FloatFunction
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2FloatFunction
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2FloatFunction
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2FloatFunction
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
"get"(short0: short): float
/** @deprecated */
"get"(object0: any): float
"getOrDefault"(short0: short, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(short0: short, float1: float): float
"put"(short0: short, float1: float): float
"remove"(short0: short): float
"size"(): integer
}

export namespace $Short2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Short2FloatFunction$$Static implements $Short2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.shorts.ShortConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $IntConsumer } from "java.util.function.IntConsumer"

export interface $ShortConsumer extends $Consumer<short>, $IntConsumer {
"accept"(short0: short): void
/** @deprecated */
"accept"(int0: integer): void
/** @deprecated */
"accept"(short0: short): void
"andThen"(shortConsumer0: $ShortConsumer$$Type): $ShortConsumer
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<short>): $Consumer<short>
}

export namespace $ShortConsumer {
const probejs$$marker: never
}
export abstract class $ShortConsumer$$Static implements $ShortConsumer {
}
}

declare module "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"

export interface $Short2ReferenceFunction<V = any> extends $Function$0<short, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<short, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Short2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Short2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Short2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Short2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Short2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Short2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Short2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Short2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Short2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(short0: short): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, short>): $Function<T, V>
"composeByte"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2ShortFunction0: $Double2ShortFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2ShortFunction0: $Int2ShortFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2ShortFunction0: $Long2ShortFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ShortFunction0: $Object2ShortFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ShortFunction0: $Reference2ShortFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Short2ReferenceFunction<V>
"containsKey"(short0: short): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(short0: short): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(short0: short, v1: V): V
"put"(short0: short, v1: V): V
/** @deprecated */
"put"(short0: short, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(short0: short): V
"size"(): integer
}

export namespace $Short2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Short2ReferenceFunction$$Static<V = any> implements $Short2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

