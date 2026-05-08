declare module "io.netty.channel.Channel$Unsafe" {
import { $ChannelOutboundBuffer } from "io.netty.channel.ChannelOutboundBuffer"
import { $RecvByteBufAllocator$Handle } from "io.netty.channel.RecvByteBufAllocator$Handle"
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $ChannelPromise, $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $EventLoop$$Type } from "io.netty.channel.EventLoop"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$Unsafe {
"beginRead"(): void
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): void
"close"(channelPromise0: $ChannelPromise$$Type): void
"closeForcibly"(): void
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): void
"deregister"(channelPromise0: $ChannelPromise$$Type): void
"disconnect"(channelPromise0: $ChannelPromise$$Type): void
"flush"(): void
"localAddress"(): $SocketAddress
"outboundBuffer"(): $ChannelOutboundBuffer
"recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
"register"(eventLoop0: $EventLoop$$Type, channelPromise1: $ChannelPromise$$Type): void
"remoteAddress"(): $SocketAddress
"voidPromise"(): $ChannelPromise
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): void
}

export namespace $Channel$Unsafe {
const probejs$$marker: never
}
export abstract class $Channel$Unsafe$$Static implements $Channel$Unsafe {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Channel$Unsafe$$Type = ($Channel$Unsafe);
}

