declare module "org.moddingx.libx.event.InteractBlockEmptyHandEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $InteractBlockEmptyHandEvent extends $Event {
constructor(serverPlayer0: $ServerPlayer$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type, blockHitResult3: $BlockHitResult$$Type)
constructor()

public "getCancellationResult"(): $InteractionResult
public "getHand"(): $InteractionHand
public "getHit"(): $BlockHitResult
public "getLevel"(): $Level
public "getPlayer"(): $ServerPlayer
public "setCancellationResult"(interactionResult0: $InteractionResult$$Type): void
get "cancellationResult"(): $InteractionResult
get "hand"(): $InteractionHand
get "hit"(): $BlockHitResult
get "level"(): $Level
get "player"(): $ServerPlayer
set "cancellationResult"(value: $InteractionResult$$Type)
}
}

declare module "org.moddingx.libx.event.ConfigLoadedEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfigLoadedEvent$LoadReason, $ConfigLoadedEvent$LoadReason$$Type } from "org.moddingx.libx.event.ConfigLoadedEvent$LoadReason"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $ConfigLoadedEvent extends $Event {
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<any>, loadReason2: $ConfigLoadedEvent$LoadReason$$Type, boolean3: boolean, path4: $Path$$Type, path5: $Path$$Type)
constructor()

public "getConfigClass"(): $Class<any>
public "getConfigId"(): $ResourceLocation
public "getConfigPath"(): $Path
public "getCurrentPath"(): $Path
public "getReason"(): $ConfigLoadedEvent$LoadReason
public "isClientConfig"(): boolean
get "configClass"(): $Class<any>
get "configId"(): $ResourceLocation
get "configPath"(): $Path
get "currentPath"(): $Path
get "reason"(): $ConfigLoadedEvent$LoadReason
get "clientConfig"(): boolean
}
}

declare module "org.moddingx.libx.event.ConfigLoadedEvent$LoadReason" {
import { $Enum } from "java.lang.Enum"

export class $ConfigLoadedEvent$LoadReason extends $Enum<$ConfigLoadedEvent$LoadReason> {
static readonly "INGAME_CHANGES": $ConfigLoadedEvent$LoadReason
static readonly "INITIAL": $ConfigLoadedEvent$LoadReason
static readonly "LOCAL_SHADOW": $ConfigLoadedEvent$LoadReason
static readonly "RELOAD": $ConfigLoadedEvent$LoadReason
static readonly "RESTORE": $ConfigLoadedEvent$LoadReason
static readonly "SHADOW": $ConfigLoadedEvent$LoadReason

public static "valueOf"(string0: string): $ConfigLoadedEvent$LoadReason
public static "values"(): $ConfigLoadedEvent$LoadReason[]
}
}

