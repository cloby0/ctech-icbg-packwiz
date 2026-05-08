declare module "java.nio.channels.InterruptibleChannel" {
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $InterruptibleChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
get "open"(): boolean
}

export namespace $InterruptibleChannel {
const probejs$$marker: never
}
export abstract class $InterruptibleChannel$$Static implements $InterruptibleChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InterruptibleChannel$$Type = ($InterruptibleChannel);
}

declare module "java.nio.channels.AsynchronousChannel" {
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AsynchronousChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
get "open"(): boolean
}

export namespace $AsynchronousChannel {
const probejs$$marker: never
}
export abstract class $AsynchronousChannel$$Static implements $AsynchronousChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AsynchronousChannel$$Type = ($AsynchronousChannel);
}

declare module "java.nio.file.attribute.BasicFileAttributes" {
import { $FileTime } from "java.nio.file.attribute.FileTime"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BasicFileAttributes {
"creationTime"(): $FileTime
"fileKey"(): any
"isDirectory"(): boolean
"isOther"(): boolean
"isRegularFile"(): boolean
"isSymbolicLink"(): boolean
"lastAccessTime"(): $FileTime
"lastModifiedTime"(): $FileTime
"size"(): long
get "directory"(): boolean
get "other"(): boolean
get "regularFile"(): boolean
get "symbolicLink"(): boolean
}

export namespace $BasicFileAttributes {
const probejs$$marker: never
}
export abstract class $BasicFileAttributes$$Static implements $BasicFileAttributes {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BasicFileAttributes$$Type = ($BasicFileAttributes);
}

declare module "java.nio.file.attribute.FileTime" {
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Comparable } from "java.lang.Comparable"
import { $Instant, $Instant$$Type } from "java.time.Instant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileTime implements $Comparable<$FileTime> {
public "compareTo"(fileTime0: $FileTime$$Type): integer
public static "from"(long0: long, timeUnit1: $TimeUnit$$Type): $FileTime
public static "from"(instant0: $Instant$$Type): $FileTime
public static "fromMillis"(long0: long): $FileTime
public "to"(timeUnit0: $TimeUnit$$Type): long
public "toInstant"(): $Instant
public "toMillis"(): long
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileTime$$Type = ($FileTime);
}

declare module "java.nio.LongBuffer" {
import { $ByteOrder } from "java.nio.ByteOrder"
import { $Buffer } from "java.nio.Buffer"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LongBuffer extends $Buffer implements $Comparable<$LongBuffer> {
public static "allocate"(int0: integer): $LongBuffer
public "asReadOnlyBuffer"(): $LongBuffer
public "compact"(): $LongBuffer
public "compareTo"(longBuffer0: $LongBuffer$$Type): integer
public "duplicate"(): $LongBuffer
public "flip"(): $LongBuffer
public "get"(long0s: long[], int1: integer, int2: integer): $LongBuffer
public "get"(long0s: long[]): $LongBuffer
public "get"(int0: integer, long1s: long[]): $LongBuffer
public "get"(): long
public "get"(int0: integer, long1s: long[], int2: integer, int3: integer): $LongBuffer
public "get"(int0: integer): long
public "limit"(int0: integer): $LongBuffer
public "mark"(): $LongBuffer
public "mismatch"(longBuffer0: $LongBuffer$$Type): integer
public "order"(): $ByteOrder
public "put"(long0s: long[]): $LongBuffer
public "put"(long0s: long[], int1: integer, int2: integer): $LongBuffer
public "put"(int0: integer, long1s: long[]): $LongBuffer
public "put"(int0: integer, long1s: long[], int2: integer, int3: integer): $LongBuffer
public "put"(long0: long): $LongBuffer
public "put"(longBuffer0: $LongBuffer$$Type): $LongBuffer
public "put"(int0: integer, longBuffer1: $LongBuffer$$Type, int2: integer, int3: integer): $LongBuffer
public "put"(int0: integer, long1: long): $LongBuffer
public "reset"(): $LongBuffer
public "rewind"(): $LongBuffer
public "slice"(int0: integer, int1: integer): $LongBuffer
public static "wrap"(long0s: long[]): $LongBuffer
public static "wrap"(long0s: long[], int1: integer, int2: integer): $LongBuffer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LongBuffer$$Type = ($LongBuffer);
}

declare module "java.nio.channels.DatagramChannel" {
import { $ScatteringByteChannel } from "java.nio.channels.ScatteringByteChannel"
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $SocketOption, $SocketOption$$Type } from "java.net.SocketOption"
import { $ProtocolFamily$$Type } from "java.net.ProtocolFamily"
import { $NetworkInterface$$Type } from "java.net.NetworkInterface"
import { $Set } from "java.util.Set"
import { $AbstractSelectableChannel } from "java.nio.channels.spi.AbstractSelectableChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $MembershipKey } from "java.nio.channels.MembershipKey"
import { $InetAddress$$Type } from "java.net.InetAddress"
import { $DatagramSocket } from "java.net.DatagramSocket"
import { $ByteChannel } from "java.nio.channels.ByteChannel"
import { $MulticastChannel } from "java.nio.channels.MulticastChannel"
import { $GatheringByteChannel } from "java.nio.channels.GatheringByteChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $MulticastChannel {
public "close"(): void
public "connect"(socketAddress0: $SocketAddress$$Type): $DatagramChannel
public "disconnect"(): $DatagramChannel
public "getLocalAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "getRemoteAddress"(): $SocketAddress
public "isConnected"(): boolean
public "isOpen"(): boolean
public "join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type): $MembershipKey
public "join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type, inetAddress2: $InetAddress$$Type): $MembershipKey
public static "open"(protocolFamily0: $ProtocolFamily$$Type): $DatagramChannel
public static "open"(): $DatagramChannel
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "receive"(byteBuffer0: $ByteBuffer$$Type): $SocketAddress
public "send"(byteBuffer0: $ByteBuffer$$Type, socketAddress1: $SocketAddress$$Type): integer
public "socket"(): $DatagramSocket
public "supportedOptions"(): $Set<$SocketOption<any>>
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
get "connected"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DatagramChannel$$Type = ($DatagramChannel);
}

declare module "java.nio.file.attribute.FileStoreAttributeView" {
import { $AttributeView } from "java.nio.file.attribute.AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileStoreAttributeView extends $AttributeView {
"name"(): string
}

export namespace $FileStoreAttributeView {
const probejs$$marker: never
}
export abstract class $FileStoreAttributeView$$Static implements $FileStoreAttributeView {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileStoreAttributeView$$Type = ($FileStoreAttributeView | (() => string));
}

