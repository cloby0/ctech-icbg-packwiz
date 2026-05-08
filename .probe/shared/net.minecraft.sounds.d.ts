declare module "net.minecraft.sounds.SoundSource" {
import { $Enum } from "java.lang.Enum"

export class $SoundSource extends $Enum<$SoundSource> {
static readonly "AMBIENT": $SoundSource
static readonly "BLOCKS": $SoundSource
static readonly "HOSTILE": $SoundSource
static readonly "MASTER": $SoundSource
static readonly "MUSIC": $SoundSource
static readonly "NEUTRAL": $SoundSource
static readonly "PLAYERS": $SoundSource
static readonly "RECORDS": $SoundSource
static readonly "VOICE": $SoundSource
static readonly "WEATHER": $SoundSource

public "getName"(): string
public static "valueOf"(string0: string): $SoundSource
public static "values"(): $SoundSource[]
get "name"(): string
}
}

declare module "net.minecraft.sounds.Music" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"

export class $Music {
static readonly "CODEC": $Codec<$Music>

constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, int1: integer, int2: integer, boolean3: boolean)

public "getEvent"(): $Holder<$SoundEvent>
public "getMaxDelay"(): integer
public "getMinDelay"(): integer
public "replaceCurrentMusic"(): boolean
get "event"(): $Holder<$SoundEvent>
get "maxDelay"(): integer
get "minDelay"(): integer
}
}

