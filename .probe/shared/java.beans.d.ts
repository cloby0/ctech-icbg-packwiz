declare module "java.beans.PropertyChangeEvent" {
import { $EventObject } from "java.util.EventObject"

export class $PropertyChangeEvent extends $EventObject {
constructor(object0: any, string1: string, object2: any, object3: any)

public "getNewValue"(): any
public "getOldValue"(): any
public "getPropagationId"(): any
public "getPropertyName"(): string
public "setPropagationId"(object0: any): void
get "newValue"(): any
get "oldValue"(): any
get "propagationId"(): any
get "propertyName"(): string
set "propagationId"(value: any)
}
}

declare module "java.beans.PropertyChangeListener" {
import { $EventListener } from "java.util.EventListener"
import { $PropertyChangeEvent$$Type } from "java.beans.PropertyChangeEvent"

export interface $PropertyChangeListener extends $EventListener {
"propertyChange"(propertyChangeEvent0: $PropertyChangeEvent$$Type): void
}

export namespace $PropertyChangeListener {
const probejs$$marker: never
}
export abstract class $PropertyChangeListener$$Static implements $PropertyChangeListener {
}
}

