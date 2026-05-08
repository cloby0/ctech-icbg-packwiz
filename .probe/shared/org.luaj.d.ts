declare module "org.luaj.vm2.lib.LibFunction" {
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaFunction } from "org.luaj.vm2.LuaFunction"

export class $LibFunction extends $LuaFunction {
public "call"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type, luaValue2: $LuaValue$$Type, luaValue3: $LuaValue$$Type): $LuaValue
}
}

declare module "org.luaj.vm2.LuaThread$State" {
import { $Varargs, $Varargs$$Type } from "org.luaj.vm2.Varargs"
import { $LuaThread$$Type } from "org.luaj.vm2.LuaThread"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $Runnable } from "java.lang.Runnable"

export class $LuaThread$State implements $Runnable {
readonly "function": $LuaValue

public "lua_resume"(luaThread0: $LuaThread$$Type, varargs1: $Varargs$$Type): $Varargs
public "lua_yield"(varargs0: $Varargs$$Type): $Varargs
public "run"(): void
get "bytecodes"(): integer
set "bytecodes"(value: integer)
get "hookcall"(): boolean
set "hookcall"(value: boolean)
get "hookcount"(): integer
set "hookcount"(value: integer)
get "hookfunc"(): $LuaValue
set "hookfunc"(value: $LuaValue$$Type)
get "hookline"(): boolean
set "hookline"(value: boolean)
get "hookrtrn"(): boolean
set "hookrtrn"(value: boolean)
get "inhook"(): boolean
set "inhook"(value: boolean)
get "lastline"(): integer
set "lastline"(value: integer)
get "status"(): integer
set "status"(value: integer)
}
}

declare module "org.luaj.vm2.Globals$Undumper" {
import { $Prototype } from "org.luaj.vm2.Prototype"
import { $InputStream$$Type } from "java.io.InputStream"

export interface $Globals$Undumper {
"undump"(inputStream0: $InputStream$$Type, string1: string): $Prototype
}

export namespace $Globals$Undumper {
const probejs$$marker: never
}
export abstract class $Globals$Undumper$$Static implements $Globals$Undumper {
}
}

declare module "org.luaj.vm2.LocVars" {
import { $LuaString, $LuaString$$Type } from "org.luaj.vm2.LuaString"

export class $LocVars {
constructor(luaString0: $LuaString$$Type, int1: integer, int2: integer)

public "tojstring"(): string
get "endpc"(): integer
set "endpc"(value: integer)
get "startpc"(): integer
set "startpc"(value: integer)
get "varname"(): $LuaString
set "varname"(value: $LuaString$$Type)
}
}

declare module "org.luaj.vm2.lib.DebugLib$CallFrame" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugLib$CallFrame {
constructor()

public "currentline"(): integer
public "shortsource"(): string
}
}

declare module "org.luaj.vm2.Prototype" {
import { $Upvaldesc, $Upvaldesc$$Type } from "org.luaj.vm2.Upvaldesc"
import { $LuaString, $LuaString$$Type } from "org.luaj.vm2.LuaString"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LocVars, $LocVars$$Type } from "org.luaj.vm2.LocVars"

export class $Prototype {
constructor()
constructor(int0: integer)

public "getlocalname"(int0: integer, int1: integer): $LuaString
public "shortsource"(): string
get "code"(): integer[]
set "code"(value: integer[])
get "is_vararg"(): integer
set "is_vararg"(value: integer)
get "k"(): $LuaValue[]
set "k"(value: $LuaValue$$Type[])
get "lastlinedefined"(): integer
set "lastlinedefined"(value: integer)
get "linedefined"(): integer
set "linedefined"(value: integer)
get "lineinfo"(): integer[]
set "lineinfo"(value: integer[])
get "locvars"(): $LocVars[]
set "locvars"(value: $LocVars$$Type[])
get "maxstacksize"(): integer
set "maxstacksize"(value: integer)
get "numparams"(): integer
set "numparams"(value: integer)
get "p"(): $Prototype[]
set "p"(value: $Prototype$$Type[])
get "source"(): $LuaString
set "source"(value: $LuaString$$Type)
get "upvalues"(): $Upvaldesc[]
set "upvalues"(value: $Upvaldesc$$Type[])
}
}

declare module "org.luaj.vm2.lib.TwoArgFunction" {
import { $LibFunction } from "org.luaj.vm2.lib.LibFunction"

export class $TwoArgFunction extends $LibFunction {
constructor()

}
}

declare module "org.luaj.vm2.LuaBoolean" {
import { $LuaValue } from "org.luaj.vm2.LuaValue"

export class $LuaBoolean extends $LuaValue {
static "s_metatable": $LuaValue
readonly "v": boolean

public "booleanValue"(): boolean
}
}

declare module "org.luaj.vm2.LuaTable" {
import { $Varargs, $Varargs$$Type } from "org.luaj.vm2.Varargs"
import { $Metatable } from "org.luaj.vm2.Metatable"
import { $LuaTable$Slot } from "org.luaj.vm2.LuaTable$Slot"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaString$$Type } from "org.luaj.vm2.LuaString"

export class $LuaTable extends $LuaValue implements $Metatable {
constructor(varargs0: $Varargs$$Type, int1: integer)
constructor(varargs0: $Varargs$$Type)
constructor(luaValue0s: $LuaValue$$Type[], luaValue1s: $LuaValue$$Type[], varargs2: $Varargs$$Type)
constructor(int0: integer, int1: integer)
constructor()

public "arrayget"(luaValue0s: $LuaValue$$Type[], int1: integer): $LuaValue
public "concat"(luaString0: $LuaString$$Type, int1: integer, int2: integer): $LuaValue
public "entry"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): $LuaTable$Slot
public static "hashSlot"(luaValue0: $LuaValue$$Type, int1: integer): integer
public static "hashmod"(int0: integer, int1: integer): integer
public static "hashpow2"(int0: integer, int1: integer): integer
public "hashset"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): void
public "insert"(int0: integer, luaValue1: $LuaValue$$Type): void
public "keyCount"(): integer
public "keys"(): $LuaValue[]
public "presize"(int0: integer, int1: integer): void
public "remove"(int0: integer): $LuaValue
public "sort"(luaValue0: $LuaValue$$Type): void
public "toLuaValue"(): $LuaValue
public "unpack"(): $Varargs
public "unpack"(int0: integer): $Varargs
public "unpack"(int0: integer, int1: integer): $Varargs
public "useWeakKeys"(): boolean
public "useWeakValues"(): boolean
public "wrap"(luaValue0: $LuaValue$$Type): $LuaValue
}
}

