declare module "net.minecraft.client.telemetry.TelemetryEventType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryEventType$$Type = ($TelemetryEventType);
}

declare module "net.minecraft.client.telemetry.TelemetryProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryProperty$$Type<T = any> = ($TelemetryProperty<T>);
}

declare module "net.minecraft.client.telemetry.TelemetryProperty$GameMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryProperty$GameMode$$Type = ($TelemetryProperty$GameMode | ("survival" | "creative" | "adventure" | "spectator" | "hardcore"));
}

declare module "net.minecraft.client.telemetry.ClientTelemetryManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClientTelemetryManager$$Type = ($ClientTelemetryManager);
}

declare module "net.minecraft.client.telemetry.TelemetryPropertyMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryPropertyMap$$Type = ($TelemetryPropertyMap);
}

declare module "net.minecraft.client.telemetry.TelemetryEventType$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryEventType$Builder$$Type = ($TelemetryEventType$Builder);
}

declare module "net.minecraft.client.telemetry.WorldSessionTelemetryManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldSessionTelemetryManager$$Type = ($WorldSessionTelemetryManager);
}

declare module "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryPropertyMap$Builder$$Type = ($TelemetryPropertyMap$Builder);
}

declare module "net.minecraft.client.telemetry.TelemetryEventSender" {
import { $Consumer } from "java.util.function.Consumer"
import { $TelemetryEventType } from "net.minecraft.client.telemetry.TelemetryEventType"
import { $TelemetryPropertyMap$Builder } from "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryEventSender$$Type = ($TelemetryEventSender | ((arg0: $TelemetryEventType, arg1: $Consumer<$TelemetryPropertyMap$Builder>) => void));
}

declare module "net.minecraft.client.telemetry.TelemetryProperty$Exporter" {
import { $TelemetryPropertyContainer } from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryProperty$Exporter$$Type<T = any> = ($TelemetryProperty$Exporter<T> | ((arg0: $TelemetryPropertyContainer, arg1: string, arg2: T) => void));
}

declare module "net.minecraft.client.telemetry.events.GameLoadTimesEvent$Measurement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameLoadTimesEvent$Measurement$$Type = ($GameLoadTimesEvent$Measurement);
}

declare module "net.minecraft.client.telemetry.TelemetryEventInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryEventInstance$$Type = ($TelemetryEventInstance);
}

declare module "net.minecraft.client.telemetry.TelemetryProperty$ServerType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TelemetryProperty$ServerType$$Type = ($TelemetryProperty$ServerType | ("realm" | "local" | "other"));
}

