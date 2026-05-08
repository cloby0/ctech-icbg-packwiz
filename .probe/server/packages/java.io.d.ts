declare module "java.io.FilenameFilter" {
import { $File, $File$$Type } from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FilenameFilter {
"accept"(file0: $File$$Type, string1: string): boolean
}

export namespace $FilenameFilter {
const probejs$$marker: never
}
export abstract class $FilenameFilter$$Static implements $FilenameFilter {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FilenameFilter$$Type = ($FilenameFilter | ((arg0: $File, arg1: string) => boolean));
}

declare module "java.io.ObjectInput" {
import { $DataInput } from "java.io.DataInput"
import { $AutoCloseable } from "java.lang.AutoCloseable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectInput extends $DataInput, $AutoCloseable {
"available"(): integer
"close"(): void
"read"(byte0s: byte[], int1: integer, int2: integer): integer
"read"(byte0s: byte[]): integer
"read"(): integer
"readBoolean"(): boolean
"readByte"(): byte
"readChar"(): character
"readDouble"(): double
"readFloat"(): float
"readFully"(byte0s: byte[], int1: integer, int2: integer): void
"readFully"(byte0s: byte[]): void
"readInt"(): integer
"readLine"(): string
"readLong"(): long
"readObject"(): any
"readShort"(): short
"readUTF"(): string
"readUnsignedByte"(): integer
"readUnsignedShort"(): integer
"skip"(long0: long): long
"skipBytes"(int0: integer): integer
}

export namespace $ObjectInput {
const probejs$$marker: never
}
export abstract class $ObjectInput$$Static implements $ObjectInput {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ObjectInput$$Type = ($ObjectInput);
}

declare module "java.io.Reader" {
import { $CharBuffer$$Type } from "java.nio.CharBuffer"
import { $Closeable } from "java.io.Closeable"
import { $Writer$$Type } from "java.io.Writer"
import { $Readable } from "java.lang.Readable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reader implements $Readable, $Closeable {
public "close"(): void
public "mark"(int0: integer): void
public "markSupported"(): boolean
public static "nullReader"(): $Reader
public "read"(char0s: character[]): integer
public "read"(char0s: character[], int1: integer, int2: integer): integer
public "read"(charBuffer0: $CharBuffer$$Type): integer
public "read"(): integer
public "ready"(): boolean
public "reset"(): void
public "skip"(long0: long): long
public "transferTo"(writer0: $Writer$$Type): long
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Reader$$Type = ($Reader);
}

declare module "java.io.Flushable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Flushable {
"flush"(): void
}

export namespace $Flushable {
const probejs$$marker: never
}
export abstract class $Flushable$$Static implements $Flushable {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Flushable$$Type = ($Flushable | (() => void));
}

declare module "java.io.Writer" {
import { $Appendable } from "java.lang.Appendable"
import { $Closeable } from "java.io.Closeable"
import { $Flushable } from "java.io.Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Writer implements $Appendable, $Closeable, $Flushable {
public "append"(char0: character): $Writer
public "append"(charSequence0: charseq, int1: integer, int2: integer): $Writer
public "append"(charSequence0: charseq): $Writer
public "close"(): void
public "flush"(): void
public static "nullWriter"(): $Writer
public "write"(int0: integer): void
public "write"(char0s: character[]): void
public "write"(char0s: character[], int1: integer, int2: integer): void
public "write"(string0: string): void
public "write"(string0: string, int1: integer, int2: integer): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Writer$$Type = ($Writer);
}

declare module "java.io.FilterInputStream" {
import { $InputStream } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterInputStream extends $InputStream {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FilterInputStream$$Type = ($FilterInputStream);
}

declare module "java.io.BufferedReader" {
import { $Stream } from "java.util.stream.Stream"
import { $Reader, $Reader$$Type } from "java.io.Reader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedReader extends $Reader {
constructor(reader0: $Reader$$Type, int1: integer)
constructor(reader0: $Reader$$Type)

public "lines"(): $Stream<string>
public "readLine"(): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BufferedReader$$Type = ($BufferedReader);
}

declare module "java.io.DataOutputStream" {
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $DataOutput } from "java.io.DataOutput"
import { $FilterOutputStream } from "java.io.FilterOutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataOutputStream extends $FilterOutputStream implements $DataOutput {
constructor(outputStream0: $OutputStream$$Type)

public "size"(): integer
public "write"(byte0s: byte[]): void
public "writeBoolean"(boolean0: boolean): void
public "writeByte"(int0: integer): void
public "writeBytes"(string0: string): void
public "writeChar"(int0: integer): void
public "writeChars"(string0: string): void
public "writeDouble"(double0: double): void
public "writeFloat"(float0: float): void
public "writeInt"(int0: integer): void
public "writeLong"(long0: long): void
public "writeShort"(int0: integer): void
public "writeUTF"(string0: string): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataOutputStream$$Type = ($DataOutputStream);
}