declare module "org.luaj.vm2.lib.PackageLib$lua_searcher" {
import { $PackageLib$$Type } from "org.luaj.vm2.lib.PackageLib"
import { $VarArgFunction } from "org.luaj.vm2.lib.VarArgFunction"

export class $PackageLib$lua_searcher extends $VarArgFunction {
constructor(packageLib0: $PackageLib$$Type)

}
}

declare module "org.luaj.vm2.LuaThread" {
import { $Varargs, $Varargs$$Type } from "org.luaj.vm2.Varargs"
import { $Globals, $Globals$$Type } from "org.luaj.vm2.Globals"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaThread$State } from "org.luaj.vm2.LuaThread$State"

export class $LuaThread extends $LuaValue {
static readonly "MAX_CALLSTACK": integer
static readonly "STATUS_DEAD": integer
static readonly "STATUS_INITIAL": integer
static readonly "STATUS_NAMES": string[]
static readonly "STATUS_NORMAL": integer
static readonly "STATUS_RUNNING": integer
static readonly "STATUS_SUSPENDED": integer
static "coroutine_count": integer
readonly "globals": $Globals
static "s_metatable": $LuaValue
readonly "state": $LuaThread$State
static "thread_orphan_check_interval": long

constructor(globals0: $Globals$$Type)
constructor(globals0: $Globals$$Type, luaValue1: $LuaValue$$Type)

public "getStatus"(): string
public "isMainThread"(): boolean
public "resume"(varargs0: $Varargs$$Type): $Varargs
get "callstack"(): any
set "callstack"(value: any)
get "errorfunc"(): $LuaValue
set "errorfunc"(value: $LuaValue$$Type)
get "status"(): string
get "mainThread"(): boolean
}
}

declare module "org.luaj.vm2.LuaFunction" {
import { $LuaValue } from "org.luaj.vm2.LuaValue"

export class $LuaFunction extends $LuaValue {
static "s_metatable": $LuaValue

constructor()

public "classnamestub"(): string
public "name"(): string
}
}

declare module "org.luaj.vm2.LuaTable$StrongSlot" {
import { $Varargs } from "org.luaj.vm2.Varargs"
import { $LuaTable$Slot, $LuaTable$Slot$$Type } from "org.luaj.vm2.LuaTable$Slot"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"

export interface $LuaTable$StrongSlot extends $LuaTable$Slot {
"add"(slot0: $LuaTable$Slot$$Type): $LuaTable$Slot
"arraykey"(int0: integer): integer
"find"(luaValue0: $LuaValue$$Type): $LuaTable$StrongSlot
"first"(): $LuaTable$StrongSlot
"key"(): $LuaValue
"keyeq"(luaValue0: $LuaValue$$Type): boolean
"keyindex"(int0: integer): integer
"relink"(slot0: $LuaTable$Slot$$Type): $LuaTable$Slot
"remove"(strongSlot0: $LuaTable$StrongSlot$$Type): $LuaTable$Slot
"rest"(): $LuaTable$Slot
"set"(strongSlot0: $LuaTable$StrongSlot$$Type, luaValue1: $LuaValue$$Type): $LuaTable$Slot
"toVarargs"(): $Varargs
"value"(): $LuaValue
}

export namespace $LuaTable$StrongSlot {
const probejs$$marker: never
}
export abstract class $LuaTable$StrongSlot$$Static implements $LuaTable$StrongSlot {
}
}

declare module "org.luaj.vm2.lib.DebugLib$NameWhat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugLib$NameWhat {
}
}

declare module "org.luaj.vm2.lib.ResourceFinder" {
import { $InputStream } from "java.io.InputStream"

export interface $ResourceFinder {
"findResource"(string0: string): $InputStream
}

export namespace $ResourceFinder {
const probejs$$marker: never
}
export abstract class $ResourceFinder$$Static implements $ResourceFinder {
}
}

declare module "org.luaj.vm2.Metatable" {
import { $LuaTable$Slot } from "org.luaj.vm2.LuaTable$Slot"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"

export interface $Metatable {
"arrayget"(luaValue0s: $LuaValue$$Type[], int1: integer): $LuaValue
"entry"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): $LuaTable$Slot
"toLuaValue"(): $LuaValue
"useWeakKeys"(): boolean
"useWeakValues"(): boolean
"wrap"(luaValue0: $LuaValue$$Type): $LuaValue
}

export namespace $Metatable {
const probejs$$marker: never
}
export abstract class $Metatable$$Static implements $Metatable {
}
}

declare module "org.luaj.vm2.UpValue" {
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"

export class $UpValue {
constructor(luaValue0s: $LuaValue$$Type[], int1: integer)

public "close"(): void
public "getValue"(): $LuaValue
public "setValue"(luaValue0: $LuaValue$$Type): void
public "tojstring"(): string
get "value"(): $LuaValue
set "value"(value: $LuaValue$$Type)
}
}