declare module "io.netty.channel.ChannelPipeline" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelProgressivePromise } from "io.netty.channel.ChannelProgressivePromise"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $SocketAddress$$Type } from "java.net.SocketAddress"
import { $Iterator } from "java.util.Iterator"
import { $EventExecutorGroup$$Type } from "io.netty.util.concurrent.EventExecutorGroup"
import { $ChannelInboundInvoker } from "io.netty.channel.ChannelInboundInvoker"
import { $Iterable } from "java.lang.Iterable"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"
import { $Channel } from "io.netty.channel.Channel"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ChannelHandlerContext } from "io.netty.channel.ChannelHandlerContext"
import { $List } from "java.util.List"
import { $ChannelPromise, $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $Map } from "java.util.Map"
import { $ChannelOutboundInvoker } from "io.netty.channel.ChannelOutboundInvoker"
import { $ChannelHandler, $ChannelHandler$$Type } from "io.netty.channel.ChannelHandler"
import { $Class$$Type } from "java.lang.Class"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPipeline extends $ChannelInboundInvoker, $ChannelOutboundInvoker, $Iterable<$Map$Entry<string, $ChannelHandler>> {
"addAfter"(string0: string, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addAfter"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, string2: string, channelHandler3: $ChannelHandler$$Type): $ChannelPipeline
"addBefore"(string0: string, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addBefore"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, string2: string, channelHandler3: $ChannelHandler$$Type): $ChannelPipeline
"addFirst"(string0: string, channelHandler1: $ChannelHandler$$Type): $ChannelPipeline
"addFirst"(eventExecutorGroup0: $EventExecutorGroup$$Type, ...channelHandler1s: $ChannelHandler$$Type[]): $ChannelPipeline
"addFirst"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addFirst"(...channelHandler0s: $ChannelHandler$$Type[]): $ChannelPipeline
"addLast"(eventExecutorGroup0: $EventExecutorGroup$$Type, ...channelHandler1s: $ChannelHandler$$Type[]): $ChannelPipeline
"addLast"(...channelHandler0s: $ChannelHandler$$Type[]): $ChannelPipeline
"addLast"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addLast"(string0: string, channelHandler1: $ChannelHandler$$Type): $ChannelPipeline
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"channel"(): $Channel
"close"(): $ChannelFuture
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"context"(channelHandler0: $ChannelHandler$$Type): $ChannelHandlerContext
"context"(string0: string): $ChannelHandlerContext
"context"(class0: $Class$$Type<$ChannelHandler$$Type>): $ChannelHandlerContext
"deregister"(): $ChannelFuture
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"fireChannelActive"(): $ChannelPipeline
"fireChannelInactive"(): $ChannelPipeline
"fireChannelRead"(object0: any): $ChannelPipeline
"fireChannelReadComplete"(): $ChannelPipeline
"fireChannelRegistered"(): $ChannelPipeline
"fireChannelUnregistered"(): $ChannelPipeline
"fireChannelWritabilityChanged"(): $ChannelPipeline
"fireExceptionCaught"(throwable0: $Throwable$$Type): $ChannelPipeline
"fireUserEventTriggered"(object0: any): $ChannelPipeline
"first"(): $ChannelHandler
"firstContext"(): $ChannelHandlerContext
"flush"(): $ChannelPipeline
"forEach"(consumer0: $Consumer$$Type<$Map$Entry$$Type<string, $ChannelHandler$$Type>>): void
"get"(string0: string): $ChannelHandler
"get"<T extends $ChannelHandler>(class0: $Class$$Type<T>): T
"iterator"(): $Iterator<$Map$Entry<string, $ChannelHandler>>
"last"(): $ChannelHandler
"lastContext"(): $ChannelHandlerContext
"names"(): $List<string>
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"read"(): $ChannelOutboundInvoker
"remove"(channelHandler0: $ChannelHandler$$Type): $ChannelPipeline
"remove"<T extends $ChannelHandler>(class0: $Class$$Type<T>): T
"remove"(string0: string): $ChannelHandler
"removeFirst"(): $ChannelHandler
"removeLast"(): $ChannelHandler
"replace"<T extends $ChannelHandler>(class0: $Class$$Type<T>, string1: string, channelHandler2: $ChannelHandler$$Type): T
"replace"(string0: string, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelHandler
"replace"(channelHandler0: $ChannelHandler$$Type, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"spliterator"(): $Spliterator<$Map$Entry<string, $ChannelHandler>>
"toMap"(): $Map<string, $ChannelHandler>
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
[Symbol.iterator](): IterableIterator<$Map$Entry<string, $ChannelHandler>>;
}

export namespace $ChannelPipeline {
const probejs$$marker: never
}
export abstract class $ChannelPipeline$$Static implements $ChannelPipeline {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelPipeline$$Type = ($ChannelPipeline);
}

declare module "io.netty.buffer.ByteBuf" {
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $ScatteringByteChannel$$Type } from "java.nio.channels.ScatteringByteChannel"
import { $ByteBufConvertible } from "io.netty.buffer.ByteBufConvertible"
import { $ByteBufAllocator } from "io.netty.buffer.ByteBufAllocator"
import { $ByteProcessor$$Type } from "io.netty.util.ByteProcessor"
import { $ReferenceCounted } from "io.netty.util.ReferenceCounted"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $ByteOrder, $ByteOrder$$Type } from "java.nio.ByteOrder"
import { $Charset$$Type } from "java.nio.charset.Charset"
import { $Comparable } from "java.lang.Comparable"
import { $FileChannel$$Type } from "java.nio.channels.FileChannel"
import { $GatheringByteChannel$$Type } from "java.nio.channels.GatheringByteChannel"
import { $InputStream$$Type } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuf implements $ReferenceCounted, $Comparable<$ByteBuf>, $ByteBufConvertible {
constructor()

public "alloc"(): $ByteBufAllocator
public "array"(): byte[]
public "arrayOffset"(): integer
public "asByteBuf"(): $ByteBuf
public "asReadOnly"(): $ByteBuf
public "bytesBefore"(int0: integer, byte1: byte): integer
public "bytesBefore"(int0: integer, int1: integer, byte2: byte): integer
public "bytesBefore"(byte0: byte): integer
public "capacity"(int0: integer): $ByteBuf
public "capacity"(): integer
public "clear"(): $ByteBuf
public "compareTo"(byteBuf0: $ByteBuf$$Type): integer
public "copy"(int0: integer, int1: integer): $ByteBuf
public "copy"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "duplicate"(): $ByteBuf
public "ensureWritable"(int0: integer, boolean1: boolean): integer
public "ensureWritable"(int0: integer): $ByteBuf
public "forEachByte"(byteProcessor0: $ByteProcessor$$Type): integer
public "forEachByte"(int0: integer, int1: integer, byteProcessor2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(int0: integer, int1: integer, byteProcessor2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(byteProcessor0: $ByteProcessor$$Type): integer
public "getBoolean"(int0: integer): boolean
public "getByte"(int0: integer): byte
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer, int3: integer): $ByteBuf
public "getBytes"(int0: integer, outputStream1: $OutputStream$$Type, int2: integer): $ByteBuf
public "getBytes"(int0: integer, gatheringByteChannel1: $GatheringByteChannel$$Type, int2: integer): integer
public "getBytes"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer): $ByteBuf
public "getBytes"(int0: integer, fileChannel1: $FileChannel$$Type, long2: long, int3: integer): integer
public "getBytes"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuf
public "getBytes"(int0: integer, byte1s: byte[]): $ByteBuf
public "getChar"(int0: integer): character
public "getCharSequence"(int0: integer, int1: integer, charset2: $Charset$$Type): charseq
public "getDouble"(int0: integer): double
public "getDoubleLE"(int0: integer): double
public "getFloat"(int0: integer): float
public "getFloatLE"(int0: integer): float
public "getInt"(int0: integer): integer
public "getIntLE"(int0: integer): integer
public "getLong"(int0: integer): long
public "getLongLE"(int0: integer): long
public "getMedium"(int0: integer): integer
public "getMediumLE"(int0: integer): integer
public "getShort"(int0: integer): short
public "getShortLE"(int0: integer): short
public "getUnsignedByte"(int0: integer): short
public "getUnsignedInt"(int0: integer): long
public "getUnsignedIntLE"(int0: integer): long
public "getUnsignedMedium"(int0: integer): integer
public "getUnsignedMediumLE"(int0: integer): integer
public "getUnsignedShort"(int0: integer): integer
public "getUnsignedShortLE"(int0: integer): integer
public "hasArray"(): boolean
public "hasMemoryAddress"(): boolean
public "indexOf"(int0: integer, int1: integer, byte2: byte): integer
public "internalNioBuffer"(int0: integer, int1: integer): $ByteBuffer
public "isContiguous"(): boolean
public "isDirect"(): boolean
public "isReadOnly"(): boolean
public "isReadable"(int0: integer): boolean
public "isReadable"(): boolean
public "isWritable"(): boolean
public "isWritable"(int0: integer): boolean
public "markReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "maxCapacity"(): integer
public "maxFastWritableBytes"(): integer
public "maxWritableBytes"(): integer
public "memoryAddress"(): long
public "nioBuffer"(int0: integer, int1: integer): $ByteBuffer
public "nioBuffer"(): $ByteBuffer
public "nioBufferCount"(): integer
public "nioBuffers"(): $ByteBuffer[]
public "nioBuffers"(int0: integer, int1: integer): $ByteBuffer[]
/** @deprecated */
public "order"(): $ByteOrder
/** @deprecated */
public "order"(byteOrder0: $ByteOrder$$Type): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readBytes"(outputStream0: $OutputStream$$Type, int1: integer): $ByteBuf
public "readBytes"(byteBuffer0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(byte0s: byte[], int1: integer, int2: integer): $ByteBuf
public "readBytes"(gatheringByteChannel0: $GatheringByteChannel$$Type, int1: integer): integer
public "readBytes"(fileChannel0: $FileChannel$$Type, long1: long, int2: integer): integer
public "readBytes"(int0: integer): $ByteBuf
public "readBytes"(byteBuf0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(byteBuf0: $ByteBuf$$Type, int1: integer): $ByteBuf
public "readBytes"(byteBuf0: $ByteBuf$$Type, int1: integer, int2: integer): $ByteBuf
public "readBytes"(byte0s: byte[]): $ByteBuf
public "readChar"(): character
public "readCharSequence"(int0: integer, charset1: $Charset$$Type): charseq
public "readDouble"(): double
public "readDoubleLE"(): double
public "readFloat"(): float
public "readFloatLE"(): float
public "readInt"(): integer
public "readIntLE"(): integer
public "readLong"(): long
public "readLongLE"(): long
public "readMedium"(): integer
public "readMediumLE"(): integer
public "readRetainedSlice"(int0: integer): $ByteBuf
public "readShort"(): short
public "readShortLE"(): short
public "readSlice"(int0: integer): $ByteBuf
public "readUnsignedByte"(): short
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readUnsignedMedium"(): integer
public "readUnsignedMediumLE"(): integer
public "readUnsignedShort"(): integer
public "readUnsignedShortLE"(): integer
public "readableBytes"(): integer
public "readerIndex"(int0: integer): $ByteBuf
public "readerIndex"(): integer
public "refCnt"(): integer
public "release"(): boolean
public "release"(int0: integer): boolean
public "resetReaderIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "retain"(): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "retainedSlice"(int0: integer, int1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "setBoolean"(int0: integer, boolean1: boolean): $ByteBuf
public "setByte"(int0: integer, int1: integer): $ByteBuf
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer): $ByteBuf
public "setBytes"(int0: integer, scatteringByteChannel1: $ScatteringByteChannel$$Type, int2: integer): integer
public "setBytes"(int0: integer, fileChannel1: $FileChannel$$Type, long2: long, int3: integer): integer
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(int0: integer, inputStream1: $InputStream$$Type, int2: integer): integer
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer, int3: integer): $ByteBuf
public "setBytes"(int0: integer, byte1s: byte[]): $ByteBuf
public "setBytes"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuf
public "setBytes"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuf
public "setChar"(int0: integer, int1: integer): $ByteBuf
public "setCharSequence"(int0: integer, charSequence1: charseq, charset2: $Charset$$Type): integer
public "setDouble"(int0: integer, double1: double): $ByteBuf
public "setDoubleLE"(int0: integer, double1: double): $ByteBuf
public "setFloat"(int0: integer, float1: float): $ByteBuf
public "setFloatLE"(int0: integer, float1: float): $ByteBuf
public "setIndex"(int0: integer, int1: integer): $ByteBuf
public "setInt"(int0: integer, int1: integer): $ByteBuf
public "setIntLE"(int0: integer, int1: integer): $ByteBuf
public "setLong"(int0: integer, long1: long): $ByteBuf
public "setLongLE"(int0: integer, long1: long): $ByteBuf
public "setMedium"(int0: integer, int1: integer): $ByteBuf
public "setMediumLE"(int0: integer, int1: integer): $ByteBuf
public "setShort"(int0: integer, int1: integer): $ByteBuf
public "setShortLE"(int0: integer, int1: integer): $ByteBuf
public "setZero"(int0: integer, int1: integer): $ByteBuf
public "skipBytes"(int0: integer): $ByteBuf
public "slice"(int0: integer, int1: integer): $ByteBuf
public "slice"(): $ByteBuf
public "toString"(int0: integer, int1: integer, charset2: $Charset$$Type): string
public "toString"(charset0: $Charset$$Type): string
public "touch"(): $ByteBuf
public "touch"(object0: any): $ByteBuf
public "unwrap"(): $ByteBuf
public "writableBytes"(): integer
public "writeBoolean"(boolean0: boolean): $ByteBuf
public "writeByte"(int0: integer): $ByteBuf
public "writeBytes"(inputStream0: $InputStream$$Type, int1: integer): integer
public "writeBytes"(byte0s: byte[]): $ByteBuf
public "writeBytes"(byteBuf0: $ByteBuf$$Type, int1: integer, int2: integer): $ByteBuf
public "writeBytes"(byteBuffer0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(byteBuf0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(byteBuf0: $ByteBuf$$Type, int1: integer): $ByteBuf
public "writeBytes"(fileChannel0: $FileChannel$$Type, long1: long, int2: integer): integer
public "writeBytes"(byte0s: byte[], int1: integer, int2: integer): $ByteBuf
public "writeBytes"(scatteringByteChannel0: $ScatteringByteChannel$$Type, int1: integer): integer
public "writeChar"(int0: integer): $ByteBuf
public "writeCharSequence"(charSequence0: charseq, charset1: $Charset$$Type): integer
public "writeDouble"(double0: double): $ByteBuf
public "writeDoubleLE"(double0: double): $ByteBuf
public "writeFloat"(float0: float): $ByteBuf
public "writeFloatLE"(float0: float): $ByteBuf
public "writeInt"(int0: integer): $ByteBuf
public "writeIntLE"(int0: integer): $ByteBuf
public "writeLong"(long0: long): $ByteBuf
public "writeLongLE"(long0: long): $ByteBuf
public "writeMedium"(int0: integer): $ByteBuf
public "writeMediumLE"(int0: integer): $ByteBuf
public "writeShort"(int0: integer): $ByteBuf
public "writeShortLE"(int0: integer): $ByteBuf
public "writeZero"(int0: integer): $ByteBuf
public "writerIndex"(): integer
public "writerIndex"(int0: integer): $ByteBuf
get "contiguous"(): boolean
get "direct"(): boolean
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ByteBuf$$Type = ($ByteBuf);
}

declare module "io.netty.channel.MessageSizeEstimator" {
import { $MessageSizeEstimator$Handle, $MessageSizeEstimator$Handle$$Type } from "io.netty.channel.MessageSizeEstimator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator {
"newHandle"(): $MessageSizeEstimator$Handle
}

export namespace $MessageSizeEstimator {
const probejs$$marker: never
}
export abstract class $MessageSizeEstimator$$Static implements $MessageSizeEstimator {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MessageSizeEstimator$$Type = ($MessageSizeEstimator | (() => $MessageSizeEstimator$Handle$$Type));
}

declare module "io.netty.util.concurrent.GenericFutureListener" {
import { $EventListener } from "java.util.EventListener"
import { $Future, $Future$$Type } from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericFutureListener<F extends $Future<any> = $Future<any>> extends $EventListener {
"operationComplete"(f0: F): void
}

export namespace $GenericFutureListener {
const probejs$$marker: never
}
export abstract class $GenericFutureListener$$Static<F extends $Future<any> = $Future<any>> implements $GenericFutureListener<F> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GenericFutureListener$$Type<F extends $Future<any> = $Future<any>> = ($GenericFutureListener<F> | ((arg0: F) => void));
}

declare module "io.netty.util.AttributeKey" {
import { $Class$$Type } from "java.lang.Class"
import { $AbstractConstant } from "io.netty.util.AbstractConstant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AttributeKey<T = any> extends $AbstractConstant<$AttributeKey<T>> {
public static "exists"(string0: string): boolean
public static "newInstance"<T>(string0: string): $AttributeKey<T>
public static "valueOf"<T>(string0: string): $AttributeKey<T>
public static "valueOf"<T>(class0: $Class$$Type<any>, string1: string): $AttributeKey<T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeKey$$Type<T = any> = ($AttributeKey<T>);
}

declare module "io.netty.util.concurrent.AbstractEventExecutorGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Iterator } from "java.util.Iterator"
import { $Collection$$Type } from "java.util.Collection"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $EventExecutorGroup } from "io.netty.util.concurrent.EventExecutorGroup"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $Future as $Future$0 } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutorGroup implements $EventExecutorGroup {
constructor()

public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "iterator"(): $Iterator<$EventExecutor>
public "next"(): $EventExecutor
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
public "shutdown"(): void
public "shutdownGracefully"(): $Future$0<any>
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future$0<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "terminationFuture"(): $Future$0<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractEventExecutorGroup$$Type = ($AbstractEventExecutorGroup);
}

declare module "io.netty.buffer.AbstractByteBuf" {
import { $ByteBuf } from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractByteBuf extends $ByteBuf {
public "refCnt"(): integer
public "release"(): boolean
public "release"(int0: integer): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractByteBuf$$Type = ($AbstractByteBuf);
}

declare module "io.netty.util.concurrent.EventExecutorChooserFactory" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $EventExecutorChooserFactory$EventExecutorChooser, $EventExecutorChooserFactory$EventExecutorChooser$$Type } from "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory {
"newChooser"(eventExecutor0s: $EventExecutor$$Type[]): $EventExecutorChooserFactory$EventExecutorChooser
}

export namespace $EventExecutorChooserFactory {
const probejs$$marker: never
}
export abstract class $EventExecutorChooserFactory$$Static implements $EventExecutorChooserFactory {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventExecutorChooserFactory$$Type = ($EventExecutorChooserFactory | ((arg0: $EventExecutor[]) => $EventExecutorChooserFactory$EventExecutorChooser$$Type));
}

declare module "io.netty.util.AttributeMap" {
import { $AttributeKey$$Type } from "io.netty.util.AttributeKey"
import { $Attribute } from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeMap {
"attr"<T>(attributeKey0: $AttributeKey$$Type<T>): $Attribute<T>
"hasAttr"<T>(attributeKey0: $AttributeKey$$Type<T>): boolean
}

export namespace $AttributeMap {
const probejs$$marker: never
}
export abstract class $AttributeMap$$Static implements $AttributeMap {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeMap$$Type = ($AttributeMap);
}

declare module "io.netty.util.concurrent.ScheduledFuture" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable } from "java.lang.Throwable"
import { $ScheduledFuture as $ScheduledFuture$0 } from "java.util.concurrent.ScheduledFuture"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future, $Future$$Type } from "io.netty.util.concurrent.Future"
import { $Delayed$$Type } from "java.util.concurrent.Delayed"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScheduledFuture<V = any> extends $Future<V>, $ScheduledFuture$0<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(): $Future<V>
"await"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $Future<V>
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"compareTo"(delayed0: $Delayed$$Type): integer
"get"(): V
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"getDelay"(timeUnit0: $TimeUnit$$Type): long
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"sync"(): $Future<V>
"syncUninterruptibly"(): $Future<V>
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export abstract class $ScheduledFuture$$Static<V = any> implements $ScheduledFuture<V> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScheduledFuture$$Type<V = any> = ($ScheduledFuture<V>);
}

