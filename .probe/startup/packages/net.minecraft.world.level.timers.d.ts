declare module "net.minecraft.world.level.timers.TimerCallback" {
import { $TimerQueue } from "net.minecraft.world.level.timers.TimerQueue"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TimerCallback$$Type<T = any> = ($TimerCallback<T> | ((arg0: T, arg1: $TimerQueue<T>, arg2: long) => void));
}

declare module "net.minecraft.world.level.timers.TimerQueue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TimerQueue$$Type<T = any> = ($TimerQueue<T>);
}

declare module "net.minecraft.world.level.timers.TimerCallbacks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TimerCallbacks$$Type<C = any> = ($TimerCallbacks<C>);
}

declare module "net.minecraft.world.level.timers.TimerCallback$Serializer" {
import { $TimerCallback, $TimerCallback$$Type } from "net.minecraft.world.level.timers.TimerCallback"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TimerCallback$Serializer$$Type<T = any, C extends $TimerCallback<T> = $TimerCallback<T>> = ($TimerCallback$Serializer<T, C>);
}

