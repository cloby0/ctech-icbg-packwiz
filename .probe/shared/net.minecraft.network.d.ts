declare module "net.minecraft.network.FriendlyByteBuf$Reader" {
import { $Optional } from "java.util.Optional"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $FriendlyByteBuf$Reader<T = any> extends $Function<$FriendlyByteBuf, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $Function<$FriendlyByteBuf, V>
"apply"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"asOptional"(): $FriendlyByteBuf$Reader<$Optional<T>>
"compose"<V>(function0: $Function$$Type<V, $FriendlyByteBuf>): $Function<V, T>
}

export namespace $FriendlyByteBuf$Reader {
function identity<T>(): $Function<T, T>
}
export abstract class $FriendlyByteBuf$Reader$$Static<T = any> implements $FriendlyByteBuf$Reader<T> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "net.minecraft.network.ConnectionProtocol$PacketSet" {
import { $BundlerInfo } from "net.minecraft.network.protocol.BundlerInfo"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BundlePacket, $BundlePacket$$Type } from "net.minecraft.network.protocol.BundlePacket"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $PacketListener } from "net.minecraft.network.PacketListener"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ConnectionProtocol$PacketSet<T extends $PacketListener = $PacketListener> {
readonly "classToId": $Object2IntMap<$Class<$Packet<T>>>

public "addPacket"<P extends $Packet<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$FriendlyByteBuf$$Type, P>): $ConnectionProtocol$PacketSet<T>
public "bundlerInfo"(): $BundlerInfo
public "createPacket"(int0: integer, friendlyByteBuf1: $FriendlyByteBuf$$Type): $Packet<any>
public "getId"(class0: $Class$$Type<any>): integer
public "handler$zzg000$onAdd"(class0: $Class$$Type, function1: $Function$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "listAllPackets"(consumer0: $Consumer$$Type<$Class$$Type<$Packet$$Type<any>>>): void
public "withBundlePacket"<P extends $BundlePacket<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$Iterable$$Type<$Packet$$Type<T>>, P>): $ConnectionProtocol$PacketSet<T>
}
}

declare module "net.minecraft.network.TickablePacketListener" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PacketListener } from "net.minecraft.network.PacketListener"

export interface $TickablePacketListener extends $PacketListener {
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
"tick"(): void
get "acceptingMessages"(): boolean
}

export namespace $TickablePacketListener {
const probejs$$marker: never
}
export abstract class $TickablePacketListener$$Static implements $TickablePacketListener {
}
}

declare module "net.minecraft.network.FriendlyByteBuf$Writer" {
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional } from "java.util.Optional"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $FriendlyByteBuf$Writer<T = any> extends $BiConsumer<$FriendlyByteBuf, T> {
"accept"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
"andThen"(biConsumer0: $BiConsumer$$Type<$FriendlyByteBuf$$Type, T>): $BiConsumer<$FriendlyByteBuf, T>
"asOptional"(): $FriendlyByteBuf$Writer<$Optional<T>>
}

export namespace $FriendlyByteBuf$Writer {
const probejs$$marker: never
}
export abstract class $FriendlyByteBuf$Writer$$Static<T = any> implements $FriendlyByteBuf$Writer<T> {
}
}

declare module "net.minecraft.network.FriendlyByteBuf" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $IForgeFriendlyByteBuf } from "net.minecraftforge.common.extensions.IForgeFriendlyByteBuf"
import { $Date, $Date$$Type } from "java.util.Date"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $IdMap$$Type } from "net.minecraft.core.IdMap"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $FriendlyByteBuf$Reader$$Type } from "net.minecraft.network.FriendlyByteBuf$Reader"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $Registry } from "net.minecraft.core.Registry"
import { $FriendlyByteBuf$Writer$$Type } from "net.minecraft.network.FriendlyByteBuf$Writer"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $ByteBuf, $ByteBuf$$Type } from "io.netty.buffer.ByteBuf"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $PropertyMap, $PropertyMap$$Type } from "com.mojang.authlib.properties.PropertyMap"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Property, $Property$$Type } from "com.mojang.authlib.properties.Property"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $SectionPos, $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $EnumSet, $EnumSet$$Type } from "java.util.EnumSet"
import { $IntFunction, $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $PublicKey, $PublicKey$$Type } from "java.security.PublicKey"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $NbtAccounter$$Type } from "net.minecraft.nbt.NbtAccounter"
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $GlobalPos, $GlobalPos$$Type } from "net.minecraft.core.GlobalPos"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IntList, $IntList$$Type } from "it.unimi.dsi.fastutil.ints.IntList"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BitSet, $BitSet$$Type } from "java.util.BitSet"