declare module "java.nio.ByteBuffer" {
import { $ByteOrder, $ByteOrder$$Type } from "java.nio.ByteOrder"
import { $CharBuffer } from "java.nio.CharBuffer"
import { $FloatBuffer } from "java.nio.FloatBuffer"
import { $IntBuffer } from "java.nio.IntBuffer"
import { $DoubleBuffer } from "java.nio.DoubleBuffer"
import { $Buffer } from "java.nio.Buffer"
import { $ShortBuffer } from "java.nio.ShortBuffer"
import { $LongBuffer } from "java.nio.LongBuffer"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuffer extends $Buffer implements $Comparable<$ByteBuffer> {
public "alignedSlice"(int0: integer): $ByteBuffer
public "alignmentOffset"(int0: integer, int1: integer): integer
public static "allocate"(int0: integer): $ByteBuffer
public static "allocateDirect"(int0: integer): $ByteBuffer
public "array"(): byte[]
public "asCharBuffer"(): $CharBuffer
public "asDoubleBuffer"(): $DoubleBuffer
public "asFloatBuffer"(): $FloatBuffer
public "asIntBuffer"(): $IntBuffer
public "asLongBuffer"(): $LongBuffer
public "asReadOnlyBuffer"(): $ByteBuffer
public "asShortBuffer"(): $ShortBuffer
public "clear"(): $ByteBuffer
public "compact"(): $ByteBuffer
public "compareTo"(byteBuffer0: $ByteBuffer$$Type): integer
public "duplicate"(): $ByteBuffer
public "get"(): byte
public "get"(byte0s: byte[]): $ByteBuffer
public "get"(byte0s: byte[], int1: integer, int2: integer): $ByteBuffer
public "get"(int0: integer): byte
public "get"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuffer
public "get"(int0: integer, byte1s: byte[]): $ByteBuffer
public "getChar"(int0: integer): character
public "getChar"(): character
public "getDouble"(int0: integer): double
public "getDouble"(): double
public "getFloat"(int0: integer): float
public "getFloat"(): float
public "getInt"(): integer
public "getInt"(int0: integer): integer
public "getLong"(int0: integer): long
public "getLong"(): long
public "getShort"(int0: integer): short
public "getShort"(): short
public "mark"(): $ByteBuffer
public "mismatch"(byteBuffer0: $ByteBuffer$$Type): integer
public "order"(byteOrder0: $ByteOrder$$Type): $ByteBuffer
public "order"(): $ByteOrder
public "put"(int0: integer, byte1: byte): $ByteBuffer
public "put"(int0: integer, byteBuffer1: $ByteBuffer$$Type, int2: integer, int3: integer): $ByteBuffer
public "put"(byte0: byte): $ByteBuffer
public "put"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "put"(byte0s: byte[]): $ByteBuffer
public "put"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuffer
public "put"(int0: integer, byte1s: byte[]): $ByteBuffer
public "put"(byte0s: byte[], int1: integer, int2: integer): $ByteBuffer
public "putChar"(char0: character): $ByteBuffer
public "putChar"(int0: integer, char1: character): $ByteBuffer
public "putDouble"(double0: double): $ByteBuffer
public "putDouble"(int0: integer, double1: double): $ByteBuffer
public "putFloat"(int0: integer, float1: float): $ByteBuffer
public "putFloat"(float0: float): $ByteBuffer
public "putInt"(int0: integer, int1: integer): $ByteBuffer
public "putInt"(int0: integer): $ByteBuffer
public "putLong"(int0: integer, long1: long): $ByteBuffer
public "putLong"(long0: long): $ByteBuffer
public "putShort"(int0: integer, short1: short): $ByteBuffer
public "putShort"(short0: short): $ByteBuffer
public "reset"(): $ByteBuffer
public "rewind"(): $ByteBuffer
public "slice"(int0: integer, int1: integer): $ByteBuffer
public "slice"(): $ByteBuffer
public static "wrap"(byte0s: byte[], int1: integer, int2: integer): $ByteBuffer
public static "wrap"(byte0s: byte[]): $ByteBuffer
get "char"(): character
get "double"(): double
get "float"(): float
get "int"(): integer
get "long"(): long
get "short"(): short
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ByteBuffer$$Type = ($ByteBuffer);
}

declare module "java.nio.file.attribute.UserPrincipal" {
import { $Principal } from "java.security.Principal"
import { $Subject$$Type } from "javax.security.auth.Subject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $UserPrincipal extends $Principal {
"equals"(object0: any): boolean
"getName"(): string
"hashCode"(): integer
"implies"(subject0: $Subject$$Type): boolean
"toString"(): string
get "name"(): string
}

export namespace $UserPrincipal {
const probejs$$marker: never
}
export abstract class $UserPrincipal$$Static implements $UserPrincipal {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UserPrincipal$$Type = ($UserPrincipal);
}

declare module "java.nio.file.PathMatcher" {
import { $Path, $Path$$Type } from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PathMatcher {
"matches"(path0: $Path$$Type): boolean
}

export namespace $PathMatcher {
const probejs$$marker: never
}
export abstract class $PathMatcher$$Static implements $PathMatcher {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PathMatcher$$Type = ($PathMatcher | ((arg0: $Path) => boolean));
}

declare module "java.nio.channels.NetworkChannel" {
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $SocketOption, $SocketOption$$Type } from "java.net.SocketOption"
import { $Set } from "java.util.Set"
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $NetworkChannel extends $Channel {
"bind"(socketAddress0: $SocketAddress$$Type): $NetworkChannel
"close"(): void
"getLocalAddress"(): $SocketAddress
"getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
"isOpen"(): boolean
"setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $NetworkChannel
"supportedOptions"(): $Set<$SocketOption<any>>
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export namespace $NetworkChannel {
const probejs$$marker: never
}
export abstract class $NetworkChannel$$Static implements $NetworkChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkChannel$$Type = ($NetworkChannel);
}

declare module "java.nio.file.Path" {
import { $WatchEvent$Modifier$$Type } from "java.nio.file.WatchEvent$Modifier"
import { $Iterator } from "java.util.Iterator"
import { $FileSystem } from "java.nio.file.FileSystem"
import { $WatchEvent$Kind$$Type } from "java.nio.file.WatchEvent$Kind"
import { $File } from "java.io.File"
import { $Iterable } from "java.lang.Iterable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $WatchKey } from "java.nio.file.WatchKey"
import { $LinkOption$$Type } from "java.nio.file.LinkOption"
import { $WatchService$$Type } from "java.nio.file.WatchService"
import { $Watchable } from "java.nio.file.Watchable"
import { $Comparable } from "java.lang.Comparable"
import { $URI, $URI$$Type } from "java.net.URI"
import { $Spliterator } from "java.util.Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Path extends $Comparable<$Path>, $Iterable<$Path>, $Watchable {
"compareTo"(path0: $Path$$Type): integer
"endsWith"(string0: string): boolean
"endsWith"(path0: $Path$$Type): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<$Path$$Type>): void
"getFileName"(): $Path
"getFileSystem"(): $FileSystem
"getName"(int0: integer): $Path
"getNameCount"(): integer
"getParent"(): $Path
"getRoot"(): $Path
"hashCode"(): integer
"isAbsolute"(): boolean
"iterator"(): $Iterator<$Path>
"normalize"(): $Path
"register"(watchService0: $WatchService$$Type, ...kind1s: $WatchEvent$Kind$$Type<any>[]): $WatchKey
"register"(watchService0: $WatchService$$Type, kind1s: $WatchEvent$Kind$$Type<any>[], ...modifier2s: $WatchEvent$Modifier$$Type[]): $WatchKey
"relativize"(path0: $Path$$Type): $Path
"resolve"(path0: $Path$$Type): $Path
"resolve"(string0: string): $Path
"resolveSibling"(path0: $Path$$Type): $Path
"resolveSibling"(string0: string): $Path
"spliterator"(): $Spliterator<$Path>
"startsWith"(path0: $Path$$Type): boolean
"startsWith"(string0: string): boolean
"subpath"(int0: integer, int1: integer): $Path
"toAbsolutePath"(): $Path
"toFile"(): $File
"toRealPath"(...linkOption0s: $LinkOption$$Type[]): $Path
"toString"(): string
"toUri"(): $URI
[Symbol.iterator](): IterableIterator<$Path>;
get "fileName"(): $Path
get "fileSystem"(): $FileSystem
get "nameCount"(): integer
get "parent"(): $Path
get "root"(): $Path
get "absolute"(): boolean
}

export namespace $Path {
function of(string0: string, ...string1s: string[]): $Path
function of(uRI0: $URI$$Type): $Path
}
export abstract class $Path$$Static implements $Path {
static "of"(string0: string, ...string1s: string[]): $Path
static "of"(uRI0: $URI$$Type): $Path
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Path$$Type = ($Path);
}

declare module "java.nio.channels.Selector" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $SelectorProvider } from "java.nio.channels.spi.SelectorProvider"
import { $SelectionKey, $SelectionKey$$Type } from "java.nio.channels.SelectionKey"
import { $Closeable } from "java.io.Closeable"
import { $Set } from "java.util.Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Selector implements $Closeable {
public "close"(): void
public "isOpen"(): boolean
public "keys"(): $Set<$SelectionKey>
public static "open"(): $Selector
public "provider"(): $SelectorProvider
public "select"(consumer0: $Consumer$$Type<$SelectionKey$$Type>): integer
public "select"(consumer0: $Consumer$$Type<$SelectionKey$$Type>, long1: long): integer
public "select"(long0: long): integer
public "select"(): integer
public "selectNow"(consumer0: $Consumer$$Type<$SelectionKey$$Type>): integer
public "selectNow"(): integer
public "selectedKeys"(): $Set<$SelectionKey>
public "wakeup"(): $Selector
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Selector$$Type = ($Selector);
}

declare module "java.nio.file.attribute.GroupPrincipal" {
import { $UserPrincipal } from "java.nio.file.attribute.UserPrincipal"
import { $Subject$$Type } from "javax.security.auth.Subject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GroupPrincipal extends $UserPrincipal {
"equals"(object0: any): boolean
"getName"(): string
"hashCode"(): integer
"implies"(subject0: $Subject$$Type): boolean
"toString"(): string
get "name"(): string
}

export namespace $GroupPrincipal {
const probejs$$marker: never
}
export abstract class $GroupPrincipal$$Static implements $GroupPrincipal {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GroupPrincipal$$Type = ($GroupPrincipal);
}

