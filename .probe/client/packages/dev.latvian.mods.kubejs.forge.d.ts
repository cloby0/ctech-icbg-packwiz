declare module "dev.latvian.mods.kubejs.forge.ForgeEventWrapper" {
import { $GenericForgeEventConsumer$$Type } from "dev.latvian.mods.kubejs.forge.GenericForgeEventConsumer"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $ForgeEventConsumer$$Type } from "dev.latvian.mods.kubejs.forge.ForgeEventConsumer"
import { $Record } from "java.lang.Record"
import { $GenericEvent, $GenericEvent$$Type } from "net.minecraftforge.eventbus.api.GenericEvent"
import { JClass, JClass$$Type } from "zzzank.probejs.generated.JClass"
import { $IEventBus, $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"

export class $ForgeEventWrapper extends $Record {
constructor(name: string, eventBus: $IEventBus$$Type)

public "eventBus"(): $IEventBus
public "name"(): string
public "onEvent"<T extends $Event>(eventClass: JClass$$Type<T>, consumer: ((event: T) => void)): any
public "onGenericEvent"<T extends $GenericEvent>(eventClass: JClass$$Type<T>, genericClass: JClass$$Type<any>, consumer: ((event: T) => void)): any
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeEventWrapper$$Type = ($ForgeEventWrapper);
}

declare module "dev.latvian.mods.kubejs.forge.ForgeEventConsumer" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeEventConsumer$$Type = ($ForgeEventConsumer | ((arg0: $Event) => void));
}

declare module "dev.latvian.mods.kubejs.forge.GenericForgeEventConsumer" {
import { $GenericEvent } from "net.minecraftforge.eventbus.api.GenericEvent"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GenericForgeEventConsumer$$Type = ($GenericForgeEventConsumer | ((arg0: $GenericEvent<any>) => void));
}