declare module "io.netty.channel.ChannelOption" {
import { $InetAddress } from "java.net.InetAddress"
import { $MessageSizeEstimator } from "io.netty.channel.MessageSizeEstimator"
import { $WriteBufferWaterMark } from "io.netty.channel.WriteBufferWaterMark"
import { $ByteBufAllocator } from "io.netty.buffer.ByteBufAllocator"
import { $NetworkInterface } from "java.net.NetworkInterface"
import { $Class$$Type } from "java.lang.Class"
import { $RecvByteBufAllocator } from "io.netty.channel.RecvByteBufAllocator"
import { $AbstractConstant } from "io.netty.util.AbstractConstant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOption<T = any> extends $AbstractConstant<$ChannelOption<T>> {
static readonly "ALLOCATOR": $ChannelOption<$ByteBufAllocator>
static readonly "ALLOW_HALF_CLOSURE": $ChannelOption<boolean>
static readonly "AUTO_CLOSE": $ChannelOption<boolean>
static readonly "AUTO_READ": $ChannelOption<boolean>
static readonly "CONNECT_TIMEOUT_MILLIS": $ChannelOption<integer>
/** @deprecated */
static readonly "DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION": $ChannelOption<boolean>
static readonly "IP_MULTICAST_ADDR": $ChannelOption<$InetAddress>
static readonly "IP_MULTICAST_IF": $ChannelOption<$NetworkInterface>
static readonly "IP_MULTICAST_LOOP_DISABLED": $ChannelOption<boolean>
static readonly "IP_MULTICAST_TTL": $ChannelOption<integer>
static readonly "IP_TOS": $ChannelOption<integer>
/** @deprecated */
static readonly "MAX_MESSAGES_PER_READ": $ChannelOption<integer>
static readonly "MAX_MESSAGES_PER_WRITE": $ChannelOption<integer>
static readonly "MESSAGE_SIZE_ESTIMATOR": $ChannelOption<$MessageSizeEstimator>
static readonly "RCVBUF_ALLOCATOR": $ChannelOption<$RecvByteBufAllocator>
static readonly "SINGLE_EVENTEXECUTOR_PER_GROUP": $ChannelOption<boolean>
static readonly "SO_BACKLOG": $ChannelOption<integer>
static readonly "SO_BROADCAST": $ChannelOption<boolean>
static readonly "SO_KEEPALIVE": $ChannelOption<boolean>
static readonly "SO_LINGER": $ChannelOption<integer>
static readonly "SO_RCVBUF": $ChannelOption<integer>
static readonly "SO_REUSEADDR": $ChannelOption<boolean>
static readonly "SO_SNDBUF": $ChannelOption<integer>
static readonly "SO_TIMEOUT": $ChannelOption<integer>
static readonly "TCP_FASTOPEN": $ChannelOption<integer>
static readonly "TCP_FASTOPEN_CONNECT": $ChannelOption<boolean>
static readonly "TCP_NODELAY": $ChannelOption<boolean>
/** @deprecated */
static readonly "WRITE_BUFFER_HIGH_WATER_MARK": $ChannelOption<integer>
/** @deprecated */
static readonly "WRITE_BUFFER_LOW_WATER_MARK": $ChannelOption<integer>
static readonly "WRITE_BUFFER_WATER_MARK": $ChannelOption<$WriteBufferWaterMark>
static readonly "WRITE_SPIN_COUNT": $ChannelOption<integer>

public static "exists"(string0: string): boolean
/** @deprecated */
public static "newInstance"<T>(string0: string): $ChannelOption<T>
public "validate"(t0: T): void
public static "valueOf"<T>(string0: string): $ChannelOption<T>
public static "valueOf"<T>(class0: $Class$$Type<any>, string1: string): $ChannelOption<T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelOption$$Type<T = any> = ($ChannelOption<T>);
}

declare module "io.netty.channel.ChannelId" {
import { $Comparable } from "java.lang.Comparable"
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelId extends $Serializable, $Comparable<$ChannelId> {
"asLongText"(): string
"asShortText"(): string
"compareTo"(channelId0: $ChannelId$$Type): integer
}

export namespace $ChannelId {
const probejs$$marker: never
}
export abstract class $ChannelId$$Static implements $ChannelId {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelId$$Type = ($ChannelId);
}

declare module "io.netty.util.concurrent.Promise" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future, $Future$$Type } from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Promise<V = any> extends $Future<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Promise<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Promise<V>
"await"(): $Promise<V>
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(long0: long): boolean
"awaitUninterruptibly"(): $Promise<V>
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(): V
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Promise<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Promise<V>
"setFailure"(throwable0: $Throwable$$Type): $Promise<V>
"setSuccess"(v0: V): $Promise<V>
"setUncancellable"(): boolean
"sync"(): $Promise<V>
"syncUninterruptibly"(): $Promise<V>
"tryFailure"(throwable0: $Throwable$$Type): boolean
"trySuccess"(v0: V): boolean
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: V)
}

export namespace $Promise {
const probejs$$marker: never
}
export abstract class $Promise$$Static<V = any> implements $Promise<V> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Promise$$Type<V = any> = ($Promise<V>);
}

declare module "io.netty.buffer.CompositeByteBuf" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $List } from "java.util.List"
import { $ByteBuf, $ByteBuf$$Type } from "io.netty.buffer.ByteBuf"
import { $Iterator } from "java.util.Iterator"
import { $ByteBufAllocator$$Type } from "io.netty.buffer.ByteBufAllocator"
import { $AbstractReferenceCountedByteBuf } from "io.netty.buffer.AbstractReferenceCountedByteBuf"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable, $Iterable$$Type } from "java.lang.Iterable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CompositeByteBuf extends $AbstractReferenceCountedByteBuf implements $Iterable<$ByteBuf> {
constructor(byteBufAllocator0: $ByteBufAllocator$$Type, boolean1: boolean, int2: integer, iterable3: $Iterable$$Type<$ByteBuf$$Type>)
constructor(byteBufAllocator0: $ByteBufAllocator$$Type, boolean1: boolean, int2: integer, ...byteBuf3s: $ByteBuf$$Type[])
constructor(byteBufAllocator0: $ByteBufAllocator$$Type, boolean1: boolean, int2: integer)

public "addComponent"(byteBuf0: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(boolean0: boolean, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(boolean0: boolean, int1: integer, byteBuf2: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(int0: integer, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponents"(int0: integer, ...byteBuf1s: $ByteBuf$$Type[]): $CompositeByteBuf
public "addComponents"(iterable0: $Iterable$$Type<$ByteBuf$$Type>): $CompositeByteBuf
public "addComponents"(int0: integer, iterable1: $Iterable$$Type<$ByteBuf$$Type>): $CompositeByteBuf
public "addComponents"(...byteBuf0s: $ByteBuf$$Type[]): $CompositeByteBuf
public "addComponents"(boolean0: boolean, iterable1: $Iterable$$Type<$ByteBuf$$Type>): $CompositeByteBuf
public "addComponents"(boolean0: boolean, ...byteBuf1s: $ByteBuf$$Type[]): $CompositeByteBuf
public "addFlattenedComponents"(boolean0: boolean, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "capacity"(int0: integer): $CompositeByteBuf
public "component"(int0: integer): $ByteBuf
public "componentAtOffset"(int0: integer): $ByteBuf
public "consolidate"(): $CompositeByteBuf
public "consolidate"(int0: integer, int1: integer): $CompositeByteBuf
public "decompose"(int0: integer, int1: integer): $List<$ByteBuf>
public "discardReadComponents"(): $CompositeByteBuf
public "discardSomeReadBytes"(): $CompositeByteBuf
public "ensureWritable"(int0: integer): $CompositeByteBuf
public "forEach"(consumer0: $Consumer$$Type<$ByteBuf$$Type>): void
public "getBytes"(int0: integer, outputStream1: $OutputStream$$Type, int2: integer): $CompositeByteBuf
public "getBytes"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $CompositeByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer, int3: integer): $CompositeByteBuf
public "getBytes"(int0: integer, byte1s: byte[]): $CompositeByteBuf
public "internalComponent"(int0: integer): $ByteBuf
public "internalComponentAtOffset"(int0: integer): $ByteBuf
public "iterator"(): $Iterator<$ByteBuf>
public "maxNumComponents"(): integer
public "numComponents"(): integer
public "readerIndex"(int0: integer): $CompositeByteBuf
public "removeComponent"(int0: integer): $CompositeByteBuf
public "removeComponents"(int0: integer, int1: integer): $CompositeByteBuf
public "resetReaderIndex"(): $CompositeByteBuf
public "setBoolean"(int0: integer, boolean1: boolean): $CompositeByteBuf
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer): $CompositeByteBuf
public "setBytes"(int0: integer, byte1s: byte[]): $CompositeByteBuf
public "setChar"(int0: integer, int1: integer): $CompositeByteBuf
public "setMedium"(int0: integer, int1: integer): $CompositeByteBuf
public "spliterator"(): $Spliterator<$ByteBuf>
public "toByteIndex"(int0: integer): integer
public "toComponentIndex"(int0: integer): integer
public "touch"(): $CompositeByteBuf
public "touch"(object0: any): $CompositeByteBuf
public "writeChar"(int0: integer): $CompositeByteBuf
public "writeInt"(int0: integer): $CompositeByteBuf
public "writeLong"(long0: long): $CompositeByteBuf
public "writeMedium"(int0: integer): $CompositeByteBuf
public "writeZero"(int0: integer): $CompositeByteBuf
public "writerIndex"(int0: integer): $CompositeByteBuf
[Symbol.iterator](): IterableIterator<$ByteBuf>;
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CompositeByteBuf$$Type = ($CompositeByteBuf);
}

declare module "io.netty.channel.ChannelProgressiveFuture" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable } from "java.lang.Throwable"
import { $Channel } from "io.netty.channel.Channel"
import { $ProgressiveFuture } from "io.netty.util.concurrent.ProgressiveFuture"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future$$Type } from "io.netty.util.concurrent.Future"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressiveFuture extends $ChannelFuture, $ProgressiveFuture<void> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressiveFuture
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressiveFuture
"await"(): $ChannelProgressiveFuture
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(long0: long): boolean
"awaitUninterruptibly"(): $ChannelProgressiveFuture
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(): void
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressiveFuture
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressiveFuture
"sync"(): $ChannelProgressiveFuture
"syncUninterruptibly"(): $ChannelProgressiveFuture
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
}

