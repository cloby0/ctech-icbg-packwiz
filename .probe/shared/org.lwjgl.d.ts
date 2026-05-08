declare module "org.lwjgl.glfw.GLFWVidMode" {
import { $Struct } from "org.lwjgl.system.Struct"
import { $GLFWVidMode$Buffer } from "org.lwjgl.glfw.GLFWVidMode$Buffer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $GLFWVidMode extends $Struct {
static readonly "ALIGNOF": integer
static readonly "BLUEBITS": integer
static readonly "GREENBITS": integer
static readonly "HEIGHT": integer
static readonly "REDBITS": integer
static readonly "REFRESHRATE": integer
static readonly "SIZEOF": integer
static readonly "WIDTH": integer

constructor(byteBuffer0: $ByteBuffer$$Type)

public "blueBits"(): integer
public static "create"(long0: long, int1: integer): $GLFWVidMode$Buffer
public static "create"(long0: long): $GLFWVidMode
public static "createSafe"(long0: long, int1: integer): $GLFWVidMode$Buffer
public static "createSafe"(long0: long): $GLFWVidMode
public "greenBits"(): integer
public "height"(): integer
public static "nblueBits"(long0: long): integer
public static "ngreenBits"(long0: long): integer
public static "nheight"(long0: long): integer
public static "nredBits"(long0: long): integer
public static "nrefreshRate"(long0: long): integer
public static "nwidth"(long0: long): integer
public "redBits"(): integer
public "refreshRate"(): integer
public "width"(): integer
}
}

declare module "org.lwjgl.CLongBuffer" {
import { $CustomBuffer } from "org.lwjgl.system.CustomBuffer"
import { $Comparable } from "java.lang.Comparable"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $CLongBuffer extends $CustomBuffer<$CLongBuffer> implements $Comparable<$CLongBuffer> {
public static "allocateDirect"(int0: integer): $CLongBuffer
public "compareTo"(cLongBuffer0: $CLongBuffer$$Type): integer
public static "create"(byteBuffer0: $ByteBuffer$$Type): $CLongBuffer
public static "create"(long0: long, int1: integer): $CLongBuffer
public "get"(int0: integer): long
public static "get"(byteBuffer0: $ByteBuffer$$Type, int1: integer): long
public "get"(long0s: long[]): $CLongBuffer
public "get"(long0s: long[], int1: integer, int2: integer): $CLongBuffer
public "get"(): long
public static "get"(byteBuffer0: $ByteBuffer$$Type): long
public "put"(long0s: long[], int1: integer, int2: integer): $CLongBuffer
public "put"(long0s: long[]): $CLongBuffer
public "put"(long0: long): $CLongBuffer
public static "put"(byteBuffer0: $ByteBuffer$$Type, long1: long): void
public "put"(int0: integer, long1: long): $CLongBuffer
public static "put"(byteBuffer0: $ByteBuffer$$Type, int1: integer, long2: long): void
}
}

declare module "org.lwjgl.glfw.GLFWVidMode$Buffer" {
import { $GLFWVidMode } from "org.lwjgl.glfw.GLFWVidMode"
import { $StructBuffer } from "org.lwjgl.system.StructBuffer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $GLFWVidMode$Buffer extends $StructBuffer<$GLFWVidMode, $GLFWVidMode$Buffer> {
constructor(long0: long, int1: integer)
constructor(byteBuffer0: $ByteBuffer$$Type)

public "blueBits"(): integer
public "greenBits"(): integer
public "height"(): integer
public "redBits"(): integer
public "refreshRate"(): integer
public "width"(): integer
}
}

