declare module "net.minecraft.client.sounds.SoundBufferLibrary" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundBuffer } from "com.mojang.blaze3d.audio.SoundBuffer"
import { $ResourceProvider$$Type } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Collection$$Type } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AudioStream } from "net.minecraft.client.sounds.AudioStream"
import { $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"

export class $SoundBufferLibrary {
constructor(resourceProvider0: $ResourceProvider$$Type)

public "clear"(): void
public "getCompleteBuffer"(resourceLocation0: $ResourceLocation$$Type): $CompletableFuture<$SoundBuffer>
public "getStream"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $CompletableFuture<$AudioStream>
public "preload"(collection0: $Collection$$Type<$Sound$$Type>): $CompletableFuture<any>
}
}

declare module "net.minecraft.client.sounds.AudioStream" {
import { $Closeable } from "java.io.Closeable"
import { $AudioFormat } from "javax.sound.sampled.AudioFormat"
import { $ByteBuffer } from "java.nio.ByteBuffer"

export interface $AudioStream extends $Closeable {
"close"(): void
"getFormat"(): $AudioFormat
"read"(int0: integer): $ByteBuffer
get "format"(): $AudioFormat
}

export namespace $AudioStream {
const probejs$$marker: never
}
export abstract class $AudioStream$$Static implements $AudioStream {
}
}

declare module "net.minecraft.client.sounds.Weighted" {
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"

export interface $Weighted<T = any> {
"getSound"(randomSource0: $RandomSource$$Type): T
"getWeight"(): integer
"preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
get "weight"(): integer
}

export namespace $Weighted {
const probejs$$marker: never
}
export abstract class $Weighted$$Static<T = any> implements $Weighted<T> {
}
}

declare module "net.minecraft.client.sounds.SoundEventListener" {
import { $WeighedSoundEvents$$Type } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $SoundEventListener {
"onPlaySound"(soundInstance0: $SoundInstance$$Type, weighedSoundEvents1: $WeighedSoundEvents$$Type): void
}

export namespace $SoundEventListener {
const probejs$$marker: never
}
export abstract class $SoundEventListener$$Static implements $SoundEventListener {
}
}

declare module "net.minecraft.client.sounds.MusicManager" {
import { $Music, $Music$$Type } from "net.minecraft.sounds.Music"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $IMixinMusicManager } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMusicManager"
import { $MusicManagerAccessor } from "net.zepalesque.redux.mixin.client.audio.MusicManagerAccessor"

export class $MusicManager implements $MusicManagerAccessor, $IMixinMusicManager {
constructor(minecraft0: $Minecraft$$Type)

public "isPlayingMusic"(music0: $Music$$Type): boolean
public "localvar$bgj000$injected"(music0: $Music$$Type): $Music
public "startPlaying"(music0: $Music$$Type): void
public "stopPlaying"(): void
public "stopPlaying"(music0: $Music$$Type): void
public "tick"(): void
}
}

