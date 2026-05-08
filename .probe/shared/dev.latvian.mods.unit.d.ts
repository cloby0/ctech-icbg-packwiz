declare module "dev.latvian.mods.unit.token.UnitTokenStream" {
import { $UnitToken, $UnitToken$$Type } from "dev.latvian.mods.unit.token.UnitToken"
import { $UnitContext, $UnitContext$$Type } from "dev.latvian.mods.unit.UnitContext"
import { $Unit } from "dev.latvian.mods.unit.Unit"
import { $CharStream } from "dev.latvian.mods.unit.token.CharStream"
import { $ArrayList } from "java.util.ArrayList"

export class $UnitTokenStream {
readonly "charStream": $CharStream
readonly "context": $UnitContext
readonly "infix": $ArrayList<$UnitToken>
readonly "input": string
readonly "inputStringPos": $ArrayList<integer>
readonly "unit": $Unit

constructor(context: $UnitContext$$Type, input: string)

public "getUnit"(): $Unit
public "ifNextToken"(token: $UnitToken$$Type): boolean
public "nextToken"(): $UnitToken
public "peekToken"(): $UnitToken
public "readFully"(): $UnitToken
public "readSingleToken"(): $UnitToken
}
}

declare module "dev.latvian.mods.unit.UnitVariables" {
import { $VariableSet } from "dev.latvian.mods.unit.VariableSet"

export interface $UnitVariables {
"getVariables"(): $VariableSet
get "variables"(): $VariableSet
}

export namespace $UnitVariables {
const probejs$$marker: never
}
export abstract class $UnitVariables$$Static implements $UnitVariables {
}
}

declare module "dev.latvian.mods.unit.VariableSet" {
import { $MutableNumberUnit } from "dev.latvian.mods.unit.MutableNumberUnit"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"
import { $UnitVariables } from "dev.latvian.mods.unit.UnitVariables"

export class $VariableSet implements $UnitVariables {
constructor()

public "createSubset"(): $VariableSet
public "get"(entry: string): $Unit
public "getVariables"(): $VariableSet
public "set"(name: string, value: double): $VariableSet
public "set"(name: string, value: $Unit$$Type): $VariableSet
public "setMutable"(name: string, initialValue: double): $MutableNumberUnit
get "variables"(): $VariableSet
}
}

declare module "dev.latvian.mods.unit.function.FunctionFactory" {
import { $FunctionFactory$FuncSupplier, $FunctionFactory$FuncSupplier$$Type } from "dev.latvian.mods.unit.function.FunctionFactory$FuncSupplier"
import { $FunctionFactory$Arg3$$Type } from "dev.latvian.mods.unit.function.FunctionFactory$Arg3"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"
import { $Record } from "java.lang.Record"
import { $FunctionFactory$Arg1$$Type } from "dev.latvian.mods.unit.function.FunctionFactory$Arg1"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $FunctionFactory$Arg2$$Type } from "dev.latvian.mods.unit.function.FunctionFactory$Arg2"

export class $FunctionFactory extends $Record {
constructor(name: string, minArgs: integer, maxArgs: integer, supplier: $FunctionFactory$FuncSupplier$$Type)

public "create"(args: $Unit$$Type[]): $Unit
public "maxArgs"(): integer
public "minArgs"(): integer
public "name"(): string
public static "of"(name: string, args: integer, supplier: $FunctionFactory$FuncSupplier$$Type): $FunctionFactory
public static "of"(name: string, minArgs: integer, maxArgs: integer, supplier: $FunctionFactory$FuncSupplier$$Type): $FunctionFactory
public static "of0"(name: string, supplier: $Supplier$$Type<$Unit>): $FunctionFactory
public static "of1"(name: string, supplier: $FunctionFactory$Arg1$$Type): $FunctionFactory
public static "of2"(name: string, supplier: $FunctionFactory$Arg2$$Type): $FunctionFactory
public static "of3"(name: string, supplier: $FunctionFactory$Arg3$$Type): $FunctionFactory
public "supplier"(): $FunctionFactory$FuncSupplier
}
}