declare module "org.lwjgl.stb.STBTTFontinfo" {
import { $NativeResource } from "org.lwjgl.system.NativeResource"
import { $Struct } from "org.lwjgl.system.Struct"
import { $STBTTFontinfo$Buffer } from "org.lwjgl.stb.STBTTFontinfo$Buffer"
import { $MemoryStack$$Type } from "org.lwjgl.system.MemoryStack"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $STBTTFontinfo extends $Struct implements $NativeResource {
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer

constructor(byteBuffer0: $ByteBuffer$$Type)

public static "calloc"(int0: integer, memoryStack1: $MemoryStack$$Type): $STBTTFontinfo$Buffer
public static "calloc"(memoryStack0: $MemoryStack$$Type): $STBTTFontinfo
public static "calloc"(): $STBTTFontinfo
public static "calloc"(int0: integer): $STBTTFontinfo$Buffer
/** @deprecated */
public static "callocStack"(): $STBTTFontinfo
/** @deprecated */
public static "callocStack"(int0: integer): $STBTTFontinfo$Buffer
/** @deprecated */
public static "callocStack"(memoryStack0: $MemoryStack$$Type): $STBTTFontinfo
/** @deprecated */
public static "callocStack"(int0: integer, memoryStack1: $MemoryStack$$Type): $STBTTFontinfo$Buffer
public "close"(): void
public static "create"(long0: long, int1: integer): $STBTTFontinfo$Buffer
public static "create"(): $STBTTFontinfo
public static "create"(int0: integer): $STBTTFontinfo$Buffer
public static "create"(long0: long): $STBTTFontinfo
public static "createSafe"(long0: long, int1: integer): $STBTTFontinfo$Buffer
public static "createSafe"(long0: long): $STBTTFontinfo
public "free"(): void
public static "malloc"(memoryStack0: $MemoryStack$$Type): $STBTTFontinfo
public static "malloc"(): $STBTTFontinfo
public static "malloc"(int0: integer): $STBTTFontinfo$Buffer
public static "malloc"(int0: integer, memoryStack1: $MemoryStack$$Type): $STBTTFontinfo$Buffer
/** @deprecated */
public static "mallocStack"(memoryStack0: $MemoryStack$$Type): $STBTTFontinfo
/** @deprecated */
public static "mallocStack"(int0: integer): $STBTTFontinfo$Buffer
/** @deprecated */
public static "mallocStack"(int0: integer, memoryStack1: $MemoryStack$$Type): $STBTTFontinfo$Buffer
/** @deprecated */
public static "mallocStack"(): $STBTTFontinfo
}
}

