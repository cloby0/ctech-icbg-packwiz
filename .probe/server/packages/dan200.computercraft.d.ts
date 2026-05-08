declare module "dan200.computercraft.api.lua.ILuaCallback" {
import { $MethodResult$$Type } from "dan200.computercraft.api.lua.MethodResult"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILuaCallback$$Type = ($ILuaCallback | ((arg0: any[]) => $MethodResult$$Type));
}

declare module "dan200.computercraft.api.peripheral.IPeripheral" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPeripheral$$Type = ($IPeripheral);
}

declare module "dan200.computercraft.api.upgrades.UpgradeData" {
import { $UpgradeBase, $UpgradeBase$$Type } from "dan200.computercraft.api.upgrades.UpgradeBase"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UpgradeData$$Type<T extends $UpgradeBase = $UpgradeBase> = ($UpgradeData<T>);
}

declare module "dan200.computercraft.api.turtle.ITurtleAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITurtleAccess$$Type = ($ITurtleAccess);
}

declare module "dan200.computercraft.api.client.turtle.RegisterTurtleModellersEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterTurtleModellersEvent$$Type = ($RegisterTurtleModellersEvent);
}

declare module "dan200.computercraft.api.turtle.TurtleCommand" {
import { $ITurtleAccess } from "dan200.computercraft.api.turtle.ITurtleAccess"
import { $TurtleCommandResult$$Type } from "dan200.computercraft.api.turtle.TurtleCommandResult"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleCommand$$Type = ($TurtleCommand | ((arg0: $ITurtleAccess) => $TurtleCommandResult$$Type));
}

declare module "dan200.computercraft.api.turtle.TurtleUpgradeType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleUpgradeType$$Type = ($TurtleUpgradeType | ("tool" | "peripheral" | "both"));
}

declare module "dan200.computercraft.api.upgrades.UpgradeBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UpgradeBase$$Type = ($UpgradeBase);
}

declare module "dan200.computercraft.api.turtle.TurtleSide" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleSide$$Type = ($TurtleSide | ("left" | "right"));
}

declare module "dan200.computercraft.api.peripheral.IComputerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IComputerAccess$$Type = ($IComputerAccess);
}

declare module "dan200.computercraft.api.turtle.TurtleUpgradeSerialiser" {
import { $ITurtleUpgrade, $ITurtleUpgrade$$Type } from "dan200.computercraft.api.turtle.ITurtleUpgrade"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleUpgradeSerialiser$$Type<T extends $ITurtleUpgrade = $ITurtleUpgrade> = ($TurtleUpgradeSerialiser<T>);
}

declare module "dan200.computercraft.api.client.turtle.RegisterTurtleUpgradeModeller" {
import { $TurtleUpgradeSerialiser } from "dan200.computercraft.api.turtle.TurtleUpgradeSerialiser"
import { $TurtleUpgradeModeller } from "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterTurtleUpgradeModeller$$Type = ($RegisterTurtleUpgradeModeller | ((arg0: $TurtleUpgradeSerialiser<T>, arg1: $TurtleUpgradeModeller<T>) => void));
}

declare module "dan200.computercraft.api.peripheral.WorkMonitor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorkMonitor$$Type = ($WorkMonitor);
}

declare module "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller" {
import { $ITurtleAccess } from "dan200.computercraft.api.turtle.ITurtleAccess"
import { $ITurtleUpgrade, $ITurtleUpgrade$$Type } from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import { $TransformedModel$$Type } from "dan200.computercraft.api.client.TransformedModel"
import { $TurtleSide } from "dan200.computercraft.api.turtle.TurtleSide"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleUpgradeModeller$$Type<T extends $ITurtleUpgrade = $ITurtleUpgrade> = ($TurtleUpgradeModeller<T> | ((arg0: T, arg1: $ITurtleAccess, arg2: $TurtleSide) => $TransformedModel$$Type));
}

declare module "dan200.computercraft.api.turtle.TurtleVerb" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleVerb$$Type = ($TurtleVerb | ("dig" | "attack"));
}

declare module "dan200.computercraft.api.turtle.TurtleCommandResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleCommandResult$$Type = ($TurtleCommandResult);
}

declare module "dan200.computercraft.api.filesystem.WritableMount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WritableMount$$Type = ($WritableMount);
}

declare module "dan200.computercraft.api.client.TransformedModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransformedModel$$Type = ($TransformedModel);
}

declare module "dan200.computercraft.api.turtle.ITurtleUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITurtleUpgrade$$Type = ($ITurtleUpgrade);
}

declare module "dan200.computercraft.api.turtle.TurtleAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleAnimation$$Type = ($TurtleAnimation | ("none" | "move_forward" | "move_back" | "move_up" | "move_down" | "turn_left" | "turn_right" | "swing_left_tool" | "swing_right_tool" | "wait" | "short_wait"));
}

declare module "dan200.computercraft.api.filesystem.Mount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Mount$$Type = ($Mount);
}

declare module "dan200.computercraft.api.upgrades.UpgradeSerialiser" {
import { $UpgradeBase, $UpgradeBase$$Type } from "dan200.computercraft.api.upgrades.UpgradeBase"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UpgradeSerialiser$$Type<T extends $UpgradeBase = $UpgradeBase> = ($UpgradeSerialiser<T>);
}

declare module "dan200.computercraft.api.lua.MethodResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MethodResult$$Type = ($MethodResult);
}

