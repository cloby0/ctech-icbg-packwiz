declare module "net.conczin.immersive_optimization.mixin.ServerLevelAccessor" {
import { $EntityTickList$$Type } from "net.minecraft.world.level.entity.EntityTickList"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerLevelAccessor$$Type = ($ServerLevelAccessor | (() => $EntityTickList$$Type));
}

declare module "net.conczin.immersive_optimization.mixin.EntityTickListAccessor" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Int2ObjectMap$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityTickListAccessor$$Type = ($EntityTickListAccessor | (() => $Int2ObjectMap$$Type<$Entity$$Type>));
}

