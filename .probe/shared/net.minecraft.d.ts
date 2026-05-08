declare module "net.minecraft.SystemReport" {
import { $SystemReportAccessor } from "com.simibubi.create.foundation.mixin.accessor.SystemReportAccessor"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $SystemReport implements $SystemReportAccessor {
static readonly "BYTES_PER_MEBIBYTE": long

constructor()

public "appendToCrashReportString"(stringBuilder0: $StringBuilder$$Type): void
public "setDetail"(string0: string, supplier1: $Supplier$$Type<string>): void
public "setDetail"(string0: string, string1: string): void
public "toLineSeparatedString"(): string
}
}

declare module "net.minecraft.WorldVersion" {
import { $DataVersion } from "net.minecraft.world.level.storage.DataVersion"
import { $Date } from "java.util.Date"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"

export interface $WorldVersion {
"getBuildTime"(): $Date
"getDataVersion"(): $DataVersion
"getId"(): string
"getName"(): string
"getPackVersion"(packType0: $PackType$$Type): integer
"getProtocolVersion"(): integer
"isStable"(): boolean
get "buildTime"(): $Date
get "dataVersion"(): $DataVersion
get "id"(): string
get "name"(): string
get "protocolVersion"(): integer
get "stable"(): boolean
}

export namespace $WorldVersion {
const probejs$$marker: never
}
export abstract class $WorldVersion$$Static implements $WorldVersion {
}
}

declare module "net.minecraft.ChatFormatting" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Collection } from "java.util.Collection"
import { $Color } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $TextColor } from "net.minecraft.network.chat.TextColor"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $ChatFormatting extends $Enum<$ChatFormatting> implements $StringRepresentable, $Color {
static readonly "AQUA": $ChatFormatting
static readonly "BLACK": $ChatFormatting
static readonly "BLUE": $ChatFormatting
static readonly "BOLD": $ChatFormatting
static readonly "CODEC": $Codec<$ChatFormatting>
static readonly "DARK_AQUA": $ChatFormatting
static readonly "DARK_BLUE": $ChatFormatting
static readonly "DARK_GRAY": $ChatFormatting
static readonly "DARK_GREEN": $ChatFormatting
static readonly "DARK_PURPLE": $ChatFormatting
static readonly "DARK_RED": $ChatFormatting
static readonly "GOLD": $ChatFormatting
static readonly "GRAY": $ChatFormatting
static readonly "GREEN": $ChatFormatting
static readonly "ITALIC": $ChatFormatting
static readonly "LIGHT_PURPLE": $ChatFormatting
static readonly "OBFUSCATED": $ChatFormatting
static readonly "PREFIX_CODE": character
static readonly "RED": $ChatFormatting
static readonly "RESET": $ChatFormatting
static readonly "STRIKETHROUGH": $ChatFormatting
static readonly "UNDERLINE": $ChatFormatting
static readonly "WHITE": $ChatFormatting
static readonly "YELLOW": $ChatFormatting

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "createTextColorJS"(): $TextColor
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getArgbJS"(): integer
public static "getByCode"(char0: character): $ChatFormatting
public static "getById"(int0: integer): $ChatFormatting
public static "getByName"(string0: string): $ChatFormatting
public "getChar"(): character
public "getColor"(): integer
public "getFireworkColorJS"(): integer
public "getHexJS"(): string
public "getId"(): integer
public "getName"(): string
public static "getNames"(boolean0: boolean, boolean1: boolean): $Collection<string>
public "getRgbJS"(): integer
public "getSerializeJS"(): string
public "getSerializedName"(): string
public "isColor"(): boolean
public "isFormat"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "specialEquals"(o: any, shallow: boolean): boolean
public static "stripFormatting"(string0: string): string
public static "valueOf"(string0: string): $ChatFormatting
public static "values"(): $ChatFormatting[]
get "argbJS"(): integer
get "char"(): character
get "color"(): integer
get "fireworkColorJS"(): integer
get "hexJS"(): string
get "id"(): integer
get "name"(): string
get "rgbJS"(): integer
get "serializeJS"(): string
get "serializedName"(): string
get "color"(): boolean
get "format"(): boolean
}
}

