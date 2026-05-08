declare module "com.leobeliik.extremesoundmuffler.utils.Anchor" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $SortedMap, $SortedMap$$Type } from "java.util.SortedMap"

export class $Anchor {
constructor(int0: integer, string1: string, blockPos2: $BlockPos$$Type, resourceLocation3: $ResourceLocation$$Type, int4: integer, sortedMap5: $SortedMap$$Type<string, double>)
constructor(int0: integer, string1: string)

public "addSound"(resourceLocation0: $ResourceLocation$$Type, double1: double): void
public "deleteAnchor"(): void
public "editAnchor"(string0: string, int1: integer): void
public static "getAnchor"(soundInstance0: $SoundInstance$$Type): $Anchor
public "getAnchorId"(): integer
public "getAnchorPos"(): $BlockPos
public "getDimension"(): $ResourceLocation
public "getMuffledSounds"(): $SortedMap<$ResourceLocation, double>
public "getName"(): string
public "getRadius"(): integer
public "getX"(): string
public "getY"(): string
public "getZ"(): string
public "removeSound"(resourceLocation0: $ResourceLocation$$Type): void
public "replaceSound"(resourceLocation0: $ResourceLocation$$Type, double1: double): void
public "setAnchor"(int0: integer): void
public "setMuffledSounds"(sortedMap0: $SortedMap$$Type<$ResourceLocation$$Type, double>): void
public "setRadius"(int0: integer): void
get "anchorId"(): integer
get "anchorPos"(): $BlockPos
get "dimension"(): $ResourceLocation
get "muffledSounds"(): $SortedMap<$ResourceLocation, double>
get "name"(): string
get "radius"(): integer
get "x"(): string
get "y"(): string
get "z"(): string
set "anchor"(value: integer)
set "muffledSounds"(value: $SortedMap$$Type<$ResourceLocation$$Type, double>)
set "radius"(value: integer)
}
}

declare module "com.leobeliik.extremesoundmuffler.interfaces.ISoundLists" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Map } from "java.util.Map"
import { $Anchor } from "com.leobeliik.extremesoundmuffler.utils.Anchor"
import { $Set } from "java.util.Set"

export interface $ISoundLists {
}

export namespace $ISoundLists {
const anchorList: $List<$Anchor>
const forbiddenSounds: $Set<string>
const modsMuffled: $Set<string>
const muffledSounds: $Map<$ResourceLocation, double>
const recentSoundsList: $List<$ResourceLocation>
const soundsList: $List<$ResourceLocation>
}
export abstract class $ISoundLists$$Static implements $ISoundLists {
static readonly "anchorList": $List<$Anchor>
static readonly "forbiddenSounds": $Set<string>
static readonly "modsMuffled": $Set<string>
static readonly "muffledSounds": $Map<$ResourceLocation, double>
static readonly "recentSoundsList": $List<$ResourceLocation>
static readonly "soundsList": $List<$ResourceLocation>

}
}

