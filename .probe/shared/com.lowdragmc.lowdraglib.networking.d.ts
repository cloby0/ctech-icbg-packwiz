declare module "com.lowdragmc.lowdraglib.networking.IHandlerContext" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Level } from "net.minecraft.world.level.Level"

export interface $IHandlerContext {
"getContext"(): any
"getLevel"(): $Level
"getPlayer"(): $ServerPlayer
"getServer"(): $MinecraftServer
"isClient"(): boolean
get "context"(): any
get "level"(): $Level
get "player"(): $ServerPlayer
get "server"(): $MinecraftServer
get "client"(): boolean
}

export namespace $IHandlerContext {
const probejs$$marker: never
}
export abstract class $IHandlerContext$$Static implements $IHandlerContext {
}
}

declare module "com.lowdragmc.lowdraglib.networking.s2c.SPacketUIWidgetUpdate" {
import { $IHandlerContext$$Type } from "com.lowdragmc.lowdraglib.networking.IHandlerContext"
import { $IPacket } from "com.lowdragmc.lowdraglib.networking.IPacket"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SPacketUIWidgetUpdate implements $IPacket {
constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$$Type)

public "decode"(buf: $FriendlyByteBuf$$Type): void
public "encode"(buf: $FriendlyByteBuf$$Type): void
/** Client only, do not use in server scripts */
public "execute"(handler: $IHandlerContext$$Type): void
get "updateData"(): $FriendlyByteBuf
set "updateData"(value: $FriendlyByteBuf$$Type)
get "windowId"(): integer
set "windowId"(value: integer)
}
}

declare module "com.lowdragmc.lowdraglib.networking.PacketIntLocation" {
import { $IHandlerContext$$Type } from "com.lowdragmc.lowdraglib.networking.IHandlerContext"
import { $IPacket } from "com.lowdragmc.lowdraglib.networking.IPacket"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $PacketIntLocation implements $IPacket {
constructor()
constructor(pos: $BlockPos$$Type)

public "decode"(buf: $FriendlyByteBuf$$Type): void
public "encode"(buf: $FriendlyByteBuf$$Type): void
public "execute"(handler: $IHandlerContext$$Type): void
}
}

declare module "com.lowdragmc.lowdraglib.networking.c2s.CPacketUIClientAction" {
import { $IHandlerContext$$Type } from "com.lowdragmc.lowdraglib.networking.IHandlerContext"
import { $IPacket } from "com.lowdragmc.lowdraglib.networking.IPacket"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $CPacketUIClientAction implements $IPacket {
constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$$Type)

public "decode"(buf: $FriendlyByteBuf$$Type): void
public "encode"(buf: $FriendlyByteBuf$$Type): void
public "execute"(handler: $IHandlerContext$$Type): void
get "updateData"(): $FriendlyByteBuf
set "updateData"(value: $FriendlyByteBuf$$Type)
get "windowId"(): integer
set "windowId"(value: integer)
}
}

declare module "com.lowdragmc.lowdraglib.networking.s2c.SPacketRPCMethodPayload" {
import { $IManaged$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $IHandlerContext$$Type } from "com.lowdragmc.lowdraglib.networking.IHandlerContext"
import { $IPacket } from "com.lowdragmc.lowdraglib.networking.IPacket"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IRPCBlockEntity$$Type } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IRPCBlockEntity"
import { $ITypedPayload$$Type } from "com.lowdragmc.lowdraglib.syncdata.payload.ITypedPayload"
import { $RPCSender$$Type } from "com.lowdragmc.lowdraglib.syncdata.rpc.RPCSender"
import { $PacketIntLocation } from "com.lowdragmc.lowdraglib.networking.PacketIntLocation"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SPacketRPCMethodPayload extends $PacketIntLocation implements $IPacket {
constructor()
constructor(buffer: $FriendlyByteBuf$$Type)
constructor(managedId: integer, type: $BlockEntityType$$Type<any>, pos: $BlockPos$$Type, methodName: string, payloads: $ITypedPayload$$Type<any>[])

public "execute"(handler: $IHandlerContext$$Type): void
public static "of"(managed: $IManaged$$Type, tile: $IRPCBlockEntity$$Type, methodName: string, ...args: any[]): $SPacketRPCMethodPayload
public "processPacket"(blockEntity: $BlockEntity$$Type, sender: $RPCSender$$Type): void
}
}

declare module "com.lowdragmc.lowdraglib.networking.IPacket" {
import { $IHandlerContext$$Type } from "com.lowdragmc.lowdraglib.networking.IHandlerContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $IPacket {
"decode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"execute"(handler: $IHandlerContext$$Type): void
}

export namespace $IPacket {
const probejs$$marker: never
}
export abstract class $IPacket$$Static implements $IPacket {
}
}

