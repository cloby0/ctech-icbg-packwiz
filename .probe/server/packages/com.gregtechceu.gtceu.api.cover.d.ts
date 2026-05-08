declare module "com.gregtechceu.gtceu.api.cover.CoverDefinition$CoverBehaviourProvider" {
import { $Direction } from "net.minecraft.core.Direction"
import { $ICoverable } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $CoverBehavior$$Type } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $CoverDefinition } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoverDefinition$CoverBehaviourProvider$$Type = ($CoverDefinition$CoverBehaviourProvider | ((arg0: $CoverDefinition, arg1: $ICoverable, arg2: $Direction) => $CoverBehavior$$Type));
}

declare module "com.gregtechceu.gtceu.api.cover.IUICover" {
import { $Widget$$Type } from "com.lowdragmc.lowdraglib.gui.widget.Widget"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IUICover$$Type = ($IUICover | (() => $Widget$$Type));
}

declare module "com.gregtechceu.gtceu.api.cover.filter.FilterHandler" {
import { $Filter, $Filter$$Type } from "com.gregtechceu.gtceu.api.cover.filter.Filter"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FilterHandler$$Type<T = any, F extends $Filter<T, F> = $Filter<T, F>> = ($FilterHandler<T, F>);
}

declare module "com.gregtechceu.gtceu.api.cover.filter.ItemFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemFilter$$Type = ($ItemFilter);
}

declare module "com.gregtechceu.gtceu.api.cover.filter.Filter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Filter$$Type<T = any, S extends $Filter<T, S> = $Filter<T, S>> = ($Filter<T, S>);
}

declare module "com.gregtechceu.gtceu.api.cover.CoverBehavior" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoverBehavior$$Type = ($CoverBehavior);
}

declare module "com.gregtechceu.gtceu.api.cover.IIOCover" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIOCover$$Type = ($IIOCover);
}

declare module "com.gregtechceu.gtceu.api.cover.CoverDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoverDefinition$$Type = ($CoverDefinition);
}