export class $FriendlyByteBuf extends $ByteBuf implements $IForgeFriendlyByteBuf {
static readonly "DEFAULT_NBT_QUOTA": integer
static readonly "MAX_COMPONENT_STRING_LENGTH": integer
static readonly "MAX_STRING_LENGTH": short

constructor(byteBuf0: $ByteBuf$$Type)

public "accessByteBufWithCorrectSize"(): byte[]
public static "getVarIntSize"(int0: integer): integer
public static "getVarLongSize"(long0: long): integer
public "handler$hgf000$supp$sendCapsFromCreative"(stack: $ItemStack$$Type, useShareTag: boolean, cir: $CallbackInfoReturnable$$Type): void
public static "limitValue"<T>(intFunction0: $IntFunction$$Type<T>, int1: integer): $IntFunction<T>
public "readAnySizeNbt"(): $CompoundTag
public "readBitSet"(): $BitSet
public "readBlockHitResult"(): $BlockHitResult
public "readBlockPos"(): $BlockPos
public "readById"<T>(idMap0: $IdMap$$Type<T>): T
public "readById"<T>(idMap0: $IdMap$$Type<$Holder$$Type<T>>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $Holder<T>
public "readByteArray"(): byte[]
public "readByteArray"(int0: integer): byte[]
public "readChunkPos"(): $ChunkPos
public "readCollection"<T, C extends $Collection<T>>(intFunction0: $IntFunction$$Type<C>, reader1: $FriendlyByteBuf$Reader$$Type<T>): C
public "readComponent"(): $Component
public "readDate"(): $Date
public "readEither"<L, R>(reader0: $FriendlyByteBuf$Reader$$Type<L>, reader1: $FriendlyByteBuf$Reader$$Type<R>): $Either<L, R>
public "readEnum"<T extends $Enum<T>>(class0: $Class$$Type<T>): T
public "readEnumSet"<E extends $Enum<E>>(class0: $Class$$Type<E>): $EnumSet<E>
public "readFixedBitSet"(int0: integer): $BitSet
public "readFluidStack"(): $FluidStack
public "readGameProfile"(): $GameProfile
public "readGameProfileProperties"(): $PropertyMap
public "readGlobalPos"(): $GlobalPos
public "readInstant"(): $Instant
public "readIntIdList"(): $IntList
public "readItem"(): $ItemStack
public "readJsonWithCodec"<T>(codec0: $Codec$$Type<T>): T
public "readList"<T>(reader0: $FriendlyByteBuf$Reader$$Type<T>): $List<T>
public "readLongArray"(): long[]
public "readLongArray"(long0s: long[]): long[]
public "readLongArray"(long0s: long[], int1: integer): long[]
public "readMap"<K, V, M extends $Map<K, V>>(intFunction0: $IntFunction$$Type<M>, reader1: $FriendlyByteBuf$Reader$$Type<K>, reader2: $FriendlyByteBuf$Reader$$Type<V>): M
public "readMap"<K, V>(reader0: $FriendlyByteBuf$Reader$$Type<K>, reader1: $FriendlyByteBuf$Reader$$Type<V>): $Map<K, V>
public "readNbt"(): $CompoundTag
public "readNbt"(nbtAccounter0: $NbtAccounter$$Type): $CompoundTag
public "readNullable"<T>(reader0: $FriendlyByteBuf$Reader$$Type<T>): T
public "readOptional"<T>(reader0: $FriendlyByteBuf$Reader$$Type<T>): $Optional<T>
public "readProperty"(): $Property
public "readPublicKey"(): $PublicKey
public "readQuaternion"(): $Quaternionf
public "readRegistryId"<T>(): T
public "readRegistryIdSafe"<T>(class0: $Class$$Type<T>): T
public "readRegistryIdUnsafe"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>): T
public "readResourceKey"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $ResourceKey<T>
public "readResourceLocation"(): $ResourceLocation
public "readSectionPos"(): $SectionPos
public "readUUID"(): $UUID
public "readUtf"(): string
public "readUtf"(int0: integer): string
public "readVarInt"(): integer
public "readVarIntArray"(): integer[]
public "readVarIntArray"(int0: integer): integer[]
public "readVarLong"(): long
public "readVector3f"(): $Vector3f
/** @deprecated */
public "readWithCodec"<T>(dynamicOps0: $DynamicOps$$Type<$Tag$$Type>, codec1: $Codec$$Type<T>): T
public "readWithCount"(consumer0: $Consumer$$Type<$FriendlyByteBuf$$Type>): void
public "refCnt"(): integer
public "release"(): boolean
public "release"(int0: integer): boolean
public "writeBitSet"(bitSet0: $BitSet$$Type): void
public "writeBlockHitResult"(blockHitResult0: $BlockHitResult$$Type): void
public "writeBlockPos"(blockPos0: $BlockPos$$Type): $FriendlyByteBuf
public "writeByteArray"(byte0s: byte[]): $FriendlyByteBuf
public "writeChunkPos"(chunkPos0: $ChunkPos$$Type): $FriendlyByteBuf
public "writeCollection"<T>(collection0: $Collection$$Type<T>, writer1: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeComponent"(component0: $Component$$Type): $FriendlyByteBuf
public "writeDate"(date0: $Date$$Type): $FriendlyByteBuf
public "writeEither"<L, R>(either0: $Either$$Type<L, R>, writer1: $FriendlyByteBuf$Writer$$Type<L>, writer2: $FriendlyByteBuf$Writer$$Type<R>): void
public "writeEnum"(enum0: $Enum$$Type<any>): $FriendlyByteBuf
public "writeEnumSet"<E extends $Enum<E>>(enumSet0: $EnumSet$$Type<E>, class1: $Class$$Type<E>): void
public "writeFixedBitSet"(bitSet0: $BitSet$$Type, int1: integer): void
public "writeFluidStack"(fluidStack0: $FluidStack$$Type): void
public "writeGameProfile"(gameProfile0: $GameProfile$$Type): void
public "writeGameProfileProperties"(propertyMap0: $PropertyMap$$Type): void
public "writeGlobalPos"(globalPos0: $GlobalPos$$Type): void
public "writeId"<T>(idMap0: $IdMap$$Type<T>, t1: T): void
public "writeId"<T>(idMap0: $IdMap$$Type<$Holder$$Type<T>>, holder1: $Holder$$Type<T>, writer2: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeInstant"(instant0: $Instant$$Type): void
public "writeIntIdList"(intList0: $IntList$$Type): void
public "writeItem"(itemStack0: $ItemStack$$Type): $FriendlyByteBuf
public "writeItemStack"(itemStack0: $ItemStack$$Type, boolean1: boolean): $FriendlyByteBuf
public "writeJsonWithCodec"<T>(codec0: $Codec$$Type<T>, t1: T): void
public "writeLongArray"(long0s: long[]): $FriendlyByteBuf
public "writeMap"<K, V>(map0: $Map$$Type<K, V>, writer1: $FriendlyByteBuf$Writer$$Type<K>, writer2: $FriendlyByteBuf$Writer$$Type<V>): void
public "writeNbt"(compoundTag0: $CompoundTag$$Type): $FriendlyByteBuf
public "writeNullable"<T>(t0: T, writer1: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeOptional"<T>(optional0: $Optional$$Type<T>, writer1: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeProperty"(property0: $Property$$Type): void
public "writePublicKey"(publicKey0: $PublicKey$$Type): $FriendlyByteBuf
public "writeQuaternion"(quaternionf0: $Quaternionf$$Type): void
public "writeRegistryId"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>, t1: T): void
public "writeRegistryIdUnsafe"(iForgeRegistry0: $IForgeRegistry$$Type<any>, resourceLocation1: $ResourceLocation$$Type): void
public "writeRegistryIdUnsafe"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>, t1: T): void
public "writeResourceKey"(resourceKey0: $ResourceKey$$Type<any>): void
public "writeResourceLocation"(resourceLocation0: $ResourceLocation$$Type): $FriendlyByteBuf
public "writeSectionPos"(sectionPos0: $SectionPos$$Type): $FriendlyByteBuf
public "writeUUID"(uUID0: $UUID$$Type): $FriendlyByteBuf
public "writeUtf"(string0: string): $FriendlyByteBuf
public "writeUtf"(string0: string, int1: integer): $FriendlyByteBuf
public "writeVarInt"(int0: integer): $FriendlyByteBuf
public "writeVarIntArray"(int0s: integer[]): $FriendlyByteBuf
public "writeVarLong"(long0: long): $FriendlyByteBuf
public "writeVector3f"(vector3f0: $Vector3f$$Type): void
/** @deprecated */
public "writeWithCodec"<T>(dynamicOps0: $DynamicOps$$Type<$Tag$$Type>, codec1: $Codec$$Type<T>, t2: T): void
}
}

