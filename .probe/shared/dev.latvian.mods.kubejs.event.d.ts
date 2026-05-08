declare module "dev.latvian.mods.kubejs.event.EventResult" {
import { $CompoundEventResult } from "dev.architectury.event.CompoundEventResult"
import { $EventResult as $EventResult$0 } from "dev.architectury.event.EventResult"
import { $EventResult$Type } from "dev.latvian.mods.kubejs.event.EventResult$Type"

export class $EventResult {
static readonly "PASS": $EventResult

public "arch"(): $EventResult$0
public "archCompound"<T>(): $CompoundEventResult<T>
public "error"(): boolean
public "interruptDefault"(): boolean
public "interruptFalse"(): boolean
public "interruptTrue"(): boolean
public "override"(): boolean
public "pass"(): boolean
public "type"(): $EventResult$Type
public "value"(): any
}
}

declare module "dev.latvian.mods.kubejs.event.IEventHandler" {
import { $EventJS$$Type } from "dev.latvian.mods.kubejs.event.EventJS"

export interface $IEventHandler {
"onEvent"(eventJS0: $EventJS$$Type): any
}

export namespace $IEventHandler {
const probejs$$marker: never
}
export abstract class $IEventHandler$$Static implements $IEventHandler {
}
}

declare module "dev.latvian.mods.kubejs.event.EventGroupWrapper" {
import { $EventGroup$$Type } from "dev.latvian.mods.kubejs.event.EventGroup"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BaseFunction } from "dev.latvian.mods.rhino.BaseFunction"
import { $Set } from "java.util.Set"
import { $HashMap } from "java.util.HashMap"
import { $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"

export class $EventGroupWrapper extends $HashMap<string, $BaseFunction> {
constructor(scriptType: $ScriptType$$Type, group: $EventGroup$$Type)

public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "equals"(object0: any): boolean
public "hashCode"(): integer
public "keySet"(): $Set<string>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "dev.latvian.mods.kubejs.event.EventExit" {
import { $EventResult, $EventResult$$Type } from "dev.latvian.mods.kubejs.event.EventResult"
import { $Exception } from "java.lang.Exception"

export class $EventExit extends $Exception {
readonly "result": $EventResult

constructor(result: $EventResult$$Type)

}
}

declare module "dev.latvian.mods.kubejs.event.EventHandlerContainer" {
import { $IEventHandler, $IEventHandler$$Type } from "dev.latvian.mods.kubejs.event.IEventHandler"
import { $EventExceptionHandler$$Type } from "dev.latvian.mods.kubejs.event.EventExceptionHandler"
import { $EventResult } from "dev.latvian.mods.kubejs.event.EventResult"
import { $EventJS$$Type } from "dev.latvian.mods.kubejs.event.EventJS"

export class $EventHandlerContainer {
readonly "extraId": any
readonly "handler": $IEventHandler
readonly "line": integer
readonly "source": string

constructor(extraId: any, handler: $IEventHandler$$Type, source: string, line: integer)

public "add"(extraId: any, handler: $IEventHandler$$Type, source: string, line: integer): void
public "handle"(event: $EventJS$$Type, exh: $EventExceptionHandler$$Type): $EventResult
public static "isEmpty"(array: $EventHandlerContainer$$Type[]): boolean
}
}

declare module "dev.latvian.mods.kubejs.event.StartupEventJS" {
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $StartupEventJS extends $EventJS {
constructor()

}
}

declare module "dev.latvian.mods.kubejs.event.EventExceptionHandler" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $EventJS$$Type } from "dev.latvian.mods.kubejs.event.EventJS"
import { $EventHandlerContainer$$Type } from "dev.latvian.mods.kubejs.event.EventHandlerContainer"

export interface $EventExceptionHandler {
"handle"(eventJS0: $EventJS$$Type, eventHandlerContainer1: $EventHandlerContainer$$Type, throwable2: $Throwable$$Type): $Throwable
}

export namespace $EventExceptionHandler {
const probejs$$marker: never
}
export abstract class $EventExceptionHandler$$Static implements $EventExceptionHandler {
}
}

declare module "dev.latvian.mods.kubejs.event.EventGroup" {
import { $ScriptTypePredicate$$Type } from "dev.latvian.mods.kubejs.script.ScriptTypePredicate"
import { $Map } from "java.util.Map"
import { $EventHandler } from "dev.latvian.mods.kubejs.event.EventHandler"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Class } from "java.lang.Class"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $EventGroup {
readonly "name": string

public "add"(name: string, scriptType: $ScriptTypePredicate$$Type, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public "client"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public "common"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public static "getGroups"(): $Map<string, $EventGroup>
public "getHandlers"(): $Map<string, $EventHandler>
public static "of"(name: string): $EventGroup
public "register"(): void
public "server"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public "startup"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
get "handlers"(): $Map<string, $EventHandler>
}
}