export namespace $ChannelProgressiveFuture {
const probejs$$marker: never
}
export abstract class $ChannelProgressiveFuture$$Static implements $ChannelProgressiveFuture {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelProgressiveFuture$$Type = ($ChannelProgressiveFuture);
}

declare module "io.netty.util.concurrent.RejectedExecutionHandler" {
import { $SingleThreadEventExecutor, $SingleThreadEventExecutor$$Type } from "io.netty.util.concurrent.SingleThreadEventExecutor"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RejectedExecutionHandler {
"rejected"(runnable0: $Runnable$$Type, singleThreadEventExecutor1: $SingleThreadEventExecutor$$Type): void
}

export namespace $RejectedExecutionHandler {
const probejs$$marker: never
}
export abstract class $RejectedExecutionHandler$$Static implements $RejectedExecutionHandler {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RejectedExecutionHandler$$Type = ($RejectedExecutionHandler | ((arg0: $Runnable, arg1: $SingleThreadEventExecutor) => void));
}

declare module "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$EventExecutorChooser {
"next"(): $EventExecutor
}

export namespace $EventExecutorChooserFactory$EventExecutorChooser {
const probejs$$marker: never
}
export abstract class $EventExecutorChooserFactory$EventExecutorChooser$$Static implements $EventExecutorChooserFactory$EventExecutorChooser {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventExecutorChooserFactory$EventExecutorChooser$$Type = ($EventExecutorChooserFactory$EventExecutorChooser | (() => $EventExecutor$$Type));
}

declare module "io.netty.channel.ChannelInboundHandlerAdapter" {
import { $ChannelHandlerContext$$Type } from "io.netty.channel.ChannelHandlerContext"
import { $ChannelHandlerAdapter } from "io.netty.channel.ChannelHandlerAdapter"
import { $ChannelInboundHandler } from "io.netty.channel.ChannelInboundHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler {
constructor()

public "channelActive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelInactive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelRead"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
public "channelReadComplete"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelRegistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelUnregistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelWritabilityChanged"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "userEventTriggered"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelInboundHandlerAdapter$$Type = ($ChannelInboundHandlerAdapter);
}

declare module "io.netty.channel.ChannelOutboundBuffer$MessageProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundBuffer$MessageProcessor {
"processMessage"(object0: any): boolean
}

export namespace $ChannelOutboundBuffer$MessageProcessor {
const probejs$$marker: never
}
export abstract class $ChannelOutboundBuffer$MessageProcessor$$Static implements $ChannelOutboundBuffer$MessageProcessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelOutboundBuffer$MessageProcessor$$Type = ($ChannelOutboundBuffer$MessageProcessor | ((arg0: any) => boolean));
}

declare module "io.netty.util.concurrent.SingleThreadEventExecutor" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Promise } from "io.netty.util.concurrent.Promise"
import { $Collection$$Type } from "java.util.Collection"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $EventExecutorGroup } from "io.netty.util.concurrent.EventExecutorGroup"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $AbstractScheduledEventExecutor } from "io.netty.util.concurrent.AbstractScheduledEventExecutor"
import { $Thread$$Type } from "java.lang.Thread"
import { $ProgressivePromise } from "io.netty.util.concurrent.ProgressivePromise"
import { $OrderedEventExecutor } from "io.netty.util.concurrent.OrderedEventExecutor"
import { $Future as $Future$0 } from "io.netty.util.concurrent.Future"
import { $ThreadProperties } from "io.netty.util.concurrent.ThreadProperties"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor {
public "addShutdownHook"(runnable0: $Runnable$$Type): void
public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "inEventLoop"(thread0: $Thread$$Type): boolean
public "inEventLoop"(): boolean
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future$0<V>
public "newProgressivePromise"<V>(): $ProgressivePromise<V>
public "newPromise"<V>(): $Promise<V>
public "newSucceededFuture"<V>(v0: V): $Future$0<V>
public "next"(): $EventExecutor
public "parent"(): $EventExecutorGroup
public "pendingTasks"(): integer
public "removeShutdownHook"(runnable0: $Runnable$$Type): void
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future$0<any>
public "spliterator"(): $Spliterator<$EventExecutor>
public "terminationFuture"(): $Future$0<any>
public "threadProperties"(): $ThreadProperties
get "shutdown"(): boolean
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SingleThreadEventExecutor$$Type = ($SingleThreadEventExecutor);
}

declare module "io.netty.util.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntSupplier {
"get"(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export abstract class $IntSupplier$$Static implements $IntSupplier {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IntSupplier$$Type = ($IntSupplier | (() => integer));
}

declare module "io.netty.buffer.AbstractReferenceCountedByteBuf" {
import { $AbstractByteBuf } from "io.netty.buffer.AbstractByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractReferenceCountedByteBuf extends $AbstractByteBuf {
public "refCnt"(): integer
public "release"(): boolean
public "release"(int0: integer): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractReferenceCountedByteBuf$$Type = ($AbstractReferenceCountedByteBuf);
}

declare module "io.netty.util.ReferenceCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReferenceCounted {
"refCnt"(): integer
"release"(): boolean
"release"(int0: integer): boolean
"retain"(int0: integer): $ReferenceCounted
"retain"(): $ReferenceCounted
"touch"(object0: any): $ReferenceCounted
"touch"(): $ReferenceCounted
}

export namespace $ReferenceCounted {
const probejs$$marker: never
}
export abstract class $ReferenceCounted$$Static implements $ReferenceCounted {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReferenceCounted$$Type = ($ReferenceCounted);
}

declare module "io.netty.channel.ChannelProgressivePromise" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Channel } from "io.netty.channel.Channel"
import { $ChannelProgressiveFuture } from "io.netty.channel.ChannelProgressiveFuture"
import { $ChannelPromise } from "io.netty.channel.ChannelPromise"
import { $ProgressivePromise } from "io.netty.util.concurrent.ProgressivePromise"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future$$Type } from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressivePromise extends $ProgressivePromise<void>, $ChannelProgressiveFuture, $ChannelPromise {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressivePromise
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressivePromise
"await"(): $ChannelProgressivePromise
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(long0: long): boolean
"awaitUninterruptibly"(): $ChannelProgressivePromise
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(): void
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressivePromise
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressivePromise
"setFailure"(throwable0: $Throwable$$Type): $ChannelProgressivePromise
"setProgress"(long0: long, long1: long): $ChannelProgressivePromise
"setSuccess"(): $ChannelProgressivePromise
"setSuccess"(void0: void): $ChannelProgressivePromise
"setSuccess"(void0: void): $ProgressivePromise<void>
"setUncancellable"(): boolean
"sync"(): $ChannelProgressivePromise
"syncUninterruptibly"(): $ChannelProgressivePromise
"tryFailure"(throwable0: $Throwable$$Type): boolean
"tryProgress"(long0: long, long1: long): boolean
"trySuccess"(): boolean
"trySuccess"(void0: void): boolean
"unvoid"(): $ChannelProgressivePromise
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
set "success"(value: void)
}

export namespace $ChannelProgressivePromise {
const probejs$$marker: never
}
export abstract class $ChannelProgressivePromise$$Static implements $ChannelProgressivePromise {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelProgressivePromise$$Type = ($ChannelProgressivePromise);
}

declare module "io.netty.channel.EventLoopGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Iterator } from "java.util.Iterator"
import { $Collection$$Type } from "java.util.Collection"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $EventLoop } from "io.netty.channel.EventLoop"
import { $EventExecutorGroup } from "io.netty.util.concurrent.EventExecutorGroup"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Channel$$Type } from "io.netty.channel.Channel"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $Future as $Future$0 } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopGroup extends $EventExecutorGroup {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"next"(): $EventLoop
/** @deprecated */
"register"(channel0: $Channel$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"register"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"register"(channel0: $Channel$$Type): $ChannelFuture
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future$0<any>
"shutdownGracefully"(): $Future$0<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"(runnable0: $Runnable$$Type): $Future$0<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future$0<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future$0<T>
"terminationFuture"(): $Future$0<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoopGroup {
const probejs$$marker: never
}
export abstract class $EventLoopGroup$$Static implements $EventLoopGroup {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventLoopGroup$$Type = ($EventLoopGroup);
}

declare module "io.netty.channel.RecvByteBufAllocator" {
import { $RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type } from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator {
"newHandle"(): $RecvByteBufAllocator$Handle
}

export namespace $RecvByteBufAllocator {
const probejs$$marker: never
}
export abstract class $RecvByteBufAllocator$$Static implements $RecvByteBufAllocator {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecvByteBufAllocator$$Type = ($RecvByteBufAllocator | (() => $RecvByteBufAllocator$Handle$$Type));
}

declare module "io.netty.channel.epoll.EpollEventLoopGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $EventLoopTaskQueueFactory$$Type } from "io.netty.channel.EventLoopTaskQueueFactory"
import { $MultithreadEventLoopGroup } from "io.netty.channel.MultithreadEventLoopGroup"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $EventExecutorChooserFactory$$Type } from "io.netty.util.concurrent.EventExecutorChooserFactory"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $List } from "java.util.List"
import { $SelectStrategyFactory$$Type } from "io.netty.channel.SelectStrategyFactory"
import { $ThreadFactory$$Type } from "java.util.concurrent.ThreadFactory"
import { $Future } from "io.netty.util.concurrent.Future"
import { $RejectedExecutionHandler$$Type } from "io.netty.util.concurrent.RejectedExecutionHandler"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $EpollEventLoopGroup extends $MultithreadEventLoopGroup {
constructor(int0: integer, executor1: $Executor$$Type, selectStrategyFactory2: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type, rejectedExecutionHandler4: $RejectedExecutionHandler$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type, rejectedExecutionHandler4: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory5: $EventLoopTaskQueueFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type, rejectedExecutionHandler4: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory5: $EventLoopTaskQueueFactory$$Type, eventLoopTaskQueueFactory6: $EventLoopTaskQueueFactory$$Type)
constructor()
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type)
constructor(int0: integer, selectStrategyFactory1: $SelectStrategyFactory$$Type)
constructor(threadFactory0: $ThreadFactory$$Type)
constructor(int0: integer)
/** @deprecated */
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, int2: integer, selectStrategyFactory3: $SelectStrategyFactory$$Type)
/** @deprecated */
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, int2: integer)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, selectStrategyFactory2: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type)

