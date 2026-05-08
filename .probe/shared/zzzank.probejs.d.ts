declare module "zzzank.probejs.lang.typescript.code.type.js.JSMemberType" {
import { $JSParam, $JSParam$$Type } from "zzzank.probejs.lang.typescript.code.type.js.JSParam"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BaseType } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSMemberType extends $BaseType {
readonly "members": $Collection<$JSParam>

constructor(members: $Collection$$Type<$JSParam$$Type>)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSObjectType$Builder" {
import { $JSObjectType } from "zzzank.probejs.lang.typescript.code.type.js.JSObjectType"
import { $JSMemberType$Builder } from "zzzank.probejs.lang.typescript.code.type.js.JSMemberType$Builder"

export class $JSObjectType$Builder extends $JSMemberType$Builder<$JSObjectType$Builder, $JSObjectType> {
constructor()

public "build"(): $JSObjectType
}
}

declare module "zzzank.probejs.events.TypingModificationEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TypeScriptFile, $TypeScriptFile$$Type } from "zzzank.probejs.lang.typescript.TypeScriptFile"
import { $RequestAwareFiles$$Type } from "zzzank.probejs.lang.typescript.RequestAwareFiles"
import { $Map } from "java.util.Map"
import { $ScriptEventJS } from "zzzank.probejs.events.ScriptEventJS"
import { $Class$$Type } from "java.lang.Class"
import { $ClassPath } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $TypingModificationEventJS extends $ScriptEventJS {
constructor(files: $RequestAwareFiles$$Type)

public "modify"(clazz: $Class$$Type<any>, modifier: $Consumer$$Type<$TypeScriptFile$$Type>): void
public "viewGlobalFiles"(): $Map<$ClassPath, $TypeScriptFile>
}
}

declare module "zzzank.probejs.lang.typescript.code.ts.VariableDeclaration" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $CommentableCode } from "zzzank.probejs.lang.typescript.code.CommentableCode"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $VariableDeclaration extends $CommentableCode {
constructor(symbol: string, type: $BaseType$$Type)

public "setTypeFormat"(typeFormat: $BaseType$FormatType$$Type): $VariableDeclaration
get "symbol"(): string
set "symbol"(value: string)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
get "typeFormat"(): $BaseType$FormatType
set "typeFormat"(value: $BaseType$FormatType$$Type)
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType" {
import { $List } from "java.util.List"
import { $StringJoiner } from "java.util.StringJoiner"
import { $BaseType } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSJoinedType extends $BaseType {
readonly "types": $List<$BaseType>

public "createJoiner"(): $StringJoiner
}
}

declare module "zzzank.probejs.lang.transpiler.redirect.TypeRedirect" {
import { $TypeDescriptor$$Type } from "zzzank.probejs.lang.java.type.TypeDescriptor"
import { $TypeConverter$$Type } from "zzzank.probejs.lang.transpiler.TypeConverter"
import { $BaseType } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export interface $TypeRedirect {
"apply"(typeDescriptor: $TypeDescriptor$$Type, converter: $TypeConverter$$Type): $BaseType
"test"(typeDescriptor: $TypeDescriptor$$Type, converter: $TypeConverter$$Type): boolean
}

export namespace $TypeRedirect {
const probejs$$marker: never
}
export abstract class $TypeRedirect$$Static implements $TypeRedirect {
}
}

declare module "zzzank.probejs.lang.typescript.code.Code" {
import { $ImportInfos } from "zzzank.probejs.lang.typescript.refer.ImportInfos"
import { $List } from "java.util.List"
import { $Declaration$$Type } from "zzzank.probejs.lang.typescript.Declaration"

export class $Code {
constructor()

public "format"(declaration: $Declaration$$Type): $List<string>
public "getImportInfos"(): $ImportInfos
get "importInfos"(): $ImportInfos
}
}

declare module "zzzank.probejs.mixins.AccessTextureAtlas" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $AccessTextureAtlas {
"getTexturesByName"(): $Map<$ResourceLocation, $TextureAtlasSprite>
get "texturesByName"(): $Map<$ResourceLocation, $TextureAtlasSprite>
}

export namespace $AccessTextureAtlas {
const probejs$$marker: never
}
export abstract class $AccessTextureAtlas$$Static implements $AccessTextureAtlas {
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSLambdaType$BuilderBase" {
import { $List } from "java.util.List"
import { $JSLambdaType } from "zzzank.probejs.lang.typescript.code.type.js.JSLambdaType"
import { $ParamDecl } from "zzzank.probejs.lang.typescript.code.member.ParamDecl"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSLambdaType$BuilderBase<SELF extends $JSLambdaType$BuilderBase<SELF> = $JSLambdaType$BuilderBase<SELF>> {
readonly "params": $List<$ParamDecl>
"returnType": $BaseType

constructor()

public "build"(): $JSLambdaType
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean): SELF
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): SELF
public "param"(symbol: string, type: $BaseType$$Type): SELF
public "returnType"(type: $BaseType$$Type): SELF
}
}

declare module "zzzank.probejs.lang.typescript.code.CommentableCode" {
import { $Code } from "zzzank.probejs.lang.typescript.code.Code"
import { $List } from "java.util.List"
import { $Declaration$$Type } from "zzzank.probejs.lang.typescript.Declaration"

export class $CommentableCode extends $Code {
readonly "comments": $List<string>

constructor()

public "addComment"(...comments: string[]): void
public "addCommentAtStart"(...comments: string[]): void
public "formatComments"(): $List<string>
public "formatRaw"(declaration: $Declaration$$Type): $List<string>
public "getTrimmedComments"(): $List<string>
public "linebreak"(): void
public "newline"(...comments: string[]): void
get "trimmedComments"(): $List<string>
}
}

declare module "zzzank.probejs.lang.java.clazz.ClassPath" {
import { $List } from "java.util.List"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Class$$Type } from "java.lang.Class"
import { $Comparable } from "java.lang.Comparable"

export class $ClassPath implements $Comparable<$ClassPath> {
static readonly "EMPTY": $ClassPath

public "compareTo"(other: $ClassPath$$Type): integer
public "countParts"(): integer
public "fromDiff"(diff: string, unmapper: $UnaryOperator$$Type<string>): $ClassPath
public "getFirstValidPath"(): string
public "getOriginalName"(): string
public "getPart"(index: integer): string
public "getRemappedName"(): string
public "getSimpleName"(): string
public "isArtificial"(): boolean
public static "ofArtificial"(name: string): $ClassPath
public static "ofJava"(c: $Class$$Type<any>): $ClassPath
public "toDiff"(base: $ClassPath$$Type): string
public "viewPackage"(): $List<string>
public "viewParts"(): $List<string>
get "firstValidPath"(): string
get "originalName"(): string
get "remappedName"(): string
get "simpleName"(): string
get "artificial"(): boolean
}
}

declare module "zzzank.probejs.lang.typescript.refer.ImportType" {
import { $List } from "java.util.List"
import { $UnaryOperator, $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Comparable } from "java.lang.Comparable"

export class $ImportType implements $Comparable<$ImportType> {
static readonly "ALL": $List<$ImportType>
static readonly "ORIGINAL": $ImportType
static readonly "STATIC": $ImportType
static readonly "TYPE": $ImportType
readonly "formatter": $UnaryOperator<string>
readonly "name": string
readonly "ordinal": integer

public "compareTo"(o: $ImportType$$Type): integer
public "fmt"(s: string): string
public static "register"(name: string, formatter: $UnaryOperator$$Type<string>): $ImportType
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSLambdaType$Builder" {
import { $JSLambdaType$BuilderBase } from "zzzank.probejs.lang.typescript.code.type.js.JSLambdaType$BuilderBase"

export class $JSLambdaType$Builder extends $JSLambdaType$BuilderBase<$JSLambdaType$Builder> {
constructor()

}
}

declare module "zzzank.probejs.api.dump.TSDump$FolderDump" {
import { $Stream } from "java.util.stream.Stream"
import { $TSFileWriter } from "zzzank.probejs.api.output.TSFileWriter"
import { $TSDump } from "zzzank.probejs.api.dump.TSDump"
import { $Path } from "java.nio.file.Path"

export interface $TSDump$FolderDump extends $TSDump {
"cleanOldDumps"(): void
"dump"(): void
"open"(): void
"running"(): boolean
"writeTo"(): $Path
"writers"(): $Stream<$TSFileWriter>
}

export namespace $TSDump$FolderDump {
const probejs$$marker: never
}
export abstract class $TSDump$FolderDump$$Static implements $TSDump$FolderDump {
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSParam" {
import { $Declaration$$Type } from "zzzank.probejs.lang.typescript.Declaration"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"
import { $Function$$Type } from "java.util.function.Function"

export class $JSParam {
constructor(name: string, optional: boolean, type: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type, nameProcessor: $Function$$Type<string, string>): string
public "name"(): string
public "optional"(): boolean
public "type"(): $BaseType
}
}

declare module "zzzank.probejs.lang.typescript.code.type.utility.ImportShield" {
import { $ImportInfos$$Type } from "zzzank.probejs.lang.typescript.refer.ImportInfos"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $ImportShield<T extends $BaseType = $BaseType> extends $BaseType {
readonly "inner": T

constructor(inner: T, imports: $ImportInfos$$Type)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType$Intersection" {
import { $JSJoinedType } from "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType"
import { $Collection$$Type } from "java.util.Collection"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSJoinedType$Intersection extends $JSJoinedType {
constructor(types: $Collection$$Type<$BaseType$$Type>)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSMemberType$Builder" {
import { $JSParam, $JSParam$$Type } from "zzzank.probejs.lang.typescript.code.type.js.JSParam"
import { $Collection } from "java.util.Collection"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSMemberType$Builder<SELF extends $JSMemberType$Builder<SELF, OUT> = $JSMemberType$Builder<SELF, OUT>, OUT extends $BaseType = $BaseType> {
readonly "members": $Collection<$JSParam>

constructor()

public "build"(): OUT
/** @deprecated */
public "literalMember"(name: string, optional: boolean, type: $BaseType$$Type): SELF
/** @deprecated */
public "literalMember"(name: string, type: $BaseType$$Type): SELF
public "member"(name: string, optional: boolean, type: $BaseType$$Type): SELF
public "member"(name: string, type: $BaseType$$Type): SELF
public "member"(param: $JSParam$$Type): SELF
public "rawNameMember"(name: string, optional: boolean, type: $BaseType$$Type): SELF
public "rawNameMember"(name: string, type: $BaseType$$Type): SELF
}
}

declare module "zzzank.probejs.lang.typescript.code.ts.FunctionDeclaration" {
import { $List, $List$$Type } from "java.util.List"
import { $ParamDecl, $ParamDecl$$Type } from "zzzank.probejs.lang.typescript.code.member.ParamDecl"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $CommentableCode } from "zzzank.probejs.lang.typescript.code.CommentableCode"

export class $FunctionDeclaration extends $CommentableCode {
readonly "params": $List<$ParamDecl>
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string, variableTypes: $List$$Type<$TSVariableType$$Type>, params: $List$$Type<$ParamDecl$$Type>, returnType: $BaseType$$Type)

get "name"(): string
set "name"(value: string)
get "returnType"(): $BaseType
set "returnType"(value: $BaseType$$Type)
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSTypeOfType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSTypeOfType extends $BaseType {
readonly "inner": $BaseType

constructor(inner: $BaseType$$Type)

}
}

declare module "zzzank.probejs.lang.typescript.code.member.MethodDecl" {
import { $List, $List$$Type } from "java.util.List"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $ParamDecl, $ParamDecl$$Type } from "zzzank.probejs.lang.typescript.code.member.ParamDecl"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $CommentableCode } from "zzzank.probejs.lang.typescript.code.CommentableCode"
import { $FunctionDeclaration } from "zzzank.probejs.lang.typescript.code.ts.FunctionDeclaration"

export class $MethodDecl extends $CommentableCode {
constructor(name: string, variableTypes: $List$$Type<$TSVariableType$$Type>, params: $List$$Type<$ParamDecl$$Type>, returnType: $BaseType$$Type)

public "asFunctionDecl"(): $FunctionDeclaration
get "content"(): string
set "content"(value: string)
get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "isInterface"(): boolean
set "isInterface"(value: boolean)
get "isStatic"(): boolean
set "isStatic"(value: boolean)
get "name"(): string
set "name"(value: string)
get "params"(): $List<$ParamDecl>
set "params"(value: $List$$Type<$ParamDecl$$Type>)
get "returnType"(): $BaseType
set "returnType"(value: $BaseType$$Type)
get "variableTypes"(): $List<$TSVariableType>
set "variableTypes"(value: $List$$Type<$TSVariableType$$Type>)
}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSArrayAccessType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TSArrayAccessType extends $BaseType {
constructor(array: $BaseType$$Type, index: $BaseType$$Type)

get "array"(): $BaseType
set "array"(value: $BaseType$$Type)
get "index"(): $BaseType
set "index"(value: $BaseType$$Type)
}
}

declare module "zzzank.probejs.lang.java.clazz.members.FieldInfo$FieldAttributes" {
import { $Field$$Type } from "java.lang.reflect.Field"

export class $FieldInfo$FieldAttributes {
readonly "isFinal": boolean
readonly "isStatic": boolean

constructor(field: $Field$$Type)

public "getStaticValue"(): any
get "staticValue"(): any
}
}

declare module "zzzank.probejs.lang.typescript.code.member.TypeDecl" {
import { $List, $List$$Type } from "java.util.List"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $CommentableCode } from "zzzank.probejs.lang.typescript.code.CommentableCode"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TypeDecl extends $CommentableCode {
constructor(exportDecl: boolean, name: string, symbolVariables: $List$$Type<$TSVariableType$$Type>, type: $BaseType$$Type, typeFormat: $BaseType$FormatType$$Type)
constructor(name: string, symbolVariables: $List$$Type<$TSVariableType$$Type>, type: $BaseType$$Type)
constructor(name: string, type: $BaseType$$Type)

public "setTypeFormat"(typeFormat: $BaseType$FormatType$$Type): $TypeDecl
get "exportDecl"(): boolean
set "exportDecl"(value: boolean)
get "name"(): string
set "name"(value: string)
get "symbolVariables"(): $List<$TSVariableType>
set "symbolVariables"(value: $List$$Type<$TSVariableType$$Type>)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
get "typeFormat"(): $BaseType$FormatType
set "typeFormat"(value: $BaseType$FormatType$$Type)
}
}

