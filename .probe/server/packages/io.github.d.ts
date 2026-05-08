declare module "io.github.fishstiz.minecraftcursor.cursor.handler.InternalCursorProvider" {
import { $CursorType$$Type } from "io.github.fishstiz.minecraftcursor.api.CursorType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InternalCursorProvider$$Type = ($InternalCursorProvider | ((arg0: double, arg1: double) => $CursorType$$Type));
}

declare module "io.github.fishstiz.minecraftcursor.api.CursorType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CursorType$$Type = ($CursorType | (() => string));
}

declare module "io.github.fishstiz.minecraftcursor.mixin.NativeImageAccess" {
import { $WritableByteChannel } from "java.nio.channels.WritableByteChannel"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NativeImageAccess$$Type = ($NativeImageAccess | ((arg0: $WritableByteChannel) => boolean));
}

declare module "io.github.fishstiz.minecraftcursor.mixin.compat.ftblibrary.CursorTypeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CursorTypeAccess$$Type = ($CursorTypeAccess);
}

