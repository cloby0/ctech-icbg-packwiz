declare module "java.lang.CharSequence" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CharSequence$$Type = ($CharSequence);
}

declare module "java.lang.Module" {
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $ModuleDescriptor } from "java.lang.module.ModuleDescriptor"
import { $ModuleLayer } from "java.lang.ModuleLayer"
import { $Set } from "java.util.Set"
import { $Class$$Type } from "java.lang.Class"
import { $ClassLoader } from "java.lang.ClassLoader"
import { $InputStream } from "java.io.InputStream"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Module implements $AnnotatedElement {
public "addExports"(string0: string, module1: $Module$$Type): $Module
public "addOpens"(string0: string, module1: $Module$$Type): $Module
public "addReads"(module0: $Module$$Type): $Module
public "addUses"(class0: $Class$$Type<any>): $Module
public "canRead"(module0: $Module$$Type): boolean
public "canUse"(class0: $Class$$Type<any>): boolean
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getClassLoader"(): $ClassLoader
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDescriptor"(): $ModuleDescriptor
public "getLayer"(): $ModuleLayer
public "getName"(): string
public "getPackages"(): $Set<string>
public "getResourceAsStream"(string0: string): $InputStream
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isExported"(string0: string, module1: $Module$$Type): boolean
public "isExported"(string0: string): boolean
public "isNamed"(): boolean
public "isOpen"(string0: string): boolean
public "isOpen"(string0: string, module1: $Module$$Type): boolean
get "annotations"(): $Annotation[]
get "classLoader"(): $ClassLoader
get "declaredAnnotations"(): $Annotation[]
get "descriptor"(): $ModuleDescriptor
get "layer"(): $ModuleLayer
get "name"(): string
get "packages"(): $Set<string>
get "named"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Module$$Type = ($Module);
}

declare module "java.lang.ref.WeakReference" {
import { $Reference } from "java.lang.ref.Reference"
import { $ReferenceQueue$$Type } from "java.lang.ref.ReferenceQueue"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WeakReference<T = any> extends $Reference<T> {
constructor(t0: T)
constructor(t0: T, referenceQueue1: $ReferenceQueue$$Type<T>)

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeakReference$$Type<T = any> = ($WeakReference<T>);
}

declare module "java.lang.StackTraceElement" {
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StackTraceElement implements $Serializable {
constructor(string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, int6: integer)
constructor(string0: string, string1: string, string2: string, int3: integer)

public "getClassLoaderName"(): string
public "getClassName"(): string
public "getFileName"(): string
public "getLineNumber"(): integer
public "getMethodName"(): string
public "getModuleName"(): string
public "getModuleVersion"(): string
public "isNativeMethod"(): boolean
get "classLoaderName"(): string
get "className"(): string
get "fileName"(): string
get "lineNumber"(): integer
get "methodName"(): string
get "moduleName"(): string
get "moduleVersion"(): string
get "nativeMethod"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StackTraceElement$$Type = ($StackTraceElement);
}

declare module "java.lang.module.ModuleDescriptor$Modifier" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Modifier extends $Enum<$ModuleDescriptor$Modifier> {
static readonly "AUTOMATIC": $ModuleDescriptor$Modifier
static readonly "MANDATED": $ModuleDescriptor$Modifier
static readonly "OPEN": $ModuleDescriptor$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Modifier
public static "values"(): $ModuleDescriptor$Modifier[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Modifier$$Type = ($ModuleDescriptor$Modifier | ("open" | "automatic" | "synthetic" | "mandated"));
}

declare module "java.lang.invoke.TypeDescriptor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor {
"descriptorString"(): string
}

export namespace $TypeDescriptor {
const probejs$$marker: never
}
export abstract class $TypeDescriptor$$Static implements $TypeDescriptor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TypeDescriptor$$Type = ($TypeDescriptor | (() => string));
}

declare module "java.lang.invoke.TypeDescriptor$OfMethod" {
import { $List } from "java.util.List"
import { $TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type } from "java.lang.invoke.TypeDescriptor$OfField"
import { $TypeDescriptor } from "java.lang.invoke.TypeDescriptor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfMethod<F extends $TypeDescriptor$OfField<F> = $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M> = $TypeDescriptor$OfMethod<F, M>> extends $TypeDescriptor {
"changeParameterType"(int0: integer, f1: F): M
"changeReturnType"(f0: F): M
"descriptorString"(): string
"dropParameterTypes"(int0: integer, int1: integer): M
"insertParameterTypes"(int0: integer, ...f1s: F[]): M
"parameterArray"(): F[]
"parameterCount"(): integer
"parameterList"(): $List<F>
"parameterType"(int0: integer): F
"returnType"(): F
}

export namespace $TypeDescriptor$OfMethod {
const probejs$$marker: never
}
export abstract class $TypeDescriptor$OfMethod$$Static<F extends $TypeDescriptor$OfField<F> = $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M> = $TypeDescriptor$OfMethod<F, M>> implements $TypeDescriptor$OfMethod<F, M> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TypeDescriptor$OfMethod$$Type<F extends $TypeDescriptor$OfField<F> = $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M> = $TypeDescriptor$OfMethod<F, M>> = ($TypeDescriptor$OfMethod<F, M>);
}

declare module "java.lang.Record" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Record {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Record$$Type = ($Record);
}