declare module "zzzank.probejs.lang.typescript.TypeScriptFile" {
import { $Code, $Code$$Type } from "zzzank.probejs.lang.typescript.code.Code"
import { $List } from "java.util.List"
import { $Collection$$Type } from "java.util.Collection"
import { $Declaration } from "zzzank.probejs.lang.typescript.Declaration"
import { $Writer$$Type } from "java.io.Writer"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Path$$Type } from "java.nio.file.Path"
import { $ClassPath, $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $TypeScriptFile {
readonly "codes": $List<$Code>
readonly "declaration": $Declaration
readonly "path": $ClassPath

constructor(self: $ClassPath$$Type)

public "addCode"(code: $Code$$Type): void
public "addCodes"(...codes: $Code$$Type[]): void
public "addCodes"(codes: $Collection$$Type<$Code$$Type>): void
public "excludeSymbol"(name: string): void
public "findCode"<T extends $Code>(type: $Class$$Type<T>): $Optional<T>
public "findCodeNullable"<T extends $Code>(type: $Class$$Type<T>): T
public "format"(): $List<string>
public "write"(writer: $Writer$$Type): void
public "write"(writeTo: $Path$$Type): void
}
}

declare module "zzzank.probejs.lang.typescript.code.ts.FunctionDeclaration$Builder" {
import { $List } from "java.util.List"
import { $ParamDecl } from "zzzank.probejs.lang.typescript.code.member.ParamDecl"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $FunctionDeclaration } from "zzzank.probejs.lang.typescript.code.ts.FunctionDeclaration"

export class $FunctionDeclaration$Builder {
readonly "name": string
readonly "params": $List<$ParamDecl>
"returnType": $BaseType
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string)

public "build"(): $FunctionDeclaration
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean): $FunctionDeclaration$Builder
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): $FunctionDeclaration$Builder
public "param"(symbol: string, type: $BaseType$$Type): $FunctionDeclaration$Builder
public "returnType"(type: $BaseType$$Type): $FunctionDeclaration$Builder
public "variable"(...variableType: $TSVariableType$$Type[]): $FunctionDeclaration$Builder
public "variable"(...symbols: string[]): $FunctionDeclaration$Builder
}
}

declare module "zzzank.probejs.lang.typescript.code.type.utility.WithFormatType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $WithFormatType extends $BaseType {
constructor(format: string, ...types: $BaseType$$Type[])

}
}

declare module "zzzank.probejs.mixins.AccessTextureManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AbstractTexture } from "net.minecraft.client.renderer.texture.AbstractTexture"
import { $Map } from "java.util.Map"

export interface $AccessTextureManager {
"getByPath"(): $Map<$ResourceLocation, $AbstractTexture>
get "byPath"(): $Map<$ResourceLocation, $AbstractTexture>
}

export namespace $AccessTextureManager {
const probejs$$marker: never
}
export abstract class $AccessTextureManager$$Static implements $AccessTextureManager {
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType$Union" {
import { $JSJoinedType } from "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType"
import { $Collection$$Type } from "java.util.Collection"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSJoinedType$Union extends $JSJoinedType {
constructor(types: $Collection$$Type<$BaseType$$Type>)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSLambdaType" {
import { $List, $List$$Type } from "java.util.List"
import { $ParamDecl, $ParamDecl$$Type } from "zzzank.probejs.lang.typescript.code.member.ParamDecl"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $MethodDecl } from "zzzank.probejs.lang.typescript.code.member.MethodDecl"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSLambdaType extends $BaseType {
readonly "params": $List<$ParamDecl>
readonly "returnType": $BaseType

constructor(params: $List$$Type<$ParamDecl$$Type>, returnType: $BaseType$$Type)

public "asMethod"(methodName: string): $MethodDecl
public static "paramFormatType"(formatType: $BaseType$FormatType$$Type): $BaseType$FormatType
}
}

declare module "zzzank.probejs.lang.java.clazz.members.MethodInfo$MethodAttributes" {
import { $Method$$Type } from "java.lang.reflect.Method"

export class $MethodInfo$MethodAttributes {
readonly "isAbstract": boolean
readonly "isDefault": boolean
readonly "isStatic": boolean

constructor(method: $Method$$Type)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType" {
import { $Enum } from "java.lang.Enum"

export class $BaseType$FormatType extends $Enum<$BaseType$FormatType> {
static readonly "INPUT": $BaseType$FormatType
static readonly "RETURN": $BaseType$FormatType
static readonly "VARIABLE": $BaseType$FormatType

public static "valueOf"(name: string): $BaseType$FormatType
public static "values"(): $BaseType$FormatType[]
}
}

declare module "zzzank.probejs.lang.typescript.code.type.utility.ContextShield" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $ContextShield<T extends $BaseType = $BaseType> extends $BaseType {
readonly "formatType": $BaseType$FormatType
readonly "inner": T

constructor(inner: T, formatType: $BaseType$FormatType$$Type)

}
}

declare module "zzzank.probejs.lang.java.clazz.members.FieldInfo" {
import { $FieldInfo$FieldAttributes } from "zzzank.probejs.lang.java.clazz.members.FieldInfo$FieldAttributes"
import { $TypeDescriptor } from "zzzank.probejs.lang.java.type.TypeDescriptor"
import { $AnnotationHolder } from "zzzank.probejs.lang.java.base.AnnotationHolder"
import { $Field$$Type } from "java.lang.reflect.Field"

export class $FieldInfo extends $AnnotationHolder {
readonly "attributes": $FieldInfo$FieldAttributes
readonly "name": string
readonly "type": $TypeDescriptor

constructor(field: $Field$$Type, name: string)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSPrimitiveType" {
import { $BaseType } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $JSPrimitiveType extends $BaseType {
readonly "content": string

constructor(content: string)

}
}

declare module "zzzank.probejs.lang.java.clazz.MemberCollector" {
import { $Stream } from "java.util.stream.Stream"
import { $ConstructorInfo } from "zzzank.probejs.lang.java.clazz.members.ConstructorInfo"
import { $MethodInfo } from "zzzank.probejs.lang.java.clazz.members.MethodInfo"
import { $FieldInfo } from "zzzank.probejs.lang.java.clazz.members.FieldInfo"
import { $Class$$Type } from "java.lang.Class"

export interface $MemberCollector {
"accept"(clazz: $Class$$Type<any>): void
"constructors"(): $Stream<$ConstructorInfo>
"fields"(): $Stream<$FieldInfo>
"methods"(): $Stream<$MethodInfo>
}

export namespace $MemberCollector {
const BASIC: $MemberCollector
const DEFAULT: $MemberCollector
}
export abstract class $MemberCollector$$Static implements $MemberCollector {
static readonly "BASIC": $MemberCollector
static readonly "DEFAULT": $MemberCollector

}
}

declare module "zzzank.probejs.lang.typescript.RequestAwareFiles" {
import { $Code, $Code$$Type } from "zzzank.probejs.lang.typescript.code.Code"
import { $TypeScriptFile, $TypeScriptFile$$Type } from "zzzank.probejs.lang.typescript.TypeScriptFile"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $Class$$Type } from "java.lang.Class"
import { $ClassPath, $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"
import { $ScriptDump, $ScriptDump$$Type } from "zzzank.probejs.lang.typescript.ScriptDump"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"

export class $RequestAwareFiles {
constructor(globalFiles: $Map$$Type<$ClassPath$$Type, $TypeScriptFile$$Type>, scriptDump: $ScriptDump$$Type)

public "globalFiles"(): $Map<$ClassPath, $TypeScriptFile>
public "isRequested"(path: $ClassPath$$Type): boolean
public "markRequested"(path: $ClassPath$$Type): void
public "request"(path: $ClassPath$$Type): $TypeScriptFile
public "request"(clazz: $Class$$Type<any>): $TypeScriptFile
public "requestCode"<T extends $Code>(clazz: $Class$$Type<any>, codeType: $Class$$Type<T>): T
public "requestOrCreate"(path: $ClassPath$$Type): $TypeScriptFile
public "requested"(): $Set<$ClassPath>
public "scriptDump"(): $ScriptDump
public "scriptType"(): $ScriptType
public "unRequest"(path: $ClassPath$$Type): void
}
}

declare module "zzzank.probejs.lang.typescript.ProbeNamedDump" {
import { $Stream } from "java.util.stream.Stream"
import { $TSFileWriter } from "zzzank.probejs.api.output.TSFileWriter"
import { $TSDump } from "zzzank.probejs.api.dump.TSDump"
import { $Path } from "java.nio.file.Path"

export interface $ProbeNamedDump extends $TSDump {
"cleanOldDumps"(): void
"dump"(): void
"open"(): void
"pjsDumpName"(): string
"running"(): boolean
"writeTo"(): $Path
"writers"(): $Stream<$TSFileWriter>
}

export namespace $ProbeNamedDump {
const probejs$$marker: never
}
export abstract class $ProbeNamedDump$$Static implements $ProbeNamedDump {
}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSKeyofType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TSKeyofType extends $BaseType {
constructor(inner: $BaseType$$Type)

get "inner"(): $BaseType
set "inner"(value: $BaseType$$Type)
}
}

declare module "zzzank.probejs.lang.typescript.code.member.MethodDecl$Builder" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $ConstructorDecl$BuilderBase } from "zzzank.probejs.lang.typescript.code.member.ConstructorDecl$BuilderBase"
import { $MethodDecl } from "zzzank.probejs.lang.typescript.code.member.MethodDecl"

