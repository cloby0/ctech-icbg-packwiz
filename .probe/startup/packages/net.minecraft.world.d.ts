declare module "net.minecraft.world.Difficulty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Difficulty$$Type = ($Difficulty | ("peaceful" | "easy" | "normal" | "hard"));
}

declare module "net.minecraft.world.InteractionResultHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InteractionResultHolder$$Type<T = any> = ($InteractionResultHolder<T>);
}

declare module "net.minecraft.world.RandomSequences" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RandomSequences$$Type = ($RandomSequences);
}

declare module "net.minecraft.world.WorldlyContainerHolder" {
import { $WorldlyContainer$$Type } from "net.minecraft.world.WorldlyContainer"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldlyContainerHolder$$Type = ($WorldlyContainerHolder | ((arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos) => $WorldlyContainer$$Type));
}

declare module "net.minecraft.world.DifficultyInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DifficultyInstance$$Type = ($DifficultyInstance);
}

declare module "net.minecraft.world.SimpleContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleContainer$$Type = ($SimpleContainer);
}

declare module "net.minecraft.world.MenuProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuProvider$$Type = ($MenuProvider);
}

declare module "net.minecraft.world.LockCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LockCode$$Type = ($LockCode);
}

declare module "net.minecraft.world.Container" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Container$$Type = ($Container);
}

declare module "net.minecraft.world.InteractionResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InteractionResult$$Type = ($InteractionResult | ("success" | "consume" | "consume_partial" | "pass" | "fail"));
}

declare module "net.minecraft.world.ContainerListener" {
import { $Container } from "net.minecraft.world.Container"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ContainerListener$$Type = ($ContainerListener | ((arg0: $Container) => void));
}

declare module "net.minecraft.world.BossEvent$BossBarColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BossEvent$BossBarColor$$Type = ($BossEvent$BossBarColor | ("pink" | "blue" | "red" | "green" | "yellow" | "purple" | "white"));
}

declare module "net.minecraft.world.InteractionHand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InteractionHand$$Type = ($InteractionHand | ("main_hand" | "off_hand"));
}

declare module "net.minecraft.world.Nameable" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Nameable$$Type = ($Nameable | (() => $Component$$Type));
}

declare module "net.minecraft.world.BossEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BossEvent$$Type = ($BossEvent);
}

declare module "net.minecraft.world.BossEvent$BossBarOverlay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BossEvent$BossBarOverlay$$Type = ($BossEvent$BossBarOverlay | ("progress" | "notched_6" | "notched_10" | "notched_12" | "notched_20"));
}

declare module "net.minecraft.world.WorldlyContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldlyContainer$$Type = ($WorldlyContainer);
}

declare module "net.minecraft.world.Clearable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Clearable$$Type = ($Clearable | (() => void));
}

