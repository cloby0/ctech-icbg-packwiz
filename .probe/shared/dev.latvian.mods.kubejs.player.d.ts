declare module "dev.latvian.mods.kubejs.player.PlayerChatDecorateEventJS" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ChatEvent$ChatComponent, $ChatEvent$ChatComponent$$Type } from "dev.architectury.event.events.common.ChatEvent$ChatComponent"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

/**
 * Invoked when a player sends a chat message.
 * 
 * If cancelled (`PlayerEvents.chat`), the message will not be sent.
 */
export class $PlayerChatDecorateEventJS extends $PlayerEventJS {
constructor(player: $ServerPlayer$$Type, chatComponent: $ChatEvent$ChatComponent$$Type)

/** Gets the message that the player sent. */
public "getComponent"(): $Component
/** Gets the message that the player sent. */
public "getMessage"(): string
/** Gets the username of the player that sent the message. */
public "getUsername"(): string
/** Sets the message that the player sent. */
public "setComponent"(text: $Component$$Type): void
/** Sets the message that the player sent. */
public "setMessage"(text: $Component$$Type): void
get "chatComponent"(): $ChatEvent$ChatComponent
set "chatComponent"(value: $ChatEvent$ChatComponent$$Type)
get "component"(): $Component
get "message"(): string
get "username"(): string
set "component"(value: $Component$$Type)
set "message"(value: $Component$$Type)
}
}

declare module "dev.latvian.mods.kubejs.player.PlayerStatsJS" {
import { $Stat, $Stat$$Type } from "net.minecraft.stats.Stat"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $StatsCounter$$Type } from "net.minecraft.stats.StatsCounter"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerStatsJS {
readonly "player": $Player

constructor(p: $Player$$Type, s: $StatsCounter$$Type)

public "add"(stat: $Stat$$Type<any>, value: integer): void
public "get"(stat: $Stat$$Type<any>): integer
public "getAnimalsBred"(): integer
public "getBlocksMined"(block: $Block$$Type): integer
public "getCrouchDistance"(): integer
public "getDamageAbsorbed"(): integer
public "getDamageBlocked_by_shield"(): integer
public "getDamageDealt"(): integer
public "getDamageDealt_absorbed"(): integer
public "getDamageDealt_resisted"(): integer
public "getDamageResisted"(): integer
public "getDamageTaken"(): integer
public "getDeaths"(): integer
public "getFishCaught"(): integer
public "getItemsBroken"(item: $Item$$Type): integer
public "getItemsCrafted"(item: $Item$$Type): integer
public "getItemsDropped"(item: $Item$$Type): integer
public "getItemsPickedUp"(item: $Item$$Type): integer
public "getItemsUsed"(item: $Item$$Type): integer
public "getJumps"(): integer
public "getKilled"(entity: $EntityType$$Type<any>): integer
public "getKilledBy"(entity: $EntityType$$Type<any>): integer
public "getMobKills"(): integer
public "getPlayTime"(): integer
public "getPlayerKills"(): integer
public "getSprintDistance"(): integer
public "getSwimDistance"(): integer
public "getTimeCrouchTime"(): integer
public "getTimeSinceDeath"(): integer
public "getTimeSinceRest"(): integer
public "getWalkDistance"(): integer
public "set"(stat: $Stat$$Type<any>, value: integer): void
public static "statOf"(o: any): $Stat<any>
get "animalsBred"(): integer
get "crouchDistance"(): integer
get "damageAbsorbed"(): integer
get "damageBlocked_by_shield"(): integer
get "damageDealt"(): integer
get "damageDealt_absorbed"(): integer
get "damageDealt_resisted"(): integer
get "damageResisted"(): integer
get "damageTaken"(): integer
get "deaths"(): integer
get "fishCaught"(): integer
get "jumps"(): integer
get "mobKills"(): integer
get "playTime"(): integer
get "playerKills"(): integer
get "sprintDistance"(): integer
get "swimDistance"(): integer
get "timeCrouchTime"(): integer
get "timeSinceDeath"(): integer
get "timeSinceRest"(): integer
get "walkDistance"(): integer
}
}

declare module "dev.latvian.mods.kubejs.player.EntityArrayList" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $EntitySelector$$Type } from "net.minecraft.commands.arguments.selector.EntitySelector"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ArrayList } from "java.util.ArrayList"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream } from "java.util.stream.Stream"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $DataSenderKJS } from "dev.latvian.mods.kubejs.core.DataSenderKJS"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $MessageSenderKJS } from "dev.latvian.mods.kubejs.core.MessageSenderKJS"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $EntityArrayList extends $ArrayList<$Entity> implements $MessageSenderKJS, $DataSenderKJS {
readonly "level": $Level

constructor(l: $Level$$Type, entities: $Iterable$$Type<$Entity$$Type>)
constructor(l: $Level$$Type, size: integer)

public "addAllIterable"(entities: $Iterable$$Type<$Entity$$Type>): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "filter"(filter: $Predicate$$Type<$Entity$$Type>): $EntityArrayList
public "filterSelector"(selector: $EntitySelector$$Type): $EntityArrayList
public "getDisplayName"(): $Component
public "getFirst"(): $Entity
public "getName"(): $Component
public "kill"(): void
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$Entity>
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "setStatusMessage"(message: $Component$$Type): void
public "stream"(): $Stream<$Entity>
public "tell"(message: $Component$$Type): void
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "displayName"(): $Component
get "first"(): $Entity
get "name"(): $Component
set "statusMessage"(value: $Component$$Type)
}
}