declare module "java.io.FilterOutputStream" {
import { $OutputStream, $OutputStream$$Type } from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterOutputStream extends $OutputStream {
constructor(outputStream0: $OutputStream$$Type)

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FilterOutputStream$$Type = ($FilterOutputStream);
}

declare module "java.io.DataOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataOutput {
"write"(int0: integer): void
"write"(byte0s: byte[]): void
"write"(byte0s: byte[], int1: integer, int2: integer): void
"writeBoolean"(boolean0: boolean): void
"writeByte"(int0: integer): void
"writeBytes"(string0: string): void
"writeChar"(int0: integer): void
"writeChars"(string0: string): void
"writeDouble"(double0: double): void
"writeFloat"(float0: float): void
"writeInt"(int0: integer): void
"writeLong"(long0: long): void
"writeShort"(int0: integer): void
"writeUTF"(string0: string): void
}

export namespace $DataOutput {
const probejs$$marker: never
}
export abstract class $DataOutput$$Static implements $DataOutput {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataOutput$$Type = ($DataOutput);
}

declare module "java.io.OutputStream" {
import { $Closeable } from "java.io.Closeable"
import { $Flushable } from "java.io.Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $OutputStream implements $Closeable, $Flushable {
constructor()

public "close"(): void
public "flush"(): void
public static "nullOutputStream"(): $OutputStream
public "write"(byte0s: byte[], int1: integer, int2: integer): void
public "write"(byte0s: byte[]): void
public "write"(int0: integer): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OutputStream$$Type = ($OutputStream);
}

declare module "java.io.PrintWriter" {
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $Charset$$Type } from "java.nio.charset.Charset"
import { $Locale$$Type } from "java.util.Locale"
import { $Writer, $Writer$$Type } from "java.io.Writer"
import { $File$$Type } from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintWriter extends $Writer {
constructor(file0: $File$$Type, charset1: $Charset$$Type)
constructor(file0: $File$$Type, string1: string)
constructor(file0: $File$$Type)
constructor(outputStream0: $OutputStream$$Type)
constructor(writer0: $Writer$$Type, boolean1: boolean)
constructor(writer0: $Writer$$Type)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean, charset2: $Charset$$Type)
constructor(string0: string)
constructor(string0: string, string1: string)
constructor(string0: string, charset1: $Charset$$Type)

public "checkError"(): boolean
public "format"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintWriter
public "format"(string0: string, ...object1s: any[]): $PrintWriter
public "print"(long0: long): void
public "print"(int0: integer): void
public "print"(float0: float): void
public "print"(double0: double): void
public "print"(char0s: character[]): void
public "print"(string0: string): void
public "print"(object0: any): void
public "print"(boolean0: boolean): void
public "print"(char0: character): void
public "printf"(string0: string, ...object1s: any[]): $PrintWriter
public "printf"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintWriter
public "println"(char0s: character[]): void
public "println"(double0: double): void
public "println"(float0: float): void
public "println"(object0: any): void
public "println"(string0: string): void
public "println"(boolean0: boolean): void
public "println"(char0: character): void
public "println"(int0: integer): void
public "println"(long0: long): void
public "println"(): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PrintWriter$$Type = ($PrintWriter);
}

declare module "java.io.ObjectOutput" {
import { $DataOutput } from "java.io.DataOutput"
import { $AutoCloseable } from "java.lang.AutoCloseable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectOutput extends $DataOutput, $AutoCloseable {
"close"(): void
"flush"(): void
"write"(byte0s: byte[], int1: integer, int2: integer): void
"write"(byte0s: byte[]): void
"write"(int0: integer): void
"writeBoolean"(boolean0: boolean): void
"writeByte"(int0: integer): void
"writeBytes"(string0: string): void
"writeChar"(int0: integer): void
"writeChars"(string0: string): void
"writeDouble"(double0: double): void
"writeFloat"(float0: float): void
"writeInt"(int0: integer): void
"writeLong"(long0: long): void
"writeObject"(object0: any): void
"writeShort"(int0: integer): void
"writeUTF"(string0: string): void
}