declare module "dev.latvian.mods.unit.token.CharStream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CharStream {
readonly "chars": character[]

constructor(c: character[])

public "next"(): character
public "nextIf"(match: character): boolean
public "peek"(ahead: integer): character
public "peek"(): character
get "position"(): integer
set "position"(value: integer)
get "skipWhitespace"(): boolean
set "skipWhitespace"(value: boolean)
}
}

declare module "dev.latvian.mods.unit.token.UnitToken" {
import { $UnitTokenStream$$Type } from "dev.latvian.mods.unit.token.UnitTokenStream"
import { $Unit } from "dev.latvian.mods.unit.Unit"
import { $Stack$$Type } from "java.util.Stack"

export interface $UnitToken {
"interpret"(stream: $UnitTokenStream$$Type): $Unit
"nextUnaryOperator"(): boolean
"unstack"(resultStack: $Stack$$Type<$UnitToken$$Type>): void
}

export namespace $UnitToken {
const probejs$$marker: never
}
export abstract class $UnitToken$$Static implements $UnitToken {
}
}

declare module "dev.latvian.mods.unit.function.FunctionFactory$Arg3" {
import { $FunctionFactory$FuncSupplier } from "dev.latvian.mods.unit.function.FunctionFactory$FuncSupplier"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"

export interface $FunctionFactory$Arg3 extends $FunctionFactory$FuncSupplier {
"create"(args: $Unit$$Type[]): $Unit
"createArg"(unit0: $Unit$$Type, unit1: $Unit$$Type, unit2: $Unit$$Type): $Unit
}

export namespace $FunctionFactory$Arg3 {
const probejs$$marker: never
}
export abstract class $FunctionFactory$Arg3$$Static implements $FunctionFactory$Arg3 {
}
}

declare module "dev.latvian.mods.unit.function.FunctionFactory$Arg1" {
import { $FunctionFactory$FuncSupplier } from "dev.latvian.mods.unit.function.FunctionFactory$FuncSupplier"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"

export interface $FunctionFactory$Arg1 extends $FunctionFactory$FuncSupplier {
"create"(args: $Unit$$Type[]): $Unit
"createArg"(unit0: $Unit$$Type): $Unit
}

export namespace $FunctionFactory$Arg1 {
const probejs$$marker: never
}
export abstract class $FunctionFactory$Arg1$$Static implements $FunctionFactory$Arg1 {
}
}

declare module "dev.latvian.mods.unit.function.FunctionFactory$Arg2" {
import { $FunctionFactory$FuncSupplier } from "dev.latvian.mods.unit.function.FunctionFactory$FuncSupplier"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"

export interface $FunctionFactory$Arg2 extends $FunctionFactory$FuncSupplier {
"create"(args: $Unit$$Type[]): $Unit
"createArg"(unit0: $Unit$$Type, unit1: $Unit$$Type): $Unit
}

export namespace $FunctionFactory$Arg2 {
const probejs$$marker: never
}
export abstract class $FunctionFactory$Arg2$$Static implements $FunctionFactory$Arg2 {
}
}

declare module "dev.latvian.mods.unit.UnitContext" {
import { $UnitTokenStream } from "dev.latvian.mods.unit.token.UnitTokenStream"
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"
import { $FunctionFactory, $FunctionFactory$$Type } from "dev.latvian.mods.unit.function.FunctionFactory"
import { $Map } from "java.util.Map"
import { $Collection$$Type } from "java.util.Collection"

export class $UnitContext {
static readonly "DEFAULT": $UnitContext
readonly "constants": $Map<string, $Unit>

constructor()

public "addConstant"(s: string, u: $Unit$$Type): void
public "addFunction"(factory: $FunctionFactory$$Type): void
public "createStream"(input: string): $UnitTokenStream
public "debugInfo"(s: string): void
public "debugInfo"(s: string, values: $Collection$$Type<any>): void
public "getFunctionFactory"(name: string): $FunctionFactory
public "isDebug"(): boolean
public "parse"(input: string): $Unit
public "popDebug"(): void
public "pushDebug"(): void
public "sub"(): $UnitContext
get "debug"(): boolean
}
}

