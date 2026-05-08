declare module "net.minecraftforge.network.PlayMessages$SpawnEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayMessages$SpawnEntity$$Type = ($PlayMessages$SpawnEntity);
}

declare module "net.minecraftforge.network.PacketDistributor$PacketTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PacketDistributor$PacketTarget$$Type = ($PacketDistributor$PacketTarget);
}

declare module "net.minecraftforge.network.ICustomPacket" {
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICustomPacket$$Type<T extends $Packet<any> = $Packet<any>> = ($ICustomPacket<T>);
}

declare module "net.minecraftforge.network.ServerStatusPing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerStatusPing$$Type = ($ServerStatusPing);
}

declare module "net.minecraftforge.network.IContainerFactory" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IContainerFactory$$Type<T extends $AbstractContainerMenu = $AbstractContainerMenu> = ($IContainerFactory<T> | ((arg0: integer, arg1: $Inventory, arg2: $FriendlyByteBuf) => T));
}

declare module "net.minecraftforge.network.NetworkEvent$ChannelRegistrationChangeEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$ChannelRegistrationChangeEvent$$Type = ($NetworkEvent$ChannelRegistrationChangeEvent);
}

declare module "net.minecraftforge.network.ServerStatusPing$ChannelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerStatusPing$ChannelData$$Type = ($ServerStatusPing$ChannelData);
}

declare module "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$ServerCustomPayloadEvent$$Type = ($NetworkEvent$ServerCustomPayloadEvent);
}

declare module "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadLoginEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$ClientCustomPayloadLoginEvent$$Type = ($NetworkEvent$ClientCustomPayloadLoginEvent);
}

declare module "net.minecraftforge.network.NetworkDirection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkDirection$$Type = ($NetworkDirection | ("play_to_server" | "play_to_client" | "login_to_server" | "login_to_client"));
}

declare module "net.minecraftforge.network.NetworkRegistry$LoginPayload" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkRegistry$LoginPayload$$Type = ($NetworkRegistry$LoginPayload);
}

declare module "net.minecraftforge.network.NetworkEvent$RegistrationChangeType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$RegistrationChangeType$$Type = ($NetworkEvent$RegistrationChangeType | ("register" | "unregister"));
}

declare module "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$ClientCustomPayloadEvent$$Type = ($NetworkEvent$ClientCustomPayloadEvent);
}

declare module "net.minecraftforge.network.HandshakeMessages$LoginIndexedMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HandshakeMessages$LoginIndexedMessage$$Type = ($HandshakeMessages$LoginIndexedMessage);
}

declare module "net.minecraftforge.network.NetworkEvent$PacketDispatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$PacketDispatcher$$Type = ($NetworkEvent$PacketDispatcher);
}

declare module "net.minecraftforge.network.NetworkEvent$LoginPayloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$LoginPayloadEvent$$Type = ($NetworkEvent$LoginPayloadEvent);
}

declare module "net.minecraftforge.network.NetworkEvent$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$Context$$Type = ($NetworkEvent$Context);
}

declare module "net.minecraftforge.network.NetworkEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$$Type = ($NetworkEvent);
}

declare module "net.minecraftforge.network.HandshakeMessages$S2CRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HandshakeMessages$S2CRegistry$$Type = ($HandshakeMessages$S2CRegistry);
}

declare module "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadLoginEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$ServerCustomPayloadLoginEvent$$Type = ($NetworkEvent$ServerCustomPayloadLoginEvent);
}

declare module "net.minecraftforge.network.NetworkEvent$GatherLoginPayloadsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkEvent$GatherLoginPayloadsEvent$$Type = ($NetworkEvent$GatherLoginPayloadsEvent);
}