declare module "org.luaj.vm2.Globals" {
import { $Varargs, $Varargs$$Type } from "org.luaj.vm2.Varargs"
import { $PrintStream, $PrintStream$$Type } from "java.io.PrintStream"
import { $LuaThread, $LuaThread$$Type } from "org.luaj.vm2.LuaThread"
import { $BaseLib, $BaseLib$$Type } from "org.luaj.vm2.lib.BaseLib"
import { $DebugLib, $DebugLib$$Type } from "org.luaj.vm2.lib.DebugLib"
import { $Reader$$Type } from "java.io.Reader"
import { $LuaTable, $LuaTable$$Type } from "org.luaj.vm2.LuaTable"
import { $Globals$Compiler, $Globals$Compiler$$Type } from "org.luaj.vm2.Globals$Compiler"
import { $PackageLib, $PackageLib$$Type } from "org.luaj.vm2.lib.PackageLib"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $Globals$Undumper, $Globals$Undumper$$Type } from "org.luaj.vm2.Globals$Undumper"
import { $ResourceFinder, $ResourceFinder$$Type } from "org.luaj.vm2.lib.ResourceFinder"
import { $Globals$Loader, $Globals$Loader$$Type } from "org.luaj.vm2.Globals$Loader"
import { $Prototype } from "org.luaj.vm2.Prototype"
import { $InputStream, $InputStream$$Type } from "java.io.InputStream"

export class $Globals extends $LuaTable {
constructor()

public "compilePrototype"(inputStream0: $InputStream$$Type, string1: string): $Prototype
public "compilePrototype"(reader0: $Reader$$Type, string1: string): $Prototype
public "load"(inputStream0: $InputStream$$Type, string1: string, string2: string, luaValue3: $LuaValue$$Type): $LuaValue
public "load"(reader0: $Reader$$Type, string1: string, luaTable2: $LuaTable$$Type): $LuaValue
public "load"(string0: string, string1: string): $LuaValue
public "load"(string0: string): $LuaValue
public "load"(string0: string, string1: string, luaTable2: $LuaTable$$Type): $LuaValue
public "load"(reader0: $Reader$$Type, string1: string): $LuaValue
public "loadPrototype"(inputStream0: $InputStream$$Type, string1: string, string2: string): $Prototype
public "loadfile"(string0: string): $LuaValue
public "yield"(varargs0: $Varargs$$Type): $Varargs
get "STDERR"(): $PrintStream
set "STDERR"(value: $PrintStream$$Type)
get "STDIN"(): $InputStream
set "STDIN"(value: $InputStream$$Type)
get "STDOUT"(): $PrintStream
set "STDOUT"(value: $PrintStream$$Type)
get "baselib"(): $BaseLib
set "baselib"(value: $BaseLib$$Type)
get "compiler"(): $Globals$Compiler
set "compiler"(value: $Globals$Compiler$$Type)
get "debuglib"(): $DebugLib
set "debuglib"(value: $DebugLib$$Type)
get "finder"(): $ResourceFinder
set "finder"(value: $ResourceFinder$$Type)
get "loader"(): $Globals$Loader
set "loader"(value: $Globals$Loader$$Type)
get "package_"(): $PackageLib
set "package_"(value: $PackageLib$$Type)
get "running"(): $LuaThread
set "running"(value: $LuaThread$$Type)
get "undumper"(): $Globals$Undumper
set "undumper"(value: $Globals$Undumper$$Type)
}
}