declare module "dev.latvian.mods.unit.Unit" {
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $UnitVariables$$Type } from "dev.latvian.mods.unit.UnitVariables"

export class $Unit {
static "EMPTY_ARRAY": $Unit[]

constructor()

public "abs"(): $Unit
public "add"(other: $Unit$$Type): $Unit
public "add"(value: double): $Unit
public "addSet"(unit: $Unit$$Type): $Unit
public "and"(other: $Unit$$Type): $Unit
public "atan"(): $Unit
public "atan2"(other: $Unit$$Type): $Unit
public "bitAnd"(other: $Unit$$Type): $Unit
public "bitNot"(): $Unit
public "bitOr"(other: $Unit$$Type): $Unit
public "bool"(): $Unit
public "boolNot"(): $Unit
public "ceil"(): $Unit
public "clamp"(a: $Unit$$Type, b: $Unit$$Type): $Unit
public "cos"(): $Unit
public "deg"(): $Unit
public "div"(other: $Unit$$Type): $Unit
public "div"(value: double): $Unit
public "divSet"(unit: $Unit$$Type): $Unit
public "eq"(other: $Unit$$Type): $Unit
public "floor"(): $Unit
public "get"(unitVariables0: $UnitVariables$$Type): double
public "getBoolean"(variables: $UnitVariables$$Type): boolean
public "getFloat"(variables: $UnitVariables$$Type): float
public "getInt"(variables: $UnitVariables$$Type): integer
public "gt"(other: $Unit$$Type): $Unit
public "gte"(other: $Unit$$Type): $Unit
public "isFixed"(): boolean
public "lerp"(a: $Unit$$Type, b: $Unit$$Type): $Unit
public "log"(): $Unit
public "log10"(): $Unit
public "log1p"(): $Unit
public "lsh"(other: $Unit$$Type): $Unit
public "lt"(other: $Unit$$Type): $Unit
public "lte"(other: $Unit$$Type): $Unit
public "max"(other: $Unit$$Type): $Unit
public "min"(other: $Unit$$Type): $Unit
public "mod"(value: double): $Unit
public "mod"(other: $Unit$$Type): $Unit
public "modSet"(unit: $Unit$$Type): $Unit
public "mul"(value: double): $Unit
public "mul"(other: $Unit$$Type): $Unit
public "mulSet"(unit: $Unit$$Type): $Unit
public "negate"(): $Unit
public "neq"(other: $Unit$$Type): $Unit
public "or"(other: $Unit$$Type): $Unit
public "positive"(): $Unit
public "pow"(other: $Unit$$Type): $Unit
public "rad"(): $Unit
public "rsh"(other: $Unit$$Type): $Unit
public "set"(unit: $Unit$$Type): $Unit
public "sin"(): $Unit
public "smoothstep"(): $Unit
public "sq"(): $Unit
public "sqrt"(): $Unit
public "sub"(other: $Unit$$Type): $Unit
public "sub"(value: double): $Unit
public "subSet"(unit: $Unit$$Type): $Unit
public "tan"(): $Unit
public "toString"(builder: $StringBuilder$$Type): void
public "withAlpha"(a: $Unit$$Type): $Unit
public "xor"(other: $Unit$$Type): $Unit
get "fixed"(): boolean
}
}

declare module "dev.latvian.mods.unit.function.FunctionFactory$FuncSupplier" {
import { $Unit, $Unit$$Type } from "dev.latvian.mods.unit.Unit"

export interface $FunctionFactory$FuncSupplier {
"create"(unit0s: $Unit$$Type[]): $Unit
}

export namespace $FunctionFactory$FuncSupplier {
const probejs$$marker: never
}
export abstract class $FunctionFactory$FuncSupplier$$Static implements $FunctionFactory$FuncSupplier {
}
}

declare module "dev.latvian.mods.unit.MutableNumberUnit" {
import { $Unit } from "dev.latvian.mods.unit.Unit"

export class $MutableNumberUnit extends $Unit {
constructor(value: double)

public "set"(value: double): void
get "value"(): double
set "value"(value: double)
}
}

