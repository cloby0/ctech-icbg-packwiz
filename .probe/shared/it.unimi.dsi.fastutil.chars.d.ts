declare module "it.unimi.dsi.fastutil.chars.Char2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2ShortFunction extends $Function$0<character, short>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<character, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Char2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): short
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, short>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2ShortFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2ShortFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2ShortFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2ShortFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2ShortFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2ShortFunction
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(short0: short): void
"defaultReturnValue"(): short
"get"(char0: character): short
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(char0: character, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"put"(character0: character, short1: short): short
"put"(char0: character, short1: short): short
"remove"(char0: character): short
"size"(): integer
}

export namespace $Char2ShortFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Char2ShortFunction$$Static implements $Char2ShortFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2ByteFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2ByteFunction extends $Function$0<character, byte>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<character, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Char2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): byte
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, byte>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2ByteFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2ByteFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2ByteFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2ByteFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2ByteFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2ByteFunction
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
"get"(char0: character): byte
/** @deprecated */
"get"(object0: any): byte
"getOrDefault"(char0: character, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(character0: character, byte1: byte): byte
"put"(char0: character, byte1: byte): byte
"remove"(char0: character): byte
"size"(): integer
}

export namespace $Char2ByteFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Char2ByteFunction$$Static implements $Char2ByteFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2FloatFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2FloatFunction extends $Function$0<character, float>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<character, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Char2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): float
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, float>
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2FloatFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2FloatFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2FloatFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2FloatFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2FloatFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2FloatFunction
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
"get"(char0: character): float
/** @deprecated */
"get"(object0: any): float
"getOrDefault"(char0: character, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(character0: character, float1: float): float
"put"(char0: character, float1: float): float
"remove"(char0: character): float
"size"(): integer
}

export namespace $Char2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Char2FloatFunction$$Static implements $Char2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2DoubleFunction extends $Function$0<character, double>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<character, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Char2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): double
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, double>
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2DoubleFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2DoubleFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2DoubleFunction
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
"get"(char0: character): double
/** @deprecated */
"get"(object0: any): double
"getOrDefault"(char0: character, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(character0: character, double1: double): double
"put"(char0: character, double1: double): double
"remove"(char0: character): double
"size"(): integer
}

export namespace $Char2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Char2DoubleFunction$$Static implements $Char2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2ObjectFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"

export interface $Char2ObjectFunction<V = any> extends $Function$0<character, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<character, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Char2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Char2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Char2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Char2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Char2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Char2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Char2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Char2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Char2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(character0: character): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, V>
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2ObjectFunction<V>
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(char0: character): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(char0: character, v1: V): V
"put"(char0: character, v1: V): V
/** @deprecated */
"put"(character0: character, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(char0: character): V
"size"(): integer
}

export namespace $Char2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Char2ObjectFunction$$Static<V = any> implements $Char2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2CharFunction" {
import { $Float2CharFunction, $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Char2ByteFunction, $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Char2IntFunction, $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction, $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2FloatFunction, $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction, $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Char2ShortFunction, $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction, $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $Char2ReferenceFunction, $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Double2CharFunction, $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Long2CharFunction, $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction, $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction, $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Int2CharFunction, $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2CharFunction extends $Function<character, character>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<character, T>): $Function$0<character, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Char2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): character
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, character>): $Function$0<T, character>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2CharFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2CharFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2CharFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2CharFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2CharFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2CharFunction
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
"get"(char0: character): character
/** @deprecated */
"get"(object0: any): character
"getOrDefault"(char0: character, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(character0: character, character1: character): character
"put"(char0: character, char1: character): character
/** @deprecated */
"remove"(object0: any): character
"remove"(char0: character): character
"size"(): integer
}

export namespace $Char2CharFunction {
function identity(): $Char2CharFunction
}
export abstract class $Char2CharFunction$$Static implements $Char2CharFunction {
static "identity"(): $Char2CharFunction
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction" {
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2ReferenceFunction<V = any> extends $Function$0<character, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<character, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Char2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Char2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Char2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Char2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Char2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Char2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Char2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Char2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Char2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(character0: character): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, V>
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2ReferenceFunction<V>
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(char0: character): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(char0: character, v1: V): V
"put"(char0: character, v1: V): V
/** @deprecated */
"put"(character0: character, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(char0: character): V
"size"(): integer
}

export namespace $Char2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Char2ReferenceFunction$$Static<V = any> implements $Char2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2IntFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2IntFunction extends $Function$0<character, integer>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<character, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Char2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): integer
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, integer>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2IntFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2IntFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2IntFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2IntFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2IntFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2IntFunction
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
"get"(char0: character): integer
/** @deprecated */
"get"(object0: any): integer
"getOrDefault"(char0: character, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(character0: character, integer1: integer): integer
"put"(char0: character, int1: integer): integer
"remove"(char0: character): integer
"size"(): integer
}

export namespace $Char2IntFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Char2IntFunction$$Static implements $Char2IntFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2LongFunction" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $IntToLongFunction } from "java.util.function.IntToLongFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2LongFunction extends $Function$0<character, long>, $IntToLongFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<character, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Char2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): long
/** @deprecated */
"applyAsLong"(int0: integer): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, long>
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2LongFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2LongFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2LongFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2LongFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2LongFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2LongFunction
"containsKey"(char0: character): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(long0: long): void
"defaultReturnValue"(): long
"get"(char0: character): long
/** @deprecated */
"get"(object0: any): long
"getOrDefault"(char0: character, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(character0: character, long1: long): long
"put"(char0: character, long1: long): long
"remove"(char0: character): long
"size"(): integer
}

export namespace $Char2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Char2LongFunction$$Static implements $Char2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.chars.Char2BooleanFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $IntPredicate, $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Char2BooleanFunction extends $Function$0<character, boolean>, $IntPredicate {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<character, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Char2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Char2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Char2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Char2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Char2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Char2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Char2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Char2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Char2ShortFunction
"apply"(character0: character): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, character>): $Function<T, boolean>
"composeByte"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2CharFunction0: $Char2CharFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2CharFunction0: $Double2CharFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2CharFunction0: $Float2CharFunction$$Type): $Float2BooleanFunction
"composeInt"(int2CharFunction0: $Int2CharFunction$$Type): $Int2BooleanFunction
"composeLong"(long2CharFunction0: $Long2CharFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2CharFunction0: $Object2CharFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2CharFunction0: $Reference2CharFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2CharFunction0: $Short2CharFunction$$Type): $Short2BooleanFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(char0: character): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"get"(char0: character): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(char0: character, boolean1: boolean): boolean
"negate"(): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"put"(character0: character, boolean1: boolean): boolean
"put"(char0: character, boolean1: boolean): boolean
"remove"(char0: character): boolean
"size"(): integer
/** @deprecated */
"test"(int0: integer): boolean
}

export namespace $Char2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Char2BooleanFunction$$Static implements $Char2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

