declare module "gg.moonflower.etched.api.record.PlayableRecord" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackData } from "gg.moonflower.etched.api.record.TrackData"
import { $Proxy$$Type } from "java.net.Proxy"
import { $SoundInstance } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Optional } from "java.util.Optional"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AlbumCover } from "gg.moonflower.etched.api.record.AlbumCover"

export interface $PlayableRecord {
"canPlay"(stack: $ItemStack$$Type): boolean
/** Client only, do not use in server scripts */
"createEntitySound"(stack: $ItemStack$$Type, entity: $Entity$$Type, track: integer, attenuationDistance: integer): $Optional<$SoundInstance>
/** Client only, do not use in server scripts */
"createEntitySound"(stack: $ItemStack$$Type, entity: $Entity$$Type, track: integer): $Optional<$SoundInstance>
"getAlbum"(itemStack0: $ItemStack$$Type): $Optional<$TrackData>
/** Client only, do not use in server scripts */
"getAlbumCover"(itemStack0: $ItemStack$$Type, proxy1: $Proxy$$Type, resourceManager2: $ResourceManager$$Type): $CompletableFuture<$AlbumCover>
"getMusic"(itemStack0: $ItemStack$$Type): $Optional<$TrackData[]>
"getTrackCount"(itemStack0: $ItemStack$$Type): integer
}

export namespace $PlayableRecord {
function canShowMessage(x: double, y: double, z: double): boolean
function getStackAlbum(stack: $ItemStack$$Type): $Optional<$TrackData>
function getStackMusic(stack: $ItemStack$$Type): $Optional<$TrackData[]>
function getStackTrackCount(stack: $ItemStack$$Type): integer
function isPlayableRecord(stack: $ItemStack$$Type): boolean
function playEntityRecord(entity: $Entity$$Type, record: $ItemStack$$Type, restart: boolean): void
function stopEntityRecord(entity: $Entity$$Type): void
}
export abstract class $PlayableRecord$$Static implements $PlayableRecord {
/** Client only, do not use in server scripts */
static "canShowMessage"(x: double, y: double, z: double): boolean
static "getStackAlbum"(stack: $ItemStack$$Type): $Optional<$TrackData>
static "getStackMusic"(stack: $ItemStack$$Type): $Optional<$TrackData[]>
static "getStackTrackCount"(stack: $ItemStack$$Type): integer
static "isPlayableRecord"(stack: $ItemStack$$Type): boolean
static "playEntityRecord"(entity: $Entity$$Type, record: $ItemStack$$Type, restart: boolean): void
static "stopEntityRecord"(entity: $Entity$$Type): void
}
}

declare module "gg.moonflower.etched.core.mixin.StructureTemplatePoolAccessor" {
import { $ObjectArrayList } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor {
"getTemplates"(): $ObjectArrayList<$StructurePoolElement>
get "templates"(): $ObjectArrayList<$StructurePoolElement>
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {
}
}

declare module "gg.moonflower.etched.core.mixin.client.GuiAccessor" {
import { $Component } from "net.minecraft.network.chat.Component"

export interface $GuiAccessor {
"getOverlayMessageString"(): $Component
"setOverlayMessageTime"(int0: integer): void
get "overlayMessageString"(): $Component
set "overlayMessageTime"(value: integer)
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
export abstract class $GuiAccessor$$Static implements $GuiAccessor {
}
}

declare module "gg.moonflower.etched.api.record.TrackData" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"

export class $TrackData extends $Record {
static readonly "CODEC": $Codec<$TrackData>
static readonly "EMPTY": $TrackData

constructor(url: string, artist: string, title: $Component$$Type)

public "artist"(): string
public "getDisplayName"(): $Component
public static "isLocalSound"(url: string): boolean
public static "isValid"(nbt: $CompoundTag$$Type): boolean
public static "isValidURL"(url: string): boolean
public "save"(nbt: $CompoundTag$$Type): $CompoundTag
public "title"(): $Component
public "url"(): string
public "withArtist"(artist: string): $TrackData
public "withTitle"(title: string): $TrackData
public "withTitle"(title: $Component$$Type): $TrackData
public "withUrl"(url: string): $TrackData
get "displayName"(): $Component
}
}

declare module "gg.moonflower.etched.core.mixin.client.LevelRendererAccessor" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Map } from "java.util.Map"
import { $SoundInstance } from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $LevelRendererAccessor {
"getPlayingRecords"(): $Map<$BlockPos, $SoundInstance>
get "playingRecords"(): $Map<$BlockPos, $SoundInstance>
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "gg.moonflower.etched.api.record.AlbumCover" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $NativeImage$$Type } from "com.mojang.blaze3d.platform.NativeImage"
import { $ModelResourceLocation$$Type } from "net.minecraft.client.resources.model.ModelResourceLocation"

export interface $AlbumCover {
}

export namespace $AlbumCover {
const EMPTY: $AlbumCover
function of(image: $NativeImage$$Type): $AlbumCover
function of(location: $ResourceLocation$$Type): $AlbumCover
function of(location: $ModelResourceLocation$$Type): $AlbumCover
}
export abstract class $AlbumCover$$Static implements $AlbumCover {
static readonly "EMPTY": $AlbumCover

static "of"(image: $NativeImage$$Type): $AlbumCover
static "of"(location: $ResourceLocation$$Type): $AlbumCover
static "of"(location: $ModelResourceLocation$$Type): $AlbumCover
}
}

