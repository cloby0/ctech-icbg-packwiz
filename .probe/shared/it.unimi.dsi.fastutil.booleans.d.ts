declare module "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Boolean2DoubleFunction extends $Function$0<boolean, double> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<boolean, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, double>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2DoubleFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2DoubleFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2DoubleFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(): double
"defaultReturnValue"(double0: double): void
/** @deprecated */
"get"(object0: any): double
"get"(boolean0: boolean): double
"getOrDefault"(boolean0: boolean, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(boolean0: boolean, double1: double): double
"put"(boolean0: boolean, double1: double): double
"remove"(boolean0: boolean): double
"size"(): integer
}

export namespace $Boolean2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2DoubleFunction$$Static implements $Boolean2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction" {
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Boolean2ObjectFunction<V = any> extends $Function$0<boolean, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<boolean, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Boolean2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Boolean2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Boolean2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Boolean2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Boolean2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Boolean2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Boolean2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Boolean2ShortFunction
"apply"(boolean0: boolean): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, V>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ObjectFunction<V>
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"get"(boolean0: boolean): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(boolean0: boolean, v1: V): V
"put"(boolean0: boolean, v1: V): V
/** @deprecated */
"put"(boolean0: boolean, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(boolean0: boolean): V
"size"(): integer
}

export namespace $Boolean2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ObjectFunction$$Static<V = any> implements $Boolean2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction" {
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Boolean2ReferenceFunction<V = any> extends $Function$0<boolean, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<boolean, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Boolean2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Boolean2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Boolean2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Boolean2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Boolean2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Boolean2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Boolean2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Boolean2ShortFunction
"apply"(boolean0: boolean): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, V>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ReferenceFunction<V>
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"get"(boolean0: boolean): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(boolean0: boolean, v1: V): V
"put"(boolean0: boolean, v1: V): V
/** @deprecated */
"put"(boolean0: boolean, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(boolean0: boolean): V
"size"(): integer
}

export namespace $Boolean2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ReferenceFunction$$Static<V = any> implements $Boolean2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Boolean2ByteFunction extends $Function$0<boolean, byte> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<boolean, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): byte
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, byte>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ByteFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ByteFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ByteFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ByteFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ByteFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ByteFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
/** @deprecated */
"get"(object0: any): byte
"get"(boolean0: boolean): byte
"getOrDefault"(boolean0: boolean, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(boolean0: boolean, byte1: byte): byte
"put"(boolean0: boolean, byte1: byte): byte
"remove"(boolean0: boolean): byte
"size"(): integer
}

export namespace $Boolean2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ByteFunction$$Static implements $Boolean2ByteFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"

export interface $Boolean2FloatFunction extends $Function$0<boolean, float> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<boolean, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): float
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, float>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2FloatFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2FloatFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2FloatFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2FloatFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2FloatFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2FloatFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(): float
"defaultReturnValue"(float0: float): void
/** @deprecated */
"get"(object0: any): float
"get"(boolean0: boolean): float
"getOrDefault"(boolean0: boolean, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(boolean0: boolean, float1: float): float
"put"(boolean0: boolean, float1: float): float
"remove"(boolean0: boolean): float
"size"(): integer
}

export namespace $Boolean2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2FloatFunction$$Static implements $Boolean2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Boolean2ShortFunction extends $Function$0<boolean, short> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<boolean, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): short
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, short>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ShortFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ShortFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ShortFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ShortFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ShortFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ShortFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
/** @deprecated */
"get"(object0: any): short
"get"(boolean0: boolean): short
"getOrDefault"(boolean0: boolean, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"put"(boolean0: boolean, short1: short): short
"put"(boolean0: boolean, short1: short): short
"remove"(boolean0: boolean): short
"size"(): integer
}

export namespace $Boolean2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ShortFunction$$Static implements $Boolean2ShortFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.BooleanConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"

export interface $BooleanConsumer extends $Consumer<boolean> {
/** @deprecated */
"accept"(boolean0: boolean): void
"accept"(boolean0: boolean): void
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<boolean>): $Consumer<boolean>
"andThen"(booleanConsumer0: $BooleanConsumer$$Type): $BooleanConsumer
}

export namespace $BooleanConsumer {
const probejs$$marker: never
}
export abstract class $BooleanConsumer$$Static implements $BooleanConsumer {
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Boolean2LongFunction extends $Function$0<boolean, long> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<boolean, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, long>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2LongFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2LongFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2LongFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2LongFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2LongFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2LongFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
/** @deprecated */
"get"(object0: any): long
"get"(boolean0: boolean): long
"getOrDefault"(boolean0: boolean, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(boolean0: boolean, long1: long): long
"put"(boolean0: boolean, long1: long): long
"remove"(boolean0: boolean): long
"size"(): integer
}

export namespace $Boolean2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2LongFunction$$Static implements $Boolean2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Boolean2IntFunction extends $Function$0<boolean, integer> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<boolean, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, integer>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2IntFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2IntFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2IntFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2IntFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2IntFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2IntFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"get"(object0: any): integer
"get"(boolean0: boolean): integer
"getOrDefault"(boolean0: boolean, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(boolean0: boolean, integer1: integer): integer
"put"(boolean0: boolean, int1: integer): integer
"remove"(boolean0: boolean): integer
"size"(): integer
}

export namespace $Boolean2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2IntFunction$$Static implements $Boolean2IntFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Double2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Boolean2LongFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Boolean2IntFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Boolean2ObjectFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Float2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Int2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Boolean2DoubleFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Long2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Boolean2ReferenceFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Char2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Reference2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Boolean2CharFunction extends $Function$0<boolean, character> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<boolean, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): character
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, character>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2CharFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2CharFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2CharFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2CharFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2CharFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2CharFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
/** @deprecated */
"get"(object0: any): character
"get"(boolean0: boolean): character
"getOrDefault"(boolean0: boolean, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(boolean0: boolean, character1: character): character
"put"(boolean0: boolean, char1: character): character
"remove"(boolean0: boolean): character
"size"(): integer
}

export namespace $Boolean2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2CharFunction$$Static implements $Boolean2CharFunction {
static "identity"<T>(): $Function<T, T>
}
}