declare module "org.luaj.vm2.LuaValue" {
import { $LuaThread, $LuaThread$$Type } from "org.luaj.vm2.LuaThread"
import { $Varargs, $Varargs$$Type } from "org.luaj.vm2.Varargs"
import { $LuaBoolean } from "org.luaj.vm2.LuaBoolean"
import { $LuaInteger, $LuaInteger$$Type } from "org.luaj.vm2.LuaInteger"
import { $LuaClosure, $LuaClosure$$Type } from "org.luaj.vm2.LuaClosure"
import { $LuaNumber, $LuaNumber$$Type } from "org.luaj.vm2.LuaNumber"
import { $LuaFunction, $LuaFunction$$Type } from "org.luaj.vm2.LuaFunction"
import { $LuaTable, $LuaTable$$Type } from "org.luaj.vm2.LuaTable"
import { $Buffer, $Buffer$$Type } from "org.luaj.vm2.Buffer"
import { $LuaUserdata, $LuaUserdata$$Type } from "org.luaj.vm2.LuaUserdata"
import { $LuaString, $LuaString$$Type } from "org.luaj.vm2.LuaString"
import { $Globals } from "org.luaj.vm2.Globals"
import { $Class$$Type } from "java.lang.Class"

export class $LuaValue extends $Varargs {
static readonly "ADD": $LuaString
static readonly "CALL": $LuaString
static readonly "CONCAT": $LuaString
static readonly "DIV": $LuaString
static readonly "EMPTYSTRING": $LuaString
static "ENV": $LuaString
static readonly "EQ": $LuaString
static readonly "FALSE": $LuaBoolean
static readonly "INDEX": $LuaString
static readonly "LE": $LuaString
static readonly "LEN": $LuaString
static readonly "LT": $LuaString
static readonly "METATABLE": $LuaString
static readonly "MINUSONE": $LuaNumber
static readonly "MOD": $LuaString
static readonly "MODE": $LuaString
static readonly "MUL": $LuaString
static readonly "NEWINDEX": $LuaString
static readonly "NIL": $LuaValue
static readonly "NILS": $LuaValue[]
static readonly "NONE": $LuaValue
static readonly "NOVALS": $LuaValue[]
static readonly "ONE": $LuaNumber
static readonly "POW": $LuaString
static readonly "SUB": $LuaString
static readonly "TBOOLEAN": integer
static readonly "TFUNCTION": integer
static readonly "TINT": integer
static readonly "TLIGHTUSERDATA": integer
static readonly "TNIL": integer
static readonly "TNONE": integer
static readonly "TNUMBER": integer
static readonly "TOSTRING": $LuaString
static readonly "TRUE": $LuaBoolean
static readonly "TSTRING": integer
static readonly "TTABLE": integer
static readonly "TTHREAD": integer
static readonly "TUSERDATA": integer
static readonly "TVALUE": integer
static readonly "TYPE_NAMES": string[]
static readonly "UNM": $LuaString
static readonly "ZERO": $LuaNumber

constructor()

public "add"(double0: double): $LuaValue
public "add"(int0: integer): $LuaValue
public "add"(luaValue0: $LuaValue$$Type): $LuaValue
public "and"(luaValue0: $LuaValue$$Type): $LuaValue
public static "argerror"(int0: integer, string1: string): $LuaValue
public static "assert_"(boolean0: boolean, string1: string): void
public "buffer"(): $Buffer
public "call"(): $LuaValue
public "call"(luaValue0: $LuaValue$$Type): $LuaValue
public "call"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type, luaValue2: $LuaValue$$Type): $LuaValue
public "call"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): $LuaValue
public "call"(string0: string): $LuaValue
public "checkboolean"(): boolean
public "checkclosure"(): $LuaClosure
public "checkdouble"(): double
public "checkfunction"(): $LuaFunction
public "checkglobals"(): $Globals
public "checkint"(): integer
public "checkinteger"(): $LuaInteger
public "checkjstring"(): string
public "checklong"(): long
public "checknotnil"(): $LuaValue
public "checknumber"(string0: string): $LuaNumber
public "checknumber"(): $LuaNumber
public "checkstring"(): $LuaString
public "checktable"(): $LuaTable
public "checkthread"(): $LuaThread
public "checkuserdata"(): any
public "checkuserdata"(class0: $Class$$Type): any
public "comparemt"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): $LuaValue
public "concat"(luaValue0: $LuaValue$$Type): $LuaValue
public "concat"(buffer0: $Buffer$$Type): $Buffer
public "concatTo"(luaValue0: $LuaValue$$Type): $LuaValue
public "concatTo"(luaNumber0: $LuaNumber$$Type): $LuaValue
public "concatTo"(luaString0: $LuaString$$Type): $LuaValue
public "concatmt"(luaValue0: $LuaValue$$Type): $LuaValue
public "div"(luaValue0: $LuaValue$$Type): $LuaValue
public "div"(double0: double): $LuaValue
public "div"(int0: integer): $LuaValue
public "divInto"(double0: double): $LuaValue
public "eq"(luaValue0: $LuaValue$$Type): $LuaValue
public "eq_b"(luaValue0: $LuaValue$$Type): boolean
public static "eqmtcall"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type, luaValue2: $LuaValue$$Type, luaValue3: $LuaValue$$Type): boolean
public static "error"(string0: string): $LuaValue
public "get"(luaValue0: $LuaValue$$Type): $LuaValue
public "get"(int0: integer): $LuaValue
public "get"(string0: string): $LuaValue
public "getmetatable"(): $LuaValue
public "gt"(luaValue0: $LuaValue$$Type): $LuaValue
public "gt"(int0: integer): $LuaValue
public "gt"(double0: double): $LuaValue
public "gt_b"(luaValue0: $LuaValue$$Type): boolean
public "gt_b"(double0: double): boolean
public "gt_b"(int0: integer): boolean
public "gteq"(double0: double): $LuaValue
public "gteq"(int0: integer): $LuaValue
public "gteq"(luaValue0: $LuaValue$$Type): $LuaValue
public "gteq_b"(double0: double): boolean
public "gteq_b"(int0: integer): boolean
public "gteq_b"(luaValue0: $LuaValue$$Type): boolean
public "inext"(luaValue0: $LuaValue$$Type): $Varargs
public "initupvalue1"(luaValue0: $LuaValue$$Type): void
public "invoke"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type, varargs2: $Varargs$$Type): $Varargs
public "invoke"(luaValue0s: $LuaValue$$Type[]): $Varargs
public "invoke"(luaValue0s: $LuaValue$$Type[], varargs1: $Varargs$$Type): $Varargs
public "invoke"(luaValue0: $LuaValue$$Type, varargs1: $Varargs$$Type): $Varargs
public "invoke"(varargs0: $Varargs$$Type): $Varargs
public "invoke"(): $Varargs
public "invokemethod"(string0: string, varargs1: $Varargs$$Type): $Varargs
public "invokemethod"(luaValue0: $LuaValue$$Type): $Varargs
public "invokemethod"(string0: string): $Varargs
public "invokemethod"(luaValue0: $LuaValue$$Type, luaValue1s: $LuaValue$$Type[]): $Varargs
public "invokemethod"(string0: string, luaValue1s: $LuaValue$$Type[]): $Varargs
public "invokemethod"(luaValue0: $LuaValue$$Type, varargs1: $Varargs$$Type): $Varargs
public "isboolean"(): boolean
public "isclosure"(): boolean
public "isfunction"(): boolean
public "isint"(): boolean
public "isinttype"(): boolean
public "islong"(): boolean
public "isnil"(): boolean
public "isnumber"(): boolean
public "isstring"(): boolean
public "istable"(): boolean
public "isthread"(): boolean
public "isuserdata"(class0: $Class$$Type): boolean
public "isuserdata"(): boolean
public "isvalidkey"(): boolean
public "len"(): $LuaValue
public "length"(): integer
public static "listOf"(luaValue0s: $LuaValue$$Type[]): $LuaTable
public static "listOf"(luaValue0s: $LuaValue$$Type[], varargs1: $Varargs$$Type): $LuaTable
public "load"(luaValue0: $LuaValue$$Type): $LuaValue
public "lt"(double0: double): $LuaValue
public "lt"(int0: integer): $LuaValue
public "lt"(luaValue0: $LuaValue$$Type): $LuaValue
public "lt_b"(double0: double): boolean
public "lt_b"(luaValue0: $LuaValue$$Type): boolean
public "lt_b"(int0: integer): boolean
public "lteq"(luaValue0: $LuaValue$$Type): $LuaValue
public "lteq"(int0: integer): $LuaValue
public "lteq"(double0: double): $LuaValue
public "lteq_b"(int0: integer): boolean
public "lteq_b"(double0: double): boolean
public "lteq_b"(luaValue0: $LuaValue$$Type): boolean
public "metatag"(luaValue0: $LuaValue$$Type): $LuaValue
public "method"(string0: string, luaValue1: $LuaValue$$Type): $LuaValue
public "method"(string0: string): $LuaValue
public "method"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type, luaValue2: $LuaValue$$Type): $LuaValue
public "method"(string0: string, luaValue1: $LuaValue$$Type, luaValue2: $LuaValue$$Type): $LuaValue
public "method"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): $LuaValue
public "method"(luaValue0: $LuaValue$$Type): $LuaValue
public "mod"(double0: double): $LuaValue
public "mod"(int0: integer): $LuaValue
public "mod"(luaValue0: $LuaValue$$Type): $LuaValue
public "modFrom"(double0: double): $LuaValue
public "mul"(int0: integer): $LuaValue
public "mul"(luaValue0: $LuaValue$$Type): $LuaValue
public "mul"(double0: double): $LuaValue
public "neg"(): $LuaValue
public "neq"(luaValue0: $LuaValue$$Type): $LuaValue
public "neq_b"(luaValue0: $LuaValue$$Type): boolean
public "next"(luaValue0: $LuaValue$$Type): $Varargs
public "not"(): $LuaValue
public "onInvoke"(varargs0: $Varargs$$Type): $Varargs
public "optboolean"(boolean0: boolean): boolean
public "optclosure"(luaClosure0: $LuaClosure$$Type): $LuaClosure
public "optdouble"(double0: double): double
public "optfunction"(luaFunction0: $LuaFunction$$Type): $LuaFunction
public "optint"(int0: integer): integer
public "optinteger"(luaInteger0: $LuaInteger$$Type): $LuaInteger
public "optjstring"(string0: string): string
public "optlong"(long0: long): long
public "optnumber"(luaNumber0: $LuaNumber$$Type): $LuaNumber
public "optstring"(luaString0: $LuaString$$Type): $LuaString
public "opttable"(luaTable0: $LuaTable$$Type): $LuaTable
public "optthread"(luaThread0: $LuaThread$$Type): $LuaThread
public "optuserdata"(class0: $Class$$Type, object1: any): any
public "optuserdata"(object0: any): any
public "optvalue"(luaValue0: $LuaValue$$Type): $LuaValue
public "or"(luaValue0: $LuaValue$$Type): $LuaValue
public "pow"(luaValue0: $LuaValue$$Type): $LuaValue
public "pow"(int0: integer): $LuaValue
public "pow"(double0: double): $LuaValue
public "powWith"(int0: integer): $LuaValue
public "powWith"(double0: double): $LuaValue
public "presize"(int0: integer): void
public "raweq"(int0: integer): boolean
public "raweq"(luaValue0: $LuaValue$$Type): boolean
public "raweq"(luaUserdata0: $LuaUserdata$$Type): boolean
public "raweq"(luaString0: $LuaString$$Type): boolean
public "raweq"(double0: double): boolean
public "rawget"(luaValue0: $LuaValue$$Type): $LuaValue
public "rawget"(int0: integer): $LuaValue
public "rawget"(string0: string): $LuaValue
public "rawlen"(): integer
public "rawset"(int0: integer, string1: string): void
public "rawset"(int0: integer, luaValue1: $LuaValue$$Type): void
public "rawset"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): void
public "rawset"(string0: string, string1: string): void
public "rawset"(string0: string, double1: double): void
public "rawset"(string0: string, int1: integer): void
public "rawset"(string0: string, luaValue1: $LuaValue$$Type): void
public "rawsetlist"(int0: integer, varargs1: $Varargs$$Type): void
public "set"(int0: integer, string1: string): void
public "set"(int0: integer, luaValue1: $LuaValue$$Type): void
public "set"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): void
public "set"(string0: string, string1: string): void
public "set"(string0: string, int1: integer): void
public "set"(string0: string, double1: double): void
public "set"(string0: string, luaValue1: $LuaValue$$Type): void
public "setmetatable"(luaValue0: $LuaValue$$Type): $LuaValue
public "strcmp"(luaString0: $LuaString$$Type): integer
public "strcmp"(luaValue0: $LuaValue$$Type): integer
public "strongvalue"(): $LuaValue
public "strvalue"(): $LuaString
public "sub"(int0: integer): $LuaValue
public "sub"(double0: double): $LuaValue
public "sub"(luaValue0: $LuaValue$$Type): $LuaValue
public "subFrom"(double0: double): $LuaValue
public "subFrom"(int0: integer): $LuaValue
public static "tableOf"(luaValue0s: $LuaValue$$Type[]): $LuaTable
public static "tableOf"(): $LuaTable
public static "tableOf"(luaValue0s: $LuaValue$$Type[], luaValue1s: $LuaValue$$Type[], varargs2: $Varargs$$Type): $LuaTable
public static "tableOf"(int0: integer, int1: integer): $LuaTable
public static "tableOf"(varargs0: $Varargs$$Type, int1: integer): $LuaTable
public static "tableOf"(luaValue0s: $LuaValue$$Type[], luaValue1s: $LuaValue$$Type[]): $LuaTable
public static "tailcallOf"(luaValue0: $LuaValue$$Type, varargs1: $Varargs$$Type): $Varargs
public "testfor_b"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type): boolean
public "toboolean"(): boolean
public "tobyte"(): byte
public "tochar"(): character
public "todouble"(): double
public "tofloat"(): float
public "toint"(): integer
public "tolong"(): long
public "tonumber"(): $LuaValue
public "toshort"(): short
public "tostring"(): $LuaValue
public "touserdata"(class0: $Class$$Type): any
public "touserdata"(): any
public "type"(): integer
public "typename"(): string
public static "userdataOf"(object0: any): $LuaUserdata
public static "userdataOf"(object0: any, luaValue1: $LuaValue$$Type): $LuaUserdata
public static "valueOf"(boolean0: boolean): $LuaBoolean
public static "valueOf"(byte0s: byte[], int1: integer, int2: integer): $LuaString
public static "valueOf"(byte0s: byte[]): $LuaString
public static "valueOf"(string0: string): $LuaString
public static "valueOf"(double0: double): $LuaNumber
public static "valueOf"(int0: integer): $LuaInteger
public static "varargsOf"(luaValue0s: $LuaValue$$Type[], int1: integer, int2: integer): $Varargs
public static "varargsOf"(luaValue0s: $LuaValue$$Type[], varargs1: $Varargs$$Type): $Varargs
public static "varargsOf"(luaValue0s: $LuaValue$$Type[]): $Varargs
public static "varargsOf"(luaValue0: $LuaValue$$Type, luaValue1: $LuaValue$$Type, varargs2: $Varargs$$Type): $Varargs
public static "varargsOf"(luaValue0s: $LuaValue$$Type[], int1: integer, int2: integer, varargs3: $Varargs$$Type): $Varargs
public static "varargsOf"(luaValue0: $LuaValue$$Type, varargs1: $Varargs$$Type): $Varargs
get "metatable"(): $LuaValue
get "boolean"(): boolean
get "closure"(): boolean
get "function"(): boolean
get "int"(): boolean
get "inttype"(): boolean
get "long"(): boolean
get "nil"(): boolean
get "number"(): boolean
get "string"(): boolean
get "table"(): boolean
get "thread"(): boolean
get "userdata"(): boolean
get "validkey"(): boolean
set "metatable"(value: $LuaValue$$Type)
}
}