export class $MethodDecl$Builder extends $ConstructorDecl$BuilderBase<$MethodDecl$Builder> {
readonly "name": string
"returnType": $BaseType

constructor(name: string)

public "abstractMethod"(): $MethodDecl$Builder
public "buildAsMethod"(): $MethodDecl
public "returnType"(type: $BaseType$$Type): $MethodDecl$Builder
public "staticMethod"(): $MethodDecl$Builder
get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "isStatic"(): boolean
set "isStatic"(value: boolean)
}
}

declare module "zzzank.probejs.lang.typescript.refer.Reference" {
import { $ImportInfo, $ImportInfo$$Type } from "zzzank.probejs.lang.typescript.refer.ImportInfo"

export class $Reference {
readonly "deduped": string
readonly "info": $ImportInfo

constructor(info: $ImportInfo$$Type, deduped: string)

public "getImportStatement"(): string
get "importStatement"(): string
}
}

declare module "zzzank.probejs.lang.typescript.code.type.utility.StaticType" {
import { $TSClassType } from "zzzank.probejs.lang.typescript.code.type.ts.TSClassType"
import { $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $StaticType extends $TSClassType {
constructor(classPath: $ClassPath$$Type)

}
}

declare module "zzzank.probejs.lang.transpiler.TypeConverter" {
import { $List } from "java.util.List"
import { $TSVariableType } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $Type$$Type } from "java.lang.reflect.Type"
import { $TypeDescriptor$$Type } from "zzzank.probejs.lang.java.type.TypeDescriptor"
import { $VariableType$$Type } from "zzzank.probejs.lang.java.type.impl.VariableType"
import { $TypeRedirect, $TypeRedirect$$Type } from "zzzank.probejs.lang.transpiler.redirect.TypeRedirect"
import { $BaseType } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TypeConverter {
readonly "typeRedirects": $List<$TypeRedirect>

constructor()

public "addTypeRedirect"(redirect: $TypeRedirect$$Type): void
public "convertType"(javaType: $Type$$Type): $BaseType
public "convertType"(descriptor: $TypeDescriptor$$Type): $BaseType
public "convertTypeBuiltin"(descriptor: $TypeDescriptor$$Type): $BaseType
public "convertTypeExcluding"(descriptor: $TypeDescriptor$$Type, excludedRedirect: $TypeRedirect$$Type): $BaseType
public "convertVariableType"(variableType: $VariableType$$Type): $TSVariableType
public "convertVariableTypeWithDefault"(variableType: $VariableType$$Type): $TSVariableType
}
}

declare module "zzzank.probejs.events.ScriptEventJS" {
import { $Statements, $Statements$$Static } from "zzzank.probejs.lang.typescript.code.ts.Statements"
import { $Types, $Types$$Static } from "zzzank.probejs.lang.typescript.code.type.Types"
import { $TSUtilityType, $TSUtilityType$$Static } from "zzzank.probejs.lang.typescript.code.type.utility.TSUtilityType"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { JClass } from "zzzank.probejs.generated.JClass"
import { $ScriptDump, $ScriptDump$$Type } from "zzzank.probejs.lang.typescript.ScriptDump"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"

export class $ScriptEventJS extends $EventJS {
readonly "scriptDump": $ScriptDump

constructor(scriptDump: $ScriptDump$$Type)

public "getScriptType"(): $ScriptType
public "getStatements"(): (JClass<$Statements> & (typeof $Statements$$Static))
public "getTSUtilityTypes"(): (JClass<$TSUtilityType> & (typeof $TSUtilityType$$Static))
public "getTypes"(): (JClass<$Types> & (typeof $Types$$Static))
get "scriptType"(): $ScriptType
get "statements"(): (JClass<$Statements> & (typeof $Statements$$Static))
get "tSUtilityTypes"(): (JClass<$TSUtilityType> & (typeof $TSUtilityType$$Static))
get "types"(): (JClass<$Types> & (typeof $Types$$Static))
}
}

declare module "zzzank.probejs.mixins.AccessScriptManager" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Map } from "java.util.Map"
import { $NativeJavaClass } from "dev.latvian.mods.rhino.NativeJavaClass"

export interface $AccessScriptManager {
"getJavaClassCache"(): $Map<string, $Either<$NativeJavaClass, boolean>>
get "javaClassCache"(): $Map<string, $Either<$NativeJavaClass, boolean>>
}

export namespace $AccessScriptManager {
const probejs$$marker: never
}
export abstract class $AccessScriptManager$$Static implements $AccessScriptManager {
}
}

declare module "zzzank.probejs.lang.typescript.refer.ImportInfo" {
import { $Stream } from "java.util.stream.Stream"
import { $ImportType, $ImportType$$Type } from "zzzank.probejs.lang.typescript.refer.ImportType"
import { $ClassPath, $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $ImportInfo {
readonly "path": $ClassPath

public "addType"(type: $ImportType$$Type): $ImportInfo
public "addTypes"(...types: $ImportType$$Type[]): $ImportInfo
public "getTypes"(): $Stream<$ImportType>
public "mergeWith"(addition: $ImportInfo$$Type): $ImportInfo
public static "of"(path: $ClassPath$$Type): $ImportInfo
public static "ofDefault"(path: $ClassPath$$Type): $ImportInfo
public static "ofOriginal"(path: $ClassPath$$Type): $ImportInfo
public static "ofStatic"(path: $ClassPath$$Type): $ImportInfo
public static "ofType"(path: $ClassPath$$Type): $ImportInfo
get "imports"(): integer
set "imports"(value: integer)
get "types"(): $Stream<$ImportType>
}
}

declare module "zzzank.probejs.api.dump.JSConfigDump" {
import { $TSDumpBase } from "zzzank.probejs.api.dump.TSDumpBase"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $TSDump, $TSDump$$Type } from "zzzank.probejs.api.dump.TSDump"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $JSConfigDump extends $TSDumpBase {
readonly "replaceIf": $Predicate<$JsonObject>
readonly "scriptFolder": $Path

constructor(writeTo: $Path$$Type, scriptFolder: $Path$$Type, replaceIf: $Predicate$$Type<$JsonObject$$Type>)
constructor(writeTo: $Path$$Type, scriptFolder: $Path$$Type)

public "addTypingProvider"(...dumps: $TSDump$$Type[]): void
public "cleanOldDumps"(): void
public "open"(): void
public "viewTypingProviders"(): $List<$TSDump>
}
}

declare module "zzzank.probejs.lang.typescript.code.member.ClassDecl$Builder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $FieldDecl } from "zzzank.probejs.lang.typescript.code.member.FieldDecl"
import { $MethodDecl$Builder$$Type } from "zzzank.probejs.lang.typescript.code.member.MethodDecl$Builder"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $Collection$$Type } from "java.util.Collection"
import { $ConstructorDecl$Builder$$Type } from "zzzank.probejs.lang.typescript.code.member.ConstructorDecl$Builder"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $ClassDecl } from "zzzank.probejs.lang.typescript.code.member.ClassDecl"
import { $ConstructorDecl } from "zzzank.probejs.lang.typescript.code.member.ConstructorDecl"
import { $MethodDecl } from "zzzank.probejs.lang.typescript.code.member.MethodDecl"

export class $ClassDecl$Builder {
readonly "constructors": $List<$ConstructorDecl>
readonly "fields": $List<$FieldDecl>
readonly "interfaces": $List<$BaseType>
readonly "methods": $List<$MethodDecl>
readonly "name": string
"superClass": $BaseType
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string)

public "abstractClass"(): $ClassDecl$Builder
public "build"(): $ClassDecl
public "ctor"(modifier: $Consumer$$Type<$ConstructorDecl$Builder$$Type>): $ClassDecl$Builder
public "field"(symbol: string, baseType: $BaseType$$Type): $ClassDecl$Builder
public "field"(symbol: string, baseType: $BaseType$$Type, isStatic: boolean): $ClassDecl$Builder
public "field"(symbol: string, baseType: $BaseType$$Type, isStatic: boolean, isFinal: boolean): $ClassDecl$Builder
public "interfaceClass"(): $ClassDecl$Builder
public "interfaces"(...interfaces: $BaseType$$Type[]): $ClassDecl$Builder
public "method"(name: string, modifier: $Consumer$$Type<$MethodDecl$Builder$$Type>): $ClassDecl$Builder
public "superClass"(superClass: $BaseType$$Type): $ClassDecl$Builder
public "typeVariables"(...symbols: string[]): $ClassDecl$Builder
public "typeVariables"(...variableTypes: $TSVariableType$$Type[]): $ClassDecl$Builder
public "typeVariables"(variableTypes: $Collection$$Type<$TSVariableType$$Type>): $ClassDecl$Builder
get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "isInterface"(): boolean
set "isInterface"(value: boolean)
}
}

declare module "zzzank.probejs.lang.java.clazz.members.MethodInfo" {
import { $TypeVariableHolder } from "zzzank.probejs.lang.java.base.TypeVariableHolder"
import { $List } from "java.util.List"
import { $TypeDescriptor, $TypeDescriptor$$Type } from "zzzank.probejs.lang.java.type.TypeDescriptor"
import { $VariableType$$Type } from "zzzank.probejs.lang.java.type.impl.VariableType"
import { $Map$$Type } from "java.util.Map"
import { $MethodInfo$MethodAttributes } from "zzzank.probejs.lang.java.clazz.members.MethodInfo$MethodAttributes"
import { $ParamInfo } from "zzzank.probejs.lang.java.clazz.members.ParamInfo"
import { $Method$$Type } from "java.lang.reflect.Method"

export class $MethodInfo extends $TypeVariableHolder {
readonly "attributes": $MethodInfo$MethodAttributes
readonly "name": string
readonly "params": $List<$ParamInfo>
readonly "returnType": $TypeDescriptor

constructor(method: $Method$$Type, name: string, typeRemapper: $Map$$Type<$VariableType$$Type, $TypeDescriptor$$Type>)

}
}