public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "setIoRatio"(int0: integer): void
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
set "ioRatio"(value: integer)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EpollEventLoopGroup$$Type = ($EpollEventLoopGroup);
}

declare module "io.netty.channel.ChannelMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelMetadata {
constructor(boolean0: boolean, int1: integer)
constructor(boolean0: boolean)

public "defaultMaxMessagesPerRead"(): integer
public "hasDisconnect"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelMetadata$$Type = ($ChannelMetadata);
}

declare module "io.netty.channel.ChannelHandlerAdapter" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelHandlerContext$$Type } from "io.netty.channel.ChannelHandlerContext"
import { $ChannelHandler } from "io.netty.channel.ChannelHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelHandlerAdapter implements $ChannelHandler {
constructor()

/** @deprecated */
public "exceptionCaught"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type): void
public "handlerAdded"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "handlerRemoved"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "isSharable"(): boolean
get "sharable"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelHandlerAdapter$$Type = ($ChannelHandlerAdapter);
}

declare module "io.netty.channel.EventLoop" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $EventLoopGroup } from "io.netty.channel.EventLoopGroup"
import { $Iterator } from "java.util.Iterator"
import { $Promise } from "io.netty.util.concurrent.Promise"
import { $Collection$$Type } from "java.util.Collection"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Channel$$Type } from "io.netty.channel.Channel"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $Thread$$Type } from "java.lang.Thread"
import { $ProgressivePromise } from "io.netty.util.concurrent.ProgressivePromise"
import { $OrderedEventExecutor } from "io.netty.util.concurrent.OrderedEventExecutor"
import { $Future as $Future$0 } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoop extends $OrderedEventExecutor, $EventLoopGroup {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"inEventLoop"(): boolean
"inEventLoop"(thread0: $Thread$$Type): boolean
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future$0<V>
"newProgressivePromise"<V>(): $ProgressivePromise<V>
"newPromise"<V>(): $Promise<V>
"newSucceededFuture"<V>(v0: V): $Future$0<V>
"next"(): $EventLoop
"parent"(): $EventLoopGroup
/** @deprecated */
"register"(channel0: $Channel$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"register"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"register"(channel0: $Channel$$Type): $ChannelFuture
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future$0<any>
"shutdownGracefully"(): $Future$0<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"(runnable0: $Runnable$$Type): $Future$0<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future$0<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future$0<T>
"terminationFuture"(): $Future$0<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoop {
const probejs$$marker: never
}
export abstract class $EventLoop$$Static implements $EventLoop {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventLoop$$Type = ($EventLoop);
}

declare module "io.netty.channel.ChannelInboundHandler" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelHandlerContext$$Type } from "io.netty.channel.ChannelHandlerContext"
import { $ChannelHandler } from "io.netty.channel.ChannelHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundHandler extends $ChannelHandler {
"channelActive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelInactive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelRead"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
"channelReadComplete"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelRegistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelUnregistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelWritabilityChanged"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"exceptionCaught"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type): void
"handlerAdded"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"handlerRemoved"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"userEventTriggered"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
}

export namespace $ChannelInboundHandler {
const probejs$$marker: never
}
export abstract class $ChannelInboundHandler$$Static implements $ChannelInboundHandler {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelInboundHandler$$Type = ($ChannelInboundHandler);
}

declare module "io.netty.channel.ChannelInboundInvoker" {
import { $Throwable$$Type } from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundInvoker {
"fireChannelActive"(): $ChannelInboundInvoker
"fireChannelInactive"(): $ChannelInboundInvoker
"fireChannelRead"(object0: any): $ChannelInboundInvoker
"fireChannelReadComplete"(): $ChannelInboundInvoker
"fireChannelRegistered"(): $ChannelInboundInvoker
"fireChannelUnregistered"(): $ChannelInboundInvoker
"fireChannelWritabilityChanged"(): $ChannelInboundInvoker
"fireExceptionCaught"(throwable0: $Throwable$$Type): $ChannelInboundInvoker
"fireUserEventTriggered"(object0: any): $ChannelInboundInvoker
}

export namespace $ChannelInboundInvoker {
const probejs$$marker: never
}
export abstract class $ChannelInboundInvoker$$Static implements $ChannelInboundInvoker {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelInboundInvoker$$Type = ($ChannelInboundInvoker);
}

declare module "io.netty.channel.ChannelHandler" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelHandlerContext$$Type } from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandler {
/** @deprecated */
"exceptionCaught"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type): void
"handlerAdded"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"handlerRemoved"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
}

export namespace $ChannelHandler {
const probejs$$marker: never
}
export abstract class $ChannelHandler$$Static implements $ChannelHandler {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelHandler$$Type = ($ChannelHandler);
}

declare module "io.netty.util.Constant" {
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constant<T extends $Constant<T> = $Constant<T>> extends $Comparable<T> {
"compareTo"(t0: T): integer
"id"(): integer
"name"(): string
}

export namespace $Constant {
const probejs$$marker: never
}
export abstract class $Constant$$Static<T extends $Constant<T> = $Constant<T>> implements $Constant<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Constant$$Type<T extends $Constant<T> = $Constant<T>> = ($Constant<T>);
}

declare module "io.netty.channel.Channel" {
import { $AttributeKey$$Type } from "io.netty.util.AttributeKey"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelProgressivePromise } from "io.netty.channel.ChannelProgressivePromise"
import { $Attribute } from "io.netty.util.Attribute"
import { $AttributeMap } from "io.netty.util.AttributeMap"
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $ByteBufAllocator } from "io.netty.buffer.ByteBufAllocator"
import { $ChannelId } from "io.netty.channel.ChannelId"
import { $ChannelPipeline } from "io.netty.channel.ChannelPipeline"
import { $EventLoop } from "io.netty.channel.EventLoop"
import { $Channel$Unsafe } from "io.netty.channel.Channel$Unsafe"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"
import { $ChannelPromise, $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $ChannelConfig } from "io.netty.channel.ChannelConfig"
import { $ChannelOutboundInvoker } from "io.netty.channel.ChannelOutboundInvoker"
import { $Comparable } from "java.lang.Comparable"
import { $ChannelMetadata } from "io.netty.channel.ChannelMetadata"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $AttributeMap, $ChannelOutboundInvoker, $Comparable<$Channel> {
"alloc"(): $ByteBufAllocator
"attr"<T>(attributeKey0: $AttributeKey$$Type<T>): $Attribute<T>
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"bytesBeforeUnwritable"(): long
"bytesBeforeWritable"(): long
"close"(): $ChannelFuture
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"closeFuture"(): $ChannelFuture
"compareTo"(channel0: $Channel$$Type): integer
"config"(): $ChannelConfig
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"deregister"(): $ChannelFuture
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"eventLoop"(): $EventLoop
"flush"(): $Channel
"hasAttr"<T>(attributeKey0: $AttributeKey$$Type<T>): boolean
"id"(): $ChannelId
"isActive"(): boolean
"isOpen"(): boolean
"isRegistered"(): boolean
"isWritable"(): boolean
"localAddress"(): $SocketAddress
"metadata"(): $ChannelMetadata
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"parent"(): $Channel
"pipeline"(): $ChannelPipeline
"read"(): $Channel
"remoteAddress"(): $SocketAddress
"unsafe"(): $Channel$Unsafe
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
get "active"(): boolean
get "open"(): boolean
get "registered"(): boolean
get "writable"(): boolean
}

export namespace $Channel {
const probejs$$marker: never
}
export abstract class $Channel$$Static implements $Channel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Channel$$Type = ($Channel);
}

declare module "io.netty.channel.SelectStrategyFactory" {
import { $SelectStrategy, $SelectStrategy$$Type } from "io.netty.channel.SelectStrategy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategyFactory {
"newSelectStrategy"(): $SelectStrategy
}

export namespace $SelectStrategyFactory {
const probejs$$marker: never
}
export abstract class $SelectStrategyFactory$$Static implements $SelectStrategyFactory {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SelectStrategyFactory$$Type = ($SelectStrategyFactory | (() => $SelectStrategy$$Type));
}

declare module "io.netty.channel.nio.NioEventLoopGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $EventLoopTaskQueueFactory$$Type } from "io.netty.channel.EventLoopTaskQueueFactory"
import { $MultithreadEventLoopGroup } from "io.netty.channel.MultithreadEventLoopGroup"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $EventExecutorChooserFactory$$Type } from "io.netty.util.concurrent.EventExecutorChooserFactory"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $SelectorProvider$$Type } from "java.nio.channels.spi.SelectorProvider"
import { $List } from "java.util.List"
import { $SelectStrategyFactory$$Type } from "io.netty.channel.SelectStrategyFactory"
import { $ThreadFactory$$Type } from "java.util.concurrent.ThreadFactory"
import { $Future } from "io.netty.util.concurrent.Future"
import { $RejectedExecutionHandler$$Type } from "io.netty.util.concurrent.RejectedExecutionHandler"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type, rejectedExecutionHandler5: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory6: $EventLoopTaskQueueFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type, rejectedExecutionHandler5: $RejectedExecutionHandler$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type, rejectedExecutionHandler5: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory6: $EventLoopTaskQueueFactory$$Type, eventLoopTaskQueueFactory7: $EventLoopTaskQueueFactory$$Type)
constructor()
constructor(int0: integer, executor1: $Executor$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type)
constructor(threadFactory0: $ThreadFactory$$Type)
constructor(int0: integer)
constructor(int0: integer, executor1: $Executor$$Type, selectorProvider2: $SelectorProvider$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, selectorProvider2: $SelectorProvider$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, selectorProvider2: $SelectorProvider$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, selectorProvider2: $SelectorProvider$$Type)