declare module "org.luaj.vm2.LuaString" {
import { $PrintStream$$Type } from "java.io.PrintStream"
import { $DataOutputStream$$Type } from "java.io.DataOutputStream"
import { $LuaValue } from "org.luaj.vm2.LuaValue"
import { $InputStream } from "java.io.InputStream"

export class $LuaString extends $LuaValue {
readonly "m_bytes": byte[]
readonly "m_length": integer
readonly "m_offset": integer
static "s_metatable": $LuaValue

public "charAt"(int0: integer): integer
public "copyInto"(int0: integer, byte1s: byte[], int2: integer, int3: integer): void
public static "decodeAsUtf8"(byte0s: byte[], int1: integer, int2: integer): string
public static "encodeToUtf8"(char0s: character[], int1: integer, byte2s: byte[], int3: integer): integer
public static "equals"(byte0s: byte[], int1: integer, byte2s: byte[], int3: integer, int4: integer): boolean
public static "equals"(luaString0: $LuaString$$Type, int1: integer, luaString2: $LuaString$$Type, int3: integer, int4: integer): boolean
public static "hashCode"(byte0s: byte[], int1: integer, int2: integer): integer
public "indexOf"(byte0: byte, int1: integer): integer
public "indexOf"(luaString0: $LuaString$$Type, int1: integer): integer
public "indexOfAny"(luaString0: $LuaString$$Type): integer
public "isValidUtf8"(): boolean
public "lastIndexOf"(luaString0: $LuaString$$Type): integer
public static "lengthAsUtf8"(char0s: character[]): integer
public "luaByte"(int0: integer): integer
public "printToStream"(printStream0: $PrintStream$$Type): void
public "scannumber"(): double
public "scannumber"(int0: integer): double
public "substring"(int0: integer, int1: integer): $LuaString
public "toInputStream"(): $InputStream
public "tonumber"(int0: integer): $LuaValue
public static "valueOf"(char0s: character[]): $LuaString
public static "valueOf"(char0s: character[], int1: integer, int2: integer): $LuaString
public static "valueUsing"(byte0s: byte[], int1: integer, int2: integer): $LuaString
public static "valueUsing"(byte0s: byte[]): $LuaString
public "write"(dataOutputStream0: $DataOutputStream$$Type, int1: integer, int2: integer): void
get "validUtf8"(): boolean
}
}