declare module "zzzank.probejs.lang.typescript.code.member.ParamDecl" {
import { $List$$Type } from "java.util.List"
import { $Declaration$$Type } from "zzzank.probejs.lang.typescript.Declaration"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $ParamDecl {
constructor(name: string, type: $BaseType$$Type, varArg: boolean, optional: boolean)
constructor(name: string, type: $BaseType$$Type)

public "format"(i: integer, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
public static "formatParams"(params: $List$$Type<$ParamDecl$$Type>, declaration: $Declaration$$Type): string
public static "formatParams"(params: $List$$Type<$ParamDecl$$Type>, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
get "name"(): string
set "name"(value: string)
get "optional"(): boolean
set "optional"(value: boolean)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
get "varArg"(): boolean
set "varArg"(value: boolean)
}
}

declare module "zzzank.probejs.lang.java.base.ClassProvider" {
import { $Collection } from "java.util.Collection"
import { $Class } from "java.lang.Class"

export interface $ClassProvider {
"getClasses"(): $Collection<$Class<any>>
get "classes"(): $Collection<$Class<any>>
}

export namespace $ClassProvider {
const probejs$$marker: never
}
export abstract class $ClassProvider$$Static implements $ClassProvider {
}
}

declare module "zzzank.probejs.events.SnippetGenerationEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Snippet$$Type } from "zzzank.probejs.lang.snippet.Snippet"
import { $SnippetDump$$Type } from "zzzank.probejs.lang.snippet.SnippetDump"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $SnippetGenerationEventJS extends $EventJS {
constructor(dump: $SnippetDump$$Type)

public "create"(name: string, handler: $Consumer$$Type<$Snippet$$Type>): void
}
}

declare module "zzzank.probejs.lang.typescript.SharedDump" {
import { $Stream } from "java.util.stream.Stream"
import { $TSFileWriter } from "zzzank.probejs.api.output.TSFileWriter"
import { $TSFilesDump } from "zzzank.probejs.api.dump.TSFilesDump"
import { $Set } from "java.util.Set"
import { $ProbeNamedDump } from "zzzank.probejs.lang.typescript.ProbeNamedDump"
import { $Transpiler, $Transpiler$$Type } from "zzzank.probejs.lang.transpiler.Transpiler"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $ClassPath } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $SharedDump extends $TSFilesDump implements $ProbeNamedDump {
readonly "denied": $Set<$ClassPath>
readonly "transpiler": $Transpiler

constructor(writeTo: $Path$$Type, transpiler: $Transpiler$$Type)

public "cleanOldDumps"(): void
public "dump"(): void
public "open"(): void
public "pjsDumpName"(): string
public "running"(): boolean
public "writeTo"(): $Path
public "writers"(): $Stream<$TSFileWriter>
}
}

declare module "zzzank.probejs.lang.snippet.Snippet" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $Collection$$Type } from "java.util.Collection"
import { $Variable$$Type } from "zzzank.probejs.lang.snippet.parts.Variable"

export class $Snippet {
readonly "name": string

constructor(name: string)

public "choices"(enumeration: integer, choices: $Collection$$Type<string>): $Snippet
public "choices"(choices: $Stream$$Type<string>): $Snippet
public "choices"(choices: $Collection$$Type<string>): $Snippet
public "compile"(): $JsonObject
public "description"(description: string): $Snippet
public "getPrefixes"(): $List<string>
public "literal"(content: string): $Snippet
public "newline"(): $Snippet
public "prefix"(prefix: string): $Snippet
public "tabStop"(enumeration: integer, defaultValue: string): $Snippet
public "tabStop"(enumeration: integer): $Snippet
public "tabStop"(): $Snippet
public "variable"(variable: $Variable$$Type): $Snippet
get "prefixes"(): $List<string>
}
}

declare module "zzzank.probejs.lang.transpiler.Transpiler" {
import { $TypeScriptFile } from "zzzank.probejs.lang.typescript.TypeScriptFile"
import { $Clazz$$Type } from "zzzank.probejs.lang.java.clazz.Clazz"
import { $TypeConverter, $TypeConverter$$Type } from "zzzank.probejs.lang.transpiler.TypeConverter"
import { $Map } from "java.util.Map"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Class$$Type } from "java.lang.Class"
import { $ClassPath } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $Transpiler {
readonly "rejectedClasses": $Set<$ClassPath>
readonly "typeConverter": $TypeConverter

constructor(typeConverter: $TypeConverter$$Type)

public "dump"(clazzes: $Collection$$Type<$Clazz$$Type>): $Map<$ClassPath, $TypeScriptFile>
public "isRejected"(clazz: $Clazz$$Type): boolean
public "reject"(clazz: $Class$$Type<any>): void
}
}

declare module "zzzank.probejs.lang.typescript.code.type.utility.TSUtilityType" {
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $TSParamType } from "zzzank.probejs.lang.typescript.code.type.ts.TSParamType"

export interface $TSUtilityType {
}

