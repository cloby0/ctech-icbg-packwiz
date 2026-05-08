declare module "net.minecraftforge.network.PlayMessages$SpawnEntity" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $NetworkEvent$Context } from "net.minecraftforge.network.NetworkEvent$Context"
import { $UUID } from "java.util.UUID"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $PlayMessages$SpawnEntity {
public static "decode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PlayMessages$SpawnEntity
public static "encode"(spawnEntity0: $PlayMessages$SpawnEntity$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "getAdditionalData"(): $FriendlyByteBuf
public "getEntity"(): $Entity
public "getEntityId"(): integer
public "getHeadYaw"(): byte
public "getPitch"(): byte
public "getPosX"(): double
public "getPosY"(): double
public "getPosZ"(): double
public "getTypeId"(): integer
public "getUuid"(): $UUID
public "getVelX"(): integer
public "getVelY"(): integer
public "getVelZ"(): integer
public "getYaw"(): byte
public static "handle"(spawnEntity0: $PlayMessages$SpawnEntity$$Type, supplier1: $Supplier$$Type<$NetworkEvent$Context>): void
get "additionalData"(): $FriendlyByteBuf
get "entity"(): $Entity
get "entityId"(): integer
get "headYaw"(): byte
get "pitch"(): byte
get "posX"(): double
get "posY"(): double
get "posZ"(): double
get "typeId"(): integer
get "uuid"(): $UUID
get "velX"(): integer
get "velY"(): integer
get "velZ"(): integer
get "yaw"(): byte
}
}

declare module "net.minecraftforge.network.PacketDistributor$PacketTarget" {
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $NetworkDirection } from "net.minecraftforge.network.NetworkDirection"

export class $PacketDistributor$PacketTarget {
public "getDirection"(): $NetworkDirection
public "send"(packet0: $Packet$$Type<any>): void
get "direction"(): $NetworkDirection
}
}

declare module "net.minecraftforge.network.ICustomPacket" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $NetworkDirection } from "net.minecraftforge.network.NetworkDirection"

export interface $ICustomPacket<T extends $Packet<any> = $Packet<any>> {
"getDirection"(): $NetworkDirection
"getIndex"(): integer
"getInternalData"(): $FriendlyByteBuf
"getName"(): $ResourceLocation
"getThis"(): T
get "direction"(): $NetworkDirection
get "index"(): integer
get "internalData"(): $FriendlyByteBuf
get "name"(): $ResourceLocation
get "this"(): T
}

export namespace $ICustomPacket {
const probejs$$marker: never
}
export abstract class $ICustomPacket$$Static<T extends $Packet<any> = $Packet<any>> implements $ICustomPacket<T> {
}
}

declare module "net.minecraftforge.network.ServerStatusPing" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ByteBuf } from "io.netty.buffer.ByteBuf"
import { $ServerStatusPing$ChannelData, $ServerStatusPing$ChannelData$$Type } from "net.minecraftforge.network.ServerStatusPing$ChannelData"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Record } from "java.lang.Record"

export class $ServerStatusPing extends $Record {
static readonly "CODEC": $Codec<$ServerStatusPing>

constructor(channels: $Map$$Type<$ResourceLocation$$Type, $ServerStatusPing$ChannelData$$Type>, mods: $Map$$Type<string, string>, fmlNetworkVer: integer, truncated: boolean)
constructor()

public "channels"(): $Map<$ResourceLocation, $ServerStatusPing$ChannelData>
public "fmlNetworkVer"(): integer
public "getFMLNetworkVersion"(): integer
public "getRemoteChannels"(): $Map<$ResourceLocation, $ServerStatusPing$ChannelData>
public "getRemoteModData"(): $Map<string, string>
public "isTruncated"(): boolean
public "mods"(): $Map<string, string>
public "toBuf"(): $ByteBuf
public "truncated"(): boolean
get "fMLNetworkVersion"(): integer
get "remoteChannels"(): $Map<$ResourceLocation, $ServerStatusPing$ChannelData>
get "remoteModData"(): $Map<string, string>
}
}

declare module "net.minecraftforge.network.IContainerFactory" {
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MenuType$MenuSupplier } from "net.minecraft.world.inventory.MenuType$MenuSupplier"

export interface $IContainerFactory<T extends $AbstractContainerMenu = $AbstractContainerMenu> extends $MenuType$MenuSupplier<T> {
"create"(int0: integer, inventory1: $Inventory$$Type): T
"create"(int0: integer, inventory1: $Inventory$$Type, friendlyByteBuf2: $FriendlyByteBuf$$Type): T
}