declare module "dev.latvian.mods.kubejs.event.EventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EventJS {
constructor()

/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
}

declare module "dev.latvian.mods.kubejs.event.EventHandler" {
import { $EventGroup } from "dev.latvian.mods.kubejs.event.EventGroup"
import { $ScriptTypeHolder$$Type } from "dev.latvian.mods.kubejs.script.ScriptTypeHolder"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $ScriptTypePredicate } from "dev.latvian.mods.kubejs.script.ScriptTypePredicate"
import { $EventResult } from "dev.latvian.mods.kubejs.event.EventResult"
import { $Set } from "java.util.Set"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Supplier } from "java.util.function.Supplier"
import { $EventHandlerContainer$$Type } from "dev.latvian.mods.kubejs.event.EventHandlerContainer"
import { $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IEventHandler$$Type } from "dev.latvian.mods.kubejs.event.IEventHandler"
import { $EventExceptionHandler$$Type } from "dev.latvian.mods.kubejs.event.EventExceptionHandler"
import { $BaseFunction } from "dev.latvian.mods.rhino.BaseFunction"
import { $EventHandlerInvoker } from "dev.latvian.mods.kubejs.core.mixin.common.EventHandlerInvoker"
import { $EventJS, $EventJS$$Type } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $EventHandler extends $BaseFunction implements $EventHandlerInvoker {
readonly "eventType": $Supplier<$Class<$EventJS>>
readonly "group": $EventGroup
readonly "name": string
readonly "scriptTypePredicate": $ScriptTypePredicate

public "cancelable"(): $EventHandler
public "delete"(context0: $Context$$Type, int1: integer): void
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "findUniqueExtraIds"(type: $ScriptType$$Type): $Set<any>
public "forEachListener"(type: $ScriptType$$Type, callback: $Consumer$$Type<$EventHandlerContainer$$Type>): void
public "get"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): any
public "getAllIds"(cx: $Context$$Type): any[]
public "getDefaultValue"(context0: $Context$$Type, class1: $Class$$Type<any>): any
public "getHasResult"(): boolean
public "getIds"(context0: $Context$$Type): any[]
public "getParentScope"(): $Scriptable
public "getPrototype"(context0: $Context$$Type): $Scriptable
public "has"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): boolean
public "hasListeners"(): boolean
public "hasListeners"(extraId: any): boolean
public "hasResult"(): $EventHandler
public "listen"(type: $ScriptType$$Type, extraId: any, handler: $IEventHandler$$Type): void
public "post"(type: $ScriptTypeHolder$$Type, extraId: any, event: $EventJS$$Type, exh: $EventExceptionHandler$$Type): $EventResult
public "post"(event: $EventJS$$Type): boolean
public "post"(extraId: any, event: $EventJS$$Type): boolean
public "post"(event: $EventJS$$Type, extraId: any): $EventResult
public "post"(scriptType: $ScriptTypeHolder$$Type, event: $EventJS$$Type, exh: $EventExceptionHandler$$Type): $EventResult
public "post"(scriptType: $ScriptTypeHolder$$Type, event: $EventJS$$Type): $EventResult
public "post"(type: $ScriptTypeHolder$$Type, extraId: any, event: $EventJS$$Type): $EventResult
public "post"(event: $EventJS$$Type, extraId: any, exh: $EventExceptionHandler$$Type): $EventResult
public "put"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type, object3: any): void
public "setParentScope"(scriptable0: $Scriptable$$Type): void
public "setPrototype"(scriptable0: $Scriptable$$Type): void
get "parentScope"(): $Scriptable
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}
}

declare module "dev.latvian.mods.kubejs.event.EventResult$Type" {
import { $Enum } from "java.lang.Enum"
import { $EventExit } from "dev.latvian.mods.kubejs.event.EventExit"
import { $EventResult } from "dev.latvian.mods.kubejs.event.EventResult"
import { $EventResult as $EventResult$0 } from "dev.architectury.event.EventResult"

export class $EventResult$Type extends $Enum<$EventResult$Type> {
static readonly "ERROR": $EventResult$Type
static readonly "INTERRUPT_DEFAULT": $EventResult$Type
static readonly "INTERRUPT_FALSE": $EventResult$Type
static readonly "INTERRUPT_TRUE": $EventResult$Type
static readonly "PASS": $EventResult$Type
readonly "defaultArchResult": $EventResult$0
readonly "defaultExit": $EventExit
readonly "defaultResult": $EventResult

public "exit"(value: any): $EventExit
public static "valueOf"(name: string): $EventResult$Type
public static "values"(): $EventResult$Type[]
}
}

