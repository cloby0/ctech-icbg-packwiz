declare module "net.minecraftforge.server.permission.nodes.PermissionDynamicContext" {
import { $PermissionDynamicContextKey } from "net.minecraftforge.server.permission.nodes.PermissionDynamicContextKey"

export class $PermissionDynamicContext<T = any> {
public "getDynamic"(): $PermissionDynamicContextKey<T>
public "getSerializedValue"(): string
public "getValue"(): T
get "dynamic"(): $PermissionDynamicContextKey<T>
get "serializedValue"(): string
get "value"(): T
}
}

declare module "net.minecraftforge.server.permission.events.PermissionGatherEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $PermissionGatherEvent extends $Event {
constructor()

}
}

declare module "net.minecraftforge.server.permission.nodes.PermissionNode" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PermissionType, $PermissionType$$Type } from "net.minecraftforge.server.permission.nodes.PermissionType"
import { $PermissionNode$PermissionResolver, $PermissionNode$PermissionResolver$$Type } from "net.minecraftforge.server.permission.nodes.PermissionNode$PermissionResolver"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PermissionDynamicContextKey, $PermissionDynamicContextKey$$Type } from "net.minecraftforge.server.permission.nodes.PermissionDynamicContextKey"

export class $PermissionNode<T = any> {
constructor(resourceLocation0: $ResourceLocation$$Type, permissionType1: $PermissionType$$Type<T>, permissionResolver2: $PermissionNode$PermissionResolver$$Type<T>, ...permissionDynamicContextKey3s: $PermissionDynamicContextKey$$Type[])
constructor(string0: string, string1: string, permissionType2: $PermissionType$$Type<T>, permissionResolver3: $PermissionNode$PermissionResolver$$Type<T>, ...permissionDynamicContextKey4s: $PermissionDynamicContextKey$$Type[])

public "getDefaultResolver"(): $PermissionNode$PermissionResolver<T>
public "getDescription"(): $Component
public "getDynamics"(): $PermissionDynamicContextKey<any>[]
public "getNodeName"(): string
public "getReadableName"(): $Component
public "getType"(): $PermissionType<T>
public "setInformation"(component0: $Component$$Type, component1: $Component$$Type): $PermissionNode
get "defaultResolver"(): $PermissionNode$PermissionResolver<T>
get "description"(): $Component
get "dynamics"(): $PermissionDynamicContextKey<any>[]
get "nodeName"(): string
get "readableName"(): $Component
get "type"(): $PermissionType<T>
}
}

declare module "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes" {
import { $Collection } from "java.util.Collection"
import { $PermissionGatherEvent } from "net.minecraftforge.server.permission.events.PermissionGatherEvent"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $PermissionNode, $PermissionNode$$Type } from "net.minecraftforge.server.permission.nodes.PermissionNode"

export class $PermissionGatherEvent$Nodes extends $PermissionGatherEvent {
constructor()

public "addNodes"(...permissionNode0s: $PermissionNode$$Type<any>[]): void
public "addNodes"(iterable0: $Iterable$$Type<$PermissionNode$$Type<any>>): void
public "getNodes"(): $Collection<$PermissionNode<any>>
get "nodes"(): $Collection<$PermissionNode<any>>
}
}

declare module "net.minecraftforge.server.permission.nodes.PermissionNode$PermissionResolver" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $PermissionDynamicContext$$Type } from "net.minecraftforge.server.permission.nodes.PermissionDynamicContext"
import { $UUID$$Type } from "java.util.UUID"

export interface $PermissionNode$PermissionResolver<T = any> {
"resolve"(serverPlayer0: $ServerPlayer$$Type, uUID1: $UUID$$Type, ...permissionDynamicContext2s: $PermissionDynamicContext$$Type<any>[]): T
}

export namespace $PermissionNode$PermissionResolver {
const probejs$$marker: never
}
export abstract class $PermissionNode$PermissionResolver$$Static<T = any> implements $PermissionNode$PermissionResolver<T> {
}
}