declare module "net.minecraft.network.PacketListener" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"

export interface $PacketListener {
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
}

export namespace $PacketListener {
const probejs$$marker: never
}
export abstract class $PacketListener$$Static implements $PacketListener {
}
}

declare module "net.minecraft.network.PacketSendListener" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $PacketSendListener {
"onFailure"(): $Packet<any>
"onSuccess"(): void
}

export namespace $PacketSendListener {
function exceptionallySend(supplier0: $Supplier$$Type<$Packet<any>>): $PacketSendListener
function thenRun(runnable0: $Runnable$$Type): $PacketSendListener
}
export abstract class $PacketSendListener$$Static implements $PacketSendListener {
static "exceptionallySend"(supplier0: $Supplier$$Type<$Packet<any>>): $PacketSendListener
static "thenRun"(runnable0: $Runnable$$Type): $PacketSendListener
}
}

declare module "net.minecraft.network.ConnectionProtocol" {
import { $BundlerInfo } from "net.minecraft.network.protocol.BundlerInfo"
import { $ConnectionProtocol$PacketSet } from "net.minecraft.network.ConnectionProtocol$PacketSet"
import { $BundlerInfo$Provider } from "net.minecraft.network.protocol.BundlerInfo$Provider"
import { $Enum } from "java.lang.Enum"
import { $Map } from "java.util.Map"
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $Class } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PacketFlow, $PacketFlow$$Type } from "net.minecraft.network.protocol.PacketFlow"