declare module "java.nio.channels.ServerSocketChannel" {
import { $ServerSocket } from "java.net.ServerSocket"
import { $SocketChannel } from "java.nio.channels.SocketChannel"
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $SocketOption, $SocketOption$$Type } from "java.net.SocketOption"
import { $ProtocolFamily$$Type } from "java.net.ProtocolFamily"
import { $Set } from "java.util.Set"
import { $NetworkChannel } from "java.nio.channels.NetworkChannel"
import { $AbstractSelectableChannel } from "java.nio.channels.spi.AbstractSelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocketChannel extends $AbstractSelectableChannel implements $NetworkChannel {
public "accept"(): $SocketChannel
public "bind"(socketAddress0: $SocketAddress$$Type, int1: integer): $ServerSocketChannel
public "close"(): void
public "getLocalAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "isOpen"(): boolean
public static "open"(): $ServerSocketChannel
public static "open"(protocolFamily0: $ProtocolFamily$$Type): $ServerSocketChannel
public "setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $ServerSocketChannel
public "socket"(): $ServerSocket
public "supportedOptions"(): $Set<$SocketOption<any>>
get "localAddress"(): $SocketAddress
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerSocketChannel$$Type = ($ServerSocketChannel);
}

declare module "java.nio.charset.CodingErrorAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CodingErrorAction {
static readonly "IGNORE": $CodingErrorAction
static readonly "REPLACE": $CodingErrorAction
static readonly "REPORT": $CodingErrorAction

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CodingErrorAction$$Type = ($CodingErrorAction);
}

declare module "java.nio.DoubleBuffer" {
import { $ByteOrder } from "java.nio.ByteOrder"
import { $Buffer } from "java.nio.Buffer"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DoubleBuffer extends $Buffer implements $Comparable<$DoubleBuffer> {
public static "allocate"(int0: integer): $DoubleBuffer
public "asReadOnlyBuffer"(): $DoubleBuffer
public "compact"(): $DoubleBuffer
public "compareTo"(doubleBuffer0: $DoubleBuffer$$Type): integer
public "duplicate"(): $DoubleBuffer
public "flip"(): $DoubleBuffer
public "get"(double0s: double[], int1: integer, int2: integer): $DoubleBuffer
public "get"(double0s: double[]): $DoubleBuffer
public "get"(int0: integer, double1s: double[]): $DoubleBuffer
public "get"(): double
public "get"(int0: integer, double1s: double[], int2: integer, int3: integer): $DoubleBuffer
public "get"(int0: integer): double
public "limit"(int0: integer): $DoubleBuffer
public "mark"(): $DoubleBuffer
public "mismatch"(doubleBuffer0: $DoubleBuffer$$Type): integer
public "order"(): $ByteOrder
public "put"(double0s: double[]): $DoubleBuffer
public "put"(double0s: double[], int1: integer, int2: integer): $DoubleBuffer
public "put"(int0: integer, double1s: double[]): $DoubleBuffer
public "put"(int0: integer, double1s: double[], int2: integer, int3: integer): $DoubleBuffer
public "put"(double0: double): $DoubleBuffer
public "put"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "put"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type, int2: integer, int3: integer): $DoubleBuffer
public "put"(int0: integer, double1: double): $DoubleBuffer
public "reset"(): $DoubleBuffer
public "rewind"(): $DoubleBuffer
public "slice"(int0: integer, int1: integer): $DoubleBuffer
public static "wrap"(double0s: double[]): $DoubleBuffer
public static "wrap"(double0s: double[], int1: integer, int2: integer): $DoubleBuffer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DoubleBuffer$$Type = ($DoubleBuffer);
}

declare module "java.nio.channels.WritableByteChannel" {
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WritableByteChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $WritableByteChannel {
const probejs$$marker: never
}
export abstract class $WritableByteChannel$$Static implements $WritableByteChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WritableByteChannel$$Type = ($WritableByteChannel);
}

declare module "java.nio.FloatBuffer" {
import { $ByteOrder } from "java.nio.ByteOrder"
import { $Buffer } from "java.nio.Buffer"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FloatBuffer extends $Buffer implements $Comparable<$FloatBuffer> {
public static "allocate"(int0: integer): $FloatBuffer
public "asReadOnlyBuffer"(): $FloatBuffer
public "compact"(): $FloatBuffer
public "compareTo"(floatBuffer0: $FloatBuffer$$Type): integer
public "duplicate"(): $FloatBuffer
public "flip"(): $FloatBuffer
public "get"(float0s: float[], int1: integer, int2: integer): $FloatBuffer
public "get"(float0s: float[]): $FloatBuffer
public "get"(int0: integer, float1s: float[]): $FloatBuffer
public "get"(): float
public "get"(int0: integer, float1s: float[], int2: integer, int3: integer): $FloatBuffer
public "get"(int0: integer): float
public "limit"(int0: integer): $FloatBuffer
public "mark"(): $FloatBuffer
public "mismatch"(floatBuffer0: $FloatBuffer$$Type): integer
public "order"(): $ByteOrder
public "put"(float0s: float[]): $FloatBuffer
public "put"(float0s: float[], int1: integer, int2: integer): $FloatBuffer
public "put"(int0: integer, float1s: float[]): $FloatBuffer
public "put"(int0: integer, float1s: float[], int2: integer, int3: integer): $FloatBuffer
public "put"(float0: float): $FloatBuffer
public "put"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "put"(int0: integer, floatBuffer1: $FloatBuffer$$Type, int2: integer, int3: integer): $FloatBuffer
public "put"(int0: integer, float1: float): $FloatBuffer
public "reset"(): $FloatBuffer
public "rewind"(): $FloatBuffer
public "slice"(int0: integer, int1: integer): $FloatBuffer
public static "wrap"(float0s: float[]): $FloatBuffer
public static "wrap"(float0s: float[], int1: integer, int2: integer): $FloatBuffer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FloatBuffer$$Type = ($FloatBuffer);
}

declare module "java.nio.file.spi.FileSystemProvider" {
import { $OutputStream } from "java.io.OutputStream"
import { $FileStore } from "java.nio.file.FileStore"
import { $DirectoryStream$Filter$$Type } from "java.nio.file.DirectoryStream$Filter"
import { $OpenOption$$Type } from "java.nio.file.OpenOption"
import { $FileAttributeView, $FileAttributeView$$Type } from "java.nio.file.attribute.FileAttributeView"
import { $Set$$Type } from "java.util.Set"
import { $FileAttribute$$Type } from "java.nio.file.attribute.FileAttribute"
import { $AsynchronousFileChannel } from "java.nio.channels.AsynchronousFileChannel"
import { $FileSystem } from "java.nio.file.FileSystem"
import { $BasicFileAttributes, $BasicFileAttributes$$Type } from "java.nio.file.attribute.BasicFileAttributes"
import { $AccessMode$$Type } from "java.nio.file.AccessMode"
import { $LinkOption$$Type } from "java.nio.file.LinkOption"
import { $SeekableByteChannel } from "java.nio.channels.SeekableByteChannel"
import { $DirectoryStream } from "java.nio.file.DirectoryStream"
import { $List } from "java.util.List"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Class$$Type } from "java.lang.Class"
import { $URI$$Type } from "java.net.URI"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $FileChannel } from "java.nio.channels.FileChannel"
import { $ExecutorService$$Type } from "java.util.concurrent.ExecutorService"
import { $CopyOption$$Type } from "java.nio.file.CopyOption"
import { $InputStream } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystemProvider {
public "checkAccess"(path0: $Path$$Type, ...accessMode1s: $AccessMode$$Type[]): void
public "copy"(path0: $Path$$Type, path1: $Path$$Type, ...copyOption2s: $CopyOption$$Type[]): void
public "createDirectory"(path0: $Path$$Type, ...fileAttribute1s: $FileAttribute$$Type<any>[]): void
public "createLink"(path0: $Path$$Type, path1: $Path$$Type): void
public "createSymbolicLink"(path0: $Path$$Type, path1: $Path$$Type, ...fileAttribute2s: $FileAttribute$$Type<any>[]): void
public "delete"(path0: $Path$$Type): void
public "deleteIfExists"(path0: $Path$$Type): boolean
public "getFileAttributeView"<V extends $FileAttributeView>(path0: $Path$$Type, class1: $Class$$Type<V>, ...linkOption2s: $LinkOption$$Type[]): V
public "getFileStore"(path0: $Path$$Type): $FileStore
public "getFileSystem"(uRI0: $URI$$Type): $FileSystem
public "getPath"(uRI0: $URI$$Type): $Path
public "getScheme"(): string
public static "installedProviders"(): $List<$FileSystemProvider>
public "isHidden"(path0: $Path$$Type): boolean
public "isSameFile"(path0: $Path$$Type, path1: $Path$$Type): boolean
public "move"(path0: $Path$$Type, path1: $Path$$Type, ...copyOption2s: $CopyOption$$Type[]): void
public "newAsynchronousFileChannel"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, executorService2: $ExecutorService$$Type, ...fileAttribute3s: $FileAttribute$$Type<any>[]): $AsynchronousFileChannel
public "newByteChannel"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, ...fileAttribute2s: $FileAttribute$$Type<any>[]): $SeekableByteChannel
public "newDirectoryStream"(path0: $Path$$Type, filter1: $DirectoryStream$Filter$$Type<$Path$$Type>): $DirectoryStream<$Path>
public "newFileChannel"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, ...fileAttribute2s: $FileAttribute$$Type<any>[]): $FileChannel
public "newFileSystem"(path0: $Path$$Type, map1: $Map$$Type<string, any>): $FileSystem
public "newFileSystem"(uRI0: $URI$$Type, map1: $Map$$Type<string, any>): $FileSystem
public "newInputStream"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $InputStream
public "newOutputStream"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $OutputStream
public "readAttributes"<A extends $BasicFileAttributes>(path0: $Path$$Type, class1: $Class$$Type<A>, ...linkOption2s: $LinkOption$$Type[]): A
public "readAttributes"(path0: $Path$$Type, string1: string, ...linkOption2s: $LinkOption$$Type[]): $Map<string, any>
public "readSymbolicLink"(path0: $Path$$Type): $Path
public "setAttribute"(path0: $Path$$Type, string1: string, object2: any, ...linkOption3s: $LinkOption$$Type[]): void
get "scheme"(): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileSystemProvider$$Type = ($FileSystemProvider);
}