declare module "org.luaj.vm2.lib.VarArgFunction" {
import { $LibFunction } from "org.luaj.vm2.lib.LibFunction"

export class $VarArgFunction extends $LibFunction {
constructor()

}
}

declare module "org.luaj.vm2.LuaUserdata" {
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"

export class $LuaUserdata extends $LuaValue {
constructor(object0: any, luaValue1: $LuaValue$$Type)
constructor(object0: any)

public "eqmt"(luaValue0: $LuaValue$$Type): boolean
public "userdata"(): any
get "m_instance"(): any
set "m_instance"(value: any)
get "m_metatable"(): $LuaValue
set "m_metatable"(value: $LuaValue$$Type)
}
}

declare module "org.luaj.vm2.LuaNumber" {
import { $LuaValue } from "org.luaj.vm2.LuaValue"

export class $LuaNumber extends $LuaValue {
static "s_metatable": $LuaValue

constructor()

}
}

declare module "org.luaj.vm2.Varargs" {
import { $LuaTable, $LuaTable$$Type } from "org.luaj.vm2.LuaTable"
import { $LuaThread, $LuaThread$$Type } from "org.luaj.vm2.LuaThread"
import { $LuaInteger, $LuaInteger$$Type } from "org.luaj.vm2.LuaInteger"
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaString, $LuaString$$Type } from "org.luaj.vm2.LuaString"
import { $LuaClosure, $LuaClosure$$Type } from "org.luaj.vm2.LuaClosure"
import { $LuaNumber, $LuaNumber$$Type } from "org.luaj.vm2.LuaNumber"
import { $Class$$Type } from "java.lang.Class"
import { $LuaFunction, $LuaFunction$$Type } from "org.luaj.vm2.LuaFunction"