export namespace $IContainerFactory {
const probejs$$marker: never
}
export abstract class $IContainerFactory$$Static<T extends $AbstractContainerMenu = $AbstractContainerMenu> implements $IContainerFactory<T> {
}
}

declare module "net.minecraftforge.network.NetworkEvent$ChannelRegistrationChangeEvent" {
import { $NetworkEvent$RegistrationChangeType } from "net.minecraftforge.network.NetworkEvent$RegistrationChangeType"
import { $NetworkEvent } from "net.minecraftforge.network.NetworkEvent"

export class $NetworkEvent$ChannelRegistrationChangeEvent extends $NetworkEvent {
constructor()

public "getRegistrationChangeType"(): $NetworkEvent$RegistrationChangeType
get "registrationChangeType"(): $NetworkEvent$RegistrationChangeType
}
}

declare module "net.minecraftforge.network.ServerStatusPing$ChannelData" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $ServerStatusPing$ChannelData extends $Record {
static readonly "CODEC": $Codec<$ServerStatusPing$ChannelData>

constructor(res: $ResourceLocation$$Type, version: string, required: boolean)

public "required"(): boolean
public "res"(): $ResourceLocation
public "version"(): string
}
}

declare module "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadEvent" {
import { $NetworkEvent } from "net.minecraftforge.network.NetworkEvent"

export class $NetworkEvent$ServerCustomPayloadEvent extends $NetworkEvent {
constructor()

}
}

declare module "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadLoginEvent" {
import { $NetworkEvent$ClientCustomPayloadEvent } from "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadEvent"

export class $NetworkEvent$ClientCustomPayloadLoginEvent extends $NetworkEvent$ClientCustomPayloadEvent {
constructor()

}
}

declare module "net.minecraftforge.network.NetworkDirection" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $Enum } from "java.lang.Enum"
import { $NetworkEvent$Context } from "net.minecraftforge.network.NetworkEvent$Context"
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $NetworkEvent } from "net.minecraftforge.network.NetworkEvent"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ICustomPacket, $ICustomPacket$$Type } from "net.minecraftforge.network.ICustomPacket"
import { $LogicalSide } from "net.minecraftforge.fml.LogicalSide"

export class $NetworkDirection extends $Enum<$NetworkDirection> {
static readonly "LOGIN_TO_CLIENT": $NetworkDirection
static readonly "LOGIN_TO_SERVER": $NetworkDirection
static readonly "PLAY_TO_CLIENT": $NetworkDirection
static readonly "PLAY_TO_SERVER": $NetworkDirection

public "buildPacket"<T extends $Packet<any>>(pair0: $Pair$$Type<$FriendlyByteBuf$$Type, integer>, resourceLocation1: $ResourceLocation$$Type): $ICustomPacket<T>
public static "directionFor"<T extends $ICustomPacket<any>>(class0: $Class$$Type<T>): $NetworkDirection
public "getEvent"(iCustomPacket0: $ICustomPacket$$Type<any>, supplier1: $Supplier$$Type<$NetworkEvent$Context>): $NetworkEvent
public "getOriginationSide"(): $LogicalSide
public "getReceptionSide"(): $LogicalSide
public "reply"(): $NetworkDirection
public static "valueOf"(string0: string): $NetworkDirection
public static "values"(): $NetworkDirection[]
get "originationSide"(): $LogicalSide
get "receptionSide"(): $LogicalSide
}
}

declare module "net.minecraftforge.network.NetworkRegistry$LoginPayload" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $NetworkRegistry$LoginPayload {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string, boolean3: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string)

public "getChannelName"(): $ResourceLocation
public "getData"(): $FriendlyByteBuf
public "getMessageContext"(): string
public "needsResponse"(): boolean
get "channelName"(): $ResourceLocation
get "data"(): $FriendlyByteBuf
get "messageContext"(): string
}
}

declare module "net.minecraftforge.network.NetworkEvent$RegistrationChangeType" {
import { $Enum } from "java.lang.Enum"

export class $NetworkEvent$RegistrationChangeType extends $Enum<$NetworkEvent$RegistrationChangeType> {
static readonly "REGISTER": $NetworkEvent$RegistrationChangeType
static readonly "UNREGISTER": $NetworkEvent$RegistrationChangeType

public static "valueOf"(string0: string): $NetworkEvent$RegistrationChangeType
public static "values"(): $NetworkEvent$RegistrationChangeType[]
}
}