public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "rebuildSelectors"(): void
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "setIoRatio"(int0: integer): void
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
set "ioRatio"(value: integer)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NioEventLoopGroup$$Type = ($NioEventLoopGroup);
}

declare module "io.netty.util.concurrent.ProgressiveFuture" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable } from "java.lang.Throwable"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future, $Future$$Type } from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressiveFuture<V = any> extends $Future<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressiveFuture<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressiveFuture<V>
"await"(): $ProgressiveFuture<V>
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(long0: long): boolean
"awaitUninterruptibly"(): $ProgressiveFuture<V>
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(): V
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressiveFuture<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressiveFuture<V>
"sync"(): $ProgressiveFuture<V>
"syncUninterruptibly"(): $ProgressiveFuture<V>
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
}

export namespace $ProgressiveFuture {
const probejs$$marker: never
}
export abstract class $ProgressiveFuture$$Static<V = any> implements $ProgressiveFuture<V> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProgressiveFuture$$Type<V = any> = ($ProgressiveFuture<V>);
}

declare module "io.netty.channel.EventLoopTaskQueueFactory" {
import { $Queue, $Queue$$Type } from "java.util.Queue"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopTaskQueueFactory {
"newTaskQueue"(int0: integer): $Queue<$Runnable>
}

export namespace $EventLoopTaskQueueFactory {
const probejs$$marker: never
}
export abstract class $EventLoopTaskQueueFactory$$Static implements $EventLoopTaskQueueFactory {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventLoopTaskQueueFactory$$Type = ($EventLoopTaskQueueFactory | ((arg0: integer) => $Queue$$Type<$Runnable$$Type>));
}

declare module "io.netty.util.concurrent.MultithreadEventExecutorGroup" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Iterator } from "java.util.Iterator"
import { $AbstractEventExecutorGroup } from "io.netty.util.concurrent.AbstractEventExecutorGroup"
import { $Future } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {
public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "executorCount"(): integer
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "iterator"(): $Iterator<$EventExecutor>
public "next"(): $EventExecutor
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
public "spliterator"(): $Spliterator<$EventExecutor>
public "terminationFuture"(): $Future<any>
get "shutdown"(): boolean
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultithreadEventExecutorGroup$$Type = ($MultithreadEventExecutorGroup);
}

declare module "io.netty.buffer.ByteBufAllocator" {
import { $CompositeByteBuf } from "io.netty.buffer.CompositeByteBuf"
import { $ByteBuf } from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufAllocator {
"buffer"(int0: integer): $ByteBuf
"buffer"(): $ByteBuf
"buffer"(int0: integer, int1: integer): $ByteBuf
"calculateNewCapacity"(int0: integer, int1: integer): integer
"compositeBuffer"(): $CompositeByteBuf
"compositeBuffer"(int0: integer): $CompositeByteBuf
"compositeDirectBuffer"(int0: integer): $CompositeByteBuf
"compositeDirectBuffer"(): $CompositeByteBuf
"compositeHeapBuffer"(int0: integer): $CompositeByteBuf
"compositeHeapBuffer"(): $CompositeByteBuf
"directBuffer"(int0: integer): $ByteBuf
"directBuffer"(int0: integer, int1: integer): $ByteBuf
"directBuffer"(): $ByteBuf
"heapBuffer"(): $ByteBuf
"heapBuffer"(int0: integer): $ByteBuf
"heapBuffer"(int0: integer, int1: integer): $ByteBuf
"ioBuffer"(): $ByteBuf
"ioBuffer"(int0: integer): $ByteBuf
"ioBuffer"(int0: integer, int1: integer): $ByteBuf
"isDirectBufferPooled"(): boolean
get "directBufferPooled"(): boolean
}

export namespace $ByteBufAllocator {
const DEFAULT: $ByteBufAllocator
}
export abstract class $ByteBufAllocator$$Static implements $ByteBufAllocator {
static readonly "DEFAULT": $ByteBufAllocator

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ByteBufAllocator$$Type = ($ByteBufAllocator);
}

declare module "io.netty.util.ByteProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteProcessor {
"process"(byte0: byte): boolean
}

export namespace $ByteProcessor {
const FIND_ASCII_SPACE: $ByteProcessor
const FIND_COMMA: $ByteProcessor
const FIND_CR: $ByteProcessor
const FIND_CRLF: $ByteProcessor
const FIND_LF: $ByteProcessor
const FIND_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_CR: $ByteProcessor
const FIND_NON_CRLF: $ByteProcessor
const FIND_NON_LF: $ByteProcessor
const FIND_NON_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_NUL: $ByteProcessor
const FIND_NUL: $ByteProcessor
const FIND_SEMI_COLON: $ByteProcessor
}
export abstract class $ByteProcessor$$Static implements $ByteProcessor {
static readonly "FIND_ASCII_SPACE": $ByteProcessor
static readonly "FIND_COMMA": $ByteProcessor
static readonly "FIND_CR": $ByteProcessor
static readonly "FIND_CRLF": $ByteProcessor
static readonly "FIND_LF": $ByteProcessor
static readonly "FIND_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_CR": $ByteProcessor
static readonly "FIND_NON_CRLF": $ByteProcessor
static readonly "FIND_NON_LF": $ByteProcessor
static readonly "FIND_NON_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_NUL": $ByteProcessor
static readonly "FIND_NUL": $ByteProcessor
static readonly "FIND_SEMI_COLON": $ByteProcessor

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ByteProcessor$$Type = ($ByteProcessor | ((arg0: byte) => boolean));
}

declare module "io.netty.channel.WriteBufferWaterMark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WriteBufferWaterMark {
static readonly "DEFAULT": $WriteBufferWaterMark

constructor(int0: integer, int1: integer)

public "high"(): integer
public "low"(): integer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WriteBufferWaterMark$$Type = ($WriteBufferWaterMark);
}

declare module "io.netty.util.concurrent.EventExecutorGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Iterator } from "java.util.Iterator"
import { $Collection$$Type } from "java.util.Collection"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Iterable } from "java.lang.Iterable"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $ScheduledExecutorService } from "java.util.concurrent.ScheduledExecutorService"
import { $Future as $Future$0 } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorGroup extends $ScheduledExecutorService, $Iterable<$EventExecutor> {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"next"(): $EventExecutor
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future$0<any>
"shutdownGracefully"(): $Future$0<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"(runnable0: $Runnable$$Type): $Future$0<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future$0<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future$0<T>
"terminationFuture"(): $Future$0<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutorGroup {
const probejs$$marker: never
}
export abstract class $EventExecutorGroup$$Static implements $EventExecutorGroup {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventExecutorGroup$$Type = ($EventExecutorGroup);
}

declare module "io.netty.channel.ChannelFuture" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable } from "java.lang.Throwable"
import { $Channel } from "io.netty.channel.Channel"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future, $Future$$Type } from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelFuture extends $Future<void> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelFuture
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelFuture
"await"(): $ChannelFuture
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(long0: long): boolean
"awaitUninterruptibly"(): $ChannelFuture
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(): void
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelFuture
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelFuture
"sync"(): $ChannelFuture
"syncUninterruptibly"(): $ChannelFuture
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
}

export namespace $ChannelFuture {
const probejs$$marker: never
}
export abstract class $ChannelFuture$$Static implements $ChannelFuture {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelFuture$$Type = ($ChannelFuture);
}

declare module "io.netty.channel.DefaultEventLoopGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $MultithreadEventLoopGroup } from "io.netty.channel.MultithreadEventLoopGroup"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $List } from "java.util.List"
import { $ThreadFactory$$Type } from "java.util.concurrent.ThreadFactory"
import { $Future } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {
constructor()
constructor(int0: integer, executor1: $Executor$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type)
constructor(threadFactory0: $ThreadFactory$$Type)
constructor(int0: integer)

public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DefaultEventLoopGroup$$Type = ($DefaultEventLoopGroup);
}

declare module "io.netty.channel.MultithreadEventLoopGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $MultithreadEventExecutorGroup } from "io.netty.util.concurrent.MultithreadEventExecutorGroup"
import { $EventLoopGroup } from "io.netty.channel.EventLoopGroup"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $EventLoop } from "io.netty.channel.EventLoop"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Channel$$Type } from "io.netty.channel.Channel"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $List } from "java.util.List"
import { $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $Future } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup {
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "next"(): $EventLoop
public "register"(channel0: $Channel$$Type): $ChannelFuture
public "register"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
/** @deprecated */
public "register"(channel0: $Channel$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultithreadEventLoopGroup$$Type = ($MultithreadEventLoopGroup);
}

declare module "io.netty.channel.ChannelHandlerContext" {
import { $AttributeKey$$Type } from "io.netty.util.AttributeKey"
import { $EventExecutor } from "io.netty.util.concurrent.EventExecutor"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelProgressivePromise } from "io.netty.channel.ChannelProgressivePromise"
import { $Attribute } from "io.netty.util.Attribute"
import { $AttributeMap } from "io.netty.util.AttributeMap"
import { $SocketAddress$$Type } from "java.net.SocketAddress"
import { $ByteBufAllocator } from "io.netty.buffer.ByteBufAllocator"
import { $ChannelPipeline } from "io.netty.channel.ChannelPipeline"
import { $ChannelInboundInvoker } from "io.netty.channel.ChannelInboundInvoker"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"
import { $Channel } from "io.netty.channel.Channel"
import { $ChannelPromise, $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $ChannelOutboundInvoker } from "io.netty.channel.ChannelOutboundInvoker"
import { $ChannelHandler } from "io.netty.channel.ChannelHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandlerContext extends $AttributeMap, $ChannelInboundInvoker, $ChannelOutboundInvoker {
"alloc"(): $ByteBufAllocator
/** @deprecated */
"attr"<T>(attributeKey0: $AttributeKey$$Type<T>): $Attribute<T>
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"channel"(): $Channel
"close"(): $ChannelFuture
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"deregister"(): $ChannelFuture
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"executor"(): $EventExecutor
"fireChannelActive"(): $ChannelHandlerContext
"fireChannelInactive"(): $ChannelHandlerContext
"fireChannelRead"(object0: any): $ChannelHandlerContext
"fireChannelReadComplete"(): $ChannelHandlerContext
"fireChannelRegistered"(): $ChannelHandlerContext
"fireChannelUnregistered"(): $ChannelHandlerContext
"fireChannelWritabilityChanged"(): $ChannelHandlerContext
"fireExceptionCaught"(throwable0: $Throwable$$Type): $ChannelHandlerContext
"fireUserEventTriggered"(object0: any): $ChannelHandlerContext
"flush"(): $ChannelHandlerContext
"handler"(): $ChannelHandler
/** @deprecated */
"hasAttr"<T>(attributeKey0: $AttributeKey$$Type<T>): boolean
"isRemoved"(): boolean
"name"(): string
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"pipeline"(): $ChannelPipeline
"read"(): $ChannelHandlerContext
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
get "removed"(): boolean
}

