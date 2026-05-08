declare module "net.minecraft.world.level.timers.TimerCallback" {
import { $TimerQueue$$Type } from "net.minecraft.world.level.timers.TimerQueue"

export interface $TimerCallback<T = any> {
"handle"(t0: T, timerQueue1: $TimerQueue$$Type<T>, long2: long): void
}

export namespace $TimerCallback {
const probejs$$marker: never
}
export abstract class $TimerCallback$$Static<T = any> implements $TimerCallback<T> {
}
}

declare module "net.minecraft.world.level.timers.TimerQueue" {
import { $Stream$$Type } from "java.util.stream.Stream"
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $TimerCallback$$Type } from "net.minecraft.world.level.timers.TimerCallback"
import { $Set } from "java.util.Set"
import { $TimerCallbacks$$Type } from "net.minecraft.world.level.timers.TimerCallbacks"
import { $ListTag } from "net.minecraft.nbt.ListTag"

export class $TimerQueue<T = any> {
constructor(timerCallbacks0: $TimerCallbacks$$Type<T>, stream1: $Stream$$Type<$Dynamic$$Type<any>>)
constructor(timerCallbacks0: $TimerCallbacks$$Type<T>)

public "getEventsIds"(): $Set<string>
public "remove"(string0: string): integer
public "schedule"(string0: string, long1: long, timerCallback2: $TimerCallback$$Type<T>): void
public "store"(): $ListTag
public "tick"(t0: T, long1: long): void
get "eventsIds"(): $Set<string>
}
}

declare module "net.minecraft.world.level.timers.TimerCallbacks" {
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TimerCallback$Serializer$$Type } from "net.minecraft.world.level.timers.TimerCallback$Serializer"
import { $TimerCallback, $TimerCallback$$Type } from "net.minecraft.world.level.timers.TimerCallback"

export class $TimerCallbacks<C = any> {
static readonly "SERVER_CALLBACKS": $TimerCallbacks<$MinecraftServer>

constructor()

public "deserialize"(compoundTag0: $CompoundTag$$Type): $TimerCallback<C>
public "register"(serializer0: $TimerCallback$Serializer$$Type<C, any>): $TimerCallbacks<C>
public "serialize"<T extends $TimerCallback<C>>(t0: T): $CompoundTag
}
}

declare module "net.minecraft.world.level.timers.TimerCallback$Serializer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TimerCallback, $TimerCallback$$Type } from "net.minecraft.world.level.timers.TimerCallback"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $TimerCallback$Serializer<T = any, C extends $TimerCallback<T> = $TimerCallback<T>> {
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<any>)

public "deserialize"(compoundTag0: $CompoundTag$$Type): C
public "getCls"(): $Class<any>
public "getId"(): $ResourceLocation
public "serialize"(compoundTag0: $CompoundTag$$Type, c1: C): void
get "cls"(): $Class<any>
get "id"(): $ResourceLocation
}
}

