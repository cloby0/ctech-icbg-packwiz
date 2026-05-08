declare module "dev.kosmx.playerAnim.api.TransformType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransformType$$Type = ($TransformType | ("position" | "rotation" | "bend"));
}

declare module "dev.kosmx.playerAnim.api.layered.IAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAnimation$$Type = ($IAnimation);
}

declare module "dev.kosmx.playerAnim.core.util.Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Pair$$Type<L = any, R = any> = ($Pair<L, R>);
}

declare module "dev.kosmx.playerAnim.api.layered.AnimationStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationStack$$Type = ($AnimationStack);
}

declare module "dev.kosmx.playerAnim.impl.IUpperPartHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IUpperPartHelper$$Type = ($IUpperPartHelper);
}

declare module "dev.kosmx.playerAnim.core.util.Vec3d" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Vec3d$$Type = ($Vec3d);
}

declare module "dev.kosmx.playerAnim.core.util.Vec3f" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Vec3f$$Type = ($Vec3f);
}

declare module "dev.kosmx.playerAnim.impl.IPlayerModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPlayerModel$$Type = ($IPlayerModel | (() => void));
}

declare module "dev.kosmx.playerAnim.mixin.firstPerson.CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CameraAccessor$$Type = ($CameraAccessor | ((arg0: boolean) => void));
}

declare module "dev.kosmx.playerAnim.core.util.SetableSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SetableSupplier$$Type<T = any> = ($SetableSupplier<T>);
}

declare module "dev.kosmx.playerAnim.impl.IAnimatedPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAnimatedPlayer$$Type = ($IAnimatedPlayer);
}

declare module "dev.kosmx.playerAnim.core.impl.AnimationProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationProcessor$$Type = ($AnimationProcessor);
}

declare module "dev.kosmx.playerAnim.impl.IMutableModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMutableModel$$Type = ($IMutableModel);
}

declare module "dev.kosmx.playerAnim.impl.animation.AnimationApplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationApplier$$Type = ($AnimationApplier);
}

declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FirstPersonConfiguration$$Type = ($FirstPersonConfiguration);
}

declare module "dev.kosmx.playerAnim.core.util.Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Vector3$$Type<N extends number = number> = ($Vector3<N>);
}

declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FirstPersonMode$$Type = ($FirstPersonMode | ("none" | "vanilla" | "third_person_model" | "disabled"));
}

declare module "dev.kosmx.playerAnim.api.IPlayer" {
import { $AnimationStack$$Type } from "dev.kosmx.playerAnim.api.layered.AnimationStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPlayer$$Type = ($IPlayer | (() => $AnimationStack$$Type));
}