declare module "net.minecraft.client.sounds.SoundEngine" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $Map$Entry$$Type } from "java.util.Map$Entry"
import { $SoundEventListener$$Type } from "net.minecraft.client.sounds.SoundEventListener"
import { $Iterator$$Type } from "java.util.Iterator"
import { $IMixinSoundEngine } from "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundEngine"
import { $SoundManager, $SoundManager$$Type } from "net.minecraft.client.sounds.SoundManager"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $SoundEngineAccessor } from "net.zepalesque.redux.mixin.client.audio.SoundEngineAccessor"
import { $SoundEngineExecutor } from "net.minecraft.client.sounds.SoundEngineExecutor"
import { $ISoundLists } from "com.leobeliik.extremesoundmuffler.interfaces.ISoundLists"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List } from "java.util.List"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $SoundEngineAccessor as $SoundEngineAccessor$0 } from "com.aetherteam.aether.mixin.mixins.client.accessor.SoundEngineAccessor"
import { $TickableSoundInstance$$Type } from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import { $ResourceProvider$$Type } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $ChannelAccess$ChannelHandle$$Type } from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"
import { $SoundEngineAccessor as $SoundEngineAccessor$1 } from "earth.terrarium.adastra.mixins.client.SoundEngineAccessor"
import { $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"

export class $SoundEngine implements $ISoundLists, $SoundEngineAccessor$1, $SoundEngineAccessor$0, $SoundEngineAccessor, $IMixinSoundEngine {
static readonly "MISSING_SOUND": string
static readonly "OPEN_AL_SOFT_PREFIX": string
static readonly "OPEN_AL_SOFT_PREFIX_LENGTH": integer
readonly "executor": $SoundEngineExecutor
readonly "soundManager": $SoundManager

constructor(soundManager0: $SoundManager$$Type, options1: $Options$$Type, resourceProvider2: $ResourceProvider$$Type)

public "addEventListener"(soundEventListener0: $SoundEventListener$$Type): void
public "destroy"(): void
public "getAvailableSoundDevices"(): $List<string>
public "getDebugString"(): string
public "handler$cai000$onSoundRemoved"(ci: $CallbackInfo$$Type, iterator: $Iterator$$Type, entry: $Map$Entry$$Type, channelHandle2: $ChannelAccess$ChannelHandle$$Type, soundInstance: $SoundInstance$$Type): void
public "isActive"(soundInstance0: $SoundInstance$$Type): boolean
public "pause"(): void
public "play"(soundInstance0: $SoundInstance$$Type): void
public "playDelayed"(soundInstance0: $SoundInstance$$Type, int1: integer): void
public "queueTickingSound"(tickableSoundInstance0: $TickableSoundInstance$$Type): void
public "reload"(): void
public "removeEventListener"(soundEventListener0: $SoundEventListener$$Type): void
public "requestPreload"(sound0: $Sound$$Type): void
public "resume"(): void
public "stop"(soundInstance0: $SoundInstance$$Type): void
public "stop"(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type): void
public "stopAll"(): void
public "tick"(boolean0: boolean): void
public "updateCategoryVolume"(soundSource0: $SoundSource$$Type, float1: float): void
public "updateSource"(camera0: $Camera$$Type): void
get "availableSoundDevices"(): $List<string>
get "debugString"(): string
}
}

declare module "net.minecraft.client.sounds.SoundEngineExecutor" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "net.minecraft.util.thread.ProcessorHandle"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $BlockableEventLoop } from "net.minecraft.util.thread.BlockableEventLoop"
import { $Function$$Type } from "java.util.function.Function"
import { $Runnable } from "java.lang.Runnable"
import { $Exception$$Type } from "java.lang.Exception"

export class $SoundEngineExecutor extends $BlockableEventLoop<$Runnable> {
constructor()

public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $Runnable>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $Runnable>): $CompletableFuture<Source>
public "close"(): void
public "flush"(): void
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
}
}

declare module "net.minecraft.client.sounds.SoundManager$Preparations" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $Weighted, $Weighted$$Type } from "net.minecraft.client.sounds.Weighted"
import { $SoundEventRegistration$$Type } from "net.minecraft.client.resources.sounds.SoundEventRegistration"
import { $WeighedSoundEvents$$Type } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $Map$$Type } from "java.util.Map"
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"

export class $SoundManager$Preparations {
public "apply"(map0: $Map$$Type<$ResourceLocation$$Type, $WeighedSoundEvents$$Type>, map1: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>, soundEngine2: $SoundEngine$$Type): void
public "localvar$fee000$simpleclouds$overrideVanillaRainSounds_handleRegistration"(weighted0: $Weighted$$Type, resourceLocation1: $ResourceLocation$$Type, soundEventRegistration2: $SoundEventRegistration$$Type): $Weighted
}
}