declare module "net.minecraft.CrashReportCategory" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $CrashReportCategoryExtender } from "com.bawnorton.neruina.extend.CrashReportCategoryExtender"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $StackTraceElement, $StackTraceElement$$Type } from "java.lang.StackTraceElement"
import { $CrashReportDetail$$Type } from "net.minecraft.CrashReportDetail"

export class $CrashReportCategory implements $CrashReportCategoryExtender {
constructor(string0: string)

public "applyStackTrace"(throwable0: $Throwable$$Type): void
public "fillInStackTrace"(int0: integer): integer
public static "formatLocation"(levelHeightAccessor0: $LevelHeightAccessor$$Type, double1: double, double2: double, double3: double): string
public static "formatLocation"(levelHeightAccessor0: $LevelHeightAccessor$$Type, blockPos1: $BlockPos$$Type): string
public static "formatLocation"(levelHeightAccessor0: $LevelHeightAccessor$$Type, int1: integer, int2: integer, int3: integer): string
public "getDetails"(stringBuilder0: $StringBuilder$$Type): void
public "getStacktrace"(): $StackTraceElement[]
public "neruin$setStacktrace"(throwable0: $Throwable$$Type): void
public static "populateBlockDetails"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "setDetail"(string0: string, crashReportDetail1: $CrashReportDetail$$Type<string>): $CrashReportCategory
public "setDetail"(string0: string, object1: any): $CrashReportCategory
public "setDetailError"(string0: string, throwable1: $Throwable$$Type): void
public "trimStacktrace"(int0: integer): void
public "validateStackTrace"(stackTraceElement0: $StackTraceElement$$Type, stackTraceElement1: $StackTraceElement$$Type): boolean
get "stacktrace"(): $StackTraceElement[]
}
}

declare module "net.minecraft.ReportedException" {
import { $RuntimeException } from "java.lang.RuntimeException"
import { $CrashReport, $CrashReport$$Type } from "net.minecraft.CrashReport"

export class $ReportedException extends $RuntimeException {
constructor(crashReport0: $CrashReport$$Type)

public "getReport"(): $CrashReport
get "report"(): $CrashReport
}
}

declare module "net.minecraft.BlockUtil$FoundRectangle" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $BlockUtil$FoundRectangle {
readonly "axis1Size": integer
readonly "axis2Size": integer
readonly "minCorner": $BlockPos

constructor(blockPos0: $BlockPos$$Type, int1: integer, int2: integer)

}
}

declare module "net.minecraft.CrashReport" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $CrashReportCategory } from "net.minecraft.CrashReportCategory"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $SystemReport } from "net.minecraft.SystemReport"
import { $File, $File$$Type } from "java.io.File"

export class $CrashReport {
constructor(string0: string, throwable1: $Throwable$$Type)

public "addCategory"(string0: string, int1: integer): $CrashReportCategory
public "addCategory"(string0: string): $CrashReportCategory
public static "forThrowable"(throwable0: $Throwable$$Type, string1: string): $CrashReport
public "getDetails"(): string
public "getDetails"(stringBuilder0: $StringBuilder$$Type): void
public "getException"(): $Throwable
public "getExceptionMessage"(): string
public "getFriendlyReport"(): string
public "getSaveFile"(): $File
public "getSystemReport"(): $SystemReport
public "getTitle"(): string
public static "preload"(): void
public "saveToFile"(file0: $File$$Type): boolean
get "details"(): string
get "exception"(): $Throwable
get "exceptionMessage"(): string
get "friendlyReport"(): string
get "saveFile"(): $File
get "systemReport"(): $SystemReport
get "title"(): string
}
}

declare module "net.minecraft.CrashReportDetail" {
import { $Callable } from "java.util.concurrent.Callable"

export interface $CrashReportDetail<V = any> extends $Callable<V> {
"call"(): V
}

export namespace $CrashReportDetail {
const probejs$$marker: never
}
export abstract class $CrashReportDetail$$Static<V = any> implements $CrashReportDetail<V> {
}
}

