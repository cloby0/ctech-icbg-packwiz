declare module "com.eeeab.animate.server.event.AnimationEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EMAnimatedEntity, $EMAnimatedEntity$$Type } from "com.eeeab.animate.server.animation.EMAnimatedEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationEvent$$Type<T extends ($Entity & $EMAnimatedEntity) = ($Entity & $EMAnimatedEntity)> = ($AnimationEvent<T>);
}

declare module "com.eeeab.animate.server.animation.EMAnimatedEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EMAnimatedEntity$$Type = ($EMAnimatedEntity);
}

declare module "com.eeeab.animate.server.event.AnimationEvent$Tick" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EMAnimatedEntity, $EMAnimatedEntity$$Type } from "com.eeeab.animate.server.animation.EMAnimatedEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationEvent$Tick$$Type<T extends ($Entity & $EMAnimatedEntity) = ($Entity & $EMAnimatedEntity)> = ($AnimationEvent$Tick<T>);
}

declare module "com.eeeab.animate.server.event.AnimationEvent$Start" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EMAnimatedEntity, $EMAnimatedEntity$$Type } from "com.eeeab.animate.server.animation.EMAnimatedEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationEvent$Start$$Type<T extends ($Entity & $EMAnimatedEntity) = ($Entity & $EMAnimatedEntity)> = ($AnimationEvent$Start<T>);
}

declare module "com.eeeab.animate.server.animation.Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Animation$$Type = ($Animation);
}