declare module "java.nio.file.attribute.UserPrincipalLookupService" {
import { $UserPrincipal } from "java.nio.file.attribute.UserPrincipal"
import { $GroupPrincipal } from "java.nio.file.attribute.GroupPrincipal"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $UserPrincipalLookupService {
public "lookupPrincipalByGroupName"(string0: string): $GroupPrincipal
public "lookupPrincipalByName"(string0: string): $UserPrincipal
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UserPrincipalLookupService$$Type = ($UserPrincipalLookupService);
}

declare module "java.nio.channels.AsynchronousFileChannel" {
import { $Future } from "java.util.concurrent.Future"
import { $OpenOption$$Type } from "java.nio.file.OpenOption"
import { $CompletionHandler$$Type } from "java.nio.channels.CompletionHandler"
import { $Set$$Type } from "java.util.Set"
import { $FileAttribute$$Type } from "java.nio.file.attribute.FileAttribute"
import { $Path$$Type } from "java.nio.file.Path"
import { $ExecutorService$$Type } from "java.util.concurrent.ExecutorService"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $FileLock, $FileLock$$Type } from "java.nio.channels.FileLock"
import { $AsynchronousChannel } from "java.nio.channels.AsynchronousChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AsynchronousFileChannel implements $AsynchronousChannel {
public "close"(): void
public "force"(boolean0: boolean): void
public "isOpen"(): boolean
public "lock"(long0: long, long1: long, boolean2: boolean): $Future<$FileLock>
public "lock"(): $Future<$FileLock>
public "lock"<A>(long0: long, long1: long, boolean2: boolean, a3: A, completionHandler4: $CompletionHandler$$Type<$FileLock$$Type, A>): void
public "lock"<A>(a0: A, completionHandler1: $CompletionHandler$$Type<$FileLock$$Type, A>): void
public static "open"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $AsynchronousFileChannel
public static "open"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, executorService2: $ExecutorService$$Type, ...fileAttribute3s: $FileAttribute$$Type<any>[]): $AsynchronousFileChannel
public "read"(byteBuffer0: $ByteBuffer$$Type, long1: long): $Future<integer>
public "read"<A>(byteBuffer0: $ByteBuffer$$Type, long1: long, a2: A, completionHandler3: $CompletionHandler$$Type<integer, A>): void
public "size"(): long
public "truncate"(long0: long): $AsynchronousFileChannel
public "tryLock"(long0: long, long1: long, boolean2: boolean): $FileLock
public "tryLock"(): $FileLock
public "write"(byteBuffer0: $ByteBuffer$$Type, long1: long): $Future<integer>
public "write"<A>(byteBuffer0: $ByteBuffer$$Type, long1: long, a2: A, completionHandler3: $CompletionHandler$$Type<integer, A>): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AsynchronousFileChannel$$Type = ($AsynchronousFileChannel);
}

declare module "java.nio.charset.Charset" {
import { $CharBuffer, $CharBuffer$$Type } from "java.nio.CharBuffer"
import { $CharsetEncoder } from "java.nio.charset.CharsetEncoder"
import { $Locale$$Type } from "java.util.Locale"
import { $Set } from "java.util.Set"
import { $Comparable } from "java.lang.Comparable"
import { $CharsetDecoder } from "java.nio.charset.CharsetDecoder"
import { $SortedMap } from "java.util.SortedMap"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Charset implements $Comparable<$Charset> {
public "aliases"(): $Set<string>
public static "availableCharsets"(): $SortedMap<string, $Charset>
public "canEncode"(): boolean
public "compareTo"(charset0: $Charset$$Type): integer
public "contains"(charset0: $Charset$$Type): boolean
public "decode"(byteBuffer0: $ByteBuffer$$Type): $CharBuffer
public static "defaultCharset"(): $Charset
public "displayName"(): string
public "displayName"(locale0: $Locale$$Type): string
public "encode"(charBuffer0: $CharBuffer$$Type): $ByteBuffer
public "encode"(string0: string): $ByteBuffer
public static "forName"(string0: string): $Charset
public "isRegistered"(): boolean
public static "isSupported"(string0: string): boolean
public "name"(): string
public "newDecoder"(): $CharsetDecoder
public "newEncoder"(): $CharsetEncoder
get "registered"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Charset$$Type = ($Charset);
}

declare module "java.nio.channels.SelectableChannel" {
import { $SelectorProvider } from "java.nio.channels.spi.SelectorProvider"
import { $SelectionKey } from "java.nio.channels.SelectionKey"
import { $Selector$$Type } from "java.nio.channels.Selector"
import { $AbstractInterruptibleChannel } from "java.nio.channels.spi.AbstractInterruptibleChannel"
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectableChannel extends $AbstractInterruptibleChannel implements $Channel {
public "blockingLock"(): any
public "close"(): void
public "configureBlocking"(boolean0: boolean): $SelectableChannel
public "isBlocking"(): boolean
public "isOpen"(): boolean
public "isRegistered"(): boolean
public "keyFor"(selector0: $Selector$$Type): $SelectionKey
public "provider"(): $SelectorProvider
public "register"(selector0: $Selector$$Type, int1: integer, object2: any): $SelectionKey
public "register"(selector0: $Selector$$Type, int1: integer): $SelectionKey
public "validOps"(): integer
get "blocking"(): boolean
get "open"(): boolean
get "registered"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SelectableChannel$$Type = ($SelectableChannel);
}

declare module "java.nio.ShortBuffer" {
import { $ByteOrder } from "java.nio.ByteOrder"
import { $Buffer } from "java.nio.Buffer"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ShortBuffer extends $Buffer implements $Comparable<$ShortBuffer> {
public static "allocate"(int0: integer): $ShortBuffer
public "asReadOnlyBuffer"(): $ShortBuffer
public "compact"(): $ShortBuffer
public "compareTo"(shortBuffer0: $ShortBuffer$$Type): integer
public "duplicate"(): $ShortBuffer
public "flip"(): $ShortBuffer
public "get"(short0s: short[], int1: integer, int2: integer): $ShortBuffer
public "get"(short0s: short[]): $ShortBuffer
public "get"(int0: integer, short1s: short[]): $ShortBuffer
public "get"(): short
public "get"(int0: integer, short1s: short[], int2: integer, int3: integer): $ShortBuffer
public "get"(int0: integer): short
public "limit"(int0: integer): $ShortBuffer
public "mark"(): $ShortBuffer
public "mismatch"(shortBuffer0: $ShortBuffer$$Type): integer
public "order"(): $ByteOrder
public "put"(short0s: short[]): $ShortBuffer
public "put"(short0s: short[], int1: integer, int2: integer): $ShortBuffer
public "put"(int0: integer, short1s: short[]): $ShortBuffer
public "put"(int0: integer, short1s: short[], int2: integer, int3: integer): $ShortBuffer
public "put"(short0: short): $ShortBuffer
public "put"(shortBuffer0: $ShortBuffer$$Type): $ShortBuffer
public "put"(int0: integer, shortBuffer1: $ShortBuffer$$Type, int2: integer, int3: integer): $ShortBuffer
public "put"(int0: integer, short1: short): $ShortBuffer
public "reset"(): $ShortBuffer
public "rewind"(): $ShortBuffer
public "slice"(int0: integer, int1: integer): $ShortBuffer
public static "wrap"(short0s: short[]): $ShortBuffer
public static "wrap"(short0s: short[], int1: integer, int2: integer): $ShortBuffer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShortBuffer$$Type = ($ShortBuffer);
}

declare module "java.nio.file.AccessMode" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessMode extends $Enum<$AccessMode> {
static readonly "EXECUTE": $AccessMode
static readonly "READ": $AccessMode
static readonly "WRITE": $AccessMode

public static "valueOf"(string0: string): $AccessMode
public static "values"(): $AccessMode[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessMode$$Type = ($AccessMode | ("read" | "write" | "execute"));
}

declare module "java.nio.channels.ByteChannel" {
import { $ReadableByteChannel } from "java.nio.channels.ReadableByteChannel"
import { $WritableByteChannel } from "java.nio.channels.WritableByteChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteChannel extends $ReadableByteChannel, $WritableByteChannel {
"close"(): void
"isOpen"(): boolean
"read"(byteBuffer0: $ByteBuffer$$Type): integer
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $ByteChannel {
const probejs$$marker: never
}
export abstract class $ByteChannel$$Static implements $ByteChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ByteChannel$$Type = ($ByteChannel);
}

declare module "java.nio.file.CopyOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CopyOption {
}

export namespace $CopyOption {
const probejs$$marker: never
}
export abstract class $CopyOption$$Static implements $CopyOption {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CopyOption$$Type = ($CopyOption);
}

declare module "java.nio.ByteOrder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ByteOrder$$Type = ($ByteOrder);
}

declare module "java.nio.channels.spi.AbstractSelectableChannel" {
import { $SelectableChannel } from "java.nio.channels.SelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelectableChannel extends $SelectableChannel {
public "close"(): void
public "isOpen"(): boolean
get "open"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractSelectableChannel$$Type = ($AbstractSelectableChannel);
}

declare module "java.nio.file.FileStore" {
import { $FileAttributeView$$Type } from "java.nio.file.attribute.FileAttributeView"
import { $Class$$Type } from "java.lang.Class"
import { $FileStoreAttributeView, $FileStoreAttributeView$$Type } from "java.nio.file.attribute.FileStoreAttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileStore {
public "getAttribute"(string0: string): any
public "getBlockSize"(): long
public "getFileStoreAttributeView"<V extends $FileStoreAttributeView>(class0: $Class$$Type<V>): V
public "getTotalSpace"(): long
public "getUnallocatedSpace"(): long
public "getUsableSpace"(): long
public "isReadOnly"(): boolean
public "name"(): string
public "supportsFileAttributeView"(string0: string): boolean
public "supportsFileAttributeView"(class0: $Class$$Type<$FileAttributeView$$Type>): boolean
public "type"(): string
get "blockSize"(): long
get "totalSpace"(): long
get "unallocatedSpace"(): long
get "usableSpace"(): long
get "readOnly"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileStore$$Type = ($FileStore);
}

declare module "java.nio.file.DirectoryStream$Filter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream$Filter<T = any> {
"accept"(t0: T): boolean
}

export namespace $DirectoryStream$Filter {
const probejs$$marker: never
}
export abstract class $DirectoryStream$Filter$$Static<T = any> implements $DirectoryStream$Filter<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DirectoryStream$Filter$$Type<T = any> = ($DirectoryStream$Filter<T> | ((arg0: T) => boolean));
}