export namespace $ChannelHandlerContext {
const probejs$$marker: never
}
export abstract class $ChannelHandlerContext$$Static implements $ChannelHandlerContext {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelHandlerContext$$Type = ($ChannelHandlerContext);
}

declare module "io.netty.util.concurrent.EventExecutor" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Iterator } from "java.util.Iterator"
import { $Promise } from "io.netty.util.concurrent.Promise"
import { $Collection$$Type } from "java.util.Collection"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $EventExecutorGroup } from "io.netty.util.concurrent.EventExecutorGroup"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $Thread$$Type } from "java.lang.Thread"
import { $ProgressivePromise } from "io.netty.util.concurrent.ProgressivePromise"
import { $Future as $Future$0 } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutor extends $EventExecutorGroup {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"inEventLoop"(): boolean
"inEventLoop"(thread0: $Thread$$Type): boolean
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future$0<V>
"newProgressivePromise"<V>(): $ProgressivePromise<V>
"newPromise"<V>(): $Promise<V>
"newSucceededFuture"<V>(v0: V): $Future$0<V>
"next"(): $EventExecutor
"parent"(): $EventExecutorGroup
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future$0<any>
"shutdownGracefully"(): $Future$0<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"(runnable0: $Runnable$$Type): $Future$0<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future$0<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future$0<T>
"terminationFuture"(): $Future$0<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutor {
const probejs$$marker: never
}
export abstract class $EventExecutor$$Static implements $EventExecutor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventExecutor$$Type = ($EventExecutor);
}

declare module "io.netty.channel.SimpleChannelInboundHandler" {
import { $ChannelInboundHandlerAdapter } from "io.netty.channel.ChannelInboundHandlerAdapter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SimpleChannelInboundHandler<I = any> extends $ChannelInboundHandlerAdapter {
public "acceptInboundMessage"(object0: any): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleChannelInboundHandler$$Type<I = any> = ($SimpleChannelInboundHandler<I>);
}

declare module "io.netty.util.concurrent.ProgressivePromise" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Promise } from "io.netty.util.concurrent.Promise"
import { $ProgressiveFuture } from "io.netty.util.concurrent.ProgressiveFuture"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future$$Type } from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressivePromise<V = any> extends $Promise<V>, $ProgressiveFuture<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressivePromise<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressivePromise<V>
"await"(): $ProgressivePromise<V>
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(long0: long): boolean
"awaitUninterruptibly"(): $ProgressivePromise<V>
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(): V
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressivePromise<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressivePromise<V>
"setFailure"(throwable0: $Throwable$$Type): $ProgressivePromise<V>
"setProgress"(long0: long, long1: long): $ProgressivePromise<V>
"setSuccess"(v0: V): $ProgressivePromise<V>
"setUncancellable"(): boolean
"sync"(): $ProgressivePromise<V>
"syncUninterruptibly"(): $ProgressivePromise<V>
"tryFailure"(throwable0: $Throwable$$Type): boolean
"tryProgress"(long0: long, long1: long): boolean
"trySuccess"(v0: V): boolean
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: V)
}

export namespace $ProgressivePromise {
const probejs$$marker: never
}
export abstract class $ProgressivePromise$$Static<V = any> implements $ProgressivePromise<V> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProgressivePromise$$Type<V = any> = ($ProgressivePromise<V>);
}

declare module "io.netty.channel.ChannelPromise" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Channel } from "io.netty.channel.Channel"
import { $Promise } from "io.netty.util.concurrent.Promise"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Future$$Type } from "io.netty.util.concurrent.Future"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPromise extends $ChannelFuture, $Promise<void> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelPromise
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelPromise
"await"(): $ChannelPromise
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(long0: long): boolean
"awaitUninterruptibly"(): $ChannelPromise
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(): void
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelPromise
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelPromise
"setFailure"(throwable0: $Throwable$$Type): $ChannelPromise
"setSuccess"(): $ChannelPromise
"setSuccess"(void0: void): $ChannelPromise
"setSuccess"(void0: void): $Promise<void>
"setUncancellable"(): boolean
"sync"(): $ChannelPromise
"syncUninterruptibly"(): $ChannelPromise
"tryFailure"(throwable0: $Throwable$$Type): boolean
"trySuccess"(): boolean
"trySuccess"(void0: void): boolean
"unvoid"(): $ChannelPromise
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
set "success"(value: void)
}

export namespace $ChannelPromise {
const probejs$$marker: never
}
export abstract class $ChannelPromise$$Static implements $ChannelPromise {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelPromise$$Type = ($ChannelPromise);
}

declare module "io.netty.util.AbstractConstant" {
import { $Constant } from "io.netty.util.Constant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractConstant<T extends $AbstractConstant<T> = $AbstractConstant<T>> implements $Constant<T> {
public "compareTo"(t0: T): integer
public "id"(): integer
public "name"(): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractConstant$$Type<T extends $AbstractConstant<T> = $AbstractConstant<T>> = ($AbstractConstant<T>);
}

declare module "io.netty.util.concurrent.AbstractScheduledEventExecutor" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Thread$$Type } from "java.lang.Thread"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $Future } from "io.netty.util.concurrent.Future"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Spliterator } from "java.util.Spliterator"
import { $AbstractEventExecutor } from "io.netty.util.concurrent.AbstractEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {
public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "inEventLoop"(thread0: $Thread$$Type): boolean
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
public "spliterator"(): $Spliterator<$EventExecutor>
public "terminationFuture"(): $Future<any>
get "shutdown"(): boolean
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractScheduledEventExecutor$$Type = ($AbstractScheduledEventExecutor);
}

declare module "io.netty.util.concurrent.ThreadProperties" {
import { $Thread$State } from "java.lang.Thread$State"
import { $StackTraceElement } from "java.lang.StackTraceElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ThreadProperties {
"id"(): long
"isAlive"(): boolean
"isDaemon"(): boolean
"isInterrupted"(): boolean
"name"(): string
"priority"(): integer
"stackTrace"(): $StackTraceElement[]
"state"(): $Thread$State
get "alive"(): boolean
get "daemon"(): boolean
get "interrupted"(): boolean
}

export namespace $ThreadProperties {
const probejs$$marker: never
}
export abstract class $ThreadProperties$$Static implements $ThreadProperties {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ThreadProperties$$Type = ($ThreadProperties);
}

declare module "io.netty.channel.MessageSizeEstimator$Handle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$Handle {
"size"(object0: any): integer
}

export namespace $MessageSizeEstimator$Handle {
const probejs$$marker: never
}
export abstract class $MessageSizeEstimator$Handle$$Static implements $MessageSizeEstimator$Handle {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MessageSizeEstimator$Handle$$Type = ($MessageSizeEstimator$Handle | ((arg0: any) => integer));
}

declare module "io.netty.channel.SelectStrategy" {
import { $IntSupplier, $IntSupplier$$Type } from "io.netty.util.IntSupplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategy {
"calculateStrategy"(intSupplier0: $IntSupplier$$Type, boolean1: boolean): integer
}

export namespace $SelectStrategy {
const BUSY_WAIT: integer
const CONTINUE: integer
const SELECT: integer
}
export abstract class $SelectStrategy$$Static implements $SelectStrategy {
static readonly "BUSY_WAIT": integer
static readonly "CONTINUE": integer
static readonly "SELECT": integer

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SelectStrategy$$Type = ($SelectStrategy | ((arg0: $IntSupplier, arg1: boolean) => integer));
}

declare module "io.netty.util.concurrent.Future" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Throwable } from "java.lang.Throwable"
import { $Future as $Future$0 } from "java.util.concurrent.Future"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Future<V = any> extends $Future$0<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"await"(): $Future<V>
"await"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $Future<V>
"awaitUninterruptibly"(long0: long): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(): V
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"sync"(): $Future<V>
"syncUninterruptibly"(): $Future<V>
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export abstract class $Future$$Static<V = any> implements $Future<V> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Future$$Type<V = any> = ($Future<V>);
}

declare module "io.netty.channel.ChannelOutboundBuffer" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $ChannelOutboundBuffer$MessageProcessor$$Type } from "io.netty.channel.ChannelOutboundBuffer$MessageProcessor"
import { $ByteBuffer } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOutboundBuffer {
public "addFlush"(): void
public "addMessage"(object0: any, int1: integer, channelPromise2: $ChannelPromise$$Type): void
public "bytesBeforeUnwritable"(): long
public "bytesBeforeWritable"(): long
public "current"(): any
public "currentProgress"(): long
public "forEachFlushedMessage"(messageProcessor0: $ChannelOutboundBuffer$MessageProcessor$$Type): void
public "getUserDefinedWritability"(int0: integer): boolean
public "isEmpty"(): boolean
public "isWritable"(): boolean
public "nioBufferCount"(): integer
public "nioBufferSize"(): long
public "nioBuffers"(): $ByteBuffer[]
public "nioBuffers"(int0: integer, long1: long): $ByteBuffer[]
public "progress"(long0: long): void
/** @deprecated */
public "recycle"(): void
public "remove"(): boolean
public "remove"(throwable0: $Throwable$$Type): boolean
public "removeBytes"(long0: long): void
public "setUserDefinedWritability"(int0: integer, boolean1: boolean): void
public "size"(): integer
public "totalPendingWriteBytes"(): long
get "empty"(): boolean
get "writable"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelOutboundBuffer$$Type = ($ChannelOutboundBuffer);
}

