declare module "net.minecraft.client.server.IntegratedServer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $ScheduledEvents$Callback$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import { $ChunkProgressListenerFactory$$Type } from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import { $AdvancementJS } from "dev.latvian.mods.kubejs.player.AdvancementJS"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Function$$Type } from "java.util.function.Function"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Thread$$Type } from "java.lang.Thread"
import { $Map } from "java.util.Map"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $TickTask } from "net.minecraft.server.TickTask"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $UUID$$Type } from "java.util.UUID"
import { $PlayerSelector$$Type } from "dev.latvian.mods.kubejs.core.PlayerSelector"
import { $Exception$$Type } from "java.lang.Exception"
import { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import { $IDeferrableIntegratedServer } from "org.embeddedt.modernfix.duck.suspend_integrated_server_during_load.IDeferrableIntegratedServer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $PackRepository$$Type } from "net.minecraft.server.packs.repository.PackRepository"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "net.minecraft.util.thread.ProcessorHandle"
import { $Class } from "java.lang.Class"
import { $WorldStem$$Type } from "net.minecraft.server.WorldStem"
import { $Services$$Type } from "net.minecraft.server.Services"

export class $IntegratedServer extends $MinecraftServer implements $IDeferrableIntegratedServer {
constructor(thread0: $Thread$$Type, minecraft1: $Minecraft$$Type, levelStorageAccess2: $LevelStorageSource$LevelStorageAccess$$Type, packRepository3: $PackRepository$$Type, worldStem4: $WorldStem$$Type, services5: $Services$$Type, chunkProgressListenerFactory6: $ChunkProgressListenerFactory$$Type)

public "alwaysAccepts"(): boolean
public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $TickTask>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $TickTask>): $CompletableFuture<Source>
public static "clearNullReferences"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "getAdvancement"(id: $ResourceLocation$$Type): $AdvancementJS
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
public "getName"(): $Component
public "getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
public "getPlayers"(): $EntityArrayList
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "handler$glf000$onInit"(thread0: $Thread$$Type, minecraft1: $Minecraft$$Type, levelStorageAccess2: $LevelStorageSource$LevelStorageAccess$$Type, packRepository3: $PackRepository$$Type, worldStem4: $WorldStem$$Type, services5: $Services$$Type, chunkProgressListenerFactory6: $ChunkProgressListenerFactory$$Type, callbackInfo7: $CallbackInfo$$Type): void
public "initServer"(): boolean
public "mfix$markClientLoadFinished"(): void
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public static "onStarted"(server: $MinecraftServer$$Type): void
public "resetGlobalTickLengthMs"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "self"(): $MinecraftServer
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "setStatusMessage"(message: $Component$$Type): void
public "setUUID"(uUID0: $UUID$$Type): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "tell"(message: $Component$$Type): void
public "wrap"(): $WeakReference<$Trackable>
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "players"(): $EntityArrayList
set "statusMessage"(value: $Component$$Type)
set "uUID"(value: $UUID$$Type)
}
}

