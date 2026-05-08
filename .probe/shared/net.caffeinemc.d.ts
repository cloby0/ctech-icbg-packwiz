declare module "net.caffeinemc.mods.sodium.api.vertex.attributes.CommonVertexAttribute" {
import { $Enum } from "java.lang.Enum"
import { $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"

export class $CommonVertexAttribute extends $Enum<$CommonVertexAttribute> {
static readonly "COLOR": $CommonVertexAttribute
static readonly "COUNT": integer
static readonly "LIGHT": $CommonVertexAttribute
static readonly "NORMAL": $CommonVertexAttribute
static readonly "OVERLAY": $CommonVertexAttribute
static readonly "POSITION": $CommonVertexAttribute
static readonly "TEXTURE": $CommonVertexAttribute

public "getByteLength"(): integer
public static "getCommonType"(vertexFormatElement0: $VertexFormatElement$$Type): $CommonVertexAttribute
public static "valueOf"(string0: string): $CommonVertexAttribute
public static "values"(): $CommonVertexAttribute[]
get "byteLength"(): integer
}
}

declare module "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatDescription" {
import { $CommonVertexAttribute$$Type } from "net.caffeinemc.mods.sodium.api.vertex.attributes.CommonVertexAttribute"

export interface $VertexFormatDescription {
"containsElement"(commonVertexAttribute0: $CommonVertexAttribute$$Type): boolean
"getElementOffset"(commonVertexAttribute0: $CommonVertexAttribute$$Type): integer
"id"(): integer
"isSimpleFormat"(): boolean
"stride"(): integer
get "simpleFormat"(): boolean
}

export namespace $VertexFormatDescription {
const probejs$$marker: never
}
export abstract class $VertexFormatDescription$$Static implements $VertexFormatDescription {
}
}

declare module "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter" {
import { $VertexFormatDescription$$Type } from "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatDescription"
import { $MemoryStack$$Type } from "org.lwjgl.system.MemoryStack"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $VertexBufferWriter {
"canUseIntrinsics"(): boolean
/** @deprecated */
"isFullWriter"(): boolean
"push"(memoryStack0: $MemoryStack$$Type, long1: long, int2: integer, vertexFormatDescription3: $VertexFormatDescription$$Type): void
get "fullWriter"(): boolean
}

export namespace $VertexBufferWriter {
function copyInto(vertexBufferWriter0: $VertexBufferWriter$$Type, memoryStack1: $MemoryStack$$Type, long2: long, int3: integer, vertexFormatDescription4: $VertexFormatDescription$$Type): void
function of(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
function tryOf(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
}
export abstract class $VertexBufferWriter$$Static implements $VertexBufferWriter {
static "copyInto"(vertexBufferWriter0: $VertexBufferWriter$$Type, memoryStack1: $MemoryStack$$Type, long2: long, int3: integer, vertexFormatDescription4: $VertexFormatDescription$$Type): void
static "of"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
static "tryOf"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
}
}

