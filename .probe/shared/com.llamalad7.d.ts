declare module "com.llamalad7.mixinextras.sugar.ref.LocalIntRef" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalIntRef {
"get"(): integer
"set"(int0: integer): void
}

export namespace $LocalIntRef {
const probejs$$marker: never
}
export abstract class $LocalIntRef$$Static implements $LocalIntRef {
}
}

declare module "com.llamalad7.mixinextras.sugar.ref.LocalRef" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalRef<T = any> {
"get"(): T
"set"(t0: T): void
}

export namespace $LocalRef {
const probejs$$marker: never
}
export abstract class $LocalRef$$Static<T = any> implements $LocalRef<T> {
}
}

declare module "com.llamalad7.mixinextras.sugar.ref.LocalBooleanRef" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalBooleanRef {
"get"(): boolean
"set"(boolean0: boolean): void
}

export namespace $LocalBooleanRef {
const probejs$$marker: never
}
export abstract class $LocalBooleanRef$$Static implements $LocalBooleanRef {
}
}

declare module "com.llamalad7.mixinextras.injector.wrapoperation.Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Operation<R = any> {
"call"(...object0s: any[]): R
}

export namespace $Operation {
const probejs$$marker: never
}
export abstract class $Operation$$Static<R = any> implements $Operation<R> {
}
}