declare module "org.lwjgl.PointerBuffer" {
import { $CustomBuffer, $CustomBuffer$$Type } from "org.lwjgl.system.CustomBuffer"
import { $Pointer$$Type } from "org.lwjgl.system.Pointer"
import { $FloatBuffer, $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $IntBuffer, $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $DoubleBuffer, $DoubleBuffer$$Type } from "java.nio.DoubleBuffer"
import { $ShortBuffer, $ShortBuffer$$Type } from "java.nio.ShortBuffer"
import { $LongBuffer, $LongBuffer$$Type } from "java.nio.LongBuffer"
import { $Comparable } from "java.lang.Comparable"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $PointerBuffer extends $CustomBuffer<$PointerBuffer> implements $Comparable<$PointerBuffer> {
public static "allocateDirect"(int0: integer): $PointerBuffer
public "compareTo"(pointerBuffer0: $PointerBuffer$$Type): integer
public static "create"(long0: long, int1: integer): $PointerBuffer
public static "create"(byteBuffer0: $ByteBuffer$$Type): $PointerBuffer
public "get"(int0: integer): long
public "get"(): long
public static "get"(byteBuffer0: $ByteBuffer$$Type): long
public static "get"(byteBuffer0: $ByteBuffer$$Type, int1: integer): long
public "get"(long0s: long[], int1: integer, int2: integer): $PointerBuffer
public "get"(long0s: long[]): $PointerBuffer
public "getByteBuffer"(int0: integer): $ByteBuffer
public "getByteBuffer"(int0: integer, int1: integer): $ByteBuffer
public "getDoubleBuffer"(int0: integer, int1: integer): $DoubleBuffer
public "getDoubleBuffer"(int0: integer): $DoubleBuffer
public "getFloatBuffer"(int0: integer, int1: integer): $FloatBuffer
public "getFloatBuffer"(int0: integer): $FloatBuffer
public "getIntBuffer"(int0: integer): $IntBuffer
public "getIntBuffer"(int0: integer, int1: integer): $IntBuffer
public "getLongBuffer"(int0: integer, int1: integer): $LongBuffer
public "getLongBuffer"(int0: integer): $LongBuffer
public "getPointerBuffer"(int0: integer): $PointerBuffer
public "getPointerBuffer"(int0: integer, int1: integer): $PointerBuffer
public "getShortBuffer"(int0: integer, int1: integer): $ShortBuffer
public "getShortBuffer"(int0: integer): $ShortBuffer
public "getStringASCII"(int0: integer): string
public "getStringASCII"(): string
public "getStringUTF16"(int0: integer): string
public "getStringUTF16"(): string
public "getStringUTF8"(int0: integer): string
public "getStringUTF8"(): string
public "put"(pointer0: $Pointer$$Type): $PointerBuffer
public static "put"(byteBuffer0: $ByteBuffer$$Type, int1: integer, long2: long): void
public "put"(int0: integer, long1: long): $PointerBuffer
public "put"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type): $PointerBuffer
public "put"(long0s: long[], int1: integer, int2: integer): $PointerBuffer
public "put"(long0s: long[]): $PointerBuffer
public "put"(long0: long): $PointerBuffer
public static "put"(byteBuffer0: $ByteBuffer$$Type, long1: long): void
public "put"(floatBuffer0: $FloatBuffer$$Type): $PointerBuffer
public "put"(int0: integer, floatBuffer1: $FloatBuffer$$Type): $PointerBuffer
public "put"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $PointerBuffer
public "put"(int0: integer, shortBuffer1: $ShortBuffer$$Type): $PointerBuffer
public "put"(int0: integer, intBuffer1: $IntBuffer$$Type): $PointerBuffer
public "put"(int0: integer, longBuffer1: $LongBuffer$$Type): $PointerBuffer
public "put"(int0: integer, pointer1: $Pointer$$Type): $PointerBuffer
public "put"(doubleBuffer0: $DoubleBuffer$$Type): $PointerBuffer
public "put"(byteBuffer0: $ByteBuffer$$Type): $PointerBuffer
public "put"(shortBuffer0: $ShortBuffer$$Type): $PointerBuffer
public "put"(intBuffer0: $IntBuffer$$Type): $PointerBuffer
public "put"(longBuffer0: $LongBuffer$$Type): $PointerBuffer
public "putAddressOf"(int0: integer, customBuffer1: $CustomBuffer$$Type<any>): $PointerBuffer
public "putAddressOf"(customBuffer0: $CustomBuffer$$Type<any>): $PointerBuffer
get "stringASCII"(): string
get "stringUTF16"(): string
get "stringUTF8"(): string
}
}

declare module "org.lwjgl.stb.STBTTFontinfo$Buffer" {
import { $NativeResource } from "org.lwjgl.system.NativeResource"
import { $STBTTFontinfo } from "org.lwjgl.stb.STBTTFontinfo"
import { $StructBuffer } from "org.lwjgl.system.StructBuffer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $STBTTFontinfo$Buffer extends $StructBuffer<$STBTTFontinfo, $STBTTFontinfo$Buffer> implements $NativeResource {
constructor(byteBuffer0: $ByteBuffer$$Type)
constructor(long0: long, int1: integer)

public "close"(): void
public "free"(): void
}
}

declare module "org.lwjgl.system.Pointer$Default" {
import { $Pointer } from "org.lwjgl.system.Pointer"

export class $Pointer$Default implements $Pointer {
public "address"(): long
}
}

declare module "org.lwjgl.system.Pointer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Pointer {
"address"(): long
}

export namespace $Pointer {
const BITS32: boolean
const BITS64: boolean
const CLONG_SHIFT: integer
const CLONG_SIZE: integer
const POINTER_SHIFT: integer
const POINTER_SIZE: integer
}
export abstract class $Pointer$$Static implements $Pointer {
static readonly "BITS32": boolean
static readonly "BITS64": boolean
static readonly "CLONG_SHIFT": integer
static readonly "CLONG_SIZE": integer
static readonly "POINTER_SHIFT": integer
static readonly "POINTER_SIZE": integer

}
}

declare module "org.lwjgl.system.Struct" {
import { $Pointer$Default } from "org.lwjgl.system.Pointer$Default"
import { $Struct$StructValidation$$Type } from "org.lwjgl.system.Struct$StructValidation"

export class $Struct extends $Pointer$Default {
public "clear"(): void
public "free"(): void
public "isNull"(int0: integer): boolean
public "sizeof"(): integer
public static "validate"(long0: long, int1: integer, int2: integer, structValidation3: $Struct$StructValidation$$Type): void
}
}

