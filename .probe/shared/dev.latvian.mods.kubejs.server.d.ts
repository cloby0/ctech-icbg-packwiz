declare module "dev.latvian.mods.kubejs.server.CustomCommandEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

export class $CustomCommandEventJS extends $EntityEventJS {
constructor(l: $Level$$Type, e: $Entity$$Type, p: $BlockPos$$Type, i: string)

public "getBlock"(): $BlockContainerJS
public "getId"(): string
get "block"(): $BlockContainerJS
get "id"(): string
}
}

declare module "dev.latvian.mods.kubejs.server.ServerEventJS" {
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $ServerEventJS extends $EventJS {
readonly "server": $MinecraftServer

constructor(s: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
}
}

declare module "dev.latvian.mods.kubejs.server.tag.TagEventJS" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $EventExceptionHandler } from "dev.latvian.mods.kubejs.event.EventExceptionHandler"
import { $RegistryInfo, $RegistryInfo$$Type } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $TagWrapper } from "dev.latvian.mods.kubejs.server.tag.TagWrapper"

export class $TagEventJS extends $EventJS {
static readonly "SOURCE": string
static readonly "TAG_EVENT_HANDLER": $EventExceptionHandler
readonly "registry": $RegistryInfo
readonly "tags": $Map<$ResourceLocation, $TagWrapper>
readonly "vanillaRegistry": $Registry<any>

constructor(ri: $RegistryInfo$$Type, vr: $Registry$$Type<any>)

public "add"(tag: $ResourceLocation$$Type, ...filters: any[]): $TagWrapper
public "get"(id: $ResourceLocation$$Type): $TagWrapper
public "getElementIds"(): $Set<$ResourceLocation>
public "getType"(): $ResourceLocation
public "remove"(tag: $ResourceLocation$$Type, ...filters: any[]): $TagWrapper
public "removeAll"(tag: $ResourceLocation$$Type): $TagWrapper
public "removeAllTagsFrom"(...ids: any[]): void
get "totalAdded"(): integer
set "totalAdded"(value: integer)
get "totalRemoved"(): integer
set "totalRemoved"(value: integer)
get "elementIds"(): $Set<$ResourceLocation>
get "type"(): $ResourceLocation
}
}

declare module "dev.latvian.mods.kubejs.server.tag.TagWrapper" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $TagEventJS, $TagEventJS$$Type } from "dev.latvian.mods.kubejs.server.tag.TagEventJS"
import { $TagLoader$EntryWithSource, $TagLoader$EntryWithSource$$Type } from "net.minecraft.tags.TagLoader$EntryWithSource"

export class $TagWrapper {
readonly "entries": $List<$TagLoader$EntryWithSource>
readonly "event": $TagEventJS
readonly "id": $ResourceLocation

constructor(e: $TagEventJS$$Type, i: $ResourceLocation$$Type, t: $List$$Type<$TagLoader$EntryWithSource$$Type>)

public "add"(...filters: any[]): $TagWrapper
public "getObjectIds"(): $List<$ResourceLocation>
public "remove"(...filters: any[]): $TagWrapper
public "removeAll"(): $TagWrapper
get "objectIds"(): $List<$ResourceLocation>
}
}

declare module "dev.latvian.mods.kubejs.server.CommandEventJS" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $CommandPerformEvent$$Type } from "dev.architectury.event.events.common.CommandPerformEvent"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ParseResults, $ParseResults$$Type } from "com.mojang.brigadier.ParseResults"
import { $ServerEventJS } from "dev.latvian.mods.kubejs.server.ServerEventJS"

export class $CommandEventJS extends $ServerEventJS {
constructor(e: $CommandPerformEvent$$Type)

public "getCommandName"(): string
public "getException"(): $Throwable
public "getInput"(): string
public "getParseResults"(): $ParseResults<$CommandSourceStack>
public "setException"(exception: $Throwable$$Type): void
public "setParseResults"(parse: $ParseResults$$Type<$CommandSourceStack$$Type>): void
get "commandName"(): string
get "exception"(): $Throwable
get "input"(): string
get "parseResults"(): $ParseResults<$CommandSourceStack>
set "exception"(value: $Throwable$$Type)
set "parseResults"(value: $ParseResults$$Type<$CommandSourceStack$$Type>)
}
}

