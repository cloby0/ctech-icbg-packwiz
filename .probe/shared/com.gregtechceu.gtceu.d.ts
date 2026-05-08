declare module "com.gregtechceu.gtceu.GTCEu" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Logger } from "org.apache.logging.log4j.Logger"
import { $Path } from "java.nio.file.Path"

export class $GTCEu {
static readonly "GTCEU_FOLDER": $Path
static readonly "LOGGER": $Logger
static readonly "MOD_ID": string
static readonly "NAME": string

constructor()

public static "appendIdString"(string0: string): string
public static "canGetServerLevel"(): boolean
public static "getGameDir"(): $Path
public static "getMinecraftServer"(): $MinecraftServer
public static "id"(string0: string): $ResourceLocation
public static "init"(): void
public static "isClientSide"(): boolean
public static "isClientThread"(): boolean
public static "isDataGen"(): boolean
public static "isDev"(): boolean
public static "isModLoaded"(string0: string): boolean
public static "isProd"(): boolean
}
}

