declare module "dev.latvian.mods.kubejs.generator.ResourceGenerator" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ConsoleJS$$Type } from "dev.latvian.mods.kubejs.util.ConsoleJS"
import { $Map$$Type } from "java.util.Map"
import { $GeneratedData$$Type } from "dev.latvian.mods.kubejs.script.data.GeneratedData"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $ResourceGenerator {
constructor(c: $ConsoleJS$$Type, m: $Map$$Type<$ResourceLocation$$Type, $GeneratedData$$Type>)

public "add"(id: $ResourceLocation$$Type, data: $Supplier$$Type<byte[]>, alwaysForget: boolean): void
public "add"(id: $ResourceLocation$$Type, data: $Supplier$$Type<byte[]>): void
public "json"(id: $ResourceLocation$$Type, json: $JsonElement$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.generator.DataJsonGenerator" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$$Type } from "java.util.Map"
import { $GeneratedData$$Type } from "dev.latvian.mods.kubejs.script.data.GeneratedData"
import { $ResourceGenerator } from "dev.latvian.mods.kubejs.generator.ResourceGenerator"

export class $DataJsonGenerator extends $ResourceGenerator {
constructor(m: $Map$$Type<$ResourceLocation$$Type, $GeneratedData$$Type>)

}
}

declare module "dev.latvian.mods.kubejs.generator.AssetJsonGenerator" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ModelGenerator$$Type } from "dev.latvian.mods.kubejs.client.ModelGenerator"
import { $VariantBlockStateGenerator$$Type } from "dev.latvian.mods.kubejs.client.VariantBlockStateGenerator"
import { $Map$$Type } from "java.util.Map"
import { $GeneratedData$$Type } from "dev.latvian.mods.kubejs.script.data.GeneratedData"
import { $ResourceGenerator } from "dev.latvian.mods.kubejs.generator.ResourceGenerator"
import { $MultipartBlockStateGenerator$$Type } from "dev.latvian.mods.kubejs.client.MultipartBlockStateGenerator"

export class $AssetJsonGenerator extends $ResourceGenerator {
constructor(m: $Map$$Type<$ResourceLocation$$Type, $GeneratedData$$Type>)

public static "asItemModelLocation"(id: $ResourceLocation$$Type): $ResourceLocation
public "blockModel"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$ModelGenerator$$Type>): void
public "blockState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$VariantBlockStateGenerator$$Type>): void
public "itemModel"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$ModelGenerator$$Type>): void
public "multipartState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$MultipartBlockStateGenerator$$Type>): void
public "stencil"(target: $ResourceLocation$$Type, stencil: string, colors: $JsonObject$$Type): void
}
}