declare module "java.nio.channels.Channel" {
import { $Closeable } from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $Closeable {
"close"(): void
"isOpen"(): boolean
get "open"(): boolean
}

export namespace $Channel {
const probejs$$marker: never
}
export abstract class $Channel$$Static implements $Channel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Channel$$Type = ($Channel);
}

declare module "java.nio.Buffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Buffer {
public "array"(): any
public "arrayOffset"(): integer
public "capacity"(): integer
public "clear"(): $Buffer
public "duplicate"(): $Buffer
public "flip"(): $Buffer
public "hasArray"(): boolean
public "hasRemaining"(): boolean
public "isDirect"(): boolean
public "isReadOnly"(): boolean
public "limit"(int0: integer): $Buffer
public "limit"(): integer
public "mark"(): $Buffer
public "position"(): integer
public "position"(int0: integer): $Buffer
public "remaining"(): integer
public "reset"(): $Buffer
public "rewind"(): $Buffer
public "slice"(int0: integer, int1: integer): $Buffer
public "slice"(): $Buffer
get "direct"(): boolean
get "readOnly"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Buffer$$Type = ($Buffer);
}

declare module "java.nio.channels.Pipe" {
import { $Pipe$SourceChannel } from "java.nio.channels.Pipe$SourceChannel"
import { $Pipe$SinkChannel } from "java.nio.channels.Pipe$SinkChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe {
public static "open"(): $Pipe
public "sink"(): $Pipe$SinkChannel
public "source"(): $Pipe$SourceChannel
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Pipe$$Type = ($Pipe);
}

declare module "java.nio.file.OpenOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OpenOption {
}

export namespace $OpenOption {
const probejs$$marker: never
}
export abstract class $OpenOption$$Static implements $OpenOption {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OpenOption$$Type = ($OpenOption);
}

declare module "java.nio.file.WatchEvent$Kind" {
import { $Class } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Kind<T = any> {
"name"(): string
"type"(): $Class<T>
}

export namespace $WatchEvent$Kind {
const probejs$$marker: never
}
export abstract class $WatchEvent$Kind$$Static<T = any> implements $WatchEvent$Kind<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WatchEvent$Kind$$Type<T = any> = ($WatchEvent$Kind<T>);
}

declare module "java.nio.channels.MulticastChannel" {
import { $InetAddress$$Type } from "java.net.InetAddress"
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $SocketOption, $SocketOption$$Type } from "java.net.SocketOption"
import { $NetworkInterface$$Type } from "java.net.NetworkInterface"
import { $NetworkChannel } from "java.nio.channels.NetworkChannel"
import { $Set } from "java.util.Set"
import { $MembershipKey } from "java.nio.channels.MembershipKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MulticastChannel extends $NetworkChannel {
"bind"(socketAddress0: $SocketAddress$$Type): $NetworkChannel
"close"(): void
"getLocalAddress"(): $SocketAddress
"getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
"isOpen"(): boolean
"join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type): $MembershipKey
"join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type, inetAddress2: $InetAddress$$Type): $MembershipKey
"setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $NetworkChannel
"supportedOptions"(): $Set<$SocketOption<any>>
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export namespace $MulticastChannel {
const probejs$$marker: never
}
export abstract class $MulticastChannel$$Static implements $MulticastChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MulticastChannel$$Type = ($MulticastChannel);
}