export namespace $ObjectOutput {
const probejs$$marker: never
}
export abstract class $ObjectOutput$$Static implements $ObjectOutput {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ObjectOutput$$Type = ($ObjectOutput);
}

declare module "java.io.DataInputStream" {
import { $FilterInputStream } from "java.io.FilterInputStream"
import { $DataInput, $DataInput$$Type } from "java.io.DataInput"
import { $InputStream$$Type } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataInputStream extends $FilterInputStream implements $DataInput {
constructor(inputStream0: $InputStream$$Type)

public "readBoolean"(): boolean
public "readByte"(): byte
public "readChar"(): character
public "readDouble"(): double
public "readFloat"(): float
public "readFully"(byte0s: byte[], int1: integer, int2: integer): void
public "readFully"(byte0s: byte[]): void
public "readInt"(): integer
/** @deprecated */
public "readLine"(): string
public "readLong"(): long
public "readShort"(): short
public "readUTF"(): string
public static "readUTF"(dataInput0: $DataInput$$Type): string
public "readUnsignedByte"(): integer
public "readUnsignedShort"(): integer
public "skipBytes"(int0: integer): integer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataInputStream$$Type = ($DataInputStream);
}

declare module "java.io.File" {
import { $FilenameFilter$$Type } from "java.io.FilenameFilter"
import { $FileFilter$$Type } from "java.io.FileFilter"
import { $URL } from "java.net.URL"
import { $Comparable } from "java.lang.Comparable"
import { $URI, $URI$$Type } from "java.net.URI"
import { $Path } from "java.nio.file.Path"
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $File implements $Serializable, $Comparable<$File> {
static readonly "pathSeparator": string
static readonly "pathSeparatorChar": character
static readonly "separator": string
static readonly "separatorChar": character

constructor(string0: string)
constructor(string0: string, string1: string)
constructor(uRI0: $URI$$Type)
constructor(file0: $File$$Type, string1: string)

public "canExecute"(): boolean
public "canRead"(): boolean
public "canWrite"(): boolean
public "compareTo"(file0: $File$$Type): integer
public "createNewFile"(): boolean
public static "createTempFile"(string0: string, string1: string): $File
public static "createTempFile"(string0: string, string1: string, file2: $File$$Type): $File
public "delete"(): boolean
public "deleteOnExit"(): void
public "exists"(): boolean
public "getAbsoluteFile"(): $File
public "getAbsolutePath"(): string
public "getCanonicalFile"(): $File
public "getCanonicalPath"(): string
public "getFreeSpace"(): long
public "getName"(): string
public "getParent"(): string
public "getParentFile"(): $File
public "getPath"(): string
public "getTotalSpace"(): long
public "getUsableSpace"(): long
public "isAbsolute"(): boolean
public "isDirectory"(): boolean
public "isFile"(): boolean
public "isHidden"(): boolean
public "lastModified"(): long
public "length"(): long
public "list"(filenameFilter0: $FilenameFilter$$Type): string[]
public "list"(): string[]
public "listFiles"(fileFilter0: $FileFilter$$Type): $File[]
public "listFiles"(filenameFilter0: $FilenameFilter$$Type): $File[]
public "listFiles"(): $File[]
public static "listRoots"(): $File[]
public "mkdir"(): boolean
public "mkdirs"(): boolean
public "renameTo"(file0: $File$$Type): boolean
public "setExecutable"(boolean0: boolean, boolean1: boolean): boolean
public "setExecutable"(boolean0: boolean): boolean
public "setLastModified"(long0: long): boolean
public "setReadOnly"(): boolean
public "setReadable"(boolean0: boolean, boolean1: boolean): boolean
public "setReadable"(boolean0: boolean): boolean
public "setWritable"(boolean0: boolean, boolean1: boolean): boolean
public "setWritable"(boolean0: boolean): boolean
public "toPath"(): $Path
public "toURI"(): $URI
/** @deprecated */
public "toURL"(): $URL
get "absoluteFile"(): $File
get "absolutePath"(): string
get "canonicalFile"(): $File
get "canonicalPath"(): string
get "freeSpace"(): long
get "name"(): string
get "parent"(): string
get "parentFile"(): $File
get "path"(): string
get "totalSpace"(): long
get "usableSpace"(): long
get "absolute"(): boolean
get "directory"(): boolean
get "file"(): boolean
get "hidden"(): boolean
set "executable"(value: boolean)
set "readable"(value: boolean)
set "writable"(value: boolean)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $File$$Type = ($File);
}

declare module "java.io.InputStream" {
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $Closeable } from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InputStream implements $Closeable {
constructor()

public "available"(): integer
public "close"(): void
public "mark"(int0: integer): void
public "markSupported"(): boolean
public static "nullInputStream"(): $InputStream
public "read"(byte0s: byte[], int1: integer, int2: integer): integer
public "read"(byte0s: byte[]): integer
public "read"(): integer
public "readAllBytes"(): byte[]
public "readNBytes"(int0: integer): byte[]
public "readNBytes"(byte0s: byte[], int1: integer, int2: integer): integer
public "reset"(): void
public "skip"(long0: long): long
public "skipNBytes"(long0: long): void
public "transferTo"(outputStream0: $OutputStream$$Type): long
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InputStream$$Type = ($InputStream);
}

declare module "java.io.Serializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Serializable$$Type = ($Serializable);
}

declare module "java.io.PrintStream" {
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $Charset$$Type } from "java.nio.charset.Charset"
import { $Locale$$Type } from "java.util.Locale"
import { $Appendable } from "java.lang.Appendable"
import { $Closeable } from "java.io.Closeable"
import { $FilterOutputStream } from "java.io.FilterOutputStream"
import { $File$$Type } from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintStream extends $FilterOutputStream implements $Appendable, $Closeable {
constructor(outputStream0: $OutputStream$$Type)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean, string2: string)
constructor(file0: $File$$Type, charset1: $Charset$$Type)
constructor(string0: string, charset1: $Charset$$Type)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean, charset2: $Charset$$Type)
constructor(string0: string, string1: string)
constructor(string0: string)
constructor(file0: $File$$Type, string1: string)
constructor(file0: $File$$Type)