export namespace $TSUtilityType {
function awaited(promise: $BaseType$$Type): $TSParamType
function capitalize(string: $BaseType$$Type): $TSParamType
function constructorParameters(type: $BaseType$$Type): $TSParamType
function exclude(type: $BaseType$$Type, excludeFilter: $BaseType$$Type): $TSParamType
function extract(type: $BaseType$$Type, extractFilter: $BaseType$$Type): $TSParamType
function instanceType(type: $BaseType$$Type): $TSParamType
function lowerCase(string: $BaseType$$Type): $TSParamType
function noInfer(type: $BaseType$$Type): $TSParamType
function nonNullable(type: $BaseType$$Type): $TSParamType
function omit(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
function omitThisParameter(type: $BaseType$$Type): $TSParamType
function parameters(function_: $BaseType$$Type): $TSParamType
function partial(type: $BaseType$$Type): $TSParamType
function pick(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
function readonly(promise: $BaseType$$Type): $TSParamType
function record(keys: $BaseType$$Type, type: $BaseType$$Type): $TSParamType
function required(type: $BaseType$$Type): $TSParamType
function returnType(type: $BaseType$$Type): $TSParamType
function thisParameterType(type: $BaseType$$Type): $TSParamType
function thisType(type: $BaseType$$Type): $TSParamType
function unCapitalize(string: $BaseType$$Type): $TSParamType
function upperCase(string: $BaseType$$Type): $TSParamType
}
export abstract class $TSUtilityType$$Static implements $TSUtilityType {
static "awaited"(promise: $BaseType$$Type): $TSParamType
static "capitalize"(string: $BaseType$$Type): $TSParamType
static "constructorParameters"(type: $BaseType$$Type): $TSParamType
static "exclude"(type: $BaseType$$Type, excludeFilter: $BaseType$$Type): $TSParamType
static "extract"(type: $BaseType$$Type, extractFilter: $BaseType$$Type): $TSParamType
static "instanceType"(type: $BaseType$$Type): $TSParamType
static "lowerCase"(string: $BaseType$$Type): $TSParamType
static "noInfer"(type: $BaseType$$Type): $TSParamType
static "nonNullable"(type: $BaseType$$Type): $TSParamType
static "omit"(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
static "omitThisParameter"(type: $BaseType$$Type): $TSParamType
static "parameters"(function_: $BaseType$$Type): $TSParamType
static "partial"(type: $BaseType$$Type): $TSParamType
static "pick"(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
static "readonly"(promise: $BaseType$$Type): $TSParamType
static "record"(keys: $BaseType$$Type, type: $BaseType$$Type): $TSParamType
static "required"(type: $BaseType$$Type): $TSParamType
static "returnType"(type: $BaseType$$Type): $TSParamType
static "thisParameterType"(type: $BaseType$$Type): $TSParamType
static "thisType"(type: $BaseType$$Type): $TSParamType
static "unCapitalize"(string: $BaseType$$Type): $TSParamType
static "upperCase"(string: $BaseType$$Type): $TSParamType
}
}

declare module "zzzank.probejs.lang.typescript.code.member.ConstructorDecl$Builder" {
import { $ConstructorDecl$BuilderBase } from "zzzank.probejs.lang.typescript.code.member.ConstructorDecl$BuilderBase"

export class $ConstructorDecl$Builder extends $ConstructorDecl$BuilderBase<$ConstructorDecl$Builder> {
constructor()

}
}

declare module "zzzank.probejs.lang.java.clazz.Clazz" {
import { $Clazz$ClassAttribute } from "zzzank.probejs.lang.java.clazz.Clazz$ClassAttribute"
import { $TypeVariableHolder } from "zzzank.probejs.lang.java.base.TypeVariableHolder"
import { $List } from "java.util.List"
import { $ConstructorInfo } from "zzzank.probejs.lang.java.clazz.members.ConstructorInfo"
import { $MethodInfo } from "zzzank.probejs.lang.java.clazz.members.MethodInfo"
import { $TypeDescriptor } from "zzzank.probejs.lang.java.type.TypeDescriptor"
import { $FieldInfo } from "zzzank.probejs.lang.java.clazz.members.FieldInfo"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $MemberCollector$$Type } from "zzzank.probejs.lang.java.clazz.MemberCollector"
import { $ClassPath, $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $Clazz extends $TypeVariableHolder {
readonly "attribute": $Clazz$ClassAttribute
readonly "classPath": $ClassPath
readonly "constructors": $List<$ConstructorInfo>
readonly "fields": $List<$FieldInfo>
readonly "interfaces": $List<$TypeDescriptor>
readonly "methods": $List<$MethodInfo>
readonly "superClass": $TypeDescriptor

constructor(clazz: $Class$$Type<any>, path: $ClassPath$$Type, collector: $MemberCollector$$Type)

public "getOriginal"(): $Class<any>
public "isInterface"(): boolean
get "original"(): $Class<any>
get "interface"(): boolean
}
}

declare module "zzzank.probejs.utils.UnsafeFunction" {
import { $Throwable } from "java.lang.Throwable"
import { $Map$Entry } from "java.util.Map$Entry"

export interface $UnsafeFunction<I = any, O = any, E extends $Throwable = $Throwable> {
"andThen"<O2>(then: $UnsafeFunction$$Type<O, O2, E>): $UnsafeFunction<I, O2, E>
"apply"(i: I): O
"applySafe"(i: I): $Map$Entry<O, $Throwable>
}

export namespace $UnsafeFunction {
const probejs$$marker: never
}
export abstract class $UnsafeFunction$$Static<I = any, O = any, E extends $Throwable = $Throwable> implements $UnsafeFunction<I, O, E> {
}
}

declare module "zzzank.probejs.lang.typescript.code.type.BaseType" {
import { $ImportInfos, $ImportInfos$$Type } from "zzzank.probejs.lang.typescript.refer.ImportInfos"
import { $JSJoinedType$Intersection } from "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType$Intersection"
import { $ContextShield } from "zzzank.probejs.lang.typescript.code.type.utility.ContextShield"
import { $Collection$$Type } from "java.util.Collection"
import { $Declaration$$Type } from "zzzank.probejs.lang.typescript.Declaration"
import { $TSOptionalType } from "zzzank.probejs.lang.typescript.code.type.ts.TSOptionalType"
import { $TSParamType } from "zzzank.probejs.lang.typescript.code.type.ts.TSParamType"
import { $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"
import { $JSJoinedType$Union } from "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType$Union"
import { $WithFormatType } from "zzzank.probejs.lang.typescript.code.type.utility.WithFormatType"
import { $Code } from "zzzank.probejs.lang.typescript.code.Code"
import { $List } from "java.util.List"
import { $TSArrayType } from "zzzank.probejs.lang.typescript.code.type.ts.TSArrayType"
import { $ImportShield } from "zzzank.probejs.lang.typescript.code.type.utility.ImportShield"
import { $TSArrayAccessType } from "zzzank.probejs.lang.typescript.code.type.ts.TSArrayAccessType"

export class $BaseType extends $Code {
constructor()

public "access"(index: string): $TSArrayAccessType
public "access"(index: $BaseType$$Type): $TSArrayAccessType
public "and"(...types: $BaseType$$Type[]): $JSJoinedType$Intersection
public "asArray"(): $TSArrayType
public "comment"(comment: string): $WithFormatType
public "contextShield"(formatType: $BaseType$FormatType$$Type): $ContextShield<$BaseType>
public "format"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): $List<string>
public "getImportInfos"(type: $BaseType$FormatType$$Type): $ImportInfos
public "importShield"(imports: $ImportInfos$$Type): $ImportShield<$BaseType>
public "line"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
public "line"(declaration: $Declaration$$Type): string
public "optional"(): $TSOptionalType
public "or"(...types: $BaseType$$Type[]): $JSJoinedType$Union
public "withParams"(...params: string[]): $TSParamType
public "withParams"(...params: $BaseType$$Type[]): $TSParamType
public "withParams"(params: $Collection$$Type<$BaseType$$Type>): $TSParamType
public "withPossibleParams"(params: $Collection$$Type<$BaseType$$Type>): $BaseType
}
}

declare module "zzzank.probejs.lang.typescript.code.type.utility.CustomType" {
import { $ImportInfos } from "zzzank.probejs.lang.typescript.refer.ImportInfos"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Declaration, $Declaration$$Type } from "zzzank.probejs.lang.typescript.Declaration"
import { $BaseType } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"
import { $Function, $Function$$Type } from "java.util.function.Function"

export class $CustomType extends $BaseType {
readonly "formatter": $BiFunction<$Declaration, $BaseType$FormatType, string>
readonly "imports": $Function<$BaseType$FormatType, $ImportInfos>

constructor(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>, imports: $Function$$Type<$BaseType$FormatType$$Type, $ImportInfos>)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.Types" {
import { $ContextShield } from "zzzank.probejs.lang.typescript.code.type.utility.ContextShield"
import { $JSTupleType$Builder } from "zzzank.probejs.lang.typescript.code.type.js.JSTupleType$Builder"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Declaration$$Type } from "zzzank.probejs.lang.typescript.Declaration"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $TSParamType } from "zzzank.probejs.lang.typescript.code.type.ts.TSParamType"
import { $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"
import { $Function$$Type } from "java.util.function.Function"
import { $TSArrayType } from "zzzank.probejs.lang.typescript.code.type.ts.TSArrayType"
import { $TSTernaryType } from "zzzank.probejs.lang.typescript.code.type.ts.TSTernaryType"
import { $Map$$Type } from "java.util.Map"
import { $JSLambdaType$Builder } from "zzzank.probejs.lang.typescript.code.type.js.JSLambdaType$Builder"
import { $JSTypeOfType } from "zzzank.probejs.lang.typescript.code.type.js.JSTypeOfType"
import { $ImportInfos, $ImportInfos$$Type } from "zzzank.probejs.lang.typescript.refer.ImportInfos"
import { $JSObjectType } from "zzzank.probejs.lang.typescript.code.type.js.JSObjectType"
import { $JSJoinedType } from "zzzank.probejs.lang.typescript.code.type.js.JSJoinedType"
import { $TSVariableType } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $Collection$$Type } from "java.util.Collection"
import { $TSKeyofType } from "zzzank.probejs.lang.typescript.code.type.ts.TSKeyofType"
import { $TSOptionalType } from "zzzank.probejs.lang.typescript.code.type.ts.TSOptionalType"
import { $JSObjectType$Builder } from "zzzank.probejs.lang.typescript.code.type.js.JSObjectType$Builder"
import { $WithFormatType } from "zzzank.probejs.lang.typescript.code.type.utility.WithFormatType"
import { $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"
import { $JSPrimitiveType } from "zzzank.probejs.lang.typescript.code.type.js.JSPrimitiveType"
import { $TSClassType } from "zzzank.probejs.lang.typescript.code.type.ts.TSClassType"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $ImportShield } from "zzzank.probejs.lang.typescript.code.type.utility.ImportShield"
import { $StaticType } from "zzzank.probejs.lang.typescript.code.type.utility.StaticType"
import { $CustomType } from "zzzank.probejs.lang.typescript.code.type.utility.CustomType"
import { $Class$$Type } from "java.lang.Class"
import { $JSTupleType } from "zzzank.probejs.lang.typescript.code.type.js.JSTupleType"

export interface $Types {
}

export namespace $Types {
const ANY: $JSPrimitiveType
const BOOLEAN: $JSPrimitiveType
const EMPTY_ARRAY: $JSTupleType
const EMPTY_OBJECT: $JSObjectType
const NEVER: $JSPrimitiveType
const NULL: $JSPrimitiveType
const NUMBER: $JSPrimitiveType
const OBJECT: $JSPrimitiveType
const STRING: $JSPrimitiveType
const THIS: $JSPrimitiveType
const UNDEFINED: $JSPrimitiveType
const UNKNOWN: $JSPrimitiveType
const VOID: $JSPrimitiveType
function and(types: $Collection$$Type<$BaseType$$Type>): $BaseType
function and(...types: $BaseType$$Type[]): $BaseType
function array(base: $BaseType$$Type): $TSArrayType
function contextShield<T extends $BaseType>(type: T, formatType: $BaseType$FormatType$$Type): $ContextShield<T>
function custom(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>, imports: $Function$$Type<$BaseType$FormatType$$Type, $ImportInfos>): $CustomType
function custom(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>): $CustomType
function format(format: string, ...types: $BaseType$$Type[]): $WithFormatType
function generic(symbol: string): $TSVariableType
function generic(symbol: string, extendOn: $BaseType$$Type): $TSVariableType
function generic(symbol: string, extendOn: $BaseType$$Type, defaultTo: $BaseType$$Type): $TSVariableType
function genericAndDefault(symbol: string, extendAndDefault: $BaseType$$Type): $TSVariableType
function importShield<T extends $BaseType>(type: T, imports: $ImportInfos$$Type): $ImportShield<T>
function join(delimiter: charseq, prefix: charseq, suffix: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
function join(delimiter: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
function join(delimiter: charseq, prefix: charseq, suffix: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
function join(delimiter: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
function keyof(inner: $BaseType$$Type): $TSKeyofType
function lambda(): $JSLambdaType$Builder
function literal(content: string): $JSPrimitiveType
function literal(content: character): $JSPrimitiveType
function literal(content: number): $JSPrimitiveType
function literal(content: boolean): $JSPrimitiveType
function object(): $JSObjectType$Builder
function object(properties: $Map$$Type<charseq, $BaseType$$Type>): $JSObjectType$Builder
function optional(type: $BaseType$$Type): $TSOptionalType
function or(types: $Collection$$Type<$BaseType$$Type>): $BaseType
function or(...types: $BaseType$$Type[]): $BaseType
function orEnumLike(objects: $Collection$$Type<any>, lowerCase: boolean): $BaseType
function orEnumLike(objects: $Stream$$Type<any>, lowerCase: boolean): $BaseType
function parameterized(base: $BaseType$$Type, ...params: $BaseType$$Type[]): $TSParamType
function parameterized(base: $BaseType$$Type, params: $Collection$$Type<$BaseType$$Type>): $TSParamType
function primitive(type: string): $JSPrimitiveType
function staticType(path: $ClassPath$$Type): $StaticType
function templateLiteral(content: string): $JSPrimitiveType
function ternary(symbol: string, extend: $BaseType$$Type, ifTrue: $BaseType$$Type, ifFalse: $BaseType$$Type): $TSTernaryType
function tuple(): $JSTupleType$Builder
function type(classPath: $ClassPath$$Type): $TSClassType
function type(clazz: $Class$$Type<any>): $TSClassType
function typeOf(classType: $BaseType$$Type): $JSTypeOfType
function typeOf(classPath: $ClassPath$$Type): $JSTypeOfType
function typeOf(clazz: $Class$$Type<any>): $JSTypeOfType
function withComment(type: $BaseType$$Type, comment: string): $WithFormatType
}
export abstract class $Types$$Static implements $Types {
static readonly "ANY": $JSPrimitiveType
static readonly "BOOLEAN": $JSPrimitiveType
static readonly "EMPTY_ARRAY": $JSTupleType
static readonly "EMPTY_OBJECT": $JSObjectType
static readonly "NEVER": $JSPrimitiveType
static readonly "NULL": $JSPrimitiveType
static readonly "NUMBER": $JSPrimitiveType
static readonly "OBJECT": $JSPrimitiveType
static readonly "STRING": $JSPrimitiveType
static readonly "THIS": $JSPrimitiveType
static readonly "UNDEFINED": $JSPrimitiveType
static readonly "UNKNOWN": $JSPrimitiveType
static readonly "VOID": $JSPrimitiveType

static "and"(types: $Collection$$Type<$BaseType$$Type>): $BaseType
static "and"(...types: $BaseType$$Type[]): $BaseType
static "array"(base: $BaseType$$Type): $TSArrayType
static "contextShield"<T extends $BaseType>(type: T, formatType: $BaseType$FormatType$$Type): $ContextShield<T>
static "custom"(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>, imports: $Function$$Type<$BaseType$FormatType$$Type, $ImportInfos>): $CustomType
static "custom"(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>): $CustomType
static "format"(format: string, ...types: $BaseType$$Type[]): $WithFormatType
static "generic"(symbol: string): $TSVariableType
static "generic"(symbol: string, extendOn: $BaseType$$Type): $TSVariableType
static "generic"(symbol: string, extendOn: $BaseType$$Type, defaultTo: $BaseType$$Type): $TSVariableType
static "genericAndDefault"(symbol: string, extendAndDefault: $BaseType$$Type): $TSVariableType
static "importShield"<T extends $BaseType>(type: T, imports: $ImportInfos$$Type): $ImportShield<T>
static "join"(delimiter: charseq, prefix: charseq, suffix: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
static "join"(delimiter: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
static "join"(delimiter: charseq, prefix: charseq, suffix: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
static "join"(delimiter: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
static "keyof"(inner: $BaseType$$Type): $TSKeyofType
static "lambda"(): $JSLambdaType$Builder
static "literal"(content: string): $JSPrimitiveType
static "literal"(content: character): $JSPrimitiveType
static "literal"(content: number): $JSPrimitiveType
static "literal"(content: boolean): $JSPrimitiveType
static "object"(): $JSObjectType$Builder
static "object"(properties: $Map$$Type<charseq, $BaseType$$Type>): $JSObjectType$Builder
static "optional"(type: $BaseType$$Type): $TSOptionalType
static "or"(types: $Collection$$Type<$BaseType$$Type>): $BaseType
static "or"(...types: $BaseType$$Type[]): $BaseType
static "orEnumLike"(objects: $Collection$$Type<any>, lowerCase: boolean): $BaseType
static "orEnumLike"(objects: $Stream$$Type<any>, lowerCase: boolean): $BaseType
static "parameterized"(base: $BaseType$$Type, ...params: $BaseType$$Type[]): $TSParamType
static "parameterized"(base: $BaseType$$Type, params: $Collection$$Type<$BaseType$$Type>): $TSParamType
static "primitive"(type: string): $JSPrimitiveType
static "staticType"(path: $ClassPath$$Type): $StaticType
static "templateLiteral"(content: string): $JSPrimitiveType
static "ternary"(symbol: string, extend: $BaseType$$Type, ifTrue: $BaseType$$Type, ifFalse: $BaseType$$Type): $TSTernaryType
static "tuple"(): $JSTupleType$Builder
static "type"(classPath: $ClassPath$$Type): $TSClassType
static "type"(clazz: $Class$$Type<any>): $TSClassType
static "typeOf"(classType: $BaseType$$Type): $JSTypeOfType
static "typeOf"(classPath: $ClassPath$$Type): $JSTypeOfType
static "typeOf"(clazz: $Class$$Type<any>): $JSTypeOfType
static "withComment"(type: $BaseType$$Type, comment: string): $WithFormatType
}
}

declare module "zzzank.probejs.lang.typescript.refer.ImportInfos" {
import { $Iterator } from "java.util.Iterator"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"
import { $ClassPath } from "zzzank.probejs.lang.java.clazz.ClassPath"
import { $Iterable } from "java.lang.Iterable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ImportInfo, $ImportInfo$$Type } from "zzzank.probejs.lang.typescript.refer.ImportInfo"
import { $Code$$Type } from "zzzank.probejs.lang.typescript.code.Code"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $Map } from "java.util.Map"
import { $Spliterator } from "java.util.Spliterator"

export class $ImportInfos implements $Iterable<$ImportInfo> {
public "add"(info: $ImportInfo$$Type): $ImportInfos
public "addAll"(infos: $Collection$$Type<$ImportInfo$$Type>): $ImportInfos
public "addAll"(infos: $Stream$$Type<$ImportInfo$$Type>): $ImportInfos
public "addAll"(other: $ImportInfos$$Type): $ImportInfos
public "forEach"(consumer0: $Consumer$$Type<$ImportInfo$$Type>): void
public "fromCode"(code: $BaseType$$Type, type: $BaseType$FormatType$$Type): $ImportInfos
public "fromCode"(code: $Code$$Type): $ImportInfos
public "fromCodes"(codes: $Collection$$Type<$Code$$Type>): $ImportInfos
public "fromCodes"(codes: $Stream$$Type<$Code$$Type>): $ImportInfos
public "fromCodes"(codes: $Collection$$Type<$BaseType$$Type>, type: $BaseType$FormatType$$Type): $ImportInfos
public "fromCodes"(codes: $Stream$$Type<$BaseType$$Type>, type: $BaseType$FormatType$$Type): $ImportInfos
public "getImports"(): $Collection<$ImportInfo>
public "getRaw"(): $Map<$ClassPath, $ImportInfo>
public "iterator"(): $Iterator<$ImportInfo>
public static "of"(): $ImportInfos
public static "of"(info: $ImportInfo$$Type): $ImportInfos
public static "of"(toCopy: $ImportInfos$$Type): $ImportInfos
public static "of"(...initial: $ImportInfo$$Type[]): $ImportInfos
public static "of"(infos: $Stream$$Type<$ImportInfo$$Type>): $ImportInfos
public static "of"(infos: $Collection$$Type<$ImportInfo$$Type>): $ImportInfos
public "spliterator"(): $Spliterator<$ImportInfo>
[Symbol.iterator](): IterableIterator<$ImportInfo>;
get "imports"(): $Collection<$ImportInfo>
get "raw"(): $Map<$ClassPath, $ImportInfo>
}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSClassType" {
import { $BaseType } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $ClassPath, $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $TSClassType extends $BaseType {
constructor(classPath: $ClassPath$$Type)

get "classPath"(): $ClassPath
set "classPath"(value: $ClassPath$$Type)
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSTupleType" {
import { $JSMemberType } from "zzzank.probejs.lang.typescript.code.type.js.JSMemberType"
import { $JSParam$$Type } from "zzzank.probejs.lang.typescript.code.type.js.JSParam"
import { $Collection$$Type } from "java.util.Collection"

export class $JSTupleType extends $JSMemberType {
constructor(members: $Collection$$Type<$JSParam$$Type>)

}
}

declare module "zzzank.probejs.lang.java.base.TypeVariableHolder" {
import { $List } from "java.util.List"
import { $VariableType } from "zzzank.probejs.lang.java.type.impl.VariableType"
import { $TypeVariable$$Type } from "java.lang.reflect.TypeVariable"
import { $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $AnnotationHolder } from "zzzank.probejs.lang.java.base.AnnotationHolder"

export class $TypeVariableHolder extends $AnnotationHolder {
readonly "variableTypes": $List<$VariableType>

constructor(variables: $TypeVariable$$Type<any>[], annotations: $Annotation$$Type[])

}
}

declare module "zzzank.probejs.lang.java.clazz.Clazz$ClassType" {
import { $Enum } from "java.lang.Enum"

export class $Clazz$ClassType extends $Enum<$Clazz$ClassType> {
static readonly "CLASS": $Clazz$ClassType
static readonly "ENUM": $Clazz$ClassType
static readonly "INTERFACE": $Clazz$ClassType
static readonly "RECORD": $Clazz$ClassType

public static "valueOf"(name: string): $Clazz$ClassType
public static "values"(): $Clazz$ClassType[]
}
}

declare module "zzzank.probejs.lang.java.base.AnnotationHolder" {
import { $List } from "java.util.List"
import { $Annotation, $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"

export class $AnnotationHolder {
static readonly "NO_ANNOTATION": $Annotation[]
readonly "annotations": $Annotation[]

constructor(annotations: $Annotation$$Type[])

public "getAnnotation"<T extends $Annotation>(type: $Class$$Type<T>): T
public "getAnnotationOptional"<T extends $Annotation>(type: $Class$$Type<T>): $Optional<T>
public "getAnnotations"<T extends $Annotation>(type: $Class$$Type<T>): $List<T>
public "hasAnnotation"(annotation: $Class$$Type<$Annotation$$Type>): boolean
}
}

declare module "zzzank.probejs.api.dump.TSGlobalDump" {
import { $TSDumpBase } from "zzzank.probejs.api.dump.TSDumpBase"
import { $TypeScriptFile } from "zzzank.probejs.lang.typescript.TypeScriptFile"
import { $TSFileWriter$$Type } from "zzzank.probejs.api.output.TSFileWriter"
import { $Map } from "java.util.Map"
import { $Path$$Type } from "java.nio.file.Path"
import { $TSDump$FolderDump } from "zzzank.probejs.api.dump.TSDump$FolderDump"

export class $TSGlobalDump extends $TSDumpBase implements $TSDump$FolderDump {
readonly "globals": $Map<string, $TypeScriptFile>

constructor(writer: $TSFileWriter$$Type, writeTo: $Path$$Type)
constructor(writeTo: $Path$$Type)

public "cleanOldDumps"(): void
public "open"(): void
}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TSVariableType extends $BaseType {
constructor(symbol: string, extend: $BaseType$$Type, defaultTo: $BaseType$$Type)

get "defaultTo"(): $BaseType
set "defaultTo"(value: $BaseType$$Type)
get "extend"(): $BaseType
set "extend"(value: $BaseType$$Type)
get "symbol"(): string
set "symbol"(value: string)
}
}

declare module "zzzank.probejs.lang.java.type.impl.VariableType" {
import { $List } from "java.util.List"
import { $AnnotatedTypeVariable$$Type } from "java.lang.reflect.AnnotatedTypeVariable"
import { $TypeDescriptor } from "zzzank.probejs.lang.java.type.TypeDescriptor"
import { $TypeVariable, $TypeVariable$$Type } from "java.lang.reflect.TypeVariable"

export class $VariableType extends $TypeDescriptor {
constructor(typeVariable: $AnnotatedTypeVariable$$Type)
constructor(typeVariable: $TypeVariable$$Type<any>)
constructor(typeVariable: $AnnotatedTypeVariable$$Type, checkBounds: boolean)
constructor(typeVariable: $TypeVariable$$Type<any>, checkBounds: boolean)

public "getDescriptors"(): $List<$TypeDescriptor>
public "getSymbol"(): string
public "raw"(): $TypeVariable<any>
get "descriptors"(): $List<$TypeDescriptor>
get "symbol"(): string
}
}

declare module "zzzank.probejs.lang.java.clazz.members.ConstructorInfo" {
import { $TypeVariableHolder } from "zzzank.probejs.lang.java.base.TypeVariableHolder"
import { $List } from "java.util.List"
import { $ParamInfo } from "zzzank.probejs.lang.java.clazz.members.ParamInfo"
import { $Constructor$$Type } from "java.lang.reflect.Constructor"

export class $ConstructorInfo extends $TypeVariableHolder {
readonly "params": $List<$ParamInfo>

constructor(constructor_: $Constructor$$Type<any>)

}
}

declare module "zzzank.probejs.api.dump.TSDumpBase" {
import { $Stream } from "java.util.stream.Stream"
import { $TSFileWriter, $TSFileWriter$$Type } from "zzzank.probejs.api.output.TSFileWriter"
import { $TSDump } from "zzzank.probejs.api.dump.TSDump"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $TSDumpBase implements $TSDump {
constructor(writer: $TSFileWriter$$Type, writeTo: $Path$$Type)

public "cleanOldDumps"(): void
public "dump"(): void
public "open"(): void
public "running"(): boolean
public "writeTo"(): $Path
public "writers"(): $Stream<$TSFileWriter>
}
}

declare module "zzzank.probejs.api.dump.TSFilesDump" {
import { $TSDumpBase } from "zzzank.probejs.api.dump.TSDumpBase"
import { $TypeScriptFile, $TypeScriptFile$$Type } from "zzzank.probejs.lang.typescript.TypeScriptFile"
import { $TSFileWriter$$Type } from "zzzank.probejs.api.output.TSFileWriter"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Path$$Type } from "java.nio.file.Path"
import { $TSDump$FolderDump } from "zzzank.probejs.api.dump.TSDump$FolderDump"

export class $TSFilesDump extends $TSDumpBase implements $TSDump$FolderDump {
constructor(writer: $TSFileWriter$$Type, writeTo: $Path$$Type)
constructor(writeTo: $Path$$Type)

public "cleanOldDumps"(): void
public "open"(): void
get "files"(): $Collection<$TypeScriptFile>
set "files"(value: $Collection$$Type<$TypeScriptFile$$Type>)
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSObjectType" {
import { $JSMemberType } from "zzzank.probejs.lang.typescript.code.type.js.JSMemberType"
import { $JSParam$$Type } from "zzzank.probejs.lang.typescript.code.type.js.JSParam"
import { $Collection$$Type } from "java.util.Collection"

export class $JSObjectType extends $JSMemberType {
constructor(members: $Collection$$Type<$JSParam$$Type>)

}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSParamType" {
import { $List } from "java.util.List"
import { $Collection$$Type } from "java.util.Collection"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TSParamType extends $BaseType {
readonly "baseType": $BaseType
readonly "params": $List<$BaseType>

constructor(baseType: $BaseType$$Type, params: $Collection$$Type<$BaseType$$Type>)

}
}

declare module "zzzank.probejs.utils.ClassWrapperPJS" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $CustomJavaToJsWrapper } from "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper"
import { $Class$$Type } from "java.lang.Class"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

export class $ClassWrapperPJS<T = any> implements $CustomJavaToJsWrapper {
constructor(type: $Class$$Type<T>)

public "convertJavaToJs"(cx: $Context$$Type, scope: $Scriptable$$Type, staticType: $Class$$Type<any>): $Scriptable
}
}

declare module "zzzank.probejs.events.AddGlobalEventJS" {
import { $Code$$Type } from "zzzank.probejs.lang.typescript.code.Code"
import { $ScriptEventJS } from "zzzank.probejs.events.ScriptEventJS"
import { $ScriptDump$$Type } from "zzzank.probejs.lang.typescript.ScriptDump"

export class $AddGlobalEventJS extends $ScriptEventJS {
constructor(scriptDump: $ScriptDump$$Type)

public "addGlobal"(identifier: string, ...content: $Code$$Type[]): void
public "addGlobal"(identifier: string, excludedNames: string[], ...content: $Code$$Type[]): void
}
}

declare module "zzzank.probejs.lang.snippet.parts.SnippetPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SnippetPart {
"format"(): string
}

export namespace $SnippetPart {
const probejs$$marker: never
}
export abstract class $SnippetPart$$Static implements $SnippetPart {
}
}

declare module "zzzank.probejs.lang.typescript.Declaration" {
import { $ImportInfo$$Type } from "zzzank.probejs.lang.typescript.refer.ImportInfo"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $Reference } from "zzzank.probejs.lang.typescript.refer.Reference"
import { $ClassPath, $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $Declaration {
static readonly "UNIQUE_TEMPLATE": string
readonly "excludedNames": $Set<string>
readonly "references": $Map<$ClassPath, $Reference>
readonly "usedNames": $Set<string>

constructor()

public "addImport"(info: $ImportInfo$$Type): void
public "containsSymbol"(name: string): boolean
public "exclude"(name: string): void
public "getSymbol"(path: $ClassPath$$Type): string
}
}

declare module "zzzank.probejs.lang.typescript.code.member.TypeDecl$Builder" {
import { $List$$Type } from "java.util.List"
import { $TypeDecl, $TypeDecl$$Type } from "zzzank.probejs.lang.typescript.code.member.TypeDecl"
import { $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $BaseType$FormatType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TypeDecl$Builder {
constructor(toBuild: $TypeDecl$$Type)

public "build"(): $TypeDecl
public "exportDecl"(value: boolean): $TypeDecl$Builder
public "name"(name: string): $TypeDecl$Builder
public "symbolVariables"(variableTypes: $List$$Type<$TSVariableType$$Type>): $TypeDecl$Builder
public "type"(type: $BaseType$$Type): $TypeDecl$Builder
public "typeFormat"(format: $BaseType$FormatType$$Type): $TypeDecl$Builder
}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSArrayType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TSArrayType extends $BaseType {
constructor(component: $BaseType$$Type)

get "component"(): $BaseType
set "component"(value: $BaseType$$Type)
}
}

declare module "zzzank.probejs.lang.typescript.code.member.FieldDecl" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $CommentableCode } from "zzzank.probejs.lang.typescript.code.CommentableCode"
import { $VariableDeclaration } from "zzzank.probejs.lang.typescript.code.ts.VariableDeclaration"

export class $FieldDecl extends $CommentableCode {
constructor(name: string, type: $BaseType$$Type)

public "asVariableDecl"(): $VariableDeclaration
get "isFinal"(): boolean
set "isFinal"(value: boolean)
get "isStatic"(): boolean
set "isStatic"(value: boolean)
get "name"(): string
set "name"(value: string)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
}
}

declare module "zzzank.probejs.lang.java.type.TypeDescriptor" {
import { $Stream } from "java.util.stream.Stream"
import { $VariableType$$Type } from "zzzank.probejs.lang.java.type.impl.VariableType"
import { $Map$$Type } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $Annotation$$Type } from "java.lang.annotation.Annotation"
import { $AnnotationHolder } from "zzzank.probejs.lang.java.base.AnnotationHolder"
import { $Class } from "java.lang.Class"
import { $ClassProvider } from "zzzank.probejs.lang.java.base.ClassProvider"
import { $ClassPath } from "zzzank.probejs.lang.java.clazz.ClassPath"

export class $TypeDescriptor extends $AnnotationHolder implements $ClassProvider {
constructor(annotations: $Annotation$$Type[])

public "asClass"(): $Class<any>
public "canConsolidate"(): boolean
public "consolidate"(mapping: $Map$$Type<$VariableType$$Type, $TypeDescriptor$$Type>): $TypeDescriptor
public "getClassPaths"(): $Collection<$ClassPath>
public "getClasses"(): $Collection<$Class<any>>
public "stream"(): $Stream<$TypeDescriptor>
get "classPaths"(): $Collection<$ClassPath>
get "classes"(): $Collection<$Class<any>>
}
}

declare module "zzzank.probejs.lang.typescript.code.member.ConstructorDecl$BuilderBase" {
import { $List } from "java.util.List"
import { $ParamDecl } from "zzzank.probejs.lang.typescript.code.member.ParamDecl"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $Collection$$Type } from "java.util.Collection"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $ConstructorDecl } from "zzzank.probejs.lang.typescript.code.member.ConstructorDecl"

export class $ConstructorDecl$BuilderBase<SELF extends $ConstructorDecl$BuilderBase<SELF> = $ConstructorDecl$BuilderBase<SELF>> {
readonly "params": $List<$ParamDecl>
readonly "variableTypes": $List<$TSVariableType>

constructor()

public "buildAsConstructor"(): $ConstructorDecl
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean): SELF
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): SELF
public "param"(symbol: string, type: $BaseType$$Type): SELF
public "typeVariables"(variableTypes: $Collection$$Type<$TSVariableType$$Type>): SELF
public "typeVariables"(...variableTypes: $TSVariableType$$Type[]): SELF
public "typeVariables"(...symbols: string[]): SELF
}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSTernaryType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TSTernaryType extends $BaseType {
constructor(symbol: string, extend: $BaseType$$Type, ifTrue: $BaseType$$Type, ifFalse: $BaseType$$Type)

get "extend"(): $BaseType
set "extend"(value: $BaseType$$Type)
get "ifFalse"(): $BaseType
set "ifFalse"(value: $BaseType$$Type)
get "ifTrue"(): $BaseType
set "ifTrue"(value: $BaseType$$Type)
get "symbol"(): string
set "symbol"(value: string)
}
}