declare module "java.nio.channels.SelectionKey" {
import { $SelectableChannel } from "java.nio.channels.SelectableChannel"
import { $Selector } from "java.nio.channels.Selector"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectionKey {
static readonly "OP_ACCEPT": integer
static readonly "OP_CONNECT": integer
static readonly "OP_READ": integer
static readonly "OP_WRITE": integer

public "attach"(object0: any): any
public "attachment"(): any
public "cancel"(): void
public "channel"(): $SelectableChannel
public "interestOps"(int0: integer): $SelectionKey
public "interestOps"(): integer
public "interestOpsAnd"(int0: integer): integer
public "interestOpsOr"(int0: integer): integer
public "isAcceptable"(): boolean
public "isConnectable"(): boolean
public "isReadable"(): boolean
public "isValid"(): boolean
public "isWritable"(): boolean
public "readyOps"(): integer
public "selector"(): $Selector
get "acceptable"(): boolean
get "connectable"(): boolean
get "readable"(): boolean
get "valid"(): boolean
get "writable"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SelectionKey$$Type = ($SelectionKey);
}

declare module "java.nio.file.WatchKey" {
import { $List } from "java.util.List"
import { $WatchEvent } from "java.nio.file.WatchEvent"
import { $Watchable } from "java.nio.file.Watchable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchKey {
"cancel"(): void
"isValid"(): boolean
"pollEvents"(): $List<$WatchEvent<any>>
"reset"(): boolean
"watchable"(): $Watchable
get "valid"(): boolean
}

export namespace $WatchKey {
const probejs$$marker: never
}
export abstract class $WatchKey$$Static implements $WatchKey {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WatchKey$$Type = ($WatchKey);
}

declare module "java.nio.file.attribute.FileAttributeView" {
import { $AttributeView } from "java.nio.file.attribute.AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttributeView extends $AttributeView {
"name"(): string
}

export namespace $FileAttributeView {
const probejs$$marker: never
}
export abstract class $FileAttributeView$$Static implements $FileAttributeView {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileAttributeView$$Type = ($FileAttributeView | (() => string));
}

declare module "java.nio.channels.SeekableByteChannel" {
import { $ByteChannel } from "java.nio.channels.ByteChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SeekableByteChannel extends $ByteChannel {
"close"(): void
"isOpen"(): boolean
"position"(long0: long): $SeekableByteChannel
"position"(): long
"read"(byteBuffer0: $ByteBuffer$$Type): integer
"size"(): long
"truncate"(long0: long): $SeekableByteChannel
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $SeekableByteChannel {
const probejs$$marker: never
}
export abstract class $SeekableByteChannel$$Static implements $SeekableByteChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SeekableByteChannel$$Type = ($SeekableByteChannel);
}

declare module "java.nio.charset.CharsetEncoder" {
import { $CoderResult } from "java.nio.charset.CoderResult"
import { $Charset } from "java.nio.charset.Charset"
import { $CharBuffer$$Type } from "java.nio.CharBuffer"
import { $CodingErrorAction, $CodingErrorAction$$Type } from "java.nio.charset.CodingErrorAction"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetEncoder {
public "averageBytesPerChar"(): float
public "canEncode"(charSequence0: charseq): boolean
public "canEncode"(char0: character): boolean
public "charset"(): $Charset
public "encode"(charBuffer0: $CharBuffer$$Type): $ByteBuffer
public "encode"(charBuffer0: $CharBuffer$$Type, byteBuffer1: $ByteBuffer$$Type, boolean2: boolean): $CoderResult
public "flush"(byteBuffer0: $ByteBuffer$$Type): $CoderResult
public "isLegalReplacement"(byte0s: byte[]): boolean
public "malformedInputAction"(): $CodingErrorAction
public "maxBytesPerChar"(): float
public "onMalformedInput"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetEncoder
public "onUnmappableCharacter"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetEncoder
public "replaceWith"(byte0s: byte[]): $CharsetEncoder
public "replacement"(): byte[]
public "reset"(): $CharsetEncoder
public "unmappableCharacterAction"(): $CodingErrorAction
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CharsetEncoder$$Type = ($CharsetEncoder);
}

declare module "java.nio.channels.spi.AbstractSelector" {
import { $Selector } from "java.nio.channels.Selector"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelector extends $Selector {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractSelector$$Type = ($AbstractSelector);
}

declare module "java.nio.file.Watchable" {
import { $WatchKey } from "java.nio.file.WatchKey"
import { $WatchEvent$Modifier$$Type } from "java.nio.file.WatchEvent$Modifier"
import { $WatchService$$Type } from "java.nio.file.WatchService"
import { $WatchEvent$Kind$$Type } from "java.nio.file.WatchEvent$Kind"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Watchable {
"register"(watchService0: $WatchService$$Type, kind1s: $WatchEvent$Kind$$Type<any>[], ...modifier2s: $WatchEvent$Modifier$$Type[]): $WatchKey
"register"(watchService0: $WatchService$$Type, ...kind1s: $WatchEvent$Kind$$Type<any>[]): $WatchKey
}

export namespace $Watchable {
const probejs$$marker: never
}
export abstract class $Watchable$$Static implements $Watchable {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Watchable$$Type = ($Watchable);
}

declare module "java.nio.CharBuffer" {
import { $IntStream } from "java.util.stream.IntStream"
import { $ByteOrder } from "java.nio.ByteOrder"
import { $Appendable } from "java.lang.Appendable"
import { $Buffer } from "java.nio.Buffer"
import { $Readable } from "java.lang.Readable"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharBuffer extends $Buffer implements $Comparable<$CharBuffer>, $Appendable, charseq, $Readable {
public static "allocate"(int0: integer): $CharBuffer
public "append"(charSequence0: charseq): $CharBuffer
public "append"(charSequence0: charseq, int1: integer, int2: integer): $CharBuffer
public "append"(char0: character): $CharBuffer
public "array"(): character[]
public "asReadOnlyBuffer"(): $CharBuffer
public "charAt"(int0: integer): character
public "chars"(): $IntStream
public "clear"(): $CharBuffer
public "codePoints"(): $IntStream
public "compact"(): $CharBuffer
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "compareTo"(charBuffer0: $CharBuffer$$Type): integer
public "duplicate"(): $CharBuffer
public "get"(int0: integer, char1s: character[]): $CharBuffer
public "get"(int0: integer, char1s: character[], int2: integer, int3: integer): $CharBuffer
public "get"(char0s: character[], int1: integer, int2: integer): $CharBuffer
public "get"(char0s: character[]): $CharBuffer
public "get"(): character
public "get"(int0: integer): character
public "isEmpty"(): boolean
public "length"(): integer
public "limit"(int0: integer): $CharBuffer
public "mark"(): $CharBuffer
public "mismatch"(charBuffer0: $CharBuffer$$Type): integer
public "order"(): $ByteOrder
public "position"(int0: integer): $CharBuffer
public "put"(char0s: character[]): $CharBuffer
public "put"(string0: string): $CharBuffer
public "put"(char0s: character[], int1: integer, int2: integer): $CharBuffer
public "put"(int0: integer, char1s: character[]): $CharBuffer
public "put"(int0: integer, char1s: character[], int2: integer, int3: integer): $CharBuffer
public "put"(char0: character): $CharBuffer
public "put"(int0: integer, char1: character): $CharBuffer
public "put"(string0: string, int1: integer, int2: integer): $CharBuffer
public "put"(charBuffer0: $CharBuffer$$Type): $CharBuffer
public "put"(int0: integer, charBuffer1: $CharBuffer$$Type, int2: integer, int3: integer): $CharBuffer
public "read"(charBuffer0: $CharBuffer$$Type): integer
public "rewind"(): $CharBuffer
public "slice"(int0: integer, int1: integer): $CharBuffer
public static "wrap"(char0s: character[]): $CharBuffer
public static "wrap"(charSequence0: charseq): $CharBuffer
public static "wrap"(charSequence0: charseq, int1: integer, int2: integer): $CharBuffer
public static "wrap"(char0s: character[], int1: integer, int2: integer): $CharBuffer
get "empty"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CharBuffer$$Type = ($CharBuffer);
}

declare module "java.nio.file.WatchService" {
import { $WatchKey } from "java.nio.file.WatchKey"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $Closeable } from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchService extends $Closeable {
"close"(): void
"poll"(long0: long, timeUnit1: $TimeUnit$$Type): $WatchKey
"poll"(): $WatchKey
"take"(): $WatchKey
}

export namespace $WatchService {
const probejs$$marker: never
}
export abstract class $WatchService$$Static implements $WatchService {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WatchService$$Type = ($WatchService);
}

declare module "java.nio.channels.GatheringByteChannel" {
import { $WritableByteChannel } from "java.nio.channels.WritableByteChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GatheringByteChannel extends $WritableByteChannel {
"close"(): void
"isOpen"(): boolean
"write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
"write"(byteBuffer0s: $ByteBuffer$$Type[]): long
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $GatheringByteChannel {
const probejs$$marker: never
}
export abstract class $GatheringByteChannel$$Static implements $GatheringByteChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GatheringByteChannel$$Type = ($GatheringByteChannel);
}

declare module "java.nio.channels.Pipe$SourceChannel" {
import { $ReadableByteChannel } from "java.nio.channels.ReadableByteChannel"
import { $ScatteringByteChannel } from "java.nio.channels.ScatteringByteChannel"
import { $AbstractSelectableChannel } from "java.nio.channels.spi.AbstractSelectableChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SourceChannel extends $AbstractSelectableChannel implements $ReadableByteChannel, $ScatteringByteChannel {
public "close"(): void
public "isOpen"(): boolean
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
get "open"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Pipe$SourceChannel$$Type = ($Pipe$SourceChannel);
}

declare module "java.nio.file.FileSystem" {
import { $WatchService } from "java.nio.file.WatchService"
import { $FileStore } from "java.nio.file.FileStore"
import { $Closeable } from "java.io.Closeable"
import { $PathMatcher } from "java.nio.file.PathMatcher"
import { $UserPrincipalLookupService } from "java.nio.file.attribute.UserPrincipalLookupService"
import { $Set } from "java.util.Set"
import { $FileSystemProvider } from "java.nio.file.spi.FileSystemProvider"
import { $Path } from "java.nio.file.Path"
import { $Iterable } from "java.lang.Iterable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystem implements $Closeable {
public "close"(): void
public "getFileStores"(): $Iterable<$FileStore>
public "getPath"(string0: string, ...string1s: string[]): $Path
public "getPathMatcher"(string0: string): $PathMatcher
public "getRootDirectories"(): $Iterable<$Path>
public "getSeparator"(): string
public "getUserPrincipalLookupService"(): $UserPrincipalLookupService
public "isOpen"(): boolean
public "isReadOnly"(): boolean
public "newWatchService"(): $WatchService
public "provider"(): $FileSystemProvider
public "supportedFileAttributeViews"(): $Set<string>
get "fileStores"(): $Iterable<$FileStore>
get "rootDirectories"(): $Iterable<$Path>
get "separator"(): string
get "userPrincipalLookupService"(): $UserPrincipalLookupService
get "open"(): boolean
get "readOnly"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileSystem$$Type = ($FileSystem);
}

declare module "java.nio.MappedByteBuffer" {
import { $ByteBuffer } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MappedByteBuffer extends $ByteBuffer {
public "compact"(): $MappedByteBuffer
public "force"(): $MappedByteBuffer
public "force"(int0: integer, int1: integer): $MappedByteBuffer
public "isLoaded"(): boolean
public "limit"(int0: integer): $MappedByteBuffer
public "load"(): $MappedByteBuffer
public "slice"(int0: integer, int1: integer): $MappedByteBuffer
public "slice"(): $MappedByteBuffer
get "loaded"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MappedByteBuffer$$Type = ($MappedByteBuffer);
}

declare module "java.nio.charset.CharsetDecoder" {
import { $CoderResult } from "java.nio.charset.CoderResult"
import { $Charset } from "java.nio.charset.Charset"
import { $CharBuffer, $CharBuffer$$Type } from "java.nio.CharBuffer"
import { $CodingErrorAction, $CodingErrorAction$$Type } from "java.nio.charset.CodingErrorAction"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetDecoder {
public "averageCharsPerByte"(): float
public "charset"(): $Charset
public "decode"(byteBuffer0: $ByteBuffer$$Type): $CharBuffer
public "decode"(byteBuffer0: $ByteBuffer$$Type, charBuffer1: $CharBuffer$$Type, boolean2: boolean): $CoderResult
public "detectedCharset"(): $Charset
public "flush"(charBuffer0: $CharBuffer$$Type): $CoderResult
public "isAutoDetecting"(): boolean
public "isCharsetDetected"(): boolean
public "malformedInputAction"(): $CodingErrorAction
public "maxCharsPerByte"(): float
public "onMalformedInput"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetDecoder
public "onUnmappableCharacter"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetDecoder
public "replaceWith"(string0: string): $CharsetDecoder
public "replacement"(): string
public "reset"(): $CharsetDecoder
public "unmappableCharacterAction"(): $CodingErrorAction
get "autoDetecting"(): boolean
get "charsetDetected"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CharsetDecoder$$Type = ($CharsetDecoder);
}

declare module "java.nio.channels.FileChannel$MapMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel$MapMode {
static readonly "PRIVATE": $FileChannel$MapMode
static readonly "READ_ONLY": $FileChannel$MapMode
static readonly "READ_WRITE": $FileChannel$MapMode

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileChannel$MapMode$$Type = ($FileChannel$MapMode);
}

declare module "java.nio.channels.MembershipKey" {
import { $InetAddress, $InetAddress$$Type } from "java.net.InetAddress"
import { $NetworkInterface } from "java.net.NetworkInterface"
import { $MulticastChannel } from "java.nio.channels.MulticastChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MembershipKey {
public "block"(inetAddress0: $InetAddress$$Type): $MembershipKey
public "channel"(): $MulticastChannel
public "drop"(): void
public "group"(): $InetAddress
public "isValid"(): boolean
public "networkInterface"(): $NetworkInterface
public "sourceAddress"(): $InetAddress
public "unblock"(inetAddress0: $InetAddress$$Type): $MembershipKey
get "valid"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MembershipKey$$Type = ($MembershipKey);
}

declare module "java.nio.channels.spi.AbstractInterruptibleChannel" {
import { $InterruptibleChannel } from "java.nio.channels.InterruptibleChannel"
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractInterruptibleChannel implements $Channel, $InterruptibleChannel {
public "close"(): void
public "isOpen"(): boolean
get "open"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractInterruptibleChannel$$Type = ($AbstractInterruptibleChannel);
}

declare module "java.nio.file.LinkOption" {
import { $Enum } from "java.lang.Enum"
import { $OpenOption } from "java.nio.file.OpenOption"
import { $CopyOption } from "java.nio.file.CopyOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LinkOption extends $Enum<$LinkOption> implements $OpenOption, $CopyOption {
static readonly "NOFOLLOW_LINKS": $LinkOption

public static "valueOf"(string0: string): $LinkOption
public static "values"(): $LinkOption[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LinkOption$$Type = ($LinkOption | ("nofollow_links"));
}

declare module "java.nio.channels.CompletionHandler" {
import { $Throwable$$Type } from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CompletionHandler<V = any, A = any> {
"completed"(v0: V, a1: A): void
"failed"(throwable0: $Throwable$$Type, a1: A): void
}

export namespace $CompletionHandler {
const probejs$$marker: never
}
export abstract class $CompletionHandler$$Static<V = any, A = any> implements $CompletionHandler<V, A> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CompletionHandler$$Type<V = any, A = any> = ($CompletionHandler<V, A>);
}

declare module "java.nio.file.attribute.AttributeView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeView {
"name"(): string
}

export namespace $AttributeView {
const probejs$$marker: never
}
export abstract class $AttributeView$$Static implements $AttributeView {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeView$$Type = ($AttributeView | (() => string));
}

declare module "java.nio.channels.ScatteringByteChannel" {
import { $ReadableByteChannel } from "java.nio.channels.ReadableByteChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScatteringByteChannel extends $ReadableByteChannel {
"close"(): void
"isOpen"(): boolean
"read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
"read"(byteBuffer0s: $ByteBuffer$$Type[]): long
"read"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $ScatteringByteChannel {
const probejs$$marker: never
}
export abstract class $ScatteringByteChannel$$Static implements $ScatteringByteChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScatteringByteChannel$$Type = ($ScatteringByteChannel);
}

declare module "java.nio.file.WatchEvent" {
import { $WatchEvent$Kind } from "java.nio.file.WatchEvent$Kind"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent<T = any> {
"context"(): T
"count"(): integer
"kind"(): $WatchEvent$Kind<T>
}

export namespace $WatchEvent {
const probejs$$marker: never
}
export abstract class $WatchEvent$$Static<T = any> implements $WatchEvent<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WatchEvent$$Type<T = any> = ($WatchEvent<T>);
}

declare module "java.nio.file.WatchEvent$Modifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Modifier {
"name"(): string
}

export namespace $WatchEvent$Modifier {
const probejs$$marker: never
}
export abstract class $WatchEvent$Modifier$$Static implements $WatchEvent$Modifier {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WatchEvent$Modifier$$Type = ($WatchEvent$Modifier | (() => string));
}

declare module "java.nio.channels.SocketChannel" {
import { $Socket } from "java.net.Socket"
import { $ScatteringByteChannel } from "java.nio.channels.ScatteringByteChannel"
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $SocketOption, $SocketOption$$Type } from "java.net.SocketOption"
import { $ProtocolFamily$$Type } from "java.net.ProtocolFamily"
import { $Set } from "java.util.Set"
import { $ByteChannel } from "java.nio.channels.ByteChannel"
import { $NetworkChannel } from "java.nio.channels.NetworkChannel"
import { $AbstractSelectableChannel } from "java.nio.channels.spi.AbstractSelectableChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $GatheringByteChannel } from "java.nio.channels.GatheringByteChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $NetworkChannel {
public "close"(): void
public "connect"(socketAddress0: $SocketAddress$$Type): boolean
public "finishConnect"(): boolean
public "getLocalAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "getRemoteAddress"(): $SocketAddress
public "isConnected"(): boolean
public "isConnectionPending"(): boolean
public "isOpen"(): boolean
public static "open"(protocolFamily0: $ProtocolFamily$$Type): $SocketChannel
public static "open"(): $SocketChannel
public static "open"(socketAddress0: $SocketAddress$$Type): $SocketChannel
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "shutdownInput"(): $SocketChannel
public "shutdownOutput"(): $SocketChannel
public "socket"(): $Socket
public "supportedOptions"(): $Set<$SocketOption<any>>
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
get "connected"(): boolean
get "connectionPending"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SocketChannel$$Type = ($SocketChannel);
}

declare module "java.nio.channels.Pipe$SinkChannel" {
import { $WritableByteChannel } from "java.nio.channels.WritableByteChannel"
import { $AbstractSelectableChannel } from "java.nio.channels.spi.AbstractSelectableChannel"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $GatheringByteChannel } from "java.nio.channels.GatheringByteChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SinkChannel extends $AbstractSelectableChannel implements $WritableByteChannel, $GatheringByteChannel {
public "close"(): void
public "isOpen"(): boolean
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
get "open"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Pipe$SinkChannel$$Type = ($Pipe$SinkChannel);
}

declare module "java.nio.channels.FileLock" {
import { $FileChannel } from "java.nio.channels.FileChannel"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileLock implements $AutoCloseable {
public "acquiredBy"(): $Channel
public "channel"(): $FileChannel
public "close"(): void
public "isShared"(): boolean
public "isValid"(): boolean
public "overlaps"(long0: long, long1: long): boolean
public "position"(): long
public "release"(): void
public "size"(): long
get "shared"(): boolean
get "valid"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileLock$$Type = ($FileLock);
}

declare module "java.nio.channels.FileChannel" {
import { $ReadableByteChannel$$Type } from "java.nio.channels.ReadableByteChannel"
import { $ScatteringByteChannel } from "java.nio.channels.ScatteringByteChannel"
import { $OpenOption$$Type } from "java.nio.file.OpenOption"
import { $Set$$Type } from "java.util.Set"
import { $FileAttribute$$Type } from "java.nio.file.attribute.FileAttribute"
import { $FileChannel$MapMode$$Type } from "java.nio.channels.FileChannel$MapMode"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $FileLock } from "java.nio.channels.FileLock"
import { $SeekableByteChannel } from "java.nio.channels.SeekableByteChannel"
import { $WritableByteChannel$$Type } from "java.nio.channels.WritableByteChannel"
import { $AbstractInterruptibleChannel } from "java.nio.channels.spi.AbstractInterruptibleChannel"
import { $Path$$Type } from "java.nio.file.Path"
import { $MappedByteBuffer } from "java.nio.MappedByteBuffer"
import { $GatheringByteChannel } from "java.nio.channels.GatheringByteChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel extends $AbstractInterruptibleChannel implements $SeekableByteChannel, $GatheringByteChannel, $ScatteringByteChannel {
public "force"(boolean0: boolean): void
public "lock"(long0: long, long1: long, boolean2: boolean): $FileLock
public "lock"(): $FileLock
public "map"(mapMode0: $FileChannel$MapMode$$Type, long1: long, long2: long): $MappedByteBuffer
public static "open"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, ...fileAttribute2s: $FileAttribute$$Type<any>[]): $FileChannel
public static "open"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $FileChannel
public "position"(): long
public "read"(byteBuffer0: $ByteBuffer$$Type, long1: long): integer
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "size"(): long
public "transferFrom"(readableByteChannel0: $ReadableByteChannel$$Type, long1: long, long2: long): long
public "transferTo"(long0: long, long1: long, writableByteChannel2: $WritableByteChannel$$Type): long
public "truncate"(long0: long): $FileChannel
public "tryLock"(long0: long, long1: long, boolean2: boolean): $FileLock
public "tryLock"(): $FileLock
public "write"(byteBuffer0: $ByteBuffer$$Type, long1: long): integer
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileChannel$$Type = ($FileChannel);
}

declare module "java.nio.file.DirectoryStream" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Iterator } from "java.util.Iterator"
import { $Closeable } from "java.io.Closeable"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream<T = any> extends $Closeable, $Iterable<T> {
"close"(): void
"forEach"(consumer0: $Consumer$$Type<T>): void
"iterator"(): $Iterator<T>
"spliterator"(): $Spliterator<T>
[Symbol.iterator](): IterableIterator<T>;
}

export namespace $DirectoryStream {
const probejs$$marker: never
}
export abstract class $DirectoryStream$$Static<T = any> implements $DirectoryStream<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DirectoryStream$$Type<T = any> = ($DirectoryStream<T>);
}

declare module "java.nio.channels.spi.SelectorProvider" {
import { $AbstractSelector } from "java.nio.channels.spi.AbstractSelector"
import { $SocketChannel } from "java.nio.channels.SocketChannel"
import { $DatagramChannel } from "java.nio.channels.DatagramChannel"
import { $ProtocolFamily$$Type } from "java.net.ProtocolFamily"
import { $Channel } from "java.nio.channels.Channel"
import { $Pipe } from "java.nio.channels.Pipe"
import { $ServerSocketChannel } from "java.nio.channels.ServerSocketChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectorProvider {
public "inheritedChannel"(): $Channel
public "openDatagramChannel"(protocolFamily0: $ProtocolFamily$$Type): $DatagramChannel
public "openDatagramChannel"(): $DatagramChannel
public "openPipe"(): $Pipe
public "openSelector"(): $AbstractSelector
public "openServerSocketChannel"(): $ServerSocketChannel
public "openServerSocketChannel"(protocolFamily0: $ProtocolFamily$$Type): $ServerSocketChannel
public "openSocketChannel"(protocolFamily0: $ProtocolFamily$$Type): $SocketChannel
public "openSocketChannel"(): $SocketChannel
public static "provider"(): $SelectorProvider
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SelectorProvider$$Type = ($SelectorProvider);
}

declare module "java.nio.charset.CoderResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CoderResult {
static readonly "OVERFLOW": $CoderResult
static readonly "UNDERFLOW": $CoderResult

public "isError"(): boolean
public "isMalformed"(): boolean
public "isOverflow"(): boolean
public "isUnderflow"(): boolean
public "isUnmappable"(): boolean
public "length"(): integer
public static "malformedForLength"(int0: integer): $CoderResult
public "throwException"(): void
public static "unmappableForLength"(int0: integer): $CoderResult
get "error"(): boolean
get "malformed"(): boolean
get "overflow"(): boolean
get "underflow"(): boolean
get "unmappable"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoderResult$$Type = ($CoderResult);
}

declare module "java.nio.IntBuffer" {
import { $ByteOrder } from "java.nio.ByteOrder"
import { $Buffer } from "java.nio.Buffer"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IntBuffer extends $Buffer implements $Comparable<$IntBuffer> {
public static "allocate"(int0: integer): $IntBuffer
public "asReadOnlyBuffer"(): $IntBuffer
public "compact"(): $IntBuffer
public "compareTo"(intBuffer0: $IntBuffer$$Type): integer
public "duplicate"(): $IntBuffer
public "flip"(): $IntBuffer
public "get"(int0s: integer[], int1: integer, int2: integer): $IntBuffer
public "get"(int0s: integer[]): $IntBuffer
public "get"(int0: integer, int1s: integer[]): $IntBuffer
public "get"(): integer
public "get"(int0: integer, int1s: integer[], int2: integer, int3: integer): $IntBuffer
public "get"(int0: integer): integer
public "limit"(int0: integer): $IntBuffer
public "mark"(): $IntBuffer
public "mismatch"(intBuffer0: $IntBuffer$$Type): integer
public "order"(): $ByteOrder
public "put"(int0s: integer[]): $IntBuffer
public "put"(int0s: integer[], int1: integer, int2: integer): $IntBuffer
public "put"(int0: integer, int1s: integer[]): $IntBuffer
public "put"(int0: integer, int1s: integer[], int2: integer, int3: integer): $IntBuffer
public "put"(int0: integer): $IntBuffer
public "put"(intBuffer0: $IntBuffer$$Type): $IntBuffer
public "put"(int0: integer, intBuffer1: $IntBuffer$$Type, int2: integer, int3: integer): $IntBuffer
public "put"(int0: integer, int1: integer): $IntBuffer
public "reset"(): $IntBuffer
public "rewind"(): $IntBuffer
public "slice"(int0: integer, int1: integer): $IntBuffer
public static "wrap"(int0s: integer[]): $IntBuffer
public static "wrap"(int0s: integer[], int1: integer, int2: integer): $IntBuffer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IntBuffer$$Type = ($IntBuffer);
}

declare module "java.nio.file.attribute.FileAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttribute<T = any> {
"name"(): string
"value"(): T
}

export namespace $FileAttribute {
const probejs$$marker: never
}
export abstract class $FileAttribute$$Static<T = any> implements $FileAttribute<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileAttribute$$Type<T = any> = ($FileAttribute<T>);
}

declare module "java.nio.channels.ReadableByteChannel" {
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Channel } from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReadableByteChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
"read"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $ReadableByteChannel {
const probejs$$marker: never
}
export abstract class $ReadableByteChannel$$Static implements $ReadableByteChannel {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReadableByteChannel$$Type = ($ReadableByteChannel);
}

