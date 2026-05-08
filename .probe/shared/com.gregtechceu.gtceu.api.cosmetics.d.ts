declare module "com.gregtechceu.gtceu.api.cosmetics.CapeRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $UUID$$Type } from "java.util.UUID"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $SavedData } from "net.minecraft.world.level.saveddata.SavedData"

export class $CapeRegistry extends $SavedData {
static readonly "ALL_CAPES": $Map<$ResourceLocation, $ResourceLocation>

public static "clearMaps"(): void
public static "detectNewCapes"(serverPlayer0: $ServerPlayer$$Type): void
public static "getPlayerCapeId"(uUID0: $UUID$$Type): $ResourceLocation
public static "getPlayerCapeTexture"(uUID0: $UUID$$Type): $ResourceLocation
public static "getUnlockedCapes"(uUID0: $UUID$$Type): $Set<$ResourceLocation>
public static "giveRawCape"(uUID0: $UUID$$Type, resourceLocation1: $ResourceLocation$$Type): void
public static "loadCurrentCapesOnLogin"(serverPlayer0: $ServerPlayer$$Type): void
public static "registerCape"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
public static "registerFreeCape"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
public static "registerToServer"(serverLevel0: $ServerLevel$$Type): void
public static "removeCape"(uUID0: $UUID$$Type, resourceLocation1: $ResourceLocation$$Type): boolean
public static "save"(): void
public static "setActiveCape"(uUID0: $UUID$$Type, resourceLocation1: $ResourceLocation$$Type): boolean
public static "unlockCape"(uUID0: $UUID$$Type, resourceLocation1: $ResourceLocation$$Type): boolean
}
}

declare module "com.gregtechceu.gtceu.api.cosmetics.event.RegisterGTCapesEvent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $UUID$$Type } from "java.util.UUID"

export class $RegisterGTCapesEvent extends $Event {
constructor()

public "registerCape"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "registerFreeCape"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "unlockCapeFor"(uUID0: $UUID$$Type, resourceLocation1: $ResourceLocation$$Type): void
}
}

