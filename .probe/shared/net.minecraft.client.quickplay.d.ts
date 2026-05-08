declare module "net.minecraft.client.quickplay.QuickPlayLog$Type" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $QuickPlayLog$Type extends $Enum<$QuickPlayLog$Type> implements $StringRepresentable {
static readonly "MULTIPLAYER": $QuickPlayLog$Type
static readonly "REALMS": $QuickPlayLog$Type
static readonly "SINGLEPLAYER": $QuickPlayLog$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $QuickPlayLog$Type
public static "values"(): $QuickPlayLog$Type[]
get "serializedName"(): string
}
}

declare module "net.minecraft.client.quickplay.QuickPlayLog" {
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $QuickPlayLog$Type$$Type } from "net.minecraft.client.quickplay.QuickPlayLog$Type"

export class $QuickPlayLog {
public "log"(minecraft0: $Minecraft$$Type): void
public static "of"(string0: string): $QuickPlayLog
public "setWorldData"(type0: $QuickPlayLog$Type$$Type, string1: string, string2: string): void
}
}

