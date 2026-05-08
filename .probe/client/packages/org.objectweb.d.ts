declare module "org.objectweb.asm.Type" {
import { $Class$$Type } from "java.lang.Class"
import { $Method$$Type } from "java.lang.reflect.Method"
import { $Constructor$$Type } from "java.lang.reflect.Constructor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Type {
static readonly "ARRAY": integer
static readonly "BOOLEAN": integer
static readonly "BOOLEAN_TYPE": $Type
static readonly "BYTE": integer
static readonly "BYTE_TYPE": $Type
static readonly "CHAR": integer
static readonly "CHAR_TYPE": $Type
static readonly "DOUBLE": integer
static readonly "DOUBLE_TYPE": $Type
static readonly "FLOAT": integer
static readonly "FLOAT_TYPE": $Type
static readonly "INT": integer
static readonly "INT_TYPE": $Type
static readonly "LONG": integer
static readonly "LONG_TYPE": $Type
static readonly "METHOD": integer
static readonly "OBJECT": integer
static readonly "SHORT": integer
static readonly "SHORT_TYPE": $Type
static readonly "VOID": integer
static readonly "VOID_TYPE": $Type

public static "getArgumentCount"(string0: string): integer
public "getArgumentCount"(): integer
public "getArgumentTypes"(): $Type[]
public static "getArgumentTypes"(string0: string): $Type[]
public static "getArgumentTypes"(method0: $Method$$Type): $Type[]
public static "getArgumentsAndReturnSizes"(string0: string): integer
public "getArgumentsAndReturnSizes"(): integer
public "getClassName"(): string
public static "getConstructorDescriptor"(constructor0: $Constructor$$Type<any>): string
public "getDescriptor"(): string
public static "getDescriptor"(class0: $Class$$Type<any>): string
public "getDimensions"(): integer
public "getElementType"(): $Type
public "getInternalName"(): string
public static "getInternalName"(class0: $Class$$Type<any>): string
public static "getMethodDescriptor"(type0: $Type$$Type, ...type1s: $Type$$Type[]): string
public static "getMethodDescriptor"(method0: $Method$$Type): string
public static "getMethodType"(type0: $Type$$Type, ...type1s: $Type$$Type[]): $Type
public static "getMethodType"(string0: string): $Type
public static "getObjectType"(string0: string): $Type
public "getOpcode"(int0: integer): integer
public static "getReturnType"(method0: $Method$$Type): $Type
public "getReturnType"(): $Type
public static "getReturnType"(string0: string): $Type
public "getSize"(): integer
public "getSort"(): integer
public static "getType"(constructor0: $Constructor$$Type<any>): $Type
public static "getType"(class0: $Class$$Type<any>): $Type
public static "getType"(string0: string): $Type
public static "getType"(method0: $Method$$Type): $Type
get "argumentCount"(): integer
get "argumentTypes"(): $Type[]
get "argumentsAndReturnSizes"(): integer
get "className"(): string
get "descriptor"(): string
get "dimensions"(): integer
get "elementType"(): $Type
get "internalName"(): string
get "returnType"(): $Type
get "size"(): integer
get "sort"(): integer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Type$$Type = ($Type);
}