declare module "dev.latvian.mods.kubejs.player.SimplePlayerEventJS" {
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SimplePlayerEventJS extends $PlayerEventJS {
constructor(p: $Player$$Type)

}
}

declare module "dev.latvian.mods.kubejs.player.AdvancementJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Advancement, $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Set } from "java.util.Set"

export class $AdvancementJS {
readonly "advancement": $Advancement

constructor(a: $Advancement$$Type)

public "addChild"(a: $AdvancementJS$$Type): void
public "getChildren"(): $Set<$AdvancementJS>
public "getDescription"(): $Component
public "getDisplayText"(): $Component
public "getId"(): $ResourceLocation
public "getParent"(): $AdvancementJS
public "getTitle"(): $Component
public "hasDisplay"(): boolean
public "id"(): $ResourceLocation
get "children"(): $Set<$AdvancementJS>
get "description"(): $Component
get "displayText"(): $Component
get "parent"(): $AdvancementJS
get "title"(): $Component
}
}

declare module "dev.latvian.mods.kubejs.player.PlayerEventJS" {
import { $LivingEntityEventJS } from "dev.latvian.mods.kubejs.entity.LivingEntityEventJS"

export class $PlayerEventJS extends $LivingEntityEventJS {
constructor()

/** Adds the specified game stage to the player */
public "addGameStage"(stage: string): void
/** Checks if the player has the specified game stage */
public "hasGameStage"(stage: string): boolean
/** Removes the specified game stage from the player */
public "removeGameStage"(stage: string): void
}
}

declare module "dev.latvian.mods.kubejs.player.PlayerRespawnedEventJS" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

/**
 * Invoked when a player respawns.
 * 
 * The reason of respawn can be either death or returning from the end.
 */
export class $PlayerRespawnedEventJS extends $PlayerEventJS {
constructor(player: $ServerPlayer$$Type, oldPlayer: $ServerPlayer$$Type, keepData: boolean)

/** Gets whether the player's data was kept, e.g. when returning from the end. */
public "getKeepData"(): boolean
/** Gets the player that was before respawn. Note that this entity is already removed from the world. */
public "getOldPlayer"(): $ServerPlayer
get "keepData"(): boolean
get "oldPlayer"(): $ServerPlayer
}
}

declare module "dev.latvian.mods.kubejs.player.ChestEventJS" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container } from "net.minecraft.world.Container"
import { $InventoryEventJS } from "dev.latvian.mods.kubejs.player.InventoryEventJS"
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
export class $ChestEventJS extends $InventoryEventJS {
constructor(player: $Player$$Type, menu: $AbstractContainerMenu$$Type)

/** Gets the chest block. */
public "getBlock"(): $BlockContainerJS
/** Gets the chest inventory. */
public "getInventory"(): $Container
get "block"(): $BlockContainerJS
get "inventory"(): $Container
}
}

declare module "dev.latvian.mods.kubejs.player.PlayerAdvancementEventJS" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $AdvancementJS } from "dev.latvian.mods.kubejs.player.AdvancementJS"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

/** Invoked when a player gets an advancement. */
export class $PlayerAdvancementEventJS extends $PlayerEventJS {
constructor(player: $ServerPlayer$$Type, advancement: $Advancement$$Type)

/** Returns the advancement that was obtained. */
public "getAdvancement"(): $AdvancementJS
get "advancement"(): $AdvancementJS
}
}

declare module "dev.latvian.mods.kubejs.player.KubeJSInventoryListener" {
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ContainerListener } from "net.minecraft.world.inventory.ContainerListener"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $KubeJSInventoryListener implements $ContainerListener {
readonly "player": $Player

constructor(p: $Player$$Type)

public "dataChanged"(container: $AbstractContainerMenu$$Type, id: integer, value: integer): void
public "slotChanged"(container: $AbstractContainerMenu$$Type, index: integer, stack: $ItemStack$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.player.InventoryChangedEventJS" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player's inventory changes. */
export class $InventoryChangedEventJS extends $PlayerEventJS {
constructor(p: $Player$$Type, is: $ItemStack$$Type, s: integer)

/** Gets the item that was changed. */
public "getItem"(): $ItemStack
/** Gets the slot that was changed. */
public "getSlot"(): integer
get "item"(): $ItemStack
get "slot"(): integer
}
}

declare module "dev.latvian.mods.kubejs.player.InventoryEventJS" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** Invoked when a player opens or closes a container. */
export class $InventoryEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, menu: $AbstractContainerMenu$$Type)

/** Gets the container that was opened or closed. */
public "getInventoryContainer"(): $AbstractContainerMenu
get "inventoryContainer"(): $AbstractContainerMenu
}
}