declare module "net.minecraftforge.server.permission.handler.IPermissionHandlerFactory" {
import { $Collection$$Type } from "java.util.Collection"
import { $IPermissionHandler } from "net.minecraftforge.server.permission.handler.IPermissionHandler"
import { $PermissionNode$$Type } from "net.minecraftforge.server.permission.nodes.PermissionNode"

export interface $IPermissionHandlerFactory {
"create"(collection0: $Collection$$Type<$PermissionNode$$Type<any>>): $IPermissionHandler
}

export namespace $IPermissionHandlerFactory {
const probejs$$marker: never
}
export abstract class $IPermissionHandlerFactory$$Static implements $IPermissionHandlerFactory {
}
}

declare module "net.minecraftforge.server.permission.handler.IPermissionHandler" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $PermissionDynamicContext$$Type } from "net.minecraftforge.server.permission.nodes.PermissionDynamicContext"
import { $Set } from "java.util.Set"
import { $UUID$$Type } from "java.util.UUID"
import { $PermissionNode, $PermissionNode$$Type } from "net.minecraftforge.server.permission.nodes.PermissionNode"

export interface $IPermissionHandler {
"getIdentifier"(): $ResourceLocation
"getOfflinePermission"<T>(uUID0: $UUID$$Type, permissionNode1: $PermissionNode$$Type<T>, ...permissionDynamicContext2s: $PermissionDynamicContext$$Type<any>[]): T
"getPermission"<T>(serverPlayer0: $ServerPlayer$$Type, permissionNode1: $PermissionNode$$Type<T>, ...permissionDynamicContext2s: $PermissionDynamicContext$$Type<any>[]): T
"getRegisteredNodes"(): $Set<$PermissionNode<any>>
get "identifier"(): $ResourceLocation
get "registeredNodes"(): $Set<$PermissionNode<any>>
}

export namespace $IPermissionHandler {
const probejs$$marker: never
}
export abstract class $IPermissionHandler$$Static implements $IPermissionHandler {
}
}

declare module "net.minecraftforge.server.permission.nodes.PermissionDynamicContextKey" {
import { $PermissionDynamicContext } from "net.minecraftforge.server.permission.nodes.PermissionDynamicContext"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Record } from "java.lang.Record"
import { $Function, $Function$$Type } from "java.util.function.Function"

export class $PermissionDynamicContextKey<T = any> extends $Record {
constructor(typeToken: $Class$$Type<T>, name: string, serializer: $Function$$Type<T, string>)

public "createContext"(t0: T): $PermissionDynamicContext<T>
public "name"(): string
public "serializer"(): $Function<T, string>
public "typeToken"(): $Class<T>
}
}

declare module "net.minecraftforge.server.permission.events.PermissionGatherEvent$Handler" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $IPermissionHandlerFactory, $IPermissionHandlerFactory$$Type } from "net.minecraftforge.server.permission.handler.IPermissionHandlerFactory"
import { $PermissionGatherEvent } from "net.minecraftforge.server.permission.events.PermissionGatherEvent"

export class $PermissionGatherEvent$Handler extends $PermissionGatherEvent {
constructor()

public "addPermissionHandler"(resourceLocation0: $ResourceLocation$$Type, iPermissionHandlerFactory1: $IPermissionHandlerFactory$$Type): void
public "getAvailablePermissionHandlerFactories"(): $Map<$ResourceLocation, $IPermissionHandlerFactory>
get "availablePermissionHandlerFactories"(): $Map<$ResourceLocation, $IPermissionHandlerFactory>
}
}

declare module "net.minecraftforge.server.permission.nodes.PermissionType" {
import { $Class } from "java.lang.Class"

export class $PermissionType<T = any> {
public "typeName"(): string
public "typeToken"(): $Class<T>
}
}

