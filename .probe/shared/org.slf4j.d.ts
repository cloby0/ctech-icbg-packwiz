declare module "org.slf4j.Marker" {
import { $Iterator } from "java.util.Iterator"
import { $Serializable } from "java.io.Serializable"

export interface $Marker extends $Serializable {
"add"(marker0: $Marker$$Type): void
"contains"(string0: string): boolean
"contains"(marker0: $Marker$$Type): boolean
"equals"(object0: any): boolean
"getName"(): string
/** @deprecated */
"hasChildren"(): boolean
"hasReferences"(): boolean
"hashCode"(): integer
"iterator"(): $Iterator<$Marker>
"remove"(marker0: $Marker$$Type): boolean
get "name"(): string
}

export namespace $Marker {
const ANY_MARKER: string
const ANY_NON_NULL_MARKER: string
}
export abstract class $Marker$$Static implements $Marker {
static readonly "ANY_MARKER": string
static readonly "ANY_NON_NULL_MARKER": string

}
}

declare module "org.slf4j.spi.LoggingEventBuilder" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Marker$$Type } from "org.slf4j.Marker"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $LoggingEventBuilder {
"addArgument"(supplier0: $Supplier$$Type<any>): $LoggingEventBuilder
"addArgument"(object0: any): $LoggingEventBuilder
"addKeyValue"(string0: string, supplier1: $Supplier$$Type<any>): $LoggingEventBuilder
"addKeyValue"(string0: string, object1: any): $LoggingEventBuilder
"addMarker"(marker0: $Marker$$Type): $LoggingEventBuilder
"log"(string0: string, object1: any): void
"log"(string0: string, object1: any, object2: any): void
"log"(string0: string, ...object1s: any[]): void
"log"(supplier0: $Supplier$$Type<string>): void
"log"(): void
"log"(string0: string): void
"setCause"(throwable0: $Throwable$$Type): $LoggingEventBuilder
"setMessage"(string0: string): $LoggingEventBuilder
"setMessage"(supplier0: $Supplier$$Type<string>): $LoggingEventBuilder
set "cause"(value: $Throwable$$Type)
set "message"(value: string)
set "message"(value: $Supplier$$Type<string>)
}

export namespace $LoggingEventBuilder {
const probejs$$marker: never
}
export abstract class $LoggingEventBuilder$$Static implements $LoggingEventBuilder {
}
}

declare module "org.slf4j.Logger" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Marker$$Type } from "org.slf4j.Marker"
import { $Level$$Type } from "org.slf4j.event.Level"
import { $LoggingEventBuilder } from "org.slf4j.spi.LoggingEventBuilder"