declare module "org.lwjgl.system.StructBuffer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Struct, $Struct$$Type } from "org.lwjgl.system.Struct"
import { $Stream } from "java.util.stream.Stream"
import { $CustomBuffer } from "org.lwjgl.system.CustomBuffer"
import { $Iterator } from "java.util.Iterator"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $StructBuffer<T extends $Struct = $Struct, SELF extends $StructBuffer<T, SELF> = $StructBuffer<T, SELF>> extends $CustomBuffer<SELF> implements $Iterable<T> {
public "apply"(int0: integer, consumer1: $Consumer$$Type<T>): SELF
public "apply"(consumer0: $Consumer$$Type<T>): SELF
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "get"(int0: integer): T
public "get"(int0: integer, t1: T): SELF
public "get"(t0: T): SELF
public "get"(): T
public "iterator"(): $Iterator<T>
public "parallelStream"(): $Stream<T>
public "put"(int0: integer, t1: T): SELF
public "put"(t0: T): SELF
public "spliterator"(): $Spliterator<T>
public "stream"(): $Stream<T>
[Symbol.iterator](): IterableIterator<T>;
}
}

declare module "org.lwjgl.system.NativeResource" {
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $NativeResource extends $AutoCloseable {
"close"(): void
"free"(): void
}

export namespace $NativeResource {
const probejs$$marker: never
}
export abstract class $NativeResource$$Static implements $NativeResource {
}
}

declare module "org.lwjgl.system.CustomBuffer" {
import { $Pointer$Default } from "org.lwjgl.system.Pointer$Default"

export class $CustomBuffer<SELF extends $CustomBuffer<SELF> = $CustomBuffer<SELF>> extends $Pointer$Default {
public "address"(int0: integer): long
public "address0"(): long
public "capacity"(): integer
public "clear"(): SELF
public "compact"(): SELF
public "duplicate"(): SELF
public "flip"(): SELF
public "free"(): void
public "hasRemaining"(): boolean
public "limit"(): integer
public "limit"(int0: integer): SELF
public "mark"(): SELF
public "position"(): integer
public "position"(int0: integer): SELF
public "put"(self0: SELF): SELF
public "remaining"(): integer
public "reset"(): SELF
public "rewind"(): SELF
public "sizeof"(): integer
public "slice"(): SELF
public "slice"(int0: integer, int1: integer): SELF
}
}

declare module "org.lwjgl.system.MemoryStack" {
import { $FloatBuffer } from "java.nio.FloatBuffer"
import { $DoubleBuffer } from "java.nio.DoubleBuffer"
import { $ShortBuffer } from "java.nio.ShortBuffer"
import { $CLongBuffer } from "org.lwjgl.CLongBuffer"
import { $PointerBuffer } from "org.lwjgl.PointerBuffer"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Pointer$$Type } from "org.lwjgl.system.Pointer"
import { $Pointer$Default } from "org.lwjgl.system.Pointer$Default"
import { $IntBuffer } from "java.nio.IntBuffer"
import { $Buffer$$Type } from "java.nio.Buffer"
import { $LongBuffer } from "java.nio.LongBuffer"

