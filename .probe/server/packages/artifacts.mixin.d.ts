declare module "artifacts.mixin.gamerule.BooleanValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BooleanValueInvoker$$Type = ($BooleanValueInvoker);
}

declare module "artifacts.mixin.accessors.client.LivingEntityRendererAccessor" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityModel, $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityRendererAccessor$$Type<T extends $LivingEntity = $LivingEntity, M extends $EntityModel<T> = $EntityModel<T>> = ($LivingEntityRendererAccessor<T, M>);
}

declare module "artifacts.mixin.accessors.MobAccessor" {
import { $GoalSelector$$Type } from "net.minecraft.world.entity.ai.goal.GoalSelector"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobAccessor$$Type = ($MobAccessor | (() => $GoalSelector$$Type));
}

declare module "artifacts.mixin.accessors.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
}

declare module "artifacts.mixin.gamerule.IntegerValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IntegerValueInvoker$$Type = ($IntegerValueInvoker);
}

