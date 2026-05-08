declare module "com.gregtechceu.gtceu.api.sound.SoundEntry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $AutoReleasedSound } from "com.gregtechceu.gtceu.api.sound.AutoReleasedSound"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SoundEntry {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, soundSource2: $SoundSource$$Type, int3: integer)

public "getId"(): $ResourceLocation
public "getMainEvent"(): $SoundEvent
public "getSubtitle"(): string
public "getSubtitleKey"(): string
public "hasSubtitle"(): boolean
public "play"(level0: $Level$$Type, player1: $Player$$Type, double2: double, double3: double, double4: double, float5: float, float6: float): void
public "play"(level0: $Level$$Type, player1: $Player$$Type, vec3i2: $Vec3i$$Type, float3: float, float4: float): void
public "play"(level0: $Level$$Type, player1: $Player$$Type, vec32: $Vec3$$Type, float3: float, float4: float): void
public "play"(level0: $Level$$Type, player1: $Player$$Type, vec3i2: $Vec3i$$Type): void
public "playAt"(level0: $Level$$Type, vec31: $Vec3$$Type, float2: float, float3: float, boolean4: boolean): void
public "playAt"(level0: $Level$$Type, double1: double, double2: double, double3: double, float4: float, float5: float, boolean6: boolean): void
public "playAt"(level0: $Level$$Type, vec3i1: $Vec3i$$Type, float2: float, float3: float, boolean4: boolean): void
/** Client only, do not use in server scripts */
public "playAutoReleasedSound"(booleanSupplier0: $BooleanSupplier$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean, int3: integer, float4: float, float5: float): $AutoReleasedSound
public "playFrom"(entity0: $Entity$$Type): void
public "playFrom"(entity0: $Entity$$Type, float1: float, float2: float): void
public "playOnServer"(level0: $Level$$Type, vec3i1: $Vec3i$$Type): void
public "playOnServer"(level0: $Level$$Type, vec3i1: $Vec3i$$Type, float2: float, float3: float): void
public "prepare"(): void
public "register"(consumer0: $Consumer$$Type<$SoundEvent$$Type>): void
public "write"(jsonObject0: $JsonObject$$Type): void
get "id"(): $ResourceLocation
get "mainEvent"(): $SoundEvent
get "subtitle"(): string
get "subtitleKey"(): string
}
}

declare module "com.gregtechceu.gtceu.api.sound.AutoReleasedSound" {
import { $SoundBufferLibrary$$Type } from "net.minecraft.client.sounds.SoundBufferLibrary"
import { $SoundEntry } from "com.gregtechceu.gtceu.api.sound.SoundEntry"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AudioStream } from "net.minecraft.client.sounds.AudioStream"
import { $AbstractTickableSoundInstance } from "net.minecraft.client.resources.sounds.AbstractTickableSoundInstance"
import { $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"
import { $BooleanSupplier } from "java.util.function.BooleanSupplier"

export class $AutoReleasedSound extends $AbstractTickableSoundInstance {
readonly "predicate": $BooleanSupplier
readonly "soundEntry": $SoundEntry

public "canPlaySound"(): boolean
public "canStartSilent"(): boolean
public static "createUnseededRandom"(): $RandomSource
public "getStream"(soundBufferLibrary0: $SoundBufferLibrary$$Type, sound1: $Sound$$Type, boolean2: boolean): $CompletableFuture<$AudioStream>
public "release"(): void
public "tick"(): void
}
}

