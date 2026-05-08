declare module "net.caffeinemc.mods.sodium.api.vertex.attributes.CommonVertexAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommonVertexAttribute$$Type = ($CommonVertexAttribute | ("position" | "color" | "texture" | "overlay" | "light" | "normal"));
}

declare module "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatDescription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VertexFormatDescription$$Type = ($VertexFormatDescription);
}

declare module "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter" {
import { $VertexFormatDescription } from "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatDescription"
import { $MemoryStack } from "org.lwjgl.system.MemoryStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VertexBufferWriter$$Type = ($VertexBufferWriter | ((arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormatDescription) => void));
}