export class $ConnectionProtocol extends $Enum<$ConnectionProtocol> implements $BundlerInfo$Provider {
static readonly "HANDSHAKING": $ConnectionProtocol
static readonly "LOGIN": $ConnectionProtocol
static readonly "NOT_REGISTERED": integer
static readonly "PLAY": $ConnectionProtocol
static readonly "STATUS": $ConnectionProtocol
readonly "flows": $Map<$PacketFlow, $ConnectionProtocol$PacketSet<any>>

public "createPacket"(packetFlow0: $PacketFlow$$Type, int1: integer, friendlyByteBuf2: $FriendlyByteBuf$$Type): $Packet<any>
public "getBundlerInfo"(packetFlow0: $PacketFlow$$Type): $BundlerInfo
public static "getById"(int0: integer): $ConnectionProtocol
public "getId"(): integer
public "getPacketId"(packetFlow0: $PacketFlow$$Type, packet1: $Packet$$Type<any>): integer
public "getPacketsByIds"(packetFlow0: $PacketFlow$$Type): $Int2ObjectMap<$Class<$Packet<any>>>
public static "getProtocolForPacket"(packet0: $Packet$$Type<any>): $ConnectionProtocol
public static "valueOf"(string0: string): $ConnectionProtocol
public static "values"(): $ConnectionProtocol[]
get "id"(): integer
}
}