declare module "zzzank.probejs.lang.typescript.code.type.js.JSTupleType$Builder" {
import { $JSMemberType$Builder } from "zzzank.probejs.lang.typescript.code.type.js.JSMemberType$Builder"
import { $JSTupleType } from "zzzank.probejs.lang.typescript.code.type.js.JSTupleType"

export class $JSTupleType$Builder extends $JSMemberType$Builder<$JSTupleType$Builder, $JSTupleType> {
constructor()

public "build"(): $JSTupleType
}
}

declare module "zzzank.probejs.lang.typescript.ScriptDump" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $Transpiler } from "zzzank.probejs.lang.transpiler.Transpiler"
import { $SharedDump, $SharedDump$$Type } from "zzzank.probejs.lang.typescript.SharedDump"
import { $Function } from "java.util.function.Function"
import { $ClassPath$$Type } from "zzzank.probejs.lang.java.clazz.ClassPath"
import { $ScriptType, $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $ScriptManager } from "dev.latvian.mods.kubejs.script.ScriptManager"
import { $Code$$Type } from "zzzank.probejs.lang.typescript.code.Code"
import { $MultiDump } from "zzzank.probejs.api.dump.MultiDump"
import { $TSGlobalDump } from "zzzank.probejs.api.dump.TSGlobalDump"
import { $Clazz, $Clazz$$Type } from "zzzank.probejs.lang.java.clazz.Clazz"
import { $TSFilesDump } from "zzzank.probejs.api.dump.TSFilesDump"
import { $ProbeNamedDump } from "zzzank.probejs.lang.typescript.ProbeNamedDump"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $JSConfigDump } from "zzzank.probejs.api.dump.JSConfigDump"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $ScriptDump extends $MultiDump implements $ProbeNamedDump {
static readonly "CLIENT_DUMP": $Function<$SharedDump, $ScriptDump>
static readonly "SERVER_DUMP": $Function<$SharedDump, $ScriptDump>
static readonly "STARTUP_DUMP": $Function<$SharedDump, $ScriptDump>
readonly "filesDump": $TSFilesDump
readonly "globalDump": $TSGlobalDump
readonly "jsConfigDump": $JSConfigDump
readonly "manager": $ScriptManager
readonly "parent": $SharedDump
readonly "recordedClasses": $Set<$Clazz>
readonly "scriptPath": $Path
readonly "scriptType": $ScriptType
readonly "transpiler": $Transpiler

constructor(parent: $SharedDump$$Type, type: $ScriptType$$Type, scriptPath: $Path$$Type, classFilter: $Predicate$$Type<$Clazz$$Type>)

public "acceptClasses"(classes: $Collection$$Type<$Clazz$$Type>): void
public "addGlobal"(identifier: string, ...content: $Code$$Type[]): void
public "addGlobal"(identifier: string, excludedNames: $Collection$$Type<string>, ...content: $Code$$Type[]): void
public "assignType"(classPath: $ClassPath$$Type, type: $BaseType$$Type): void
public "assignType"(classPath: $Class$$Type<any>, type: $BaseType$$Type): void
public "assignType"(classPath: $ClassPath$$Type, name: string, type: $BaseType$$Type): void
public "assignType"(classPath: $Class$$Type<any>, name: string, type: $BaseType$$Type): void
public "dump"(): void
public "pjsDumpName"(): string
public "retrieveClasses"(): $Set<$Class<any>>
public "running"(): boolean
public "writeTo"(): $Path
}
}