public "checkError"(): boolean
public "format"(string0: string, ...object1s: any[]): $PrintStream
public "format"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintStream
public "print"(boolean0: boolean): void
public "print"(long0: long): void
public "print"(float0: float): void
public "print"(double0: double): void
public "print"(char0s: character[]): void
public "print"(object0: any): void
public "print"(string0: string): void
public "print"(char0: character): void
public "print"(int0: integer): void
public "printf"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintStream
public "printf"(string0: string, ...object1s: any[]): $PrintStream
public "println"(char0s: character[]): void
public "println"(boolean0: boolean): void
public "println"(long0: long): void
public "println"(int0: integer): void
public "println"(char0: character): void
public "println"(float0: float): void
public "println"(double0: double): void
public "println"(): void
public "println"(object0: any): void
public "println"(string0: string): void
public "writeBytes"(byte0s: byte[]): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PrintStream$$Type = ($PrintStream);
}

declare module "java.io.DataInput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataInput {
"readBoolean"(): boolean
"readByte"(): byte
"readChar"(): character
"readDouble"(): double
"readFloat"(): float
"readFully"(byte0s: byte[], int1: integer, int2: integer): void
"readFully"(byte0s: byte[]): void
"readInt"(): integer
"readLine"(): string
"readLong"(): long
"readShort"(): short
"readUTF"(): string
"readUnsignedByte"(): integer
"readUnsignedShort"(): integer
"skipBytes"(int0: integer): integer
}

export namespace $DataInput {
const probejs$$marker: never
}
export abstract class $DataInput$$Static implements $DataInput {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataInput$$Type = ($DataInput);
}

declare module "java.io.Closeable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Closeable$$Type = ($Closeable | (() => void));
}

declare module "java.io.IOException" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Exception } from "java.lang.Exception"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IOException extends $Exception {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IOException$$Type = ($IOException);
}

declare module "java.io.Externalizable" {
import { $ObjectOutput$$Type } from "java.io.ObjectOutput"
import { $ObjectInput$$Type } from "java.io.ObjectInput"
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Externalizable extends $Serializable {
"readExternal"(objectInput0: $ObjectInput$$Type): void
"writeExternal"(objectOutput0: $ObjectOutput$$Type): void
}

export namespace $Externalizable {
const probejs$$marker: never
}
export abstract class $Externalizable$$Static implements $Externalizable {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Externalizable$$Type = ($Externalizable);
}

declare module "java.io.FileFilter" {
import { $File, $File$$Type } from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileFilter {
"accept"(file0: $File$$Type): boolean
}

export namespace $FileFilter {
const probejs$$marker: never
}
export abstract class $FileFilter$$Static implements $FileFilter {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileFilter$$Type = ($FileFilter | ((arg0: $File) => boolean));
}

