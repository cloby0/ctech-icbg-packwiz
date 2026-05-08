declare module "dev.latvian.mods.kubejs.typings.desc.DescriptionContext" {
import { $Class$$Type } from "java.lang.Class"
import { $TypeDescJS } from "dev.latvian.mods.kubejs.typings.desc.TypeDescJS"

export interface $DescriptionContext {
"javaType"(type: $Class$$Type<any>): $TypeDescJS
"typeName"(type: $Class$$Type<any>): string
}

export namespace $DescriptionContext {
const DEFAULT: $DescriptionContext
const DISPLAY: $DescriptionContext
}
export abstract class $DescriptionContext$$Static implements $DescriptionContext {
static readonly "DEFAULT": $DescriptionContext
static readonly "DISPLAY": $DescriptionContext

}
}

declare module "dev.latvian.mods.kubejs.typings.desc.ObjectDescJS$Entry" {
import { $Record } from "java.lang.Record"
import { $TypeDescJS, $TypeDescJS$$Type } from "dev.latvian.mods.kubejs.typings.desc.TypeDescJS"

export class $ObjectDescJS$Entry extends $Record {
constructor(key: string, value: $TypeDescJS$$Type, optional: boolean)
constructor(key: string, value: $TypeDescJS$$Type, optional: boolean, wrap: boolean)

public "key"(): string
public "optional"(): boolean
public "value"(): $TypeDescJS
public "wrap"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.typings.desc.TypeDescJS" {
import { $ObjectDescJS } from "dev.latvian.mods.kubejs.typings.desc.ObjectDescJS"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"

export interface $TypeDescJS {
"asArray"(): $TypeDescJS
"asMap"(key: $TypeDescJS$$Type): $TypeDescJS
"asMap"(): $TypeDescJS
"build"(): string
"build"(stringBuilder0: $StringBuilder$$Type): void
"or"(type: $TypeDescJS$$Type): $TypeDescJS
"withGenerics"(...types: $TypeDescJS$$Type[]): $TypeDescJS
}

export namespace $TypeDescJS {
const ANY: $TypeDescJS
const ANY_MAP: $TypeDescJS
const BOOLEAN: $TypeDescJS
const MAP: $TypeDescJS
const NULL: $TypeDescJS
const NUMBER: $TypeDescJS
const STRING: $TypeDescJS
function any(...types: $TypeDescJS$$Type[]): $TypeDescJS
function fixedArray(...types: $TypeDescJS$$Type[]): $TypeDescJS
function object(init: integer): $ObjectDescJS
function object(): $ObjectDescJS
}
export abstract class $TypeDescJS$$Static implements $TypeDescJS {
static readonly "ANY": $TypeDescJS
static readonly "ANY_MAP": $TypeDescJS
static readonly "BOOLEAN": $TypeDescJS
static readonly "MAP": $TypeDescJS
static readonly "NULL": $TypeDescJS
static readonly "NUMBER": $TypeDescJS
static readonly "STRING": $TypeDescJS

static "any"(...types: $TypeDescJS$$Type[]): $TypeDescJS
static "fixedArray"(...types: $TypeDescJS$$Type[]): $TypeDescJS
static "object"(init: integer): $ObjectDescJS
static "object"(): $ObjectDescJS
}
}

declare module "dev.latvian.mods.kubejs.typings.desc.ObjectDescJS" {
import { $List, $List$$Type } from "java.util.List"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $Record } from "java.lang.Record"
import { $ObjectDescJS$Entry, $ObjectDescJS$Entry$$Type } from "dev.latvian.mods.kubejs.typings.desc.ObjectDescJS$Entry"
import { $TypeDescJS, $TypeDescJS$$Type } from "dev.latvian.mods.kubejs.typings.desc.TypeDescJS"

export class $ObjectDescJS extends $Record implements $TypeDescJS {
constructor(types: $List$$Type<$ObjectDescJS$Entry$$Type>)

public "add"(key: string, value: $TypeDescJS$$Type, optional: boolean): $ObjectDescJS
public "add"(key: string, value: $TypeDescJS$$Type): $ObjectDescJS
public static "any"(...types: $TypeDescJS$$Type[]): $TypeDescJS
public "asArray"(): $TypeDescJS
public "asMap"(key: $TypeDescJS$$Type): $TypeDescJS
public "asMap"(): $TypeDescJS
public "build"(builder: $StringBuilder$$Type): void
public "build"(): string
public static "fixedArray"(...types: $TypeDescJS$$Type[]): $TypeDescJS
public static "object"(init: integer): $ObjectDescJS
public static "object"(): $ObjectDescJS
public "or"(type: $TypeDescJS$$Type): $TypeDescJS
public "types"(): $List<$ObjectDescJS$Entry>
public "withGenerics"(...types: $TypeDescJS$$Type[]): $TypeDescJS
}
}