declare module "java.lang.constant.DirectMethodHandleDesc" {
import { $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"
import { $ClassDesc, $ClassDesc$$Type } from "java.lang.constant.ClassDesc"
import { $DirectMethodHandleDesc$Kind, $DirectMethodHandleDesc$Kind$$Type } from "java.lang.constant.DirectMethodHandleDesc$Kind"
import { $MethodTypeDesc, $MethodTypeDesc$$Type } from "java.lang.constant.MethodTypeDesc"
import { $MethodHandleDesc } from "java.lang.constant.MethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectMethodHandleDesc extends $MethodHandleDesc {
"asType"(methodTypeDesc0: $MethodTypeDesc$$Type): $MethodHandleDesc
"equals"(object0: any): boolean
"invocationType"(): $MethodTypeDesc
"isOwnerInterface"(): boolean
"kind"(): $DirectMethodHandleDesc$Kind
"lookupDescriptor"(): string
"methodName"(): string
"owner"(): $ClassDesc
"refKind"(): integer
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
get "ownerInterface"(): boolean
}

export namespace $DirectMethodHandleDesc {
function of(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
function ofConstructor(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
function ofField(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
function ofMethod(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
export abstract class $DirectMethodHandleDesc$$Static implements $DirectMethodHandleDesc {
static "of"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
static "ofConstructor"(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
static "ofField"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DirectMethodHandleDesc$$Type = ($DirectMethodHandleDesc);
}

declare module "java.lang.Appendable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Appendable$$Type = ($Appendable);
}

declare module "java.lang.module.ModuleDescriptor$Exports$Modifier" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports$Modifier extends $Enum<$ModuleDescriptor$Exports$Modifier> {
static readonly "MANDATED": $ModuleDescriptor$Exports$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Exports$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Exports$Modifier
public static "values"(): $ModuleDescriptor$Exports$Modifier[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Exports$Modifier$$Type = ($ModuleDescriptor$Exports$Modifier | ("synthetic" | "mandated"));
}

declare module "java.lang.Package" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Package$$Type = ($Package);
}

declare module "java.lang.reflect.Parameter" {
import { $Type } from "java.lang.reflect.Type"
import { $AnnotatedType } from "java.lang.reflect.AnnotatedType"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Executable } from "java.lang.reflect.Executable"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Parameter implements $AnnotatedElement {
public "getAnnotatedType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaringExecutable"(): $Executable
public "getModifiers"(): integer
public "getName"(): string
public "getParameterizedType"(): $Type
public "getType"(): $Class<any>
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isImplicit"(): boolean
public "isNamePresent"(): boolean
public "isSynthetic"(): boolean
public "isVarArgs"(): boolean
get "annotatedType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "declaringExecutable"(): $Executable
get "modifiers"(): integer
get "name"(): string
get "parameterizedType"(): $Type
get "type"(): $Class<any>
get "implicit"(): boolean
get "namePresent"(): boolean
get "synthetic"(): boolean
get "varArgs"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Parameter$$Type = ($Parameter);
}

declare module "java.lang.Character$Subset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Character$Subset {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Character$Subset$$Type = ($Character$Subset);
}

declare module "java.lang.module.ModuleDescriptor$Version" {
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Version implements $Comparable<$ModuleDescriptor$Version> {
public "compareTo"(version0: $ModuleDescriptor$Version$$Type): integer
public static "parse"(string0: string): $ModuleDescriptor$Version
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Version$$Type = ($ModuleDescriptor$Version);
}

declare module "java.lang.Thread$UncaughtExceptionHandler" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Thread, $Thread$$Type } from "java.lang.Thread"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$UncaughtExceptionHandler {
"uncaughtException"(thread0: $Thread$$Type, throwable1: $Throwable$$Type): void
}

export namespace $Thread$UncaughtExceptionHandler {
const probejs$$marker: never
}
export abstract class $Thread$UncaughtExceptionHandler$$Static implements $Thread$UncaughtExceptionHandler {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Thread$UncaughtExceptionHandler$$Type = ($Thread$UncaughtExceptionHandler | ((arg0: $Thread, arg1: $Throwable) => void));
}

declare module "java.lang.constant.MethodHandleDesc" {
import { $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"
import { $ConstantDesc } from "java.lang.constant.ConstantDesc"
import { $ClassDesc$$Type } from "java.lang.constant.ClassDesc"
import { $DirectMethodHandleDesc$Kind$$Type } from "java.lang.constant.DirectMethodHandleDesc$Kind"
import { $MethodTypeDesc, $MethodTypeDesc$$Type } from "java.lang.constant.MethodTypeDesc"
import { $DirectMethodHandleDesc } from "java.lang.constant.DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleDesc extends $ConstantDesc {
"asType"(methodTypeDesc0: $MethodTypeDesc$$Type): $MethodHandleDesc
"equals"(object0: any): boolean
"invocationType"(): $MethodTypeDesc
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
}

export namespace $MethodHandleDesc {
function of(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
function ofConstructor(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
function ofField(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
function ofMethod(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
export abstract class $MethodHandleDesc$$Static implements $MethodHandleDesc {
static "of"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
static "ofConstructor"(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
static "ofField"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodHandleDesc$$Type = ($MethodHandleDesc);
}

declare module "java.lang.IllegalStateException" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $RuntimeException } from "java.lang.RuntimeException"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IllegalStateException extends $RuntimeException {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IllegalStateException$$Type = ($IllegalStateException);
}

declare module "java.lang.ClassLoader" {
import { $Stream } from "java.util.stream.Stream"
import { $Module } from "java.lang.Module"
import { $Package } from "java.lang.Package"
import { $Enumeration } from "java.util.Enumeration"
import { $URL } from "java.net.URL"
import { $Class } from "java.lang.Class"
import { $InputStream } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ClassLoader {
public "clearAssertionStatus"(): void
public "getDefinedPackage"(string0: string): $Package
public "getDefinedPackages"(): $Package[]
public "getName"(): string
public "getParent"(): $ClassLoader
public static "getPlatformClassLoader"(): $ClassLoader
public "getResource"(string0: string): $URL
public "getResourceAsStream"(string0: string): $InputStream
public "getResources"(string0: string): $Enumeration<$URL>
public static "getSystemClassLoader"(): $ClassLoader
public static "getSystemResource"(string0: string): $URL
public static "getSystemResourceAsStream"(string0: string): $InputStream
public static "getSystemResources"(string0: string): $Enumeration<$URL>
public "getUnnamedModule"(): $Module
public "isRegisteredAsParallelCapable"(): boolean
public "loadClass"(string0: string): $Class<any>
public "resources"(string0: string): $Stream<$URL>
public "setClassAssertionStatus"(string0: string, boolean1: boolean): void
public "setDefaultAssertionStatus"(boolean0: boolean): void
public "setPackageAssertionStatus"(string0: string, boolean1: boolean): void
get "definedPackages"(): $Package[]
get "name"(): string
get "parent"(): $ClassLoader
get "unnamedModule"(): $Module
get "registeredAsParallelCapable"(): boolean
set "defaultAssertionStatus"(value: boolean)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClassLoader$$Type = ($ClassLoader);
}

declare module "java.lang.Number" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Number$$Type = ($Number);
}

declare module "java.lang.StringBuffer" {
import { $AbstractStringBuilder } from "java.lang.AbstractStringBuilder"
import { $Comparable } from "java.lang.Comparable"
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StringBuffer extends $AbstractStringBuilder implements $Serializable, $Comparable<$StringBuffer>, charseq {
constructor(charSequence0: charseq)
constructor(string0: string)
constructor(int0: integer)
constructor()

public "append"(int0: integer): $StringBuffer
public "append"(long0: long): $StringBuffer
public "append"(float0: float): $StringBuffer
public "append"(char0s: character[], int1: integer, int2: integer): $StringBuffer
public "append"(boolean0: boolean): $StringBuffer
public "append"(char0: character): $StringBuffer
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "compareTo"(stringBuffer0: $StringBuffer$$Type): integer
public "deleteCharAt"(int0: integer): $StringBuffer
public "isEmpty"(): boolean
public "reverse"(): $StringBuffer
get "empty"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StringBuffer$$Type = ($StringBuffer);
}

declare module "java.lang.Float" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Float$$Type = ($Float);
}

declare module "java.lang.reflect.AccessibleObject" {
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class$$Type } from "java.lang.Class"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessibleObject implements $AnnotatedElement {
public "canAccess"(object0: any): boolean
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
/** @deprecated */
public "isAccessible"(): boolean
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "setAccessible"(boolean0: boolean): void
public static "setAccessible"(accessibleObject0s: $AccessibleObject$$Type[], boolean1: boolean): void
public "trySetAccessible"(): boolean
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "accessible"(): boolean
set "accessible"(value: boolean)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessibleObject$$Type = ($AccessibleObject);
}

declare module "java.lang.reflect.Member" {
import { $Class } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Member {
"getDeclaringClass"(): $Class<any>
"getModifiers"(): integer
"getName"(): string
"isSynthetic"(): boolean
get "declaringClass"(): $Class<any>
get "modifiers"(): integer
get "name"(): string
get "synthetic"(): boolean
}

export namespace $Member {
const DECLARED: integer
const PUBLIC: integer
}
export abstract class $Member$$Static implements $Member {
static readonly "DECLARED": integer
static readonly "PUBLIC": integer

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Member$$Type = ($Member);
}

declare module "java.lang.reflect.Field" {
import { $AccessibleObject } from "java.lang.reflect.AccessibleObject"
import { $Type } from "java.lang.reflect.Type"
import { $Member } from "java.lang.reflect.Member"
import { $AnnotatedType } from "java.lang.reflect.AnnotatedType"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class, $Class$$Type } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Field extends $AccessibleObject implements $Member {
public "get"(object0: any): any
public "getAnnotatedType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getBoolean"(object0: any): boolean
public "getByte"(object0: any): byte
public "getChar"(object0: any): character
public "getDeclaringClass"(): $Class<any>
public "getDouble"(object0: any): double
public "getFloat"(object0: any): float
public "getGenericType"(): $Type
public "getInt"(object0: any): integer
public "getLong"(object0: any): long
public "getModifiers"(): integer
public "getName"(): string
public "getShort"(object0: any): short
public "getType"(): $Class<any>
public "isEnumConstant"(): boolean
public "isSynthetic"(): boolean
public "set"(object0: any, object1: any): void
public "setBoolean"(object0: any, boolean1: boolean): void
public "setByte"(object0: any, byte1: byte): void
public "setChar"(object0: any, char1: character): void
public "setDouble"(object0: any, double1: double): void
public "setFloat"(object0: any, float1: float): void
public "setInt"(object0: any, int1: integer): void
public "setLong"(object0: any, long1: long): void
public "setShort"(object0: any, short1: short): void
public "toGenericString"(): string
get "annotatedType"(): $AnnotatedType
get "declaringClass"(): $Class<any>
get "genericType"(): $Type
get "modifiers"(): integer
get "name"(): string
get "type"(): $Class<any>
get "enumConstant"(): boolean
get "synthetic"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Field$$Type = ($Field);
}

declare module "java.lang.Runnable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Runnable$$Type = ($Runnable | (() => void));
}

declare module "java.lang.module.Configuration" {
import { $List, $List$$Type } from "java.util.List"
import { $ResolvedModule } from "java.lang.module.ResolvedModule"
import { $ModuleFinder$$Type } from "java.lang.module.ModuleFinder"
import { $Collection$$Type } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $Set } from "java.util.Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Configuration {
public static "empty"(): $Configuration
public "findModule"(string0: string): $Optional<$ResolvedModule>
public "modules"(): $Set<$ResolvedModule>
public "parents"(): $List<$Configuration>
public static "resolve"(moduleFinder0: $ModuleFinder$$Type, list1: $List$$Type<$Configuration$$Type>, moduleFinder2: $ModuleFinder$$Type, collection3: $Collection$$Type<string>): $Configuration
public "resolve"(moduleFinder0: $ModuleFinder$$Type, moduleFinder1: $ModuleFinder$$Type, collection2: $Collection$$Type<string>): $Configuration
public static "resolveAndBind"(moduleFinder0: $ModuleFinder$$Type, list1: $List$$Type<$Configuration$$Type>, moduleFinder2: $ModuleFinder$$Type, collection3: $Collection$$Type<string>): $Configuration
public "resolveAndBind"(moduleFinder0: $ModuleFinder$$Type, moduleFinder1: $ModuleFinder$$Type, collection2: $Collection$$Type<string>): $Configuration
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Configuration$$Type = ($Configuration);
}

declare module "java.lang.module.ModuleReference" {
import { $ModuleDescriptor } from "java.lang.module.ModuleDescriptor"
import { $Optional } from "java.util.Optional"
import { $URI } from "java.net.URI"
import { $ModuleReader } from "java.lang.module.ModuleReader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleReference {
public "descriptor"(): $ModuleDescriptor
public "location"(): $Optional<$URI>
public "open"(): $ModuleReader
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleReference$$Type = ($ModuleReference);
}

declare module "java.lang.Throwable" {
import { $PrintWriter$$Type } from "java.io.PrintWriter"
import { $PrintStream$$Type } from "java.io.PrintStream"
import { $StackTraceElement, $StackTraceElement$$Type } from "java.lang.StackTraceElement"
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Throwable implements $Serializable {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

public "addSuppressed"(throwable0: $Throwable$$Type): void
public "fillInStackTrace"(): $Throwable
public "getCause"(): $Throwable
public "getLocalizedMessage"(): string
public "getMessage"(): string
public "getStackTrace"(): $StackTraceElement[]
public "getSuppressed"(): $Throwable[]
public "initCause"(throwable0: $Throwable$$Type): $Throwable
public "printStackTrace"(): void
public "printStackTrace"(printWriter0: $PrintWriter$$Type): void
public "printStackTrace"(printStream0: $PrintStream$$Type): void
public "setStackTrace"(stackTraceElement0s: $StackTraceElement$$Type[]): void
get "cause"(): $Throwable
get "localizedMessage"(): string
get "message"(): string
get "stackTrace"(): $StackTraceElement[]
get "suppressed"(): $Throwable[]
set "stackTrace"(value: $StackTraceElement$$Type[])
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Throwable$$Type = ($Throwable);
}

declare module "java.lang.Cloneable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Cloneable {
}

export namespace $Cloneable {
const probejs$$marker: never
}
export abstract class $Cloneable$$Static implements $Cloneable {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Cloneable$$Type = ($Cloneable);
}

declare module "java.lang.Readable" {
import { $CharBuffer, $CharBuffer$$Type } from "java.nio.CharBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Readable {
"read"(charBuffer0: $CharBuffer$$Type): integer
}

export namespace $Readable {
const probejs$$marker: never
}
export abstract class $Readable$$Static implements $Readable {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Readable$$Type = ($Readable | ((arg0: $CharBuffer) => integer));
}

declare module "java.lang.annotation.Annotation" {
import { $Class } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Annotation {
"annotationType"(): $Class<$Annotation>
"equals"(object0: any): boolean
"hashCode"(): integer
"toString"(): string
}

export namespace $Annotation {
const probejs$$marker: never
}
export abstract class $Annotation$$Static implements $Annotation {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Annotation$$Type = ($Annotation);
}

declare module "java.lang.annotation.ElementType" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ElementType extends $Enum<$ElementType> {
static readonly "ANNOTATION_TYPE": $ElementType
static readonly "CONSTRUCTOR": $ElementType
static readonly "FIELD": $ElementType
static readonly "LOCAL_VARIABLE": $ElementType
static readonly "METHOD": $ElementType
static readonly "MODULE": $ElementType
static readonly "PACKAGE": $ElementType
static readonly "PARAMETER": $ElementType
static readonly "RECORD_COMPONENT": $ElementType
static readonly "TYPE": $ElementType
static readonly "TYPE_PARAMETER": $ElementType
static readonly "TYPE_USE": $ElementType

public static "valueOf"(string0: string): $ElementType
public static "values"(): $ElementType[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ElementType$$Type = ($ElementType | ("type" | "field" | "method" | "parameter" | "constructor" | "local_variable" | "annotation_type" | "package" | "type_parameter" | "type_use" | "module" | "record_component"));
}

declare module "java.lang.invoke.MethodType" {
import { $List, $List$$Type } from "java.util.List"
import { $Constable } from "java.lang.constant.Constable"
import { $Optional } from "java.util.Optional"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $MethodTypeDesc } from "java.lang.constant.MethodTypeDesc"
import { $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $TypeDescriptor$OfMethod } from "java.lang.invoke.TypeDescriptor$OfMethod"
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodType implements $Constable, $TypeDescriptor$OfMethod<$Class<any>, $MethodType>, $Serializable {
public "appendParameterTypes"(list0: $List$$Type<$Class$$Type<any>>): $MethodType
public "appendParameterTypes"(...class0s: $Class$$Type<any>[]): $MethodType
public "changeParameterType"(int0: integer, class1: $Class$$Type<any>): $MethodType
public "changeReturnType"(class0: $Class$$Type<any>): $MethodType
public "describeConstable"(): $Optional<$MethodTypeDesc>
public "descriptorString"(): string
public "erase"(): $MethodType
public static "fromMethodDescriptorString"(string0: string, classLoader1: $ClassLoader$$Type): $MethodType
public "generic"(): $MethodType
public static "genericMethodType"(int0: integer, boolean1: boolean): $MethodType
public static "genericMethodType"(int0: integer): $MethodType
public "hasPrimitives"(): boolean
public "hasWrappers"(): boolean
public "insertParameterTypes"(int0: integer, list1: $List$$Type<$Class$$Type<any>>): $MethodType
public "insertParameterTypes"(int0: integer, ...class1s: $Class$$Type<any>[]): $MethodType
public "lastParameterType"(): $Class<any>
public static "methodType"(class0: $Class$$Type<any>, class1s: $Class$$Type<any>[]): $MethodType
public static "methodType"(class0: $Class$$Type<any>, methodType1: $MethodType$$Type): $MethodType
public static "methodType"(class0: $Class$$Type<any>, class1: $Class$$Type<any>, ...class2s: $Class$$Type<any>[]): $MethodType
public static "methodType"(class0: $Class$$Type<any>, list1: $List$$Type<$Class$$Type<any>>): $MethodType
public static "methodType"(class0: $Class$$Type<any>, class1: $Class$$Type<any>): $MethodType
public static "methodType"(class0: $Class$$Type<any>): $MethodType
public "parameterArray"(): $Class<any>[]
public "parameterCount"(): integer
public "parameterList"(): $List<$Class<any>>
public "parameterType"(int0: integer): $Class<any>
public "returnType"(): $Class<any>
public "toMethodDescriptorString"(): string
public "unwrap"(): $MethodType
public "wrap"(): $MethodType
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodType$$Type = ($MethodType);
}

declare module "java.lang.Enum$EnumDesc" {
import { $DynamicConstantDesc } from "java.lang.constant.DynamicConstantDesc"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $ClassDesc$$Type } from "java.lang.constant.ClassDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum$EnumDesc<E extends $Enum<E> = $Enum<E>> extends $DynamicConstantDesc<E> {
public static "of"<E extends $Enum<E>>(classDesc0: $ClassDesc$$Type, string1: string): $Enum$EnumDesc<E>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Enum$EnumDesc$$Type<E extends $Enum<E> = $Enum<E>> = ($Enum$EnumDesc<E>);
}

declare module "java.lang.module.ModuleFinder" {
import { $Optional } from "java.util.Optional"
import { $Set } from "java.util.Set"
import { $ModuleReference } from "java.lang.module.ModuleReference"
import { $Path$$Type } from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ModuleFinder {
"find"(string0: string): $Optional<$ModuleReference>
"findAll"(): $Set<$ModuleReference>
}

export namespace $ModuleFinder {
function compose(...moduleFinder0s: $ModuleFinder$$Type[]): $ModuleFinder
function of(...path0s: $Path$$Type[]): $ModuleFinder
function ofSystem(): $ModuleFinder
}
export abstract class $ModuleFinder$$Static implements $ModuleFinder {
static "compose"(...moduleFinder0s: $ModuleFinder$$Type[]): $ModuleFinder
static "of"(...path0s: $Path$$Type[]): $ModuleFinder
static "ofSystem"(): $ModuleFinder
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleFinder$$Type = ($ModuleFinder);
}

declare module "java.lang.ModuleLayer" {
import { $ModuleLayer$Controller } from "java.lang.ModuleLayer$Controller"
import { $List, $List$$Type } from "java.util.List"
import { $Module } from "java.lang.Module"
import { $Optional } from "java.util.Optional"
import { $Set } from "java.util.Set"
import { $Configuration, $Configuration$$Type } from "java.lang.module.Configuration"
import { $ClassLoader, $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $Function$$Type } from "java.util.function.Function"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer {
public static "boot"(): $ModuleLayer
public "configuration"(): $Configuration
public "defineModules"(configuration0: $Configuration$$Type, function1: $Function$$Type<string, $ClassLoader>): $ModuleLayer
public static "defineModules"(configuration0: $Configuration$$Type, list1: $List$$Type<$ModuleLayer$$Type>, function2: $Function$$Type<string, $ClassLoader>): $ModuleLayer$Controller
public static "defineModulesWithManyLoaders"(configuration0: $Configuration$$Type, list1: $List$$Type<$ModuleLayer$$Type>, classLoader2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithManyLoaders"(configuration0: $Configuration$$Type, classLoader1: $ClassLoader$$Type): $ModuleLayer
public static "defineModulesWithOneLoader"(configuration0: $Configuration$$Type, list1: $List$$Type<$ModuleLayer$$Type>, classLoader2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithOneLoader"(configuration0: $Configuration$$Type, classLoader1: $ClassLoader$$Type): $ModuleLayer
public static "empty"(): $ModuleLayer
public "findLoader"(string0: string): $ClassLoader
public "findModule"(string0: string): $Optional<$Module>
public "modules"(): $Set<$Module>
public "parents"(): $List<$ModuleLayer>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleLayer$$Type = ($ModuleLayer);
}

declare module "java.lang.reflect.GenericDeclaration" {
import { $TypeVariable } from "java.lang.reflect.TypeVariable"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class$$Type } from "java.lang.Class"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericDeclaration extends $AnnotatedElement {
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getTypeParameters"(): $TypeVariable<any>[]
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "typeParameters"(): $TypeVariable<any>[]
}

export namespace $GenericDeclaration {
const probejs$$marker: never
}
export abstract class $GenericDeclaration$$Static implements $GenericDeclaration {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GenericDeclaration$$Type = ($GenericDeclaration);
}

declare module "java.lang.Class" {
import { $GenericDeclaration } from "java.lang.reflect.GenericDeclaration"
import { $Package } from "java.lang.Package"
import { $URL } from "java.net.URL"
import { $TypeVariable } from "java.lang.reflect.TypeVariable"
import { $AnnotatedType } from "java.lang.reflect.AnnotatedType"
import { JClass$$Type } from "zzzank.probejs.generated.JClass"
import { $TypeDescriptor$OfField } from "java.lang.invoke.TypeDescriptor$OfField"
import { $Field } from "java.lang.reflect.Field"
import { $Constructor } from "java.lang.reflect.Constructor"
import { $Serializable } from "java.io.Serializable"
import { $RecordComponent } from "java.lang.reflect.RecordComponent"
import { $Constable } from "java.lang.constant.Constable"
import { $Module, $Module$$Type } from "java.lang.Module"
import { $Type } from "java.lang.reflect.Type"
import { $ClassDesc } from "java.lang.constant.ClassDesc"
import { $ProtectionDomain } from "java.security.ProtectionDomain"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Optional } from "java.util.Optional"
import { $ClassLoader, $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $Method } from "java.lang.reflect.Method"
import { $InputStream } from "java.io.InputStream"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Class<T = any> implements $Serializable, $GenericDeclaration, $Type, $AnnotatedElement, $TypeDescriptor$OfField<$Class<any>>, $Constable {
public "asSubclass"<U>(class0: $Class$$Type<U>): $Class<U>
public "cast"(object0: any): T
public "describeConstable"(): $Optional<$ClassDesc>
public "descriptorString"(): string
public "desiredAssertionStatus"(): boolean
public static "forName"(string0: string, boolean1: boolean, classLoader2: $ClassLoader$$Type): $Class<any>
public static "forName"(string0: string): $Class<any>
public static "forName"(module0: $Module$$Type, string1: string): $Class<any>
public "getAnnotatedInterfaces"(): $AnnotatedType[]
public "getAnnotatedSuperclass"(): $AnnotatedType
public "getAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getCanonicalName"(): string
public "getClassLoader"(): $ClassLoader
public "getClasses"(): $Class<any>[]
public "getComponentType"(): $Class<any>
public "getConstructor"(...class0s: $Class$$Type<any>[]): $Constructor<T>
public "getConstructors"(): $Constructor<any>[]
public "getDeclaredAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getDeclaredClasses"(): $Class<any>[]
public "getDeclaredConstructor"(...class0s: $Class$$Type<any>[]): $Constructor<T>
public "getDeclaredConstructors"(): $Constructor<any>[]
public "getDeclaredField"(string0: string): $Field
public "getDeclaredFields"(): $Field[]
public "getDeclaredMethod"(string0: string, ...class1s: $Class$$Type<any>[]): $Method
public "getDeclaredMethods"(): $Method[]
public "getDeclaringClass"(): $Class<any>
public "getEnclosingClass"(): $Class<any>
public "getEnclosingConstructor"(): $Constructor<any>
public "getEnclosingMethod"(): $Method
public "getEnumConstants"(): T[]
public "getField"(string0: string): $Field
public "getFields"(): $Field[]
public "getGenericInterfaces"(): $Type[]
public "getGenericSuperclass"(): $Type
public "getInterfaces"(): $Class<any>[]
public "getMethod"(string0: string, ...class1s: $Class$$Type<any>[]): $Method
public "getMethods"(): $Method[]
public "getModifiers"(): integer
public "getModule"(): $Module
public "getName"(): string
public "getNestHost"(): $Class<any>
public "getNestMembers"(): $Class<any>[]
public "getPackage"(): $Package
public "getPackageName"(): string
public "getPermittedSubclasses"(): $Class<any>[]
public "getProtectionDomain"(): $ProtectionDomain
public "getRecordComponents"(): $RecordComponent[]
public "getResource"(string0: string): $URL
public "getResourceAsStream"(string0: string): $InputStream
public "getSigners"(): any[]
public "getSimpleName"(): string
public "getSuperclass"(): $Class<T>
public "getTypeName"(): string
public "getTypeParameters"(): $TypeVariable<$Class<T>>[]
public "isAnnotation"(): boolean
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isAnonymousClass"(): boolean
public "isArray"(): boolean
public "isAssignableFrom"(class0: $Class$$Type<any>): boolean
public "isEnum"(): boolean
public "isHidden"(): boolean
public "isInstance"(object0: any): boolean
public "isInterface"(): boolean
public "isLocalClass"(): boolean
public "isMemberClass"(): boolean
public "isNestmateOf"(class0: $Class$$Type<any>): boolean
public "isPrimitive"(): boolean
public "isRecord"(): boolean
public "isSealed"(): boolean
public "isSynthetic"(): boolean
/** @deprecated */
public "newInstance"(): T
public "toGenericString"(): string
get "annotatedInterfaces"(): $AnnotatedType[]
get "annotatedSuperclass"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "canonicalName"(): string
get "classLoader"(): $ClassLoader
get "classes"(): $Class<any>[]
get "componentType"(): $Class<any>
get "constructors"(): $Constructor<any>[]
get "declaredAnnotations"(): $Annotation[]
get "declaredClasses"(): $Class<any>[]
get "declaredConstructors"(): $Constructor<any>[]
get "declaredFields"(): $Field[]
get "declaredMethods"(): $Method[]
get "declaringClass"(): $Class<any>
get "enclosingClass"(): $Class<any>
get "enclosingConstructor"(): $Constructor<any>
get "enclosingMethod"(): $Method
get "enumConstants"(): T[]
get "fields"(): $Field[]
get "genericInterfaces"(): $Type[]
get "genericSuperclass"(): $Type
get "interfaces"(): $Class<any>[]
get "methods"(): $Method[]
get "modifiers"(): integer
get "module"(): $Module
get "name"(): string
get "nestHost"(): $Class<any>
get "nestMembers"(): $Class<any>[]
get "package"(): $Package
get "packageName"(): string
get "permittedSubclasses"(): $Class<any>[]
get "protectionDomain"(): $ProtectionDomain
get "recordComponents"(): $RecordComponent[]
get "signers"(): any[]
get "simpleName"(): string
get "superclass"(): $Class<T>
get "typeName"(): string
get "typeParameters"(): $TypeVariable<$Class<T>>[]
get "annotation"(): boolean
get "anonymousClass"(): boolean
get "array"(): boolean
get "enum"(): boolean
get "hidden"(): boolean
get "interface"(): boolean
get "localClass"(): boolean
get "memberClass"(): boolean
get "primitive"(): boolean
get "record"(): boolean
get "sealed"(): boolean
get "synthetic"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Class$$Type<T = any> = ($Class<T> | JClass$$Type<T>);
}

declare module "java.lang.Thread$State" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread$State extends $Enum<$Thread$State> {
static readonly "BLOCKED": $Thread$State
static readonly "NEW": $Thread$State
static readonly "RUNNABLE": $Thread$State
static readonly "TERMINATED": $Thread$State
static readonly "TIMED_WAITING": $Thread$State
static readonly "WAITING": $Thread$State

public static "valueOf"(string0: string): $Thread$State
public static "values"(): $Thread$State[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Thread$State$$Type = ($Thread$State | ("new" | "runnable" | "blocked" | "waiting" | "timed_waiting" | "terminated"));
}

declare module "java.lang.Iterable" {
import { $Iterator$$Type } from "java.util.Iterator"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Iterable$$Type<T = any> = ($Iterable<T> | T[] | (() => $Iterator$$Type<T>));
}

declare module "java.lang.ref.Reference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reference<T = any> {
public "clear"(): void
public "enqueue"(): boolean
public "get"(): T
/** @deprecated */
public "isEnqueued"(): boolean
public static "reachabilityFence"(object0: any): void
public "refersTo"(t0: T): boolean
get "enqueued"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Reference$$Type<T = any> = ($Reference<T>);
}

declare module "java.lang.module.ModuleDescriptor" {
import { $ModuleDescriptor$Provides } from "java.lang.module.ModuleDescriptor$Provides"
import { $ModuleDescriptor$Modifier, $ModuleDescriptor$Modifier$$Type } from "java.lang.module.ModuleDescriptor$Modifier"
import { $ModuleDescriptor$Version } from "java.lang.module.ModuleDescriptor$Version"
import { $Set, $Set$$Type } from "java.util.Set"
import { $ModuleDescriptor$Builder } from "java.lang.module.ModuleDescriptor$Builder"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Optional } from "java.util.Optional"
import { $Comparable } from "java.lang.Comparable"
import { $ModuleDescriptor$Exports } from "java.lang.module.ModuleDescriptor$Exports"
import { $ModuleDescriptor$Requires } from "java.lang.module.ModuleDescriptor$Requires"
import { $ModuleDescriptor$Opens } from "java.lang.module.ModuleDescriptor$Opens"
import { $InputStream$$Type } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor implements $Comparable<$ModuleDescriptor> {
public "compareTo"(moduleDescriptor0: $ModuleDescriptor$$Type): integer
public "exports"(): $Set<$ModuleDescriptor$Exports>
public "isAutomatic"(): boolean
public "isOpen"(): boolean
public "mainClass"(): $Optional<string>
public "modifiers"(): $Set<$ModuleDescriptor$Modifier>
public "name"(): string
public static "newAutomaticModule"(string0: string): $ModuleDescriptor$Builder
public static "newModule"(string0: string): $ModuleDescriptor$Builder
public static "newModule"(string0: string, set1: $Set$$Type<$ModuleDescriptor$Modifier$$Type>): $ModuleDescriptor$Builder
public static "newOpenModule"(string0: string): $ModuleDescriptor$Builder
public "opens"(): $Set<$ModuleDescriptor$Opens>
public "packages"(): $Set<string>
public "provides"(): $Set<$ModuleDescriptor$Provides>
public "rawVersion"(): $Optional<string>
public static "read"(byteBuffer0: $ByteBuffer$$Type, supplier1: $Supplier$$Type<$Set<string>>): $ModuleDescriptor
public static "read"(inputStream0: $InputStream$$Type, supplier1: $Supplier$$Type<$Set<string>>): $ModuleDescriptor
public static "read"(inputStream0: $InputStream$$Type): $ModuleDescriptor
public static "read"(byteBuffer0: $ByteBuffer$$Type): $ModuleDescriptor
public "requires"(): $Set<$ModuleDescriptor$Requires>
public "toNameAndVersion"(): string
public "uses"(): $Set<string>
public "version"(): $Optional<$ModuleDescriptor$Version>
get "automatic"(): boolean
get "open"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$$Type = ($ModuleDescriptor);
}

declare module "java.lang.reflect.Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Type {
"getTypeName"(): string
get "typeName"(): string
}

export namespace $Type {
const probejs$$marker: never
}
export abstract class $Type$$Static implements $Type {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Type$$Type = ($Type);
}

declare module "java.lang.constant.MethodTypeDesc" {
import { $List } from "java.util.List"
import { $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"
import { $ConstantDesc } from "java.lang.constant.ConstantDesc"
import { $ClassDesc, $ClassDesc$$Type } from "java.lang.constant.ClassDesc"
import { $TypeDescriptor$OfMethod } from "java.lang.invoke.TypeDescriptor$OfMethod"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodTypeDesc extends $ConstantDesc, $TypeDescriptor$OfMethod<$ClassDesc, $MethodTypeDesc> {
"changeParameterType"(int0: integer, classDesc1: $ClassDesc$$Type): $MethodTypeDesc
"changeReturnType"(classDesc0: $ClassDesc$$Type): $MethodTypeDesc
"descriptorString"(): string
"displayDescriptor"(): string
"equals"(object0: any): boolean
"insertParameterTypes"(int0: integer, ...classDesc1s: $ClassDesc$$Type[]): $MethodTypeDesc
"parameterCount"(): integer
"parameterList"(): $List<$ClassDesc>
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
}

export namespace $MethodTypeDesc {
function of(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $MethodTypeDesc
function ofDescriptor(string0: string): $MethodTypeDesc
}
export abstract class $MethodTypeDesc$$Static implements $MethodTypeDesc {
static "of"(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $MethodTypeDesc
static "ofDescriptor"(string0: string): $MethodTypeDesc
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodTypeDesc$$Type = ($MethodTypeDesc);
}

declare module "java.lang.Character" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Character$$Type = ($Character);
}

declare module "java.lang.invoke.TypeDescriptor$OfField" {
import { $TypeDescriptor } from "java.lang.invoke.TypeDescriptor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfField<F extends $TypeDescriptor$OfField<F> = $TypeDescriptor$OfField<F>> extends $TypeDescriptor {
"arrayType"(): F
"componentType"(): F
"descriptorString"(): string
"isArray"(): boolean
"isPrimitive"(): boolean
get "array"(): boolean
get "primitive"(): boolean
}

export namespace $TypeDescriptor$OfField {
const probejs$$marker: never
}
export abstract class $TypeDescriptor$OfField$$Static<F extends $TypeDescriptor$OfField<F> = $TypeDescriptor$OfField<F>> implements $TypeDescriptor$OfField<F> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TypeDescriptor$OfField$$Type<F extends $TypeDescriptor$OfField<F> = $TypeDescriptor$OfField<F>> = ($TypeDescriptor$OfField<F>);
}

declare module "java.lang.invoke.VarHandle$AccessMode" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$AccessMode extends $Enum<$VarHandle$AccessMode> {
static readonly "COMPARE_AND_EXCHANGE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_ACQUIRE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_RELEASE": $VarHandle$AccessMode
static readonly "COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "GET": $VarHandle$AccessMode
static readonly "GET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD": $VarHandle$AccessMode
static readonly "GET_AND_ADD_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_SET": $VarHandle$AccessMode
static readonly "GET_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_SET_RELEASE": $VarHandle$AccessMode
static readonly "GET_OPAQUE": $VarHandle$AccessMode
static readonly "GET_VOLATILE": $VarHandle$AccessMode
static readonly "SET": $VarHandle$AccessMode
static readonly "SET_OPAQUE": $VarHandle$AccessMode
static readonly "SET_RELEASE": $VarHandle$AccessMode
static readonly "SET_VOLATILE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_PLAIN": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_RELEASE": $VarHandle$AccessMode

public "methodName"(): string
public static "valueFromMethodName"(string0: string): $VarHandle$AccessMode
public static "valueOf"(string0: string): $VarHandle$AccessMode
public static "values"(): $VarHandle$AccessMode[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VarHandle$AccessMode$$Type = ($VarHandle$AccessMode | ("get" | "set" | "get_volatile" | "set_volatile" | "get_acquire" | "set_release" | "get_opaque" | "set_opaque" | "compare_and_set" | "compare_and_exchange" | "compare_and_exchange_acquire" | "compare_and_exchange_release" | "weak_compare_and_set_plain" | "weak_compare_and_set" | "weak_compare_and_set_acquire" | "weak_compare_and_set_release" | "get_and_set" | "get_and_set_acquire" | "get_and_set_release" | "get_and_add" | "get_and_add_acquire" | "get_and_add_release" | "get_and_bitwise_or" | "get_and_bitwise_or_release" | "get_and_bitwise_or_acquire" | "get_and_bitwise_and" | "get_and_bitwise_and_release" | "get_and_bitwise_and_acquire" | "get_and_bitwise_xor" | "get_and_bitwise_xor_release" | "get_and_bitwise_xor_acquire"));
}

declare module "java.lang.ThreadGroup" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Thread$UncaughtExceptionHandler } from "java.lang.Thread$UncaughtExceptionHandler"
import { $Thread$$Type } from "java.lang.Thread"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ThreadGroup implements $Thread$UncaughtExceptionHandler {
constructor(string0: string)
constructor(threadGroup0: $ThreadGroup$$Type, string1: string)

public "activeCount"(): integer
public "activeGroupCount"(): integer
/** @deprecated */
public "allowThreadSuspension"(boolean0: boolean): boolean
/** @deprecated */
public "checkAccess"(): void
/** @deprecated */
public "destroy"(): void
public "enumerate"(threadGroup0s: $ThreadGroup$$Type[], boolean1: boolean): integer
public "enumerate"(threadGroup0s: $ThreadGroup$$Type[]): integer
public "enumerate"(thread0s: $Thread$$Type[]): integer
public "enumerate"(thread0s: $Thread$$Type[], boolean1: boolean): integer
public "getMaxPriority"(): integer
public "getName"(): string
public "getParent"(): $ThreadGroup
public "interrupt"(): void
/** @deprecated */
public "isDaemon"(): boolean
/** @deprecated */
public "isDestroyed"(): boolean
public "list"(): void
public "parentOf"(threadGroup0: $ThreadGroup$$Type): boolean
/** @deprecated */
public "resume"(): void
/** @deprecated */
public "setDaemon"(boolean0: boolean): void
public "setMaxPriority"(int0: integer): void
/** @deprecated */
public "stop"(): void
/** @deprecated */
public "suspend"(): void
public "uncaughtException"(thread0: $Thread$$Type, throwable1: $Throwable$$Type): void
get "maxPriority"(): integer
get "name"(): string
get "parent"(): $ThreadGroup
get "daemon"(): boolean
get "destroyed"(): boolean
set "daemon"(value: boolean)
set "maxPriority"(value: integer)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ThreadGroup$$Type = ($ThreadGroup);
}

declare module "java.lang.module.ModuleDescriptor$Exports" {
import { $ModuleDescriptor$Exports$Modifier } from "java.lang.module.ModuleDescriptor$Exports$Modifier"
import { $Set } from "java.util.Set"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports implements $Comparable<$ModuleDescriptor$Exports> {
public "compareTo"(exports0: $ModuleDescriptor$Exports$$Type): integer
public "isQualified"(): boolean
public "modifiers"(): $Set<$ModuleDescriptor$Exports$Modifier>
public "source"(): string
public "targets"(): $Set<string>
get "qualified"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Exports$$Type = ($ModuleDescriptor$Exports);
}

declare module "java.lang.AbstractStringBuilder" {
import { $IntStream } from "java.util.stream.IntStream"
import { $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $Appendable } from "java.lang.Appendable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractStringBuilder implements $Appendable, charseq {
public "append"(charSequence0: charseq): $AbstractStringBuilder
public "append"(charSequence0: charseq, int1: integer, int2: integer): $AbstractStringBuilder
public "append"(char0s: character[]): $AbstractStringBuilder
public "append"(object0: any): $AbstractStringBuilder
public "append"(stringBuffer0: $StringBuffer$$Type): $AbstractStringBuilder
public "append"(string0: string): $AbstractStringBuilder
public "append"(int0: integer): $AbstractStringBuilder
public "append"(long0: long): $AbstractStringBuilder
public "append"(float0: float): $AbstractStringBuilder
public "append"(double0: double): $AbstractStringBuilder
public "append"(char0: character): $AbstractStringBuilder
public "append"(boolean0: boolean): $AbstractStringBuilder
public "append"(char0s: character[], int1: integer, int2: integer): $AbstractStringBuilder
public "appendCodePoint"(int0: integer): $AbstractStringBuilder
public "capacity"(): integer
public "charAt"(int0: integer): character
public "chars"(): $IntStream
public "codePointAt"(int0: integer): integer
public "codePointBefore"(int0: integer): integer
public "codePointCount"(int0: integer, int1: integer): integer
public "codePoints"(): $IntStream
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "delete"(int0: integer, int1: integer): $AbstractStringBuilder
public "deleteCharAt"(int0: integer): $AbstractStringBuilder
public "ensureCapacity"(int0: integer): void
public "getChars"(int0: integer, int1: integer, char2s: character[], int3: integer): void
public "indexOf"(string0: string): integer
public "indexOf"(string0: string, int1: integer): integer
public "insert"(int0: integer, string1: string): $AbstractStringBuilder
public "insert"(int0: integer, charSequence1: charseq): $AbstractStringBuilder
public "insert"(int0: integer, char1s: character[]): $AbstractStringBuilder
public "insert"(int0: integer, object1: any): $AbstractStringBuilder
public "insert"(int0: integer, char1s: character[], int2: integer, int3: integer): $AbstractStringBuilder
public "insert"(int0: integer, boolean1: boolean): $AbstractStringBuilder
public "insert"(int0: integer, float1: float): $AbstractStringBuilder
public "insert"(int0: integer, double1: double): $AbstractStringBuilder
public "insert"(int0: integer, long1: long): $AbstractStringBuilder
public "insert"(int0: integer, charSequence1: charseq, int2: integer, int3: integer): $AbstractStringBuilder
public "insert"(int0: integer, int1: integer): $AbstractStringBuilder
public "insert"(int0: integer, char1: character): $AbstractStringBuilder
public "isEmpty"(): boolean
public "lastIndexOf"(string0: string): integer
public "lastIndexOf"(string0: string, int1: integer): integer
public "length"(): integer
public "offsetByCodePoints"(int0: integer, int1: integer): integer
public "replace"(int0: integer, int1: integer, string2: string): $AbstractStringBuilder
public "reverse"(): $AbstractStringBuilder
public "setCharAt"(int0: integer, char1: character): void
public "setLength"(int0: integer): void
public "subSequence"(int0: integer, int1: integer): charseq
public "substring"(int0: integer): string
public "substring"(int0: integer, int1: integer): string
public "trimToSize"(): void
get "empty"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractStringBuilder$$Type = ($AbstractStringBuilder);
}

declare module "java.lang.constant.DynamicConstantDesc" {
import { $List } from "java.util.List"
import { $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"
import { $ConstantDesc, $ConstantDesc$$Type } from "java.lang.constant.ConstantDesc"
import { $ClassDesc, $ClassDesc$$Type } from "java.lang.constant.ClassDesc"
import { $DirectMethodHandleDesc, $DirectMethodHandleDesc$$Type } from "java.lang.constant.DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DynamicConstantDesc<T = any> implements $ConstantDesc {
public "bootstrapArgs"(): $ConstantDesc[]
public "bootstrapArgsList"(): $List<$ConstantDesc>
public "bootstrapMethod"(): $DirectMethodHandleDesc
public "constantName"(): string
public "constantType"(): $ClassDesc
public static "of"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type, ...constantDesc1s: $ConstantDesc$$Type[]): $DynamicConstantDesc<T>
public static "of"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type): $DynamicConstantDesc<T>
public static "ofCanonical"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type, constantDesc3s: $ConstantDesc$$Type[]): $ConstantDesc
public static "ofNamed"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type, ...constantDesc3s: $ConstantDesc$$Type[]): $DynamicConstantDesc<T>
public "resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): T
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicConstantDesc$$Type<T = any> = ($DynamicConstantDesc<T>);
}

declare module "java.lang.module.ModuleReader" {
import { $Stream } from "java.util.stream.Stream"
import { $Closeable } from "java.io.Closeable"
import { $Optional } from "java.util.Optional"
import { $URI } from "java.net.URI"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $InputStream } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ModuleReader extends $Closeable {
"close"(): void
"find"(string0: string): $Optional<$URI>
"list"(): $Stream<string>
"open"(string0: string): $Optional<$InputStream>
"read"(string0: string): $Optional<$ByteBuffer>
"release"(byteBuffer0: $ByteBuffer$$Type): void
}

export namespace $ModuleReader {
const probejs$$marker: never
}
export abstract class $ModuleReader$$Static implements $ModuleReader {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleReader$$Type = ($ModuleReader);
}

declare module "java.lang.AutoCloseable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AutoCloseable$$Type = ($AutoCloseable | (() => void));
}

declare module "java.lang.StringBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StringBuilder$$Type = ($StringBuilder);
}

declare module "java.lang.ThreadLocal" {
import { $Supplier$$Type } from "java.util.function.Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ThreadLocal<T = any> {
constructor()

public "get"(): T
public "remove"(): void
public "set"(t0: T): void
public static "withInitial"<S>(supplier0: $Supplier$$Type<S>): $ThreadLocal<S>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ThreadLocal$$Type<T = any> = ($ThreadLocal<T>);
}

declare module "java.lang.constant.DirectMethodHandleDesc$Kind" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DirectMethodHandleDesc$Kind extends $Enum<$DirectMethodHandleDesc$Kind> {
static readonly "CONSTRUCTOR": $DirectMethodHandleDesc$Kind
static readonly "GETTER": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_SPECIAL": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_STATIC": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_VIRTUAL": $DirectMethodHandleDesc$Kind
static readonly "SETTER": $DirectMethodHandleDesc$Kind
static readonly "SPECIAL": $DirectMethodHandleDesc$Kind
static readonly "STATIC": $DirectMethodHandleDesc$Kind
static readonly "STATIC_GETTER": $DirectMethodHandleDesc$Kind
static readonly "STATIC_SETTER": $DirectMethodHandleDesc$Kind
static readonly "VIRTUAL": $DirectMethodHandleDesc$Kind
readonly "isInterface": boolean
readonly "refKind": integer

public static "valueOf"(int0: integer, boolean1: boolean): $DirectMethodHandleDesc$Kind
public static "valueOf"(string0: string): $DirectMethodHandleDesc$Kind
public static "valueOf"(int0: integer): $DirectMethodHandleDesc$Kind
public static "values"(): $DirectMethodHandleDesc$Kind[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DirectMethodHandleDesc$Kind$$Type = ($DirectMethodHandleDesc$Kind | ("static" | "interface_static" | "virtual" | "interface_virtual" | "special" | "interface_special" | "constructor" | "getter" | "setter" | "static_getter" | "static_setter"));
}

declare module "java.lang.module.ModuleDescriptor$Provides" {
import { $List } from "java.util.List"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Provides implements $Comparable<$ModuleDescriptor$Provides> {
public "compareTo"(provides0: $ModuleDescriptor$Provides$$Type): integer
public "providers"(): $List<string>
public "service"(): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Provides$$Type = ($ModuleDescriptor$Provides);
}

declare module "java.lang.Enum" {
import { $Constable } from "java.lang.constant.Constable"
import { $Enum$EnumDesc } from "java.lang.Enum$EnumDesc"
import { $Optional } from "java.util.Optional"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Comparable } from "java.lang.Comparable"
import { $Serializable } from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum<E extends $Enum<E> = $Enum<E>> implements $Constable, $Comparable<E>, $Serializable {
public "compareTo"(e0: E): integer
public "describeConstable"(): $Optional<$Enum$EnumDesc<E>>
public "getDeclaringClass"(): $Class<E>
public "name"(): string
public "ordinal"(): integer
public static "valueOf"<T extends $Enum<T>>(class0: $Class$$Type<T>, string1: string): T
get "declaringClass"(): $Class<E>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Enum$$Type<E extends $Enum<E> = $Enum<E>> = ($Enum<E>);
}

declare module "java.lang.reflect.AnnotatedType" {
import { $Type } from "java.lang.reflect.Type"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class$$Type } from "java.lang.Class"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedType extends $AnnotatedElement {
"getAnnotatedOwnerType"(): $AnnotatedType
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getType"(): $Type
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotatedOwnerType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "type"(): $Type
}

export namespace $AnnotatedType {
const probejs$$marker: never
}
export abstract class $AnnotatedType$$Static implements $AnnotatedType {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnnotatedType$$Type = ($AnnotatedType);
}

declare module "java.lang.constant.ClassDesc" {
import { $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"
import { $ConstantDesc } from "java.lang.constant.ConstantDesc"
import { $TypeDescriptor$OfField } from "java.lang.invoke.TypeDescriptor$OfField"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ClassDesc extends $ConstantDesc, $TypeDescriptor$OfField<$ClassDesc> {
"arrayType"(int0: integer): $ClassDesc
"componentType"(): $ClassDesc
"descriptorString"(): string
"displayName"(): string
"equals"(object0: any): boolean
"isArray"(): boolean
"isClassOrInterface"(): boolean
"isPrimitive"(): boolean
"nested"(string0: string): $ClassDesc
"nested"(string0: string, ...string1s: string[]): $ClassDesc
"packageName"(): string
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
get "array"(): boolean
get "classOrInterface"(): boolean
get "primitive"(): boolean
}

export namespace $ClassDesc {
function of(string0: string): $ClassDesc
function of(string0: string, string1: string): $ClassDesc
function ofDescriptor(string0: string): $ClassDesc
}
export abstract class $ClassDesc$$Static implements $ClassDesc {
static "of"(string0: string): $ClassDesc
static "of"(string0: string, string1: string): $ClassDesc
static "ofDescriptor"(string0: string): $ClassDesc
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClassDesc$$Type = ($ClassDesc);
}

declare module "java.lang.invoke.VarHandle$VarHandleDesc" {
import { $DynamicConstantDesc } from "java.lang.constant.DynamicConstantDesc"
import { $VarHandle } from "java.lang.invoke.VarHandle"
import { $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"
import { $ClassDesc, $ClassDesc$$Type } from "java.lang.constant.ClassDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$VarHandleDesc extends $DynamicConstantDesc<$VarHandle> {
public static "ofArray"(classDesc0: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public static "ofField"(classDesc0: $ClassDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public static "ofStaticField"(classDesc0: $ClassDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public "resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): $VarHandle
public "varType"(): $ClassDesc
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VarHandle$VarHandleDesc$$Type = ($VarHandle$VarHandleDesc);
}

declare module "java.lang.Byte" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Byte$$Type = ($Byte);
}

declare module "java.lang.Thread" {
import { $Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type } from "java.lang.Thread$UncaughtExceptionHandler"
import { $Thread$State } from "java.lang.Thread$State"
import { $Map } from "java.util.Map"
import { $StackTraceElement } from "java.lang.StackTraceElement"
import { $ThreadGroup, $ThreadGroup$$Type } from "java.lang.ThreadGroup"
import { $ClassLoader, $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread implements $Runnable {
static readonly "MAX_PRIORITY": integer
static readonly "MIN_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type)
constructor(string0: string)
constructor(runnable0: $Runnable$$Type)
constructor()
constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type, string2: string, long3: long, boolean4: boolean)
constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type, string2: string, long3: long)
constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type, string2: string)
constructor(runnable0: $Runnable$$Type, string1: string)
constructor(threadGroup0: $ThreadGroup$$Type, string1: string)

public static "activeCount"(): integer
/** @deprecated */
public "checkAccess"(): void
/** @deprecated */
public "countStackFrames"(): integer
public static "currentThread"(): $Thread
public static "dumpStack"(): void
public static "enumerate"(thread0s: $Thread$$Type[]): integer
public static "getAllStackTraces"(): $Map<$Thread, $StackTraceElement[]>
public "getContextClassLoader"(): $ClassLoader
public static "getDefaultUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public "getId"(): long
public "getName"(): string
public "getPriority"(): integer
public "getStackTrace"(): $StackTraceElement[]
public "getState"(): $Thread$State
public "getThreadGroup"(): $ThreadGroup
public "getUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public static "holdsLock"(object0: any): boolean
public "interrupt"(): void
public static "interrupted"(): boolean
public "isAlive"(): boolean
public "isDaemon"(): boolean
public "isInterrupted"(): boolean
public "join"(long0: long): void
public "join"(): void
public "join"(long0: long, int1: integer): void
public static "onSpinWait"(): void
/** @deprecated */
public "resume"(): void
public "run"(): void
public "setContextClassLoader"(classLoader0: $ClassLoader$$Type): void
public "setDaemon"(boolean0: boolean): void
public static "setDefaultUncaughtExceptionHandler"(uncaughtExceptionHandler0: $Thread$UncaughtExceptionHandler$$Type): void
public "setName"(string0: string): void
public "setPriority"(int0: integer): void
public "setUncaughtExceptionHandler"(uncaughtExceptionHandler0: $Thread$UncaughtExceptionHandler$$Type): void
public static "sleep"(long0: long, int1: integer): void
public static "sleep"(long0: long): void
public "start"(): void
/** @deprecated */
public "stop"(): void
/** @deprecated */
public "suspend"(): void
public static "yield"(): void
get "contextClassLoader"(): $ClassLoader
get "id"(): long
get "name"(): string
get "priority"(): integer
get "stackTrace"(): $StackTraceElement[]
get "state"(): $Thread$State
get "threadGroup"(): $ThreadGroup
get "uncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
get "alive"(): boolean
get "daemon"(): boolean
set "contextClassLoader"(value: $ClassLoader$$Type)
set "daemon"(value: boolean)
set "name"(value: string)
set "priority"(value: integer)
set "uncaughtExceptionHandler"(value: $Thread$UncaughtExceptionHandler$$Type)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Thread$$Type = ($Thread);
}

declare module "java.lang.invoke.MethodHandle" {
import { $List$$Type } from "java.util.List"
import { $Constable } from "java.lang.constant.Constable"
import { $MethodType, $MethodType$$Type } from "java.lang.invoke.MethodType"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $MethodHandleDesc } from "java.lang.constant.MethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandle implements $Constable {
public "asCollector"(class0: $Class$$Type<any>, int1: integer): $MethodHandle
public "asCollector"(int0: integer, class1: $Class$$Type<any>, int2: integer): $MethodHandle
public "asFixedArity"(): $MethodHandle
public "asSpreader"(int0: integer, class1: $Class$$Type<any>, int2: integer): $MethodHandle
public "asSpreader"(class0: $Class$$Type<any>, int1: integer): $MethodHandle
public "asType"(methodType0: $MethodType$$Type): $MethodHandle
public "asVarargsCollector"(class0: $Class$$Type<any>): $MethodHandle
public "bindTo"(object0: any): $MethodHandle
public "describeConstable"(): $Optional<$MethodHandleDesc>
public "invoke"(...object0s: any[]): any
public "invokeExact"(...object0s: any[]): any
public "invokeWithArguments"(...object0s: any[]): any
public "invokeWithArguments"(list0: $List$$Type<any>): any
public "isVarargsCollector"(): boolean
public "type"(): $MethodType
public "withVarargs"(boolean0: boolean): $MethodHandle
get "varargsCollector"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodHandle$$Type = ($MethodHandle);
}

declare module "java.lang.reflect.Method" {
import { $Type } from "java.lang.reflect.Type"
import { $TypeVariable } from "java.lang.reflect.TypeVariable"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Executable } from "java.lang.reflect.Executable"
import { $Class, $Class$$Type } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Method extends $Executable {
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDefaultValue"(): any
public "getGenericReturnType"(): $Type
public "getReturnType"(): $Class<any>
public "getTypeParameters"(): $TypeVariable<$Method>[]
public "invoke"(object0: any, ...object1s: any[]): any
public "isBridge"(): boolean
public "isDefault"(): boolean
get "defaultValue"(): any
get "genericReturnType"(): $Type
get "returnType"(): $Class<any>
get "typeParameters"(): $TypeVariable<$Method>[]
get "bridge"(): boolean
get "default"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Method$$Type = ($Method);
}

declare module "java.lang.Exception" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Exception extends $Throwable {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Exception$$Type = ($Exception);
}

declare module "java.lang.reflect.AnnotatedElement" {
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class$$Type } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedElement {
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
}

export namespace $AnnotatedElement {
const probejs$$marker: never
}
export abstract class $AnnotatedElement$$Static implements $AnnotatedElement {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnnotatedElement$$Type = ($AnnotatedElement);
}

declare module "java.lang.module.ResolvedModule" {
import { $Set } from "java.util.Set"
import { $Configuration } from "java.lang.module.Configuration"
import { $ModuleReference } from "java.lang.module.ModuleReference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ResolvedModule {
public "configuration"(): $Configuration
public "name"(): string
public "reads"(): $Set<$ResolvedModule>
public "reference"(): $ModuleReference
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ResolvedModule$$Type = ($ResolvedModule);
}

declare module "java.lang.invoke.MethodHandleInfo" {
import { $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"
import { $MethodType, $MethodType$$Type } from "java.lang.invoke.MethodType"
import { $Member, $Member$$Type } from "java.lang.reflect.Member"
import { $Class, $Class$$Type } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleInfo {
"getDeclaringClass"(): $Class<any>
"getMethodType"(): $MethodType
"getModifiers"(): integer
"getName"(): string
"getReferenceKind"(): integer
"isVarArgs"(): boolean
"reflectAs"<T extends $Member>(class0: $Class$$Type<T>, lookup1: $MethodHandles$Lookup$$Type): T
get "declaringClass"(): $Class<any>
get "methodType"(): $MethodType
get "modifiers"(): integer
get "name"(): string
get "referenceKind"(): integer
get "varArgs"(): boolean
}

export namespace $MethodHandleInfo {
const REF_getField: integer
const REF_getStatic: integer
const REF_invokeInterface: integer
const REF_invokeSpecial: integer
const REF_invokeStatic: integer
const REF_invokeVirtual: integer
const REF_newInvokeSpecial: integer
const REF_putField: integer
const REF_putStatic: integer
function referenceKindToString(int0: integer): string
function toString(int0: integer, class1: $Class$$Type<any>, string2: string, methodType3: $MethodType$$Type): string
}
export abstract class $MethodHandleInfo$$Static implements $MethodHandleInfo {
static readonly "REF_getField": integer
static readonly "REF_getStatic": integer
static readonly "REF_invokeInterface": integer
static readonly "REF_invokeSpecial": integer
static readonly "REF_invokeStatic": integer
static readonly "REF_invokeVirtual": integer
static readonly "REF_newInvokeSpecial": integer
static readonly "REF_putField": integer
static readonly "REF_putStatic": integer

static "referenceKindToString"(int0: integer): string
static "toString"(int0: integer, class1: $Class$$Type<any>, string2: string, methodType3: $MethodType$$Type): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodHandleInfo$$Type = ($MethodHandleInfo);
}

declare module "java.lang.module.ModuleDescriptor$Opens" {
import { $Set } from "java.util.Set"
import { $Comparable } from "java.lang.Comparable"
import { $ModuleDescriptor$Opens$Modifier } from "java.lang.module.ModuleDescriptor$Opens$Modifier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens implements $Comparable<$ModuleDescriptor$Opens> {
public "compareTo"(opens0: $ModuleDescriptor$Opens$$Type): integer
public "isQualified"(): boolean
public "modifiers"(): $Set<$ModuleDescriptor$Opens$Modifier>
public "source"(): string
public "targets"(): $Set<string>
get "qualified"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Opens$$Type = ($ModuleDescriptor$Opens);
}

declare module "java.lang.Integer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Integer$$Type = ($Integer);
}

declare module "java.lang.module.ModuleDescriptor$Builder" {
import { $List$$Type } from "java.util.List"
import { $ModuleDescriptor$Requires$Modifier$$Type } from "java.lang.module.ModuleDescriptor$Requires$Modifier"
import { $ModuleDescriptor$Provides$$Type } from "java.lang.module.ModuleDescriptor$Provides"
import { $ModuleDescriptor$Exports$Modifier$$Type } from "java.lang.module.ModuleDescriptor$Exports$Modifier"
import { $ModuleDescriptor$Version$$Type } from "java.lang.module.ModuleDescriptor$Version"
import { $ModuleDescriptor } from "java.lang.module.ModuleDescriptor"
import { $Set$$Type } from "java.util.Set"
import { $ModuleDescriptor$Exports$$Type } from "java.lang.module.ModuleDescriptor$Exports"
import { $ModuleDescriptor$Requires$$Type } from "java.lang.module.ModuleDescriptor$Requires"
import { $ModuleDescriptor$Opens$Modifier$$Type } from "java.lang.module.ModuleDescriptor$Opens$Modifier"
import { $ModuleDescriptor$Opens$$Type } from "java.lang.module.ModuleDescriptor$Opens"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Builder {
public "build"(): $ModuleDescriptor
public "exports"(string0: string, set1: $Set$$Type<string>): $ModuleDescriptor$Builder
public "exports"(set0: $Set$$Type<$ModuleDescriptor$Exports$Modifier$$Type>, string1: string, set2: $Set$$Type<string>): $ModuleDescriptor$Builder
public "exports"(exports0: $ModuleDescriptor$Exports$$Type): $ModuleDescriptor$Builder
public "exports"(set0: $Set$$Type<$ModuleDescriptor$Exports$Modifier$$Type>, string1: string): $ModuleDescriptor$Builder
public "exports"(string0: string): $ModuleDescriptor$Builder
public "mainClass"(string0: string): $ModuleDescriptor$Builder
public "opens"(opens0: $ModuleDescriptor$Opens$$Type): $ModuleDescriptor$Builder
public "opens"(set0: $Set$$Type<$ModuleDescriptor$Opens$Modifier$$Type>, string1: string): $ModuleDescriptor$Builder
public "opens"(string0: string): $ModuleDescriptor$Builder
public "opens"(string0: string, set1: $Set$$Type<string>): $ModuleDescriptor$Builder
public "opens"(set0: $Set$$Type<$ModuleDescriptor$Opens$Modifier$$Type>, string1: string, set2: $Set$$Type<string>): $ModuleDescriptor$Builder
public "packages"(set0: $Set$$Type<string>): $ModuleDescriptor$Builder
public "provides"(provides0: $ModuleDescriptor$Provides$$Type): $ModuleDescriptor$Builder
public "provides"(string0: string, list1: $List$$Type<string>): $ModuleDescriptor$Builder
public "requires"(string0: string): $ModuleDescriptor$Builder
public "requires"(set0: $Set$$Type<$ModuleDescriptor$Requires$Modifier$$Type>, string1: string): $ModuleDescriptor$Builder
public "requires"(set0: $Set$$Type<$ModuleDescriptor$Requires$Modifier$$Type>, string1: string, version2: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
public "requires"(requires0: $ModuleDescriptor$Requires$$Type): $ModuleDescriptor$Builder
public "uses"(string0: string): $ModuleDescriptor$Builder
public "version"(version0: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
public "version"(string0: string): $ModuleDescriptor$Builder
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Builder$$Type = ($ModuleDescriptor$Builder);
}

declare module "java.lang.String" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $String$$Type = ($String);
}

declare module "java.lang.invoke.VarHandle" {
import { $List } from "java.util.List"
import { $MethodHandle } from "java.lang.invoke.MethodHandle"
import { $Constable } from "java.lang.constant.Constable"
import { $MethodType } from "java.lang.invoke.MethodType"
import { $VarHandle$VarHandleDesc } from "java.lang.invoke.VarHandle$VarHandleDesc"
import { $Optional } from "java.util.Optional"
import { $VarHandle$AccessMode$$Type } from "java.lang.invoke.VarHandle$AccessMode"
import { $Class } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle implements $Constable {
public "accessModeType"(accessMode0: $VarHandle$AccessMode$$Type): $MethodType
public static "acquireFence"(): void
public "compareAndExchange"(...object0s: any[]): any
public "compareAndExchangeAcquire"(...object0s: any[]): any
public "compareAndExchangeRelease"(...object0s: any[]): any
public "compareAndSet"(...object0s: any[]): boolean
public "coordinateTypes"(): $List<$Class<any>>
public "describeConstable"(): $Optional<$VarHandle$VarHandleDesc>
public static "fullFence"(): void
public "get"(...object0s: any[]): any
public "getAcquire"(...object0s: any[]): any
public "getAndAdd"(...object0s: any[]): any
public "getAndAddAcquire"(...object0s: any[]): any
public "getAndAddRelease"(...object0s: any[]): any
public "getAndBitwiseAnd"(...object0s: any[]): any
public "getAndBitwiseAndAcquire"(...object0s: any[]): any
public "getAndBitwiseAndRelease"(...object0s: any[]): any
public "getAndBitwiseOr"(...object0s: any[]): any
public "getAndBitwiseOrAcquire"(...object0s: any[]): any
public "getAndBitwiseOrRelease"(...object0s: any[]): any
public "getAndBitwiseXor"(...object0s: any[]): any
public "getAndBitwiseXorAcquire"(...object0s: any[]): any
public "getAndBitwiseXorRelease"(...object0s: any[]): any
public "getAndSet"(...object0s: any[]): any
public "getAndSetAcquire"(...object0s: any[]): any
public "getAndSetRelease"(...object0s: any[]): any
public "getOpaque"(...object0s: any[]): any
public "getVolatile"(...object0s: any[]): any
public "hasInvokeExactBehavior"(): boolean
public "isAccessModeSupported"(accessMode0: $VarHandle$AccessMode$$Type): boolean
public static "loadLoadFence"(): void
public static "releaseFence"(): void
public "set"(...object0s: any[]): void
public "setOpaque"(...object0s: any[]): void
public "setRelease"(...object0s: any[]): void
public "setVolatile"(...object0s: any[]): void
public static "storeStoreFence"(): void
public "toMethodHandle"(accessMode0: $VarHandle$AccessMode$$Type): $MethodHandle
public "varType"(): $Class<any>
public "weakCompareAndSet"(...object0s: any[]): boolean
public "weakCompareAndSetAcquire"(...object0s: any[]): boolean
public "weakCompareAndSetPlain"(...object0s: any[]): boolean
public "weakCompareAndSetRelease"(...object0s: any[]): boolean
public "withInvokeBehavior"(): $VarHandle
public "withInvokeExactBehavior"(): $VarHandle
set "opaque"(value: any[])
set "release"(value: any[])
set "volatile"(value: any[])
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VarHandle$$Type = ($VarHandle);
}

declare module "java.lang.Short" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Short$$Type = ($Short);
}

declare module "java.lang.reflect.Executable" {
import { $GenericDeclaration } from "java.lang.reflect.GenericDeclaration"
import { $AccessibleObject } from "java.lang.reflect.AccessibleObject"
import { $Type } from "java.lang.reflect.Type"
import { $Parameter } from "java.lang.reflect.Parameter"
import { $TypeVariable } from "java.lang.reflect.TypeVariable"
import { $Member } from "java.lang.reflect.Member"
import { $AnnotatedType } from "java.lang.reflect.AnnotatedType"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class, $Class$$Type } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Executable extends $AccessibleObject implements $Member, $GenericDeclaration {
public "getAnnotatedExceptionTypes"(): $AnnotatedType[]
public "getAnnotatedParameterTypes"(): $AnnotatedType[]
public "getAnnotatedReceiverType"(): $AnnotatedType
public "getAnnotatedReturnType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaringClass"(): $Class<any>
public "getExceptionTypes"(): $Class<any>[]
public "getGenericExceptionTypes"(): $Type[]
public "getGenericParameterTypes"(): $Type[]
public "getModifiers"(): integer
public "getName"(): string
public "getParameterAnnotations"(): $Annotation[][]
public "getParameterCount"(): integer
public "getParameterTypes"(): $Class<any>[]
public "getParameters"(): $Parameter[]
public "getTypeParameters"(): $TypeVariable<any>[]
public "isSynthetic"(): boolean
public "isVarArgs"(): boolean
public "toGenericString"(): string
get "annotatedExceptionTypes"(): $AnnotatedType[]
get "annotatedParameterTypes"(): $AnnotatedType[]
get "annotatedReceiverType"(): $AnnotatedType
get "annotatedReturnType"(): $AnnotatedType
get "declaringClass"(): $Class<any>
get "exceptionTypes"(): $Class<any>[]
get "genericExceptionTypes"(): $Type[]
get "genericParameterTypes"(): $Type[]
get "modifiers"(): integer
get "name"(): string
get "parameterAnnotations"(): $Annotation[][]
get "parameterCount"(): integer
get "parameterTypes"(): $Class<any>[]
get "parameters"(): $Parameter[]
get "typeParameters"(): $TypeVariable<any>[]
get "synthetic"(): boolean
get "varArgs"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Executable$$Type = ($Executable);
}

declare module "java.lang.constant.ConstantDesc" {
import { $MethodHandles$Lookup, $MethodHandles$Lookup$$Type } from "java.lang.invoke.MethodHandles$Lookup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ConstantDesc {
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
}

export namespace $ConstantDesc {
const probejs$$marker: never
}
export abstract class $ConstantDesc$$Static implements $ConstantDesc {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConstantDesc$$Type = ($ConstantDesc | ((arg0: $MethodHandles$Lookup) => any));
}

declare module "java.lang.Boolean" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Boolean$$Type = ($Boolean);
}

declare module "java.lang.reflect.RecordComponent" {
import { $Type } from "java.lang.reflect.Type"
import { $AnnotatedType } from "java.lang.reflect.AnnotatedType"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Method } from "java.lang.reflect.Method"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RecordComponent implements $AnnotatedElement {
public "getAccessor"(): $Method
public "getAnnotatedType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaringRecord"(): $Class<any>
public "getGenericSignature"(): string
public "getGenericType"(): $Type
public "getName"(): string
public "getType"(): $Class<any>
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "accessor"(): $Method
get "annotatedType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "declaringRecord"(): $Class<any>
get "genericSignature"(): string
get "genericType"(): $Type
get "name"(): string
get "type"(): $Class<any>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecordComponent$$Type = ($RecordComponent);
}

declare module "java.lang.module.ModuleDescriptor$Opens$Modifier" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens$Modifier extends $Enum<$ModuleDescriptor$Opens$Modifier> {
static readonly "MANDATED": $ModuleDescriptor$Opens$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Opens$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Opens$Modifier
public static "values"(): $ModuleDescriptor$Opens$Modifier[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Opens$Modifier$$Type = ($ModuleDescriptor$Opens$Modifier | ("synthetic" | "mandated"));
}

declare module "java.lang.ModuleLayer$Controller" {
import { $Module$$Type } from "java.lang.Module"
import { $ModuleLayer } from "java.lang.ModuleLayer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer$Controller {
public "addExports"(module0: $Module$$Type, string1: string, module2: $Module$$Type): $ModuleLayer$Controller
public "addOpens"(module0: $Module$$Type, string1: string, module2: $Module$$Type): $ModuleLayer$Controller
public "addReads"(module0: $Module$$Type, module1: $Module$$Type): $ModuleLayer$Controller
public "layer"(): $ModuleLayer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleLayer$Controller$$Type = ($ModuleLayer$Controller);
}

declare module "java.lang.RuntimeException" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Exception } from "java.lang.Exception"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RuntimeException extends $Exception {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RuntimeException$$Type = ($RuntimeException);
}

declare module "java.lang.Math" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Math {
static readonly "E": double
static readonly "PI": double

public static "IEEEremainder"(double0: double, double1: double): double
public static "abs"(int0: integer): integer
public static "abs"(long0: long): long
public static "abs"(double0: double): double
public static "abs"(float0: float): float
public static "absExact"(long0: long): long
public static "absExact"(int0: integer): integer
public static "acos"(double0: double): double
public static "addExact"(long0: long, long1: long): long
public static "addExact"(int0: integer, int1: integer): integer
public static "asin"(double0: double): double
public static "atan"(double0: double): double
public static "atan2"(double0: double, double1: double): double
public static "cbrt"(double0: double): double
public static "ceil"(double0: double): double
public static "copySign"(double0: double, double1: double): double
public static "copySign"(float0: float, float1: float): float
public static "cos"(double0: double): double
public static "cosh"(double0: double): double
public static "decrementExact"(int0: integer): integer
public static "decrementExact"(long0: long): long
public static "exp"(double0: double): double
public static "expm1"(double0: double): double
public static "floor"(double0: double): double
public static "floorDiv"(long0: long, int1: integer): long
public static "floorDiv"(long0: long, long1: long): long
public static "floorDiv"(int0: integer, int1: integer): integer
public static "floorMod"(int0: integer, int1: integer): integer
public static "floorMod"(long0: long, int1: integer): integer
public static "floorMod"(long0: long, long1: long): long
public static "fma"(double0: double, double1: double, double2: double): double
public static "fma"(float0: float, float1: float, float2: float): float
public static "getExponent"(float0: float): integer
public static "getExponent"(double0: double): integer
public static "hypot"(double0: double, double1: double): double
public static "incrementExact"(long0: long): long
public static "incrementExact"(int0: integer): integer
public static "log"(double0: double): double
public static "log10"(double0: double): double
public static "log1p"(double0: double): double
public static "max"(double0: double, double1: double): double
public static "max"(float0: float, float1: float): float
public static "max"(long0: long, long1: long): long
public static "max"(int0: integer, int1: integer): integer
public static "min"(int0: integer, int1: integer): integer
public static "min"(float0: float, float1: float): float
public static "min"(long0: long, long1: long): long
public static "min"(double0: double, double1: double): double
public static "multiplyExact"(int0: integer, int1: integer): integer
public static "multiplyExact"(long0: long, int1: integer): long
public static "multiplyExact"(long0: long, long1: long): long
public static "multiplyFull"(int0: integer, int1: integer): long
public static "multiplyHigh"(long0: long, long1: long): long
public static "negateExact"(int0: integer): integer
public static "negateExact"(long0: long): long
public static "nextAfter"(float0: float, double1: double): float
public static "nextAfter"(double0: double, double1: double): double
public static "nextDown"(double0: double): double
public static "nextDown"(float0: float): float
public static "nextUp"(float0: float): float
public static "nextUp"(double0: double): double
public static "pow"(double0: double, double1: double): double
public static "random"(): double
public static "rint"(double0: double): double
public static "round"(float0: float): integer
public static "round"(double0: double): long
public static "scalb"(double0: double, int1: integer): double
public static "scalb"(float0: float, int1: integer): float
public static "signum"(double0: double): double
public static "signum"(float0: float): float
public static "sin"(double0: double): double
public static "sinh"(double0: double): double
public static "sqrt"(double0: double): double
public static "subtractExact"(int0: integer, int1: integer): integer
public static "subtractExact"(long0: long, long1: long): long
public static "tan"(double0: double): double
public static "tanh"(double0: double): double
public static "toDegrees"(double0: double): double
public static "toIntExact"(long0: long): integer
public static "toRadians"(double0: double): double
public static "ulp"(float0: float): float
public static "ulp"(double0: double): double
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Math$$Type = ($Math);
}

declare module "java.lang.Long" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Long$$Type = ($Long);
}

declare module "java.lang.Comparable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Comparable$$Type<T = any> = ($Comparable<T> | ((arg0: T) => integer));
}

declare module "java.lang.reflect.Constructor" {
import { $TypeVariable } from "java.lang.reflect.TypeVariable"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Executable } from "java.lang.reflect.Executable"
import { $Class, $Class$$Type } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Constructor<T = any> extends $Executable {
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaringClass"(): $Class<T>
public "getTypeParameters"(): $TypeVariable<$Constructor<T>>[]
public "newInstance"(...object0s: any[]): T
get "declaringClass"(): $Class<T>
get "typeParameters"(): $TypeVariable<$Constructor<T>>[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Constructor$$Type<T = any> = ($Constructor<T>);
}

declare module "java.lang.reflect.TypeVariable" {
import { $GenericDeclaration, $GenericDeclaration$$Type } from "java.lang.reflect.GenericDeclaration"
import { $Type } from "java.lang.reflect.Type"
import { $AnnotatedType } from "java.lang.reflect.AnnotatedType"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class$$Type } from "java.lang.Class"
import { $AnnotatedElement } from "java.lang.reflect.AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeVariable<D extends $GenericDeclaration = $GenericDeclaration> extends $Type, $AnnotatedElement {
"getAnnotatedBounds"(): $AnnotatedType[]
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getBounds"(): $Type[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getGenericDeclaration"(): D
"getName"(): string
"getTypeName"(): string
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotatedBounds"(): $AnnotatedType[]
get "annotations"(): $Annotation[]
get "bounds"(): $Type[]
get "declaredAnnotations"(): $Annotation[]
get "genericDeclaration"(): D
get "name"(): string
get "typeName"(): string
}

export namespace $TypeVariable {
const probejs$$marker: never
}
export abstract class $TypeVariable$$Static<D extends $GenericDeclaration = $GenericDeclaration> implements $TypeVariable<D> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TypeVariable$$Type<D extends $GenericDeclaration = $GenericDeclaration> = ($TypeVariable<D>);
}

declare module "java.lang.reflect.AnnotatedTypeVariable" {
import { $Type } from "java.lang.reflect.Type"
import { $AnnotatedType } from "java.lang.reflect.AnnotatedType"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Class$$Type } from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedTypeVariable extends $AnnotatedType {
"getAnnotatedBounds"(): $AnnotatedType[]
"getAnnotatedOwnerType"(): $AnnotatedType
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getType"(): $Type
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotatedBounds"(): $AnnotatedType[]
get "annotatedOwnerType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "type"(): $Type
}

export namespace $AnnotatedTypeVariable {
const probejs$$marker: never
}
export abstract class $AnnotatedTypeVariable$$Static implements $AnnotatedTypeVariable {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnnotatedTypeVariable$$Type = ($AnnotatedTypeVariable);
}

declare module "java.lang.NamedPackage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NamedPackage {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NamedPackage$$Type = ($NamedPackage);
}

declare module "java.lang.invoke.MethodHandles$Lookup" {
import { $MethodHandles$Lookup$ClassOption$$Type } from "java.lang.invoke.MethodHandles$Lookup$ClassOption"
import { $VarHandle } from "java.lang.invoke.VarHandle"
import { $MethodHandle, $MethodHandle$$Type } from "java.lang.invoke.MethodHandle"
import { $MethodType$$Type } from "java.lang.invoke.MethodType"
import { $MethodHandleInfo } from "java.lang.invoke.MethodHandleInfo"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Field$$Type } from "java.lang.reflect.Field"
import { $Method$$Type } from "java.lang.reflect.Method"
import { $Constructor$$Type } from "java.lang.reflect.Constructor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup {
static readonly "MODULE": integer
static readonly "ORIGINAL": integer
static readonly "PACKAGE": integer
static readonly "PRIVATE": integer
static readonly "PROTECTED": integer
static readonly "PUBLIC": integer
static readonly "UNCONDITIONAL": integer

public "accessClass"(class0: $Class$$Type<any>): $Class<any>
public "bind"(object0: any, string1: string, methodType2: $MethodType$$Type): $MethodHandle
public "defineClass"(byte0s: byte[]): $Class<any>
public "defineHiddenClass"(byte0s: byte[], boolean1: boolean, ...classOption2s: $MethodHandles$Lookup$ClassOption$$Type[]): $MethodHandles$Lookup
public "defineHiddenClassWithClassData"(byte0s: byte[], object1: any, boolean2: boolean, ...classOption3s: $MethodHandles$Lookup$ClassOption$$Type[]): $MethodHandles$Lookup
public "dropLookupMode"(int0: integer): $MethodHandles$Lookup
public "ensureInitialized"(class0: $Class$$Type<any>): $Class<any>
public "findClass"(string0: string): $Class<any>
public "findConstructor"(class0: $Class$$Type<any>, methodType1: $MethodType$$Type): $MethodHandle
public "findGetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findSetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findSpecial"(class0: $Class$$Type<any>, string1: string, methodType2: $MethodType$$Type, class3: $Class$$Type<any>): $MethodHandle
public "findStatic"(class0: $Class$$Type<any>, string1: string, methodType2: $MethodType$$Type): $MethodHandle
public "findStaticGetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findStaticSetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findStaticVarHandle"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $VarHandle
public "findVarHandle"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $VarHandle
public "findVirtual"(class0: $Class$$Type<any>, string1: string, methodType2: $MethodType$$Type): $MethodHandle
public "hasFullPrivilegeAccess"(): boolean
/** @deprecated */
public "hasPrivateAccess"(): boolean
public "in"(class0: $Class$$Type<any>): $MethodHandles$Lookup
public "lookupClass"(): $Class<any>
public "lookupModes"(): integer
public "previousLookupClass"(): $Class<any>
public "revealDirect"(methodHandle0: $MethodHandle$$Type): $MethodHandleInfo
public "unreflect"(method0: $Method$$Type): $MethodHandle
public "unreflectConstructor"(constructor0: $Constructor$$Type<any>): $MethodHandle
public "unreflectGetter"(field0: $Field$$Type): $MethodHandle
public "unreflectSetter"(field0: $Field$$Type): $MethodHandle
public "unreflectSpecial"(method0: $Method$$Type, class1: $Class$$Type<any>): $MethodHandle
public "unreflectVarHandle"(field0: $Field$$Type): $VarHandle
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodHandles$Lookup$$Type = ($MethodHandles$Lookup);
}

declare module "java.lang.module.ModuleDescriptor$Requires$Modifier" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires$Modifier extends $Enum<$ModuleDescriptor$Requires$Modifier> {
static readonly "MANDATED": $ModuleDescriptor$Requires$Modifier
static readonly "STATIC": $ModuleDescriptor$Requires$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Requires$Modifier
static readonly "TRANSITIVE": $ModuleDescriptor$Requires$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Requires$Modifier
public static "values"(): $ModuleDescriptor$Requires$Modifier[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Requires$Modifier$$Type = ($ModuleDescriptor$Requires$Modifier | ("transitive" | "static" | "synthetic" | "mandated"));
}

declare module "java.lang.module.ModuleDescriptor$Requires" {
import { $ModuleDescriptor$Requires$Modifier } from "java.lang.module.ModuleDescriptor$Requires$Modifier"
import { $ModuleDescriptor$Version } from "java.lang.module.ModuleDescriptor$Version"
import { $Optional } from "java.util.Optional"
import { $Set } from "java.util.Set"
import { $Comparable } from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires implements $Comparable<$ModuleDescriptor$Requires> {
public "compareTo"(requires0: $ModuleDescriptor$Requires$$Type): integer
public "compiledVersion"(): $Optional<$ModuleDescriptor$Version>
public "modifiers"(): $Set<$ModuleDescriptor$Requires$Modifier>
public "name"(): string
public "rawCompiledVersion"(): $Optional<string>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleDescriptor$Requires$$Type = ($ModuleDescriptor$Requires);
}

declare module "java.lang.invoke.MethodHandles$Lookup$ClassOption" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup$ClassOption extends $Enum<$MethodHandles$Lookup$ClassOption> {
static readonly "NESTMATE": $MethodHandles$Lookup$ClassOption
static readonly "STRONG": $MethodHandles$Lookup$ClassOption

public static "valueOf"(string0: string): $MethodHandles$Lookup$ClassOption
public static "values"(): $MethodHandles$Lookup$ClassOption[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodHandles$Lookup$ClassOption$$Type = ($MethodHandles$Lookup$ClassOption | ("nestmate" | "strong"));
}

declare module "java.lang.Double" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Double$$Type = ($Double);
}

declare module "java.lang.ref.ReferenceQueue" {
import { $Reference } from "java.lang.ref.Reference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ReferenceQueue<T = any> {
constructor()

public "poll"(): $Reference<T>
public "remove"(long0: long): $Reference<T>
public "remove"(): $Reference<T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReferenceQueue$$Type<T = any> = ($ReferenceQueue<T>);
}

declare module "java.lang.constant.Constable" {
import { $ConstantDesc, $ConstantDesc$$Type } from "java.lang.constant.ConstantDesc"
import { $Optional, $Optional$$Type } from "java.util.Optional"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constable {
"describeConstable"(): $Optional<$ConstantDesc>
}

export namespace $Constable {
const probejs$$marker: never
}
export abstract class $Constable$$Static implements $Constable {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Constable$$Type = ($Constable | (() => $Optional$$Type<$ConstantDesc$$Type>));
}