export class $Varargs {
constructor()

public "arg"(int0: integer): $LuaValue
public "arg1"(): $LuaValue
public "argcheck"(boolean0: boolean, int1: integer, string2: string): void
public "checkboolean"(int0: integer): boolean
public "checkclosure"(int0: integer): $LuaClosure
public "checkdouble"(int0: integer): double
public "checkfunction"(int0: integer): $LuaFunction
public "checkint"(int0: integer): integer
public "checkinteger"(int0: integer): $LuaInteger
public "checkjstring"(int0: integer): string
public "checklong"(int0: integer): long
public "checknotnil"(int0: integer): $LuaValue
public "checknumber"(int0: integer): $LuaNumber
public "checkstring"(int0: integer): $LuaString
public "checktable"(int0: integer): $LuaTable
public "checkthread"(int0: integer): $LuaThread
public "checkuserdata"(int0: integer): any
public "checkuserdata"(int0: integer, class1: $Class$$Type): any
public "checkvalue"(int0: integer): $LuaValue
public "dealias"(): $Varargs
public "eval"(): $Varargs
public "isTailcall"(): boolean
public "isfunction"(int0: integer): boolean
public "isnil"(int0: integer): boolean
public "isnoneornil"(int0: integer): boolean
public "isnumber"(int0: integer): boolean
public "isstring"(int0: integer): boolean
public "istable"(int0: integer): boolean
public "isthread"(int0: integer): boolean
public "isuserdata"(int0: integer): boolean
public "isvalue"(int0: integer): boolean
public "narg"(): integer
public "optboolean"(int0: integer, boolean1: boolean): boolean
public "optclosure"(int0: integer, luaClosure1: $LuaClosure$$Type): $LuaClosure
public "optdouble"(int0: integer, double1: double): double
public "optfunction"(int0: integer, luaFunction1: $LuaFunction$$Type): $LuaFunction
public "optint"(int0: integer, int1: integer): integer
public "optinteger"(int0: integer, luaInteger1: $LuaInteger$$Type): $LuaInteger
public "optjstring"(int0: integer, string1: string): string
public "optlong"(int0: integer, long1: long): long
public "optnumber"(int0: integer, luaNumber1: $LuaNumber$$Type): $LuaNumber
public "optstring"(int0: integer, luaString1: $LuaString$$Type): $LuaString
public "opttable"(int0: integer, luaTable1: $LuaTable$$Type): $LuaTable
public "optthread"(int0: integer, luaThread1: $LuaThread$$Type): $LuaThread
public "optuserdata"(int0: integer, class1: $Class$$Type, object2: any): any
public "optuserdata"(int0: integer, object1: any): any
public "optvalue"(int0: integer, luaValue1: $LuaValue$$Type): $LuaValue
public "subargs"(int0: integer): $Varargs
public "toboolean"(int0: integer): boolean
public "tobyte"(int0: integer): byte
public "tochar"(int0: integer): character
public "todouble"(int0: integer): double
public "tofloat"(int0: integer): float
public "toint"(int0: integer): integer
public "tojstring"(int0: integer): string
public "tojstring"(): string
public "tolong"(int0: integer): long
public "toshort"(int0: integer): short
public "touserdata"(int0: integer, class1: $Class$$Type): any
public "touserdata"(int0: integer): any
public "type"(int0: integer): integer
get "tailcall"(): boolean
}
}

declare module "org.luaj.vm2.Globals$Compiler" {
import { $Prototype } from "org.luaj.vm2.Prototype"
import { $InputStream$$Type } from "java.io.InputStream"

export interface $Globals$Compiler {
"compile"(inputStream0: $InputStream$$Type, string1: string): $Prototype
}

export namespace $Globals$Compiler {
const probejs$$marker: never
}
export abstract class $Globals$Compiler$$Static implements $Globals$Compiler {
}
}

declare module "org.luaj.vm2.lib.PackageLib$java_searcher" {
import { $PackageLib$$Type } from "org.luaj.vm2.lib.PackageLib"
import { $VarArgFunction } from "org.luaj.vm2.lib.VarArgFunction"

export class $PackageLib$java_searcher extends $VarArgFunction {
constructor(packageLib0: $PackageLib$$Type)

}
}

declare module "org.luaj.vm2.lib.PackageLib$preload_searcher" {
import { $PackageLib$$Type } from "org.luaj.vm2.lib.PackageLib"
import { $VarArgFunction } from "org.luaj.vm2.lib.VarArgFunction"

export class $PackageLib$preload_searcher extends $VarArgFunction {
constructor(packageLib0: $PackageLib$$Type)

}
}

declare module "org.luaj.vm2.LuaInteger" {
import { $LuaNumber } from "org.luaj.vm2.LuaNumber"

export class $LuaInteger extends $LuaNumber {
readonly "v": integer

public static "hashCode"(int0: integer): integer
public static "valueOf"(long0: long): $LuaNumber
}
}

declare module "org.luaj.vm2.Globals$Loader" {
import { $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaFunction } from "org.luaj.vm2.LuaFunction"
import { $Prototype$$Type } from "org.luaj.vm2.Prototype"

export interface $Globals$Loader {
"load"(prototype0: $Prototype$$Type, string1: string, luaValue2: $LuaValue$$Type): $LuaFunction
}

export namespace $Globals$Loader {
const probejs$$marker: never
}
export abstract class $Globals$Loader$$Static implements $Globals$Loader {
}
}

declare module "org.luaj.vm2.LuaClosure" {
import { $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $UpValue, $UpValue$$Type } from "org.luaj.vm2.UpValue"
import { $LuaFunction } from "org.luaj.vm2.LuaFunction"
import { $Prototype, $Prototype$$Type } from "org.luaj.vm2.Prototype"

export class $LuaClosure extends $LuaFunction {
readonly "p": $Prototype

constructor(prototype0: $Prototype$$Type, luaValue1: $LuaValue$$Type)

get "upValues"(): $UpValue[]
set "upValues"(value: $UpValue$$Type[])
}
}

