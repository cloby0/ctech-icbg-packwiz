declare module "net.minecraftforge.eventbus.api.IEventBus" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $GenericEvent, $GenericEvent$$Type } from "net.minecraftforge.eventbus.api.GenericEvent"
import { $Class$$Type } from "java.lang.Class"
import { $IEventBusInvokeDispatcher$$Type } from "net.minecraftforge.eventbus.api.IEventBusInvokeDispatcher"

export interface $IEventBus {
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, boolean2: boolean, class3: $Class$$Type<T>, consumer4: $Consumer$$Type<T>): void
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, consumer2: $Consumer$$Type<T>): void
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, consumer1: $Consumer$$Type<T>): void
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, boolean2: boolean, consumer3: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, boolean1: boolean, consumer2: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, boolean1: boolean, class2: $Class$$Type<T>, consumer3: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, consumer1: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(consumer0: $Consumer$$Type<T>): void
"post"(event0: $Event$$Type, iEventBusInvokeDispatcher1: $IEventBusInvokeDispatcher$$Type): boolean
"post"(event0: $Event$$Type): boolean
"register"(object0: any): void
"shutdown"(): void
"start"(): void
"unregister"(object0: any): void
}

export namespace $IEventBus {
const probejs$$marker: never
}
export abstract class $IEventBus$$Static implements $IEventBus {
}
}

declare module "net.minecraftforge.eventbus.ListenerList" {
import { $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $IEventListener, $IEventListener$$Type } from "net.minecraftforge.eventbus.api.IEventListener"

export class $ListenerList {
constructor(listenerList0: $ListenerList$$Type)
constructor()

public static "clearBusID"(int0: integer): void
public "getListeners"(int0: integer): $IEventListener[]
public "register"(int0: integer, eventPriority1: $EventPriority$$Type, iEventListener2: $IEventListener$$Type): void
public "unregister"(int0: integer, iEventListener1: $IEventListener$$Type): void
public static "unregisterAll"(int0: integer, iEventListener1: $IEventListener$$Type): void
}
}

declare module "net.minecraftforge.eventbus.api.IGenericEvent" {
import { $Type } from "java.lang.reflect.Type"

export interface $IGenericEvent<T = any> {
"getGenericType"(): $Type
get "genericType"(): $Type
}

export namespace $IGenericEvent {
const probejs$$marker: never
}
export abstract class $IGenericEvent$$Static<T = any> implements $IGenericEvent<T> {
}
}

declare module "net.minecraftforge.eventbus.api.IEventBusInvokeDispatcher" {
import { $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $IEventListener$$Type } from "net.minecraftforge.eventbus.api.IEventListener"

export interface $IEventBusInvokeDispatcher {
"invoke"(iEventListener0: $IEventListener$$Type, event1: $Event$$Type): void
}

export namespace $IEventBusInvokeDispatcher {
const probejs$$marker: never
}
export abstract class $IEventBusInvokeDispatcher$$Static implements $IEventBusInvokeDispatcher {
}
}

declare module "net.minecraftforge.eventbus.api.EventPriority" {
import { $Enum } from "java.lang.Enum"
import { $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $IEventListener } from "net.minecraftforge.eventbus.api.IEventListener"

export class $EventPriority extends $Enum<$EventPriority> implements $IEventListener {
static readonly "HIGH": $EventPriority
static readonly "HIGHEST": $EventPriority
static readonly "LOW": $EventPriority
static readonly "LOWEST": $EventPriority
static readonly "NORMAL": $EventPriority

public "invoke"(event0: $Event$$Type): void
public "listenerName"(): string
public static "valueOf"(string0: string): $EventPriority
public static "values"(): $EventPriority[]
}
}

declare module "net.minecraftforge.eventbus.api.Event" {
import { $EventPriority, $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $Event$Result, $Event$Result$$Type } from "net.minecraftforge.eventbus.api.Event$Result"
import { $ListenerList } from "net.minecraftforge.eventbus.ListenerList"

export class $Event {
constructor()

public "getListenerList"(): $ListenerList
public "getPhase"(): $EventPriority
public "getResult"(): $Event$Result
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "isCanceled"(): boolean
public "setCanceled"(boolean0: boolean): void
public "setPhase"(eventPriority0: $EventPriority$$Type): void
public "setResult"(result0: $Event$Result$$Type): void
get "listenerList"(): $ListenerList
get "phase"(): $EventPriority
get "result"(): $Event$Result
get "cancelable"(): boolean
get "canceled"(): boolean
set "canceled"(value: boolean)
set "phase"(value: $EventPriority$$Type)
set "result"(value: $Event$Result$$Type)
}
}

declare module "net.minecraftforge.eventbus.api.GenericEvent" {
import { $IGenericEvent } from "net.minecraftforge.eventbus.api.IGenericEvent"
import { $Type } from "java.lang.reflect.Type"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $GenericEvent<T = any> extends $Event implements $IGenericEvent<T> {
constructor()

public "getGenericType"(): $Type
get "genericType"(): $Type
}
}

declare module "net.minecraftforge.eventbus.api.Event$Result" {
import { $Enum } from "java.lang.Enum"

export class $Event$Result extends $Enum<$Event$Result> {
static readonly "ALLOW": $Event$Result
static readonly "DEFAULT": $Event$Result
static readonly "DENY": $Event$Result

public static "valueOf"(string0: string): $Event$Result
public static "values"(): $Event$Result[]
}
}

declare module "net.minecraftforge.eventbus.api.IEventListener" {
import { $Event$$Type } from "net.minecraftforge.eventbus.api.Event"

export interface $IEventListener {
"invoke"(event0: $Event$$Type): void
"listenerName"(): string
}

export namespace $IEventListener {
const probejs$$marker: never
}
export abstract class $IEventListener$$Static implements $IEventListener {
}
}