declare module "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadEvent" {
import { $NetworkEvent } from "net.minecraftforge.network.NetworkEvent"

export class $NetworkEvent$ClientCustomPayloadEvent extends $NetworkEvent {
constructor()

}
}

declare module "net.minecraftforge.network.HandshakeMessages$LoginIndexedMessage" {
import { $IntSupplier } from "java.util.function.IntSupplier"

export class $HandshakeMessages$LoginIndexedMessage implements $IntSupplier {
public "getAsInt"(): integer
get "asInt"(): integer
}
}

declare module "net.minecraftforge.network.NetworkEvent$PacketDispatcher" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $NetworkEvent$PacketDispatcher {
public "sendPacket"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraftforge.network.NetworkEvent$LoginPayloadEvent" {
import { $NetworkEvent } from "net.minecraftforge.network.NetworkEvent"

export class $NetworkEvent$LoginPayloadEvent extends $NetworkEvent {
constructor()

}
}

declare module "net.minecraftforge.network.NetworkEvent$Context" {
import { $AttributeKey$$Type } from "io.netty.util.AttributeKey"
import { $Attribute } from "io.netty.util.Attribute"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $Connection } from "net.minecraft.network.Connection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $NetworkEvent$PacketDispatcher } from "net.minecraftforge.network.NetworkEvent$PacketDispatcher"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $NetworkDirection } from "net.minecraftforge.network.NetworkDirection"

export class $NetworkEvent$Context {
public "attr"<T>(attributeKey0: $AttributeKey$$Type<T>): $Attribute<T>
public "enqueueWork"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public "getDirection"(): $NetworkDirection
public "getNetworkManager"(): $Connection
public "getPacketDispatcher"(): $NetworkEvent$PacketDispatcher
public "getPacketHandled"(): boolean
public "getSender"(): $ServerPlayer
public "setPacketHandled"(boolean0: boolean): void
get "direction"(): $NetworkDirection
get "networkManager"(): $Connection
get "packetDispatcher"(): $NetworkEvent$PacketDispatcher
get "packetHandled"(): boolean
get "sender"(): $ServerPlayer
set "packetHandled"(value: boolean)
}
}

declare module "net.minecraftforge.network.NetworkEvent" {
import { $NetworkEvent$Context } from "net.minecraftforge.network.NetworkEvent$Context"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $NetworkEvent extends $Event {
constructor()
constructor(supplier0: $Supplier$$Type<$NetworkEvent$Context>)

public "getLoginIndex"(): integer
public "getPayload"(): $FriendlyByteBuf
public "getSource"(): $Supplier<$NetworkEvent$Context>
get "loginIndex"(): integer
get "payload"(): $FriendlyByteBuf
get "source"(): $Supplier<$NetworkEvent$Context>
}
}

declare module "net.minecraftforge.network.HandshakeMessages$S2CRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HandshakeMessages$LoginIndexedMessage } from "net.minecraftforge.network.HandshakeMessages$LoginIndexedMessage"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$$Type } from "net.minecraftforge.registries.ForgeRegistry$Snapshot"

export class $HandshakeMessages$S2CRegistry extends $HandshakeMessages$LoginIndexedMessage {
constructor(resourceLocation0: $ResourceLocation$$Type, snapshot1: $ForgeRegistry$Snapshot$$Type)

public static "decode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $HandshakeMessages$S2CRegistry
public "getRegistryName"(): $ResourceLocation
public "getSnapshot"(): $ForgeRegistry$Snapshot
public "hasSnapshot"(): boolean
get "registryName"(): $ResourceLocation
get "snapshot"(): $ForgeRegistry$Snapshot
}
}

declare module "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadLoginEvent" {
import { $NetworkEvent$ServerCustomPayloadEvent } from "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadEvent"

export class $NetworkEvent$ServerCustomPayloadLoginEvent extends $NetworkEvent$ServerCustomPayloadEvent {
constructor()

}
}

declare module "net.minecraftforge.network.NetworkEvent$GatherLoginPayloadsEvent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $NetworkRegistry$LoginPayload$$Type } from "net.minecraftforge.network.NetworkRegistry$LoginPayload"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $NetworkEvent$GatherLoginPayloadsEvent extends $Event {
constructor(list0: $List$$Type<$NetworkRegistry$LoginPayload$$Type>, boolean1: boolean)
constructor()

public "add"(friendlyByteBuf0: $FriendlyByteBuf$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string, boolean3: boolean): void
public "add"(friendlyByteBuf0: $FriendlyByteBuf$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): void
public "isLocal"(): boolean
get "local"(): boolean
}
}