declare module "org.luaj.vm2.lib.PackageLib" {
import { $LuaTable$$Type } from "org.luaj.vm2.LuaTable"
import { $TwoArgFunction } from "org.luaj.vm2.lib.TwoArgFunction"
import { $PackageLib$preload_searcher, $PackageLib$preload_searcher$$Type } from "org.luaj.vm2.lib.PackageLib$preload_searcher"
import { $PackageLib$java_searcher, $PackageLib$java_searcher$$Type } from "org.luaj.vm2.lib.PackageLib$java_searcher"
import { $PackageLib$lua_searcher, $PackageLib$lua_searcher$$Type } from "org.luaj.vm2.lib.PackageLib$lua_searcher"

export class $PackageLib extends $TwoArgFunction {
static readonly "DEFAULT_LUA_PATH": string

constructor()

public "setIsLoaded"(string0: string, luaTable1: $LuaTable$$Type): void
public "setLuaPath"(string0: string): void
public static "toClassname"(string0: string): string
get "java_searcher"(): $PackageLib$java_searcher
set "java_searcher"(value: $PackageLib$java_searcher$$Type)
get "lua_searcher"(): $PackageLib$lua_searcher
set "lua_searcher"(value: $PackageLib$lua_searcher$$Type)
get "preload_searcher"(): $PackageLib$preload_searcher
set "preload_searcher"(value: $PackageLib$preload_searcher$$Type)
set "luaPath"(value: string)
}
}

declare module "org.luaj.vm2.Upvaldesc" {
import { $LuaString, $LuaString$$Type } from "org.luaj.vm2.LuaString"

export class $Upvaldesc {
readonly "idx": short
readonly "instack": boolean

constructor(luaString0: $LuaString$$Type, boolean1: boolean, int2: integer)

get "name"(): $LuaString
set "name"(value: $LuaString$$Type)
}
}

declare module "org.luaj.vm2.LuaTable$Slot" {
import { $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaTable$StrongSlot, $LuaTable$StrongSlot$$Type } from "org.luaj.vm2.LuaTable$StrongSlot"

export interface $LuaTable$Slot {
"add"(slot0: $LuaTable$Slot$$Type): $LuaTable$Slot
"arraykey"(int0: integer): integer
"find"(luaValue0: $LuaValue$$Type): $LuaTable$StrongSlot
"first"(): $LuaTable$StrongSlot
"keyeq"(luaValue0: $LuaValue$$Type): boolean
"keyindex"(int0: integer): integer
"relink"(slot0: $LuaTable$Slot$$Type): $LuaTable$Slot
"remove"(strongSlot0: $LuaTable$StrongSlot$$Type): $LuaTable$Slot
"rest"(): $LuaTable$Slot
"set"(strongSlot0: $LuaTable$StrongSlot$$Type, luaValue1: $LuaValue$$Type): $LuaTable$Slot
}

export namespace $LuaTable$Slot {
const probejs$$marker: never
}
export abstract class $LuaTable$Slot$$Static implements $LuaTable$Slot {
}
}

declare module "org.luaj.vm2.lib.DebugLib" {
import { $Varargs$$Type } from "org.luaj.vm2.Varargs"
import { $TwoArgFunction } from "org.luaj.vm2.lib.TwoArgFunction"
import { $DebugLib$NameWhat } from "org.luaj.vm2.lib.DebugLib$NameWhat"
import { $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaClosure$$Type } from "org.luaj.vm2.LuaClosure"
import { $DebugLib$CallFrame } from "org.luaj.vm2.lib.DebugLib$CallFrame"
import { $LuaFunction$$Type } from "org.luaj.vm2.LuaFunction"
import { $Prototype$$Type } from "org.luaj.vm2.Prototype"

export class $DebugLib extends $TwoArgFunction {
static "CALLS": boolean
static "TRACE": boolean

constructor()

public "getCallFrame"(int0: integer): $DebugLib$CallFrame
public static "getobjname"(prototype0: $Prototype$$Type, int1: integer, int2: integer): $DebugLib$NameWhat
public "onCall"(luaFunction0: $LuaFunction$$Type): void
public "onCall"(luaClosure0: $LuaClosure$$Type, varargs1: $Varargs$$Type, luaValue2s: $LuaValue$$Type[]): void
public "onInstruction"(int0: integer, varargs1: $Varargs$$Type, int2: integer): void
public "onReturn"(): void
public "traceback"(int0: integer): string
}
}

declare module "org.luaj.vm2.lib.BaseLib" {
import { $Varargs } from "org.luaj.vm2.Varargs"
import { $TwoArgFunction } from "org.luaj.vm2.lib.TwoArgFunction"
import { $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $ResourceFinder } from "org.luaj.vm2.lib.ResourceFinder"
import { $InputStream, $InputStream$$Type } from "java.io.InputStream"

export class $BaseLib extends $TwoArgFunction implements $ResourceFinder {
constructor()

public "findResource"(string0: string): $InputStream
public "loadFile"(string0: string, string1: string, luaValue2: $LuaValue$$Type): $Varargs
public "loadStream"(inputStream0: $InputStream$$Type, string1: string, string2: string, luaValue3: $LuaValue$$Type): $Varargs
}
}

declare module "org.luaj.vm2.Buffer" {
import { $LuaValue, $LuaValue$$Type } from "org.luaj.vm2.LuaValue"
import { $LuaString, $LuaString$$Type } from "org.luaj.vm2.LuaString"
import { $LuaNumber$$Type } from "org.luaj.vm2.LuaNumber"

export class $Buffer {
constructor()
constructor(int0: integer)
constructor(luaValue0: $LuaValue$$Type)

public "append"(luaValue0: $LuaValue$$Type): $Buffer
public "append"(byte0: byte): $Buffer
public "append"(luaString0: $LuaString$$Type): $Buffer
public "append"(string0: string): $Buffer
public "concatTo"(luaNumber0: $LuaNumber$$Type): $Buffer
public "concatTo"(luaString0: $LuaString$$Type): $Buffer
public "concatTo"(luaValue0: $LuaValue$$Type): $Buffer
public "makeroom"(int0: integer, int1: integer): void
public "prepend"(luaString0: $LuaString$$Type): $Buffer
public "setvalue"(luaValue0: $LuaValue$$Type): $Buffer
public "tojstring"(): string
public "tostring"(): $LuaString
public "value"(): $LuaValue
}
}