declare module "net.minecraft.client.sounds.WeighedSoundEvents" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Weighted, $Weighted$$Type } from "net.minecraft.client.sounds.Weighted"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"
import { $Sound, $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"

export class $WeighedSoundEvents implements $Weighted<$Sound> {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)

public "addSound"(weighted0: $Weighted$$Type<$Sound$$Type>): void
public "getSound"(randomSource0: $RandomSource$$Type): $Sound
public "getSubtitle"(): $Component
public "getWeight"(): integer
public "preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
get "subtitle"(): $Component
get "weight"(): integer
}
}

declare module "net.minecraft.client.sounds.ChannelAccess" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Library$$Type } from "com.mojang.blaze3d.audio.Library"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ChannelAccess$ChannelHandle } from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"
import { $Library$Pool$$Type } from "com.mojang.blaze3d.audio.Library$Pool"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Channel$$Type } from "com.mojang.blaze3d.audio.Channel"

export class $ChannelAccess {
constructor(library0: $Library$$Type, executor1: $Executor$$Type)

public "clear"(): void
public "createHandle"(pool0: $Library$Pool$$Type): $CompletableFuture<$ChannelAccess$ChannelHandle>
public "executeOnChannels"(consumer0: $Consumer$$Type<$Stream$$Type<$Channel$$Type>>): void
public "scheduleTick"(): void
}
}

declare module "net.minecraft.client.sounds.SoundManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $SoundEventListener$$Type } from "net.minecraft.client.sounds.SoundEventListener"
import { $WeighedSoundEvents } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $IMixinSoundManager } from "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundManager"
import { $Collection } from "java.util.Collection"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $SoundManagerAccessor } from "earth.terrarium.adastra.mixins.client.SoundManagerAccessor"
import { $SimplePreparableReloadListener } from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import { $List } from "java.util.List"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $TickableSoundInstance$$Type } from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import { $SoundManager$Preparations } from "net.minecraft.client.sounds.SoundManager$Preparations"
import { $Sound } from "net.minecraft.client.resources.sounds.Sound"

export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $SoundManagerAccessor, $IMixinSoundManager {
static readonly "EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND_EVENT": $WeighedSoundEvents
static readonly "INTENTIONALLY_EMPTY_SOUND_LOCATION": $ResourceLocation

constructor(options0: $Options$$Type)

public "addListener"(soundEventListener0: $SoundEventListener$$Type): void
public "destroy"(): void
public "getAvailableSoundDevices"(): $List<string>
public "getAvailableSounds"(): $Collection<$ResourceLocation>
public "getDebugString"(): string
public "getName"(): string
public "getSoundEvent"(resourceLocation0: $ResourceLocation$$Type): $WeighedSoundEvents
public "isActive"(soundInstance0: $SoundInstance$$Type): boolean
public "pause"(): void
public "play"(soundInstance0: $SoundInstance$$Type): void
public "playDelayed"(soundInstance0: $SoundInstance$$Type, int1: integer): void
public "queueTickingSound"(tickableSoundInstance0: $TickableSoundInstance$$Type): void
public "reload"(): void
public "removeListener"(soundEventListener0: $SoundEventListener$$Type): void
public "resume"(): void
public "stop"(soundInstance0: $SoundInstance$$Type): void
public "stop"(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type): void
public "stop"(): void
public "tick"(boolean0: boolean): void
public "updateSource"(camera0: $Camera$$Type): void
public "updateSourceVolume"(soundSource0: $SoundSource$$Type, float1: float): void
get "availableSoundDevices"(): $List<string>
get "availableSounds"(): $Collection<$ResourceLocation>
get "debugString"(): string
get "name"(): string
}
}

declare module "net.minecraft.client.sounds.ChannelAccess$ChannelHandle" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ChannelAccess$$Type } from "net.minecraft.client.sounds.ChannelAccess"
import { $Channel$$Type } from "com.mojang.blaze3d.audio.Channel"

export class $ChannelAccess$ChannelHandle {
constructor(channelAccess0: $ChannelAccess$$Type, channel1: $Channel$$Type)

public "execute"(consumer0: $Consumer$$Type<$Channel$$Type>): void
public "isStopped"(): boolean
public "release"(): void
get "stopped"(): boolean
}
}

