declare module "net.minecraft.client.color.block.BlockColor" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockAndTintGetter } from "net.minecraft.world.level.BlockAndTintGetter"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockColor$$Type = ($BlockColor | ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer) => integer));
}

declare module "net.minecraft.client.color.item.ItemColor" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemColor$$Type = ($ItemColor | ((arg0: $ItemStack, arg1: integer) => integer));
}

declare module "net.minecraft.client.color.block.BlockTintCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockTintCache$$Type = ($BlockTintCache);
}

declare module "net.minecraft.client.color.block.BlockColors" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockColors$$Type = ($BlockColors);
}

declare module "net.minecraft.client.color.item.ItemColors" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemColors$$Type = ($ItemColors);
}