export interface $Logger {
"atDebug"(): $LoggingEventBuilder
"atError"(): $LoggingEventBuilder
"atInfo"(): $LoggingEventBuilder
"atLevel"(level0: $Level$$Type): $LoggingEventBuilder
"atTrace"(): $LoggingEventBuilder
"atWarn"(): $LoggingEventBuilder
"debug"(string0: string, throwable1: $Throwable$$Type): void
"debug"(marker0: $Marker$$Type, string1: string): void
"debug"(marker0: $Marker$$Type, string1: string, object2: any): void
"debug"(marker0: $Marker$$Type, string1: string, object2: any, object3: any): void
"debug"(marker0: $Marker$$Type, string1: string, ...object2s: any[]): void
"debug"(marker0: $Marker$$Type, string1: string, throwable2: $Throwable$$Type): void
"debug"(string0: string): void
"debug"(string0: string, object1: any): void
"debug"(string0: string, object1: any, object2: any): void
"debug"(string0: string, ...object1s: any[]): void
"error"(string0: string, throwable1: $Throwable$$Type): void
"error"(marker0: $Marker$$Type, string1: string): void
"error"(marker0: $Marker$$Type, string1: string, object2: any): void
"error"(marker0: $Marker$$Type, string1: string, object2: any, object3: any): void
"error"(string0: string, ...object1s: any[]): void
"error"(string0: string, object1: any, object2: any): void
"error"(string0: string): void
"error"(string0: string, object1: any): void
"error"(marker0: $Marker$$Type, string1: string, throwable2: $Throwable$$Type): void
"error"(marker0: $Marker$$Type, string1: string, ...object2s: any[]): void
"getName"(): string
"info"(string0: string, throwable1: $Throwable$$Type): void
"info"(string0: string, object1: any, object2: any): void
"info"(string0: string, object1: any): void
"info"(string0: string): void
"info"(string0: string, ...object1s: any[]): void
"info"(marker0: $Marker$$Type, string1: string, object2: any): void
"info"(marker0: $Marker$$Type, string1: string, object2: any, object3: any): void
"info"(marker0: $Marker$$Type, string1: string, ...object2s: any[]): void
"info"(marker0: $Marker$$Type, string1: string): void
"info"(marker0: $Marker$$Type, string1: string, throwable2: $Throwable$$Type): void
"isDebugEnabled"(marker0: $Marker$$Type): boolean
"isDebugEnabled"(): boolean
"isEnabledForLevel"(level0: $Level$$Type): boolean
"isErrorEnabled"(): boolean
"isErrorEnabled"(marker0: $Marker$$Type): boolean
"isInfoEnabled"(marker0: $Marker$$Type): boolean
"isInfoEnabled"(): boolean
"isTraceEnabled"(marker0: $Marker$$Type): boolean
"isTraceEnabled"(): boolean
"isWarnEnabled"(marker0: $Marker$$Type): boolean
"isWarnEnabled"(): boolean
"makeLoggingEventBuilder"(level0: $Level$$Type): $LoggingEventBuilder
"trace"(marker0: $Marker$$Type, string1: string, object2: any): void
"trace"(marker0: $Marker$$Type, string1: string): void
"trace"(string0: string, throwable1: $Throwable$$Type): void
"trace"(marker0: $Marker$$Type, string1: string, object2: any, object3: any): void
"trace"(marker0: $Marker$$Type, string1: string, throwable2: $Throwable$$Type): void
"trace"(marker0: $Marker$$Type, string1: string, ...object2s: any[]): void
"trace"(string0: string): void
"trace"(string0: string, object1: any): void
"trace"(string0: string, object1: any, object2: any): void
"trace"(string0: string, ...object1s: any[]): void
"warn"(marker0: $Marker$$Type, string1: string): void
"warn"(string0: string, throwable1: $Throwable$$Type): void
"warn"(string0: string, object1: any): void
"warn"(string0: string, ...object1s: any[]): void
"warn"(marker0: $Marker$$Type, string1: string, object2: any, object3: any): void
"warn"(marker0: $Marker$$Type, string1: string, ...object2s: any[]): void
"warn"(marker0: $Marker$$Type, string1: string, throwable2: $Throwable$$Type): void
"warn"(marker0: $Marker$$Type, string1: string, object2: any): void
"warn"(string0: string): void
"warn"(string0: string, object1: any, object2: any): void
get "name"(): string
get "debugEnabled"(): boolean
get "errorEnabled"(): boolean
get "infoEnabled"(): boolean
get "traceEnabled"(): boolean
get "warnEnabled"(): boolean
}

export namespace $Logger {
const ROOT_LOGGER_NAME: string
}
export abstract class $Logger$$Static implements $Logger {
static readonly "ROOT_LOGGER_NAME": string

}
}

declare module "org.slf4j.event.Level" {
import { $Enum } from "java.lang.Enum"

export class $Level extends $Enum<$Level> {
static readonly "DEBUG": $Level
static readonly "ERROR": $Level
static readonly "INFO": $Level
static readonly "TRACE": $Level
static readonly "WARN": $Level

public static "intToLevel"(int0: integer): $Level
public "toInt"(): integer
public static "valueOf"(string0: string): $Level
public static "values"(): $Level[]
}
}