declare module "zzzank.probejs.events.TypeAssignmentEventJS" {
import { $ScriptEventJS } from "zzzank.probejs.events.ScriptEventJS"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $Class$$Type } from "java.lang.Class"
import { $ScriptDump$$Type } from "zzzank.probejs.lang.typescript.ScriptDump"

export class $TypeAssignmentEventJS extends $ScriptEventJS {
constructor(scriptDump: $ScriptDump$$Type)

public "assignType"(clazz: $Class$$Type<any>, baseType: $BaseType$$Type): void
}
}

declare module "zzzank.probejs.lang.typescript.code.type.ts.TSOptionalType" {
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export class $TSOptionalType extends $BaseType {
constructor(component: $BaseType$$Type)

get "component"(): $BaseType
set "component"(value: $BaseType$$Type)
}
}

declare module "zzzank.probejs.api.dump.TSDump" {
import { $Stream } from "java.util.stream.Stream"
import { $TSFileWriter } from "zzzank.probejs.api.output.TSFileWriter"
import { $Path } from "java.nio.file.Path"

export interface $TSDump {
"cleanOldDumps"(): void
"dump"(): void
"open"(): void
"running"(): boolean
"writeTo"(): $Path
"writers"(): $Stream<$TSFileWriter>
}

export namespace $TSDump {
const probejs$$marker: never
}
export abstract class $TSDump$$Static implements $TSDump {
}
}

