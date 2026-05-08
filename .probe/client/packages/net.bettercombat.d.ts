declare module "net.bettercombat.logic.AnimatedHand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimatedHand$$Type = ($AnimatedHand | ("main_hand" | "off_hand" | "two_handed"));
}

declare module "net.bettercombat.client.collision.OrientedBoundingBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OrientedBoundingBox$$Type = ($OrientedBoundingBox);
}

declare module "net.bettercombat.api.EntityPlayer_BetterCombat" {
import { $AttackHand$$Type } from "net.bettercombat.api.AttackHand"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityPlayer_BetterCombat$$Type = ($EntityPlayer_BetterCombat | (() => $AttackHand$$Type));
}

declare module "net.bettercombat.logic.PlayerAttackProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerAttackProperties$$Type = ($PlayerAttackProperties);
}

declare module "net.bettercombat.logic.knockback.ConfigurableKnockback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigurableKnockback$$Type = ($ConfigurableKnockback | ((arg0: float) => void));
}

declare module "net.bettercombat.client.animation.PlayerAttackAnimatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerAttackAnimatable$$Type = ($PlayerAttackAnimatable);
}

declare module "net.bettercombat.logic.ItemStackNBTWeaponAttributes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemStackNBTWeaponAttributes$$Type = ($ItemStackNBTWeaponAttributes);
}

declare module "net.bettercombat.api.ComboState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ComboState$$Type = ($ComboState);
}

declare module "net.bettercombat.api.WeaponAttributes$Sound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeaponAttributes$Sound$$Type = ($WeaponAttributes$Sound);
}

declare module "net.bettercombat.api.WeaponAttributes$HitBoxShape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeaponAttributes$HitBoxShape$$Type = ($WeaponAttributes$HitBoxShape | ("forward_box" | "vertical_plane" | "horizontal_plane"));
}

declare module "net.bettercombat.api.WeaponAttributes$Condition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeaponAttributes$Condition$$Type = ($WeaponAttributes$Condition | ("not_dual_wielding" | "dual_wielding_any" | "dual_wielding_same" | "dual_wielding_same_category" | "no_offhand_item" | "off_hand_shield" | "main_hand_only" | "off_hand_only" | "mounted" | "not_mounted"));
}

declare module "net.bettercombat.mixin.PlayerEntityAccessor" {
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerEntityAccessor$$Type = ($PlayerEntityAccessor | (() => $Inventory$$Type));
}

declare module "net.bettercombat.mixin.client.MinecraftClientAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MinecraftClientAccessor$$Type = ($MinecraftClientAccessor);
}

declare module "net.bettercombat.api.WeaponAttributes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeaponAttributes$$Type = ($WeaponAttributes);
}

declare module "net.bettercombat.api.MinecraftClient_BetterCombat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MinecraftClient_BetterCombat$$Type = ($MinecraftClient_BetterCombat);
}

declare module "net.bettercombat.mixin.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
}

declare module "net.bettercombat.api.WeaponAttributes$Attack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeaponAttributes$Attack$$Type = ($WeaponAttributes$Attack);
}

declare module "net.bettercombat.api.AttackHand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttackHand$$Type = ($AttackHand);
}