declare module "net.minecraft.network.Connection" {
import { $AttributeKey } from "io.netty.util.AttributeKey"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $SocketAddress, $SocketAddress$$Type } from "java.net.SocketAddress"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PacketListener, $PacketListener$$Type } from "net.minecraft.network.PacketListener"
import { $DefaultEventLoopGroup } from "io.netty.channel.DefaultEventLoopGroup"
import { $ChannelPipeline$$Type } from "io.netty.channel.ChannelPipeline"
import { $PacketFlow, $PacketFlow$$Type } from "net.minecraft.network.protocol.PacketFlow"
import { $InetSocketAddress$$Type } from "java.net.InetSocketAddress"
import { $PacketSendListener$$Type } from "net.minecraft.network.PacketSendListener"
import { $Cipher$$Type } from "javax.crypto.Cipher"
import { $NioEventLoopGroup } from "io.netty.channel.nio.NioEventLoopGroup"
import { $ChannelFuture } from "io.netty.channel.ChannelFuture"
import { $Channel } from "io.netty.channel.Channel"
import { $ChannelHandlerContext$$Type } from "io.netty.channel.ChannelHandlerContext"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $ConnectionProtocol, $ConnectionProtocol$$Type } from "net.minecraft.network.ConnectionProtocol"
import { $Marker } from "org.slf4j.Marker"
import { $SimpleChannelInboundHandler } from "io.netty.channel.SimpleChannelInboundHandler"
import { $EpollEventLoopGroup } from "io.netty.channel.epoll.EpollEventLoopGroup"
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $ConnectionAccessor } from "dev.uncandango.alltheleaks.mixin.core.accessor.ConnectionAccessor"
import { $LazyLoadedValue } from "net.minecraft.util.LazyLoadedValue"

export class $Connection extends $SimpleChannelInboundHandler<$Packet<any>> implements $ConnectionAccessor {
static readonly "ATTRIBUTE_PROTOCOL": $AttributeKey<$ConnectionProtocol>
static readonly "LOCAL_WORKER_GROUP": $LazyLoadedValue<$DefaultEventLoopGroup>
static readonly "NETWORK_EPOLL_WORKER_GROUP": $LazyLoadedValue<$EpollEventLoopGroup>
static readonly "NETWORK_WORKER_GROUP": $LazyLoadedValue<$NioEventLoopGroup>
static readonly "PACKET_MARKER": $Marker
static readonly "PACKET_RECEIVED_MARKER": $Marker
static readonly "PACKET_SENT_MARKER": $Marker
static readonly "ROOT_MARKER": $Marker

constructor(packetFlow0: $PacketFlow$$Type)

public "channel"(): $Channel
public static "configureSerialization"(channelPipeline0: $ChannelPipeline$$Type, packetFlow1: $PacketFlow$$Type): void
public static "connect"(inetSocketAddress0: $InetSocketAddress$$Type, boolean1: boolean, connection2: $Connection$$Type): $ChannelFuture
public static "connectToLocalServer"(socketAddress0: $SocketAddress$$Type): $Connection
public static "connectToServer"(inetSocketAddress0: $InetSocketAddress$$Type, boolean1: boolean): $Connection
public "disconnect"(component0: $Component$$Type): void
public "getAverageReceivedPackets"(): float
public "getAverageSentPackets"(): float
public "getDirection"(): $PacketFlow
public "getDisconnectedReason"(): $Component
public "getPacketListener"(): $PacketListener
public "getReceiving"(): $PacketFlow
public "getRemoteAddress"(): $SocketAddress
public "getSending"(): $PacketFlow
public "handleDisconnection"(): void
public "handler$zzf000$on"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "isConnected"(): boolean
public "isConnecting"(): boolean
public "isEncrypted"(): boolean
public "isMemoryConnection"(): boolean
public "send"(packet0: $Packet$$Type<any>, packetSendListener1: $PacketSendListener$$Type): void
public "send"(packet0: $Packet$$Type<any>): void
public "setEncryptionKey"(cipher0: $Cipher$$Type, cipher1: $Cipher$$Type): void
public "setListener"(packetListener0: $PacketListener$$Type): void
public "setProtocol"(connectionProtocol0: $ConnectionProtocol$$Type): void
public "setReadOnly"(): void
public "setupCompression"(int0: integer, boolean1: boolean): void
public "tick"(): void
get "averageReceivedPackets"(): float
get "averageSentPackets"(): float
get "direction"(): $PacketFlow
get "disconnectedReason"(): $Component
get "packetListener"(): $PacketListener
get "receiving"(): $PacketFlow
get "remoteAddress"(): $SocketAddress
get "sending"(): $PacketFlow
get "connected"(): boolean
get "connecting"(): boolean
get "encrypted"(): boolean
get "memoryConnection"(): boolean
set "listener"(value: $PacketListener$$Type)
set "protocol"(value: $ConnectionProtocol$$Type)
}
}