declare module "zzzank.probejs.lang.snippet.parts.Variable" {
import { $Enum } from "java.lang.Enum"
import { $SnippetPart } from "zzzank.probejs.lang.snippet.parts.SnippetPart"

export class $Variable extends $Enum<$Variable> implements $SnippetPart {
static readonly "BLOCK_COMMENT_END": $Variable
static readonly "BLOCK_COMMENT_START": $Variable
static readonly "CLIPBOARD": $Variable
static readonly "CURRENT_DATE": $Variable
static readonly "CURRENT_DAY_NAME": $Variable
static readonly "CURRENT_DAY_NAME_SHORT": $Variable
static readonly "CURRENT_HOUR": $Variable
static readonly "CURRENT_MINUTE": $Variable
static readonly "CURRENT_MONTH": $Variable
static readonly "CURRENT_MONTH_NAME": $Variable
static readonly "CURRENT_MONTH_NAME_SHORT": $Variable
static readonly "CURRENT_SECOND": $Variable
static readonly "CURRENT_SECONDS_UNIX": $Variable
static readonly "CURRENT_TIMEZONE_OFFSET": $Variable
static readonly "CURRENT_YEAR": $Variable
static readonly "CURRENT_YEAR_SHORT": $Variable
static readonly "CURSOR_INDEX": $Variable
static readonly "CURSOR_NUMBER": $Variable
static readonly "LINE_COMMENT": $Variable
static readonly "RANDOM": $Variable
static readonly "RANDOM_HEX": $Variable
static readonly "RELATIVE_FILEPATH": $Variable
static readonly "TM_CURRENT_LINE": $Variable
static readonly "TM_CURRENT_WORD": $Variable
static readonly "TM_DIRECTORY": $Variable
static readonly "TM_FILENAME": $Variable
static readonly "TM_FILENAME_BASE": $Variable
static readonly "TM_FILEPATH": $Variable
static readonly "TM_LINE_INDEX": $Variable
static readonly "TM_LINE_NUMBER": $Variable
static readonly "TM_SELECTED_TEXT": $Variable
static readonly "UUID": $Variable
static readonly "WORKSPACE_FOLDER": $Variable
static readonly "WORKSPACE_NAME": $Variable

public "format"(): string
public static "valueOf"(name: string): $Variable
public static "values"(): $Variable[]
}
}

declare module "zzzank.probejs.lang.typescript.code.member.ClassDecl" {
import { $Code } from "zzzank.probejs.lang.typescript.code.Code"
import { $List, $List$$Type } from "java.util.List"
import { $FieldDecl } from "zzzank.probejs.lang.typescript.code.member.FieldDecl"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $Clazz, $Clazz$$Type } from "zzzank.probejs.lang.java.clazz.Clazz"
import { $BaseType, $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"
import { $CommentableCode } from "zzzank.probejs.lang.typescript.code.CommentableCode"
import { $ConstructorDecl } from "zzzank.probejs.lang.typescript.code.member.ConstructorDecl"
import { $MethodDecl } from "zzzank.probejs.lang.typescript.code.member.MethodDecl"

export class $ClassDecl extends $CommentableCode {
readonly "bodyCode": $List<$Code>
readonly "constructors": $List<$ConstructorDecl>
readonly "fields": $List<$FieldDecl>
readonly "interfaces": $List<$BaseType>
readonly "methods": $List<$MethodDecl>
readonly "name": string
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string, superClass: $BaseType$$Type, interfaces: $List$$Type<$BaseType$$Type>, variableTypes: $List$$Type<$TSVariableType$$Type>)

get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "nativeClazz"(): $Clazz
set "nativeClazz"(value: $Clazz$$Type)
get "superClass"(): $BaseType
set "superClass"(value: $BaseType$$Type)
}
}

declare module "zzzank.probejs.lang.java.clazz.Clazz$ClassAttribute" {
import { $Clazz$ClassType } from "zzzank.probejs.lang.java.clazz.Clazz$ClassType"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $Clazz$ClassAttribute {
readonly "modifiers": integer
readonly "raw": $Class<any>
readonly "type": $Clazz$ClassType

constructor(clazz: $Class$$Type<any>)

public "isAbstract"(): boolean
get "abstract"(): boolean
}
}

declare module "zzzank.probejs.lang.typescript.code.ts.Statements" {
import { $FunctionDeclaration$Builder } from "zzzank.probejs.lang.typescript.code.ts.FunctionDeclaration$Builder"
import { $MethodDecl$Builder } from "zzzank.probejs.lang.typescript.code.member.MethodDecl$Builder"
import { $TypeDecl$Builder } from "zzzank.probejs.lang.typescript.code.member.TypeDecl$Builder"
import { $ClassDecl$Builder } from "zzzank.probejs.lang.typescript.code.member.ClassDecl$Builder"
import { $ConstructorDecl$Builder } from "zzzank.probejs.lang.typescript.code.member.ConstructorDecl$Builder"
import { $BaseType$$Type } from "zzzank.probejs.lang.typescript.code.type.BaseType"

export interface $Statements {
}

export namespace $Statements {
function clazz(name: string): $ClassDecl$Builder
function ctor(): $ConstructorDecl$Builder
function func(name: string): $FunctionDeclaration$Builder
function method(name: string): $MethodDecl$Builder
function type(name: string, type: $BaseType$$Type): $TypeDecl$Builder
}
export abstract class $Statements$$Static implements $Statements {
static "clazz"(name: string): $ClassDecl$Builder
static "ctor"(): $ConstructorDecl$Builder
static "func"(name: string): $FunctionDeclaration$Builder
static "method"(name: string): $MethodDecl$Builder
static "type"(name: string, type: $BaseType$$Type): $TypeDecl$Builder
}
}

declare module "zzzank.probejs.lang.java.clazz.members.ParamInfo" {
import { $Parameter$$Type } from "java.lang.reflect.Parameter"
import { $TypeDescriptor, $TypeDescriptor$$Type } from "zzzank.probejs.lang.java.type.TypeDescriptor"
import { $AnnotationHolder } from "zzzank.probejs.lang.java.base.AnnotationHolder"

export class $ParamInfo extends $AnnotationHolder {
readonly "varArgs": boolean

constructor(parameter: $Parameter$$Type)

get "name"(): string
set "name"(value: string)
get "type"(): $TypeDescriptor
set "type"(value: $TypeDescriptor$$Type)
}
}

declare module "zzzank.probejs.api.dump.MultiDump" {
import { $TSDumpBase } from "zzzank.probejs.api.dump.TSDumpBase"
import { $List } from "java.util.List"
import { $TSDump, $TSDump$$Type } from "zzzank.probejs.api.dump.TSDump"
import { $Path$$Type } from "java.nio.file.Path"
import { $Function$$Type } from "java.util.function.Function"

export class $MultiDump extends $TSDumpBase {
constructor(base: $Path$$Type)

public "addChild"<T extends $TSDump>(dump: T): T
public "addChild"<T extends $TSDump>(relativePath: string, dump: $Function$$Type<$Path$$Type, T>): T
public "addChild"<T extends $TSDump>(relativePath: $Path$$Type, dump: $Function$$Type<$Path$$Type, T>): T
public "cleanOldDumps"(): void
public "dumpImpl"(): void
public "dumps"(): $List<$TSDump>
public "open"(): void
}
}

declare module "zzzank.probejs.lang.snippet.SnippetDump" {
import { $Snippet } from "zzzank.probejs.lang.snippet.Snippet"
import { $List } from "java.util.List"
import { $Path$$Type } from "java.nio.file.Path"

export class $SnippetDump {
readonly "snippets": $List<$Snippet>

constructor()

public "snippet"(name: string): $Snippet
public "writeTo"(path: $Path$$Type): void
}
}

declare module "zzzank.probejs.lang.typescript.code.member.ConstructorDecl" {
import { $List, $List$$Type } from "java.util.List"
import { $ParamDecl, $ParamDecl$$Type } from "zzzank.probejs.lang.typescript.code.member.ParamDecl"
import { $TSVariableType, $TSVariableType$$Type } from "zzzank.probejs.lang.typescript.code.type.ts.TSVariableType"
import { $CommentableCode } from "zzzank.probejs.lang.typescript.code.CommentableCode"

export class $ConstructorDecl extends $CommentableCode {
readonly "params": $List<$ParamDecl>
readonly "variableTypes": $List<$TSVariableType>

constructor(variableTypes: $List$$Type<$TSVariableType$$Type>, params: $List$$Type<$ParamDecl$$Type>)

get "content"(): string
set "content"(value: string)
}
}

declare module "zzzank.probejs.api.output.TSFileWriter" {
import { $TypeScriptFile$$Type } from "zzzank.probejs.lang.typescript.TypeScriptFile"
import { $UnsafeFunction$$Type } from "zzzank.probejs.utils.UnsafeFunction"
import { $Writer } from "java.io.Writer"
import { $IOException$$Type } from "java.io.IOException"
import { $Path$$Type } from "java.nio.file.Path"

export interface $TSFileWriter {
"accept"(file: $TypeScriptFile$$Type): void
"countAcceptedFiles"(): integer
"countWrittenFiles"(): integer
"setFileSuffix"(suffix: string): $TSFileWriter
"setWithIndex"(withIndex: boolean): $TSFileWriter
"setWriteAsModule"(writeAsModule: boolean): $TSFileWriter
"setWriterProvider"(writerProvider: $UnsafeFunction$$Type<$Path$$Type, $Writer, $IOException$$Type>): $TSFileWriter
"write"(base: $Path$$Type): void
set "fileSuffix"(value: string)
set "withIndex"(value: boolean)
set "writeAsModule"(value: boolean)
set "writerProvider"(value: $UnsafeFunction$$Type<$Path$$Type, $Writer, $IOException$$Type>)
}

export namespace $TSFileWriter {
const D_TS_SUFFIX: string
const INDEX_FILE_NAME: string
const TS_SUFFIX: string
}
export abstract class $TSFileWriter$$Static implements $TSFileWriter {
static readonly "D_TS_SUFFIX": string
static readonly "INDEX_FILE_NAME": string
static readonly "TS_SUFFIX": string

}
}

