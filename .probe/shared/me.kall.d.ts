declare module "me.kall.duplicationless.event.ChunkTickEvent$Pre" {
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $ChunkTickEvent } from "me.kall.duplicationless.event.ChunkTickEvent"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ChunkTickEvent$Pre extends $ChunkTickEvent {
constructor(chunk: $LevelChunk$$Type, level: $ServerLevel$$Type, randomTickSpeed: integer)
constructor()

}
}

declare module "me.kall.duplicationless.event.BlockChangeEvent" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $BlockChangeEvent extends $Event {
constructor(level: $ServerLevel$$Type, oldState: $BlockState$$Type, newState: $BlockState$$Type, blockPos: $BlockPos$$Type)
constructor()

public "blockPos"(): long
public "chunkPos"(): long
public "dim"(): $ResourceLocation
public "level"(): $ServerLevel
public "newState"(): $BlockState
public "oldState"(): $BlockState
}
}

declare module "me.kall.doespotatotick.mixin.access.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {
"dpt$isDead"(): boolean
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "me.kall.duplicationless.event.ChunkTickEvent" {
import { $LevelChunk, $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ChunkTickEvent extends $Event {
constructor(chunk: $LevelChunk$$Type, level: $ServerLevel$$Type, randomTickSpeed: integer)
constructor()

public "getChunk"(): $LevelChunk
public "getLevel"(): $ServerLevel
public "randomTickSpeed"(): integer
get "chunk"(): $LevelChunk
get "level"(): $ServerLevel
}
}

declare module "me.kall.duplicationless.event.EntityChunkChangeEvent$Before" {
import { $EntityChunkChangeEvent } from "me.kall.duplicationless.event.EntityChunkChangeEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $EntityChunkChangeEvent$Before extends $EntityChunkChangeEvent {
constructor(entity: $Entity$$Type)
constructor()

}
}

declare module "me.kall.duplicationless.event.ReloadCommandEvent" {
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ReloadCommandEvent extends $Event {
readonly "server": $MinecraftServer

constructor(server: $MinecraftServer$$Type)
constructor()

}
}

declare module "me.kall.duplicationless.event.EntityChunkChangeEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $EntityChunkChangeEvent extends $EntityEvent {
constructor(entity: $Entity$$Type)
constructor()

}
}

declare module "me.kall.duplicationless.event.EntityChunkChangeEvent$Section" {
import { $EntityChunkChangeEvent } from "me.kall.duplicationless.event.EntityChunkChangeEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $EntityChunkChangeEvent$Section extends $EntityChunkChangeEvent {
constructor(entity: $Entity$$Type)
constructor()

}
}

declare module "me.kall.duplicationless.event.EntityChunkChangeEvent$Section$Before" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityChunkChangeEvent$Section } from "me.kall.duplicationless.event.EntityChunkChangeEvent$Section"

export class $EntityChunkChangeEvent$Section$Before extends $EntityChunkChangeEvent$Section {
constructor(entity: $Entity$$Type)
constructor()

}
}

declare module "me.kall.duplicationless.ext.RegistryEntry" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $RegistryEntry {
"registry$getName"(): $ResourceLocation
}

export namespace $RegistryEntry {
const NONE: $ResourceLocation
function get(item: $Item$$Type): $ResourceLocation
function get(block: $Block$$Type): $ResourceLocation
function get(state: $BlockState$$Type): $ResourceLocation
function get(entity: $Entity$$Type): $ResourceLocation
function get(stack: $ItemStack$$Type): $ResourceLocation
function get(type: $EntityType$$Type<any>): $ResourceLocation
}
export abstract class $RegistryEntry$$Static implements $RegistryEntry {
static readonly "NONE": $ResourceLocation

static "get"(item: $Item$$Type): $ResourceLocation
static "get"(block: $Block$$Type): $ResourceLocation
static "get"(state: $BlockState$$Type): $ResourceLocation
static "get"(entity: $Entity$$Type): $ResourceLocation
static "get"(stack: $ItemStack$$Type): $ResourceLocation
static "get"(type: $EntityType$$Type<any>): $ResourceLocation
}
}

declare module "me.kall.duplicationless.event.EntityChunkChangeEvent$Section$After" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityChunkChangeEvent$Section } from "me.kall.duplicationless.event.EntityChunkChangeEvent$Section"

export class $EntityChunkChangeEvent$Section$After extends $EntityChunkChangeEvent$Section {
constructor(entity: $Entity$$Type)
constructor()

}
}

declare module "me.kall.doespotatotick.mixin.access.RaidsAccessor" {
import { $Raid } from "net.minecraft.world.entity.raid.Raid"
import { $Map } from "java.util.Map"

export interface $RaidsAccessor {
"dpt$getRaids"(): $Map<integer, $Raid>
}

export namespace $RaidsAccessor {
const probejs$$marker: never
}
export abstract class $RaidsAccessor$$Static implements $RaidsAccessor {
}
}

declare module "me.kall.duplicationless.event.EntityChunkChangeEvent$After" {
import { $EntityChunkChangeEvent } from "me.kall.duplicationless.event.EntityChunkChangeEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $EntityChunkChangeEvent$After extends $EntityChunkChangeEvent {
constructor(entity: $Entity$$Type)
constructor()

}
}

declare module "me.kall.doespotatotick.ext.Tickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tickable {
"dpt$alwaysTick"(): boolean
"dpt$checkAlwaysTick"(): boolean
"dpt$setAlwaysTick"(boolean0: boolean): void
"dpt$setTickable"(boolean0: boolean): void
"dpt$tickable"(): boolean
}

export namespace $Tickable {
const probejs$$marker: never
}
export abstract class $Tickable$$Static implements $Tickable {
}
}

declare module "me.kall.doespotatotick.ext.Tickable$Level" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tickable$Level {
"dpt$hasRaids"(): boolean
"dpt$setValid"(boolean0: boolean): void
"dpt$valid"(): boolean
}

export namespace $Tickable$Level {
const probejs$$marker: never
}
export abstract class $Tickable$Level$$Static implements $Tickable$Level {
}
}

declare module "me.kall.duplicationless.event.ChunkTickEvent$Post" {
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $ChunkTickEvent } from "me.kall.duplicationless.event.ChunkTickEvent"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ChunkTickEvent$Post extends $ChunkTickEvent {
constructor(chunk: $LevelChunk$$Type, level: $ServerLevel$$Type, randomTickSpeed: integer)
constructor()

}
}

declare module "me.kall.duplicationless.data.EntityTracker$EntityFilterRegistryEvent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Class$$Type } from "java.lang.Class"

export class $EntityTracker$EntityFilterRegistryEvent extends $Event {
constructor()

public "register"(filterId: $ResourceLocation$$Type, filter: $Predicate$$Type<$Entity$$Type>): void
public "register"(filterId: $ResourceLocation$$Type, entityClass: $Class$$Type<any>): void
}
}

declare module "me.kall.duplicationless.data.EntityTracker$Filterable" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Object2ObjectMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"

export interface $EntityTracker$Filterable {
"filter$initialize"(object2ObjectMap0: $Object2ObjectMap$$Type<$ResourceLocation$$Type, $Predicate$$Type<$Entity$$Type>>): void
"filter$initialized"(): boolean
"filter$matched"(): $ObjectList<$ResourceLocation>
}

export namespace $EntityTracker$Filterable {
function getMatched(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
}
export abstract class $EntityTracker$Filterable$$Static implements $EntityTracker$Filterable {
static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
}
}