declare module "io.netty.channel.ChannelConfig" {
import { $MessageSizeEstimator, $MessageSizeEstimator$$Type } from "io.netty.channel.MessageSizeEstimator"
import { $WriteBufferWaterMark, $WriteBufferWaterMark$$Type } from "io.netty.channel.WriteBufferWaterMark"
import { $ChannelOption, $ChannelOption$$Type } from "io.netty.channel.ChannelOption"
import { $ByteBufAllocator, $ByteBufAllocator$$Type } from "io.netty.buffer.ByteBufAllocator"
import { $Map, $Map$$Type } from "java.util.Map"
import { $RecvByteBufAllocator, $RecvByteBufAllocator$$Type } from "io.netty.channel.RecvByteBufAllocator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelConfig {
"getAllocator"(): $ByteBufAllocator
"getConnectTimeoutMillis"(): integer
/** @deprecated */
"getMaxMessagesPerRead"(): integer
"getMessageSizeEstimator"(): $MessageSizeEstimator
"getOption"<T>(channelOption0: $ChannelOption$$Type<T>): T
"getOptions"(): $Map<$ChannelOption<any>, any>
"getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
"getWriteBufferHighWaterMark"(): integer
"getWriteBufferLowWaterMark"(): integer
"getWriteBufferWaterMark"(): $WriteBufferWaterMark
"getWriteSpinCount"(): integer
"isAutoClose"(): boolean
"isAutoRead"(): boolean
"setAllocator"(byteBufAllocator0: $ByteBufAllocator$$Type): $ChannelConfig
"setAutoClose"(boolean0: boolean): $ChannelConfig
"setAutoRead"(boolean0: boolean): $ChannelConfig
"setConnectTimeoutMillis"(int0: integer): $ChannelConfig
/** @deprecated */
"setMaxMessagesPerRead"(int0: integer): $ChannelConfig
"setMessageSizeEstimator"(messageSizeEstimator0: $MessageSizeEstimator$$Type): $ChannelConfig
"setOption"<T>(channelOption0: $ChannelOption$$Type<T>, t1: T): boolean
"setOptions"(map0: $Map$$Type<$ChannelOption$$Type<any>, any>): boolean
"setRecvByteBufAllocator"(recvByteBufAllocator0: $RecvByteBufAllocator$$Type): $ChannelConfig
"setWriteBufferHighWaterMark"(int0: integer): $ChannelConfig
"setWriteBufferLowWaterMark"(int0: integer): $ChannelConfig
"setWriteBufferWaterMark"(writeBufferWaterMark0: $WriteBufferWaterMark$$Type): $ChannelConfig
"setWriteSpinCount"(int0: integer): $ChannelConfig
get "allocator"(): $ByteBufAllocator
get "connectTimeoutMillis"(): integer
get "maxMessagesPerRead"(): integer
get "messageSizeEstimator"(): $MessageSizeEstimator
get "options"(): $Map<$ChannelOption<any>, any>
get "recvByteBufAllocator"(): T
get "writeBufferHighWaterMark"(): integer
get "writeBufferLowWaterMark"(): integer
get "writeBufferWaterMark"(): $WriteBufferWaterMark
get "writeSpinCount"(): integer
get "autoClose"(): boolean
get "autoRead"(): boolean
set "allocator"(value: $ByteBufAllocator$$Type)
set "autoClose"(value: boolean)
set "autoRead"(value: boolean)
set "connectTimeoutMillis"(value: integer)
set "maxMessagesPerRead"(value: integer)
set "messageSizeEstimator"(value: $MessageSizeEstimator$$Type)
set "options"(value: $Map$$Type<$ChannelOption$$Type<any>, any>)
set "recvByteBufAllocator"(value: $RecvByteBufAllocator$$Type)
set "writeBufferHighWaterMark"(value: integer)
set "writeBufferLowWaterMark"(value: integer)
set "writeBufferWaterMark"(value: $WriteBufferWaterMark$$Type)
set "writeSpinCount"(value: integer)
}

export namespace $ChannelConfig {
const probejs$$marker: never
}
export abstract class $ChannelConfig$$Static implements $ChannelConfig {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelConfig$$Type = ($ChannelConfig);
}

declare module "io.netty.util.concurrent.OrderedEventExecutor" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Iterator } from "java.util.Iterator"
import { $Promise } from "io.netty.util.concurrent.Promise"
import { $Collection$$Type } from "java.util.Collection"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $EventExecutorGroup } from "io.netty.util.concurrent.EventExecutorGroup"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Future } from "java.util.concurrent.Future"
import { $Thread$$Type } from "java.lang.Thread"
import { $ProgressivePromise } from "io.netty.util.concurrent.ProgressivePromise"
import { $Future as $Future$0 } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OrderedEventExecutor extends $EventExecutor {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"inEventLoop"(): boolean
"inEventLoop"(thread0: $Thread$$Type): boolean
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future$0<V>
"newProgressivePromise"<V>(): $ProgressivePromise<V>
"newPromise"<V>(): $Promise<V>
"newSucceededFuture"<V>(v0: V): $Future$0<V>
"next"(): $EventExecutor
"parent"(): $EventExecutorGroup
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future$0<any>
"shutdownGracefully"(): $Future$0<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"(runnable0: $Runnable$$Type): $Future$0<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future$0<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future$0<T>
"terminationFuture"(): $Future$0<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $OrderedEventExecutor {
const probejs$$marker: never
}
export abstract class $OrderedEventExecutor$$Static implements $OrderedEventExecutor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OrderedEventExecutor$$Type = ($OrderedEventExecutor);
}

declare module "io.netty.channel.RecvByteBufAllocator$Handle" {
import { $ByteBuf } from "io.netty.buffer.ByteBuf"
import { $ChannelConfig$$Type } from "io.netty.channel.ChannelConfig"
import { $ByteBufAllocator$$Type } from "io.netty.buffer.ByteBufAllocator"

/**
 * @deprecated
 * 
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$Handle {
"allocate"(byteBufAllocator0: $ByteBufAllocator$$Type): $ByteBuf
"attemptedBytesRead"(): integer
"attemptedBytesRead"(int0: integer): void
"continueReading"(): boolean
"guess"(): integer
"incMessagesRead"(int0: integer): void
"lastBytesRead"(int0: integer): void
"lastBytesRead"(): integer
"readComplete"(): void
"reset"(channelConfig0: $ChannelConfig$$Type): void
}

export namespace $RecvByteBufAllocator$Handle {
const probejs$$marker: never
}
export abstract class $RecvByteBufAllocator$Handle$$Static implements $RecvByteBufAllocator$Handle {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecvByteBufAllocator$Handle$$Type = ($RecvByteBufAllocator$Handle);
}

declare module "io.netty.util.concurrent.AbstractEventExecutor" {
import { $EventExecutor, $EventExecutor$$Type } from "io.netty.util.concurrent.EventExecutor"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $AbstractExecutorService } from "java.util.concurrent.AbstractExecutorService"
import { $Iterator } from "java.util.Iterator"
import { $Promise } from "io.netty.util.concurrent.Promise"
import { $ScheduledFuture } from "io.netty.util.concurrent.ScheduledFuture"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $EventExecutorGroup } from "io.netty.util.concurrent.EventExecutorGroup"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Thread$$Type } from "java.lang.Thread"
import { $ProgressivePromise } from "io.netty.util.concurrent.ProgressivePromise"
import { $Future } from "io.netty.util.concurrent.Future"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutor extends $AbstractExecutorService implements $EventExecutor {
public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "inEventLoop"(): boolean
public "inEventLoop"(thread0: $Thread$$Type): boolean
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "iterator"(): $Iterator<$EventExecutor>
public "lazyExecute"(runnable0: $Runnable$$Type): void
public "newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future<V>
public "newProgressivePromise"<V>(): $ProgressivePromise<V>
public "newPromise"<V>(): $Promise<V>
public "newSucceededFuture"<V>(v0: V): $Future<V>
public "next"(): $EventExecutor
public "parent"(): $EventExecutorGroup
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
public "shutdown"(): void
public "shutdownGracefully"(): $Future<any>
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
public "terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractEventExecutor$$Type = ($AbstractEventExecutor);
}

declare module "io.netty.channel.ChannelOutboundInvoker" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $ChannelProgressivePromise } from "io.netty.channel.ChannelProgressivePromise"
import { $SocketAddress$$Type } from "java.net.SocketAddress"
import { $ChannelPromise, $ChannelPromise$$Type } from "io.netty.channel.ChannelPromise"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundInvoker {
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"close"(): $ChannelFuture
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"deregister"(): $ChannelFuture
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"flush"(): $ChannelOutboundInvoker
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"read"(): $ChannelOutboundInvoker
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
}

export namespace $ChannelOutboundInvoker {
const probejs$$marker: never
}
export abstract class $ChannelOutboundInvoker$$Static implements $ChannelOutboundInvoker {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelOutboundInvoker$$Type = ($ChannelOutboundInvoker);
}

declare module "io.netty.util.Attribute" {
import { $AttributeKey } from "io.netty.util.AttributeKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Attribute<T = any> {
"compareAndSet"(t0: T, t1: T): boolean
"get"(): T
/** @deprecated */
"getAndRemove"(): T
"getAndSet"(t0: T): T
"key"(): $AttributeKey<T>
/** @deprecated */
"remove"(): void
"set"(t0: T): void
"setIfAbsent"(t0: T): T
get "andRemove"(): T
set "ifAbsent"(value: T)
}

export namespace $Attribute {
const probejs$$marker: never
}
export abstract class $Attribute$$Static<T = any> implements $Attribute<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Attribute$$Type<T = any> = ($Attribute<T>);
}

declare module "io.netty.buffer.ByteBufConvertible" {
import { $ByteBuf, $ByteBuf$$Type } from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufConvertible {
"asByteBuf"(): $ByteBuf
}

export namespace $ByteBufConvertible {
const probejs$$marker: never
}
export abstract class $ByteBufConvertible$$Static implements $ByteBufConvertible {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ByteBufConvertible$$Type = ($ByteBufConvertible | (() => $ByteBuf$$Type));
}