export class $MemoryStack extends $Pointer$Default implements $AutoCloseable {
public "ASCII"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public "ASCII"(charSequence0: charseq): $ByteBuffer
public "ASCIISafe"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public "ASCIISafe"(charSequence0: charseq): $ByteBuffer
public "UTF16"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public "UTF16"(charSequence0: charseq): $ByteBuffer
public "UTF16Safe"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public "UTF16Safe"(charSequence0: charseq): $ByteBuffer
public "UTF8"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public "UTF8"(charSequence0: charseq): $ByteBuffer
public "UTF8Safe"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public "UTF8Safe"(charSequence0: charseq): $ByteBuffer
public "bytes"(byte0: byte): $ByteBuffer
public "bytes"(byte0: byte, byte1: byte): $ByteBuffer
public "bytes"(...byte0s: byte[]): $ByteBuffer
public "bytes"(byte0: byte, byte1: byte, byte2: byte, byte3: byte): $ByteBuffer
public "bytes"(byte0: byte, byte1: byte, byte2: byte): $ByteBuffer
public "calloc"(int0: integer, int1: integer): $ByteBuffer
public "calloc"(int0: integer): $ByteBuffer
public "callocCLong"(int0: integer): $CLongBuffer
public "callocDouble"(int0: integer): $DoubleBuffer
public "callocFloat"(int0: integer): $FloatBuffer
public "callocInt"(int0: integer): $IntBuffer
public "callocLong"(int0: integer): $LongBuffer
public "callocPointer"(int0: integer): $PointerBuffer
public "callocShort"(int0: integer): $ShortBuffer
public "clongs"(long0: long): $CLongBuffer
public "clongs"(long0: long, long1: long, long2: long): $CLongBuffer
public "clongs"(long0: long, long1: long): $CLongBuffer
public "clongs"(...long0s: long[]): $CLongBuffer
public "clongs"(long0: long, long1: long, long2: long, long3: long): $CLongBuffer
public "close"(): void
public static "create"(byteBuffer0: $ByteBuffer$$Type): $MemoryStack
public static "create"(): $MemoryStack
public static "create"(int0: integer): $MemoryStack
public "doubles"(double0: double, double1: double, double2: double, double3: double): $DoubleBuffer
public "doubles"(...double0s: double[]): $DoubleBuffer
public "doubles"(double0: double, double1: double, double2: double): $DoubleBuffer
public "doubles"(double0: double, double1: double): $DoubleBuffer
public "doubles"(double0: double): $DoubleBuffer
public "floats"(float0: float, float1: float, float2: float, float3: float): $FloatBuffer
public "floats"(float0: float, float1: float, float2: float): $FloatBuffer
public "floats"(float0: float, float1: float): $FloatBuffer
public "floats"(float0: float): $FloatBuffer
public "floats"(...float0s: float[]): $FloatBuffer
public "getAddress"(): long
public "getFrameIndex"(): integer
public "getPointer"(): integer
public "getPointerAddress"(): long
public "getSize"(): integer
public "ints"(...int0s: integer[]): $IntBuffer
public "ints"(int0: integer, int1: integer): $IntBuffer
public "ints"(int0: integer, int1: integer, int2: integer): $IntBuffer
public "ints"(int0: integer, int1: integer, int2: integer, int3: integer): $IntBuffer
public "ints"(int0: integer): $IntBuffer
public "longs"(long0: long): $LongBuffer
public "longs"(long0: long, long1: long, long2: long, long3: long): $LongBuffer
public "longs"(long0: long, long1: long, long2: long): $LongBuffer
public "longs"(long0: long, long1: long): $LongBuffer
public "longs"(...long0s: long[]): $LongBuffer
public "malloc"(int0: integer, int1: integer): $ByteBuffer
public "malloc"(int0: integer): $ByteBuffer
public "mallocCLong"(int0: integer): $CLongBuffer
public "mallocDouble"(int0: integer): $DoubleBuffer
public "mallocFloat"(int0: integer): $FloatBuffer
public "mallocInt"(int0: integer): $IntBuffer
public "mallocLong"(int0: integer): $LongBuffer
public "mallocPointer"(int0: integer): $PointerBuffer
public "mallocShort"(int0: integer): $ShortBuffer
public "nASCII"(charSequence0: charseq, boolean1: boolean): integer
public "nASCIISafe"(charSequence0: charseq, boolean1: boolean): integer
public "nUTF16"(charSequence0: charseq, boolean1: boolean): integer
public "nUTF16Safe"(charSequence0: charseq, boolean1: boolean): integer
public "nUTF8"(charSequence0: charseq, boolean1: boolean): integer
public "nUTF8Safe"(charSequence0: charseq, boolean1: boolean): integer
public "nbyte"(byte0: byte): long
public "ncalloc"(int0: integer, int1: integer, int2: integer): long
public "nclong"(long0: long): long
public static "ncreate"(long0: long, int1: integer): $MemoryStack
public "ndouble"(double0: double): long
public "nfloat"(float0: float): long
public "nint"(int0: integer): long
public "nlong"(long0: long): long
public "nmalloc"(int0: integer): long
public "nmalloc"(int0: integer, int1: integer): long
public "npointer"(pointer0: $Pointer$$Type): long
public "npointer"(buffer0: $Buffer$$Type): long
public "npointer"(long0: long): long
public "nshort"(short0: short): long
public static "nstackCalloc"(int0: integer, int1: integer, int2: integer): long
public static "nstackMalloc"(int0: integer, int1: integer): long
public static "nstackMalloc"(int0: integer): long
public "pointers"(buffer0: $Buffer$$Type, buffer1: $Buffer$$Type): $PointerBuffer
public "pointers"(buffer0: $Buffer$$Type): $PointerBuffer
public "pointers"(...pointer0s: $Pointer$$Type[]): $PointerBuffer
public "pointers"(long0: long, long1: long, long2: long, long3: long): $PointerBuffer
public "pointers"(...buffer0s: $Buffer$$Type[]): $PointerBuffer
public "pointers"(buffer0: $Buffer$$Type, buffer1: $Buffer$$Type, buffer2: $Buffer$$Type, buffer3: $Buffer$$Type): $PointerBuffer
public "pointers"(buffer0: $Buffer$$Type, buffer1: $Buffer$$Type, buffer2: $Buffer$$Type): $PointerBuffer
public "pointers"(...long0s: long[]): $PointerBuffer
public "pointers"(long0: long): $PointerBuffer
public "pointers"(long0: long, long1: long): $PointerBuffer
public "pointers"(long0: long, long1: long, long2: long): $PointerBuffer
public "pointers"(pointer0: $Pointer$$Type, pointer1: $Pointer$$Type, pointer2: $Pointer$$Type, pointer3: $Pointer$$Type): $PointerBuffer
public "pointers"(pointer0: $Pointer$$Type, pointer1: $Pointer$$Type, pointer2: $Pointer$$Type): $PointerBuffer
public "pointers"(pointer0: $Pointer$$Type, pointer1: $Pointer$$Type): $PointerBuffer
public "pointers"(pointer0: $Pointer$$Type): $PointerBuffer
public "pop"(): $MemoryStack
public "push"(): $MemoryStack
public "setPointer"(int0: integer): void
public "shorts"(short0: short, short1: short, short2: short, short3: short): $ShortBuffer
public "shorts"(...short0s: short[]): $ShortBuffer
public "shorts"(short0: short, short1: short): $ShortBuffer
public "shorts"(short0: short, short1: short, short2: short): $ShortBuffer
public "shorts"(short0: short): $ShortBuffer
public static "stackASCII"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public static "stackASCII"(charSequence0: charseq): $ByteBuffer
public static "stackASCIISafe"(charSequence0: charseq): $ByteBuffer
public static "stackASCIISafe"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public static "stackBytes"(byte0: byte, byte1: byte, byte2: byte): $ByteBuffer
public static "stackBytes"(byte0: byte): $ByteBuffer
public static "stackBytes"(byte0: byte, byte1: byte): $ByteBuffer
public static "stackBytes"(...byte0s: byte[]): $ByteBuffer
public static "stackBytes"(byte0: byte, byte1: byte, byte2: byte, byte3: byte): $ByteBuffer
public static "stackCLongs"(long0: long, long1: long, long2: long): $CLongBuffer
public static "stackCLongs"(long0: long, long1: long, long2: long, long3: long): $CLongBuffer
public static "stackCLongs"(long0: long, long1: long): $CLongBuffer
public static "stackCLongs"(long0: long): $CLongBuffer
public static "stackCLongs"(...long0s: long[]): $CLongBuffer
public static "stackCalloc"(int0: integer): $ByteBuffer
public static "stackCallocCLong"(int0: integer): $CLongBuffer
public static "stackCallocDouble"(int0: integer): $DoubleBuffer
public static "stackCallocFloat"(int0: integer): $FloatBuffer
public static "stackCallocInt"(int0: integer): $IntBuffer
public static "stackCallocLong"(int0: integer): $LongBuffer
public static "stackCallocPointer"(int0: integer): $PointerBuffer
public static "stackCallocShort"(int0: integer): $ShortBuffer
public static "stackDoubles"(double0: double, double1: double): $DoubleBuffer
public static "stackDoubles"(double0: double, double1: double, double2: double): $DoubleBuffer
public static "stackDoubles"(double0: double): $DoubleBuffer
public static "stackDoubles"(double0: double, double1: double, double2: double, double3: double): $DoubleBuffer
public static "stackDoubles"(...double0s: double[]): $DoubleBuffer
public static "stackFloats"(...float0s: float[]): $FloatBuffer
public static "stackFloats"(float0: float, float1: float, float2: float): $FloatBuffer
public static "stackFloats"(float0: float, float1: float): $FloatBuffer
public static "stackFloats"(float0: float): $FloatBuffer
public static "stackFloats"(float0: float, float1: float, float2: float, float3: float): $FloatBuffer
public static "stackGet"(): $MemoryStack
public static "stackInts"(...int0s: integer[]): $IntBuffer
public static "stackInts"(int0: integer, int1: integer): $IntBuffer
public static "stackInts"(int0: integer, int1: integer, int2: integer): $IntBuffer
public static "stackInts"(int0: integer): $IntBuffer
public static "stackInts"(int0: integer, int1: integer, int2: integer, int3: integer): $IntBuffer
public static "stackLongs"(...long0s: long[]): $LongBuffer
public static "stackLongs"(long0: long, long1: long, long2: long): $LongBuffer
public static "stackLongs"(long0: long, long1: long): $LongBuffer
public static "stackLongs"(long0: long): $LongBuffer
public static "stackLongs"(long0: long, long1: long, long2: long, long3: long): $LongBuffer
public static "stackMalloc"(int0: integer): $ByteBuffer
public static "stackMallocCLong"(int0: integer): $CLongBuffer
public static "stackMallocDouble"(int0: integer): $DoubleBuffer
public static "stackMallocFloat"(int0: integer): $FloatBuffer
public static "stackMallocInt"(int0: integer): $IntBuffer
public static "stackMallocLong"(int0: integer): $LongBuffer
public static "stackMallocPointer"(int0: integer): $PointerBuffer
public static "stackMallocShort"(int0: integer): $ShortBuffer
public static "stackPointers"(pointer0: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(long0: long): $PointerBuffer
public static "stackPointers"(pointer0: $Pointer$$Type, pointer1: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(long0: long, long1: long, long2: long, long3: long): $PointerBuffer
public static "stackPointers"(...long0s: long[]): $PointerBuffer
public static "stackPointers"(long0: long, long1: long, long2: long): $PointerBuffer
public static "stackPointers"(long0: long, long1: long): $PointerBuffer
public static "stackPointers"(pointer0: $Pointer$$Type, pointer1: $Pointer$$Type, pointer2: $Pointer$$Type, pointer3: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(pointer0: $Pointer$$Type, pointer1: $Pointer$$Type, pointer2: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(...pointer0s: $Pointer$$Type[]): $PointerBuffer
public static "stackPop"(): $MemoryStack
public static "stackPush"(): $MemoryStack
public static "stackShorts"(...short0s: short[]): $ShortBuffer
public static "stackShorts"(short0: short, short1: short, short2: short, short3: short): $ShortBuffer
public static "stackShorts"(short0: short, short1: short): $ShortBuffer
public static "stackShorts"(short0: short): $ShortBuffer
public static "stackShorts"(short0: short, short1: short, short2: short): $ShortBuffer
public static "stackUTF16"(charSequence0: charseq): $ByteBuffer
public static "stackUTF16"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public static "stackUTF16Safe"(charSequence0: charseq): $ByteBuffer
public static "stackUTF16Safe"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public static "stackUTF8"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public static "stackUTF8"(charSequence0: charseq): $ByteBuffer
public static "stackUTF8Safe"(charSequence0: charseq, boolean1: boolean): $ByteBuffer
public static "stackUTF8Safe"(charSequence0: charseq): $ByteBuffer
get "address"(): long
get "frameIndex"(): integer
get "pointer"(): integer
get "pointerAddress"(): long
get "size"(): integer
set "pointer"(value: integer)
}
}

declare module "org.lwjgl.system.Struct$StructValidation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Struct$StructValidation {
"validate"(long0: long): void
}

export namespace $Struct$StructValidation {
const probejs$$marker: never
}
export abstract class $Struct$StructValidation$$Static implements $Struct$StructValidation {
}
}

