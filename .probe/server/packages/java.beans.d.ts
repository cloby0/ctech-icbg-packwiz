declare module "java.beans.PropertyChangeEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PropertyChangeEvent$$Type = ($PropertyChangeEvent);
}

declare module "java.beans.PropertyChangeListener" {
import { $PropertyChangeEvent } from "java.beans.PropertyChangeEvent"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PropertyChangeListener$$Type = ($PropertyChangeListener | ((arg0: $PropertyChangeEvent) => void));
}

