declare module "io.github.fishstiz.minecraftcursor.cursor.handler.InternalCursorProvider" {
import { $CursorType } from "io.github.fishstiz.minecraftcursor.api.CursorType"

export interface $InternalCursorProvider {
"minecraft_cursor$getCursorType"(double0: double, double1: double): $CursorType
}

export namespace $InternalCursorProvider {
const probejs$$marker: never
}
export abstract class $InternalCursorProvider$$Static implements $InternalCursorProvider {
}
}

declare module "io.github.fishstiz.minecraftcursor.api.CursorType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CursorType {
"getKey"(): string
"isDefault"(): boolean
"isKey"(cursorType0: $CursorType$$Type): boolean
get "key"(): string
get "default"(): boolean
}

export namespace $CursorType {
const BUSY: $CursorType
const CROSSHAIR: $CursorType
const DEFAULT: $CursorType
const DEFAULT_FORCE: $CursorType
const GRABBING: $CursorType
const NOT_ALLOWED: $CursorType
const POINTER: $CursorType
const RESIZE_EW: $CursorType
const RESIZE_NESW: $CursorType
const RESIZE_NS: $CursorType
const RESIZE_NWSE: $CursorType
const SHIFT: $CursorType
const TEXT: $CursorType
function firstNonDefault(...cursorType0s: $CursorType$$Type[]): $CursorType
function of(string0: string): $CursorType
}
export abstract class $CursorType$$Static implements $CursorType {
static readonly "BUSY": $CursorType
static readonly "CROSSHAIR": $CursorType
static readonly "DEFAULT": $CursorType
static readonly "DEFAULT_FORCE": $CursorType
static readonly "GRABBING": $CursorType
static readonly "NOT_ALLOWED": $CursorType
static readonly "POINTER": $CursorType
static readonly "RESIZE_EW": $CursorType
static readonly "RESIZE_NESW": $CursorType
static readonly "RESIZE_NS": $CursorType
static readonly "RESIZE_NWSE": $CursorType
static readonly "SHIFT": $CursorType
static readonly "TEXT": $CursorType

static "firstNonDefault"(...cursorType0s: $CursorType$$Type[]): $CursorType
static "of"(string0: string): $CursorType
}
}

declare module "io.github.fishstiz.minecraftcursor.mixin.NativeImageAccess" {
import { $WritableByteChannel$$Type } from "java.nio.channels.WritableByteChannel"

export interface $NativeImageAccess {
"invokeWriteToChannel"(writableByteChannel0: $WritableByteChannel$$Type): boolean
}

export namespace $NativeImageAccess {
const probejs$$marker: never
}
export abstract class $NativeImageAccess$$Static implements $NativeImageAccess {
}
}

declare module "io.github.fishstiz.minecraftcursor.mixin.compat.ftblibrary.CursorTypeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CursorTypeAccess {
"minecraft_cursor$getCursor"(): long
"minecraft_cursor$getShape"(): integer
}

export namespace $CursorTypeAccess {
const probejs$$marker: never
}
export abstract class $CursorTypeAccess$$Static implements $CursorTypeAccess {
}
}

