declare module "dev.uncandango.alltheleaks.mixin.core.accessor.LevelAccessor" {
import { $List } from "java.util.List"
import { $TickingBlockEntity } from "net.minecraft.world.level.block.entity.TickingBlockEntity"

export interface $LevelAccessor {
"atl$getBlockEntityTickers"(): $List<$TickingBlockEntity>
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
export abstract class $LevelAccessor$$Static implements $LevelAccessor {
}
}

declare module "dev.uncandango.alltheleaks.mixin.Trackable" {
import { $IdentityHashMap } from "java.util.IdentityHashMap"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $ReentrantLock } from "java.util.concurrent.locks.ReentrantLock"
import { $Map } from "java.util.Map"
import { $Class } from "java.lang.Class"
import { $Hash$Strategy } from "it.unimi.dsi.fastutil.Hash$Strategy"
import { $WeakReference } from "java.lang.ref.WeakReference"

export interface $Trackable {
"atl$getBaseClass"(): $Class<any>
"startTracking"(): void
"wrap"(): $WeakReference<$Trackable>
}

export namespace $Trackable {
const LOCK: $ReentrantLock
const TRACKABLE_MAP: $IdentityHashMap<$Class<any>, $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>>
const WEAK_REFERENCE_STRATEGY: $Hash$Strategy<$WeakReference<$Trackable>>
function clearNullReferences(): void
function createWeakRefBasedSet(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
function getSummary(): $Map<$Class<any>, $Map<$Class<any>, long>>
function startTracking(object0: any): void
}
export abstract class $Trackable$$Static implements $Trackable {
static readonly "LOCK": $ReentrantLock
static readonly "TRACKABLE_MAP": $IdentityHashMap<$Class<any>, $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>>
static readonly "WEAK_REFERENCE_STRATEGY": $Hash$Strategy<$WeakReference<$Trackable>>

static "clearNullReferences"(): void
static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
static "startTracking"(object0: any): void
}
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.LevelChunkAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelChunkAccessor {
"atl$isInLevel"(): boolean
}

export namespace $LevelChunkAccessor {
const probejs$$marker: never
}
export abstract class $LevelChunkAccessor$$Static implements $LevelChunkAccessor {
}
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.BaseScreenAccessor" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $BaseScreenAccessor {
"atl$setprevScreen"(screen0: $Screen$$Type): void
}

export namespace $BaseScreenAccessor {
const probejs$$marker: never
}
export abstract class $BaseScreenAccessor$$Static implements $BaseScreenAccessor {
}
}

declare module "dev.uncandango.alltheleaks.mixin.UpdateableLevel" {
import { $HashMultimap } from "com.google.common.collect.HashMultimap"
import { $Class } from "java.lang.Class"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $WeakReference } from "java.lang.ref.WeakReference"

export interface $UpdateableLevel<T = any> {
"atl$onClientLevelUpdated"(clientLevel0: $ClientLevel$$Type): void
}

export namespace $UpdateableLevel {
const INSTANCES: $HashMultimap<$Class<any>, $WeakReference<$UpdateableLevel<any>>>
function register<O extends $UpdateableLevel<any>>(o0: O): void
}
export abstract class $UpdateableLevel$$Static<T = any> implements $UpdateableLevel<T> {
static readonly "INSTANCES": $HashMultimap<$Class<any>, $WeakReference<$UpdateableLevel<any>>>

static "register"<O extends $UpdateableLevel<any>>(o0: O): void
}
}

declare module "dev.uncandango.alltheleaks.mixin.UpdateableLevel$RenderEnginesUpdated" {
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"

export class $UpdateableLevel$RenderEnginesUpdated extends $LevelEvent {
constructor(clientLevel0: $ClientLevel$$Type)
constructor()

}
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.ConnectionAccessor" {
import { $PacketListener$$Type } from "net.minecraft.network.PacketListener"

export interface $ConnectionAccessor {
"setPacketListener"(packetListener0: $PacketListener$$Type): void
set "packetListener"(value: $PacketListener$$Type)
}

export namespace $ConnectionAccessor {
const probejs$$marker: never
}
export abstract class $ConnectionAccessor$$Static implements $ConnectionAccessor {
}
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.PlayerAdvancementsAccessor" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"

export interface $PlayerAdvancementsAccessor {
"getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}

export namespace $PlayerAdvancementsAccessor {
const probejs$$marker: never
}
export abstract class $PlayerAdvancementsAccessor$$Static implements $PlayerAdvancementsAccessor {
}
}

declare module "dev.uncandango.alltheleaks.plugins.ATLJeiPlugin$RuntimeUnavailableEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ATLJeiPlugin$RuntimeUnavailableEvent extends $Event {
constructor()

}
}

declare module "dev.uncandango.alltheleaks.mixin.core.main.IngredientKJSMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IngredientKJSMixin {
}

export namespace $IngredientKJSMixin {
const probejs$$marker: never
}
export abstract class $IngredientKJSMixin$$Static implements $IngredientKJSMixin {
}
}

declare module "dev.uncandango.alltheleaks.mixin.UpdateablePlayer" {
import { $HashMultimap } from "com.google.common.collect.HashMultimap"
import { $Class } from "java.lang.Class"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $WeakReference } from "java.lang.ref.WeakReference"

export interface $UpdateablePlayer<T = any> {
"atl$onClientPlayerUpdated"(localPlayer0: $LocalPlayer$$Type): void
}

export namespace $UpdateablePlayer {
const INSTANCES: $HashMultimap<$Class<any>, $WeakReference<$UpdateablePlayer<any>>>
function register<O extends $UpdateablePlayer<any>>(o0: O): void
}
export abstract class $UpdateablePlayer$$Static<T = any> implements $UpdateablePlayer<T> {
static readonly "INSTANCES": $HashMultimap<$Class<any>, $WeakReference<$UpdateablePlayer<any>>>

static "register"<O extends $UpdateablePlayer<any>>(o0: O): void
}
}

