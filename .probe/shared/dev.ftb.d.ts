declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$QuestEvent" {
import { $ObjectCompletedEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import { $Quest, $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ObjectCompletedEvent$QuestEvent extends $ObjectCompletedEvent<$Quest> {
constructor(d: $QuestProgressEventData$$Type<$Quest$$Type>)

public "getQuest"(): $Quest
get "quest"(): $Quest
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSTeamData" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $ProgressChange$$Type } from "dev.ftb.mods.ftbquests.util.ProgressChange"
import { $TeamData } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $BaseQuestFile } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"

export class $FTBQuestsKubeJSTeamData {
constructor()

public "addProgress"(id: any, progress: long): boolean
public "canStartQuest"(id: any): boolean
public "changeProgress"(id: any, consumer: $Consumer$$Type<$ProgressChange$$Type>): void
public "complete"(id: any): void
public "getData"(): $TeamData
public "getFile"(): $BaseQuestFile
public "getLocked"(): boolean
public "getOnlineMembers"(): $EntityArrayList
public "getRelativeProgress"(id: any): integer
public "getTaskProgress"(id: any): long
public "isCompleted"(id: any): boolean
public "isStarted"(id: any): boolean
public "reset"(id: any): void
public "setLocked"(v: boolean): void
get "data"(): $TeamData
get "file"(): $BaseQuestFile
get "locked"(): boolean
get "onlineMembers"(): $EntityArrayList
set "locked"(value: boolean)
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSTeamDataWrapper" {
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $FTBQuestsKubeJSTeamData } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSTeamData"

export class $FTBQuestsKubeJSTeamDataWrapper extends $FTBQuestsKubeJSTeamData {
constructor(d: $TeamData$$Type)

}
}

declare module "dev.ftb.mods.ftblibrary.ui.input.Key" {
import { $InputConstants$Key } from "com.mojang.blaze3d.platform.InputConstants$Key"
import { $KeyModifiers } from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"

export class $Key {
readonly "keyCode": integer
readonly "modifiers": $KeyModifiers
readonly "scanCode": integer

constructor(k: integer, s: integer, m: integer)

public "backspace"(): boolean
public "copy"(): boolean
public "cut"(): boolean
public "deselectAll"(): boolean
public "enter"(): boolean
public "esc"(): boolean
public "escOrInventory"(): boolean
public "getInputMapping"(): $InputConstants$Key
public "is"(k: integer): boolean
public "paste"(): boolean
public "selectAll"(): boolean
get "inputMapping"(): $InputConstants$Key
}
}

declare module "dev.ftb.mods.ftblibrary.ui.input.MouseButton" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MouseButton {
static readonly "BACK": $MouseButton
static readonly "LEFT": $MouseButton
static readonly "MIDDLE": $MouseButton
static readonly "NEXT": $MouseButton
static readonly "RIGHT": $MouseButton
readonly "id": integer

public static "get"(i: integer): $MouseButton
public "getId"(): integer
public "isLeft"(): boolean
public "isMiddle"(): boolean
public "isRight"(): boolean
get "left"(): boolean
get "middle"(): boolean
get "right"(): boolean
}
}

declare module "dev.ftb.mods.ftbteams.api.TeamMessage" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $UUID } from "java.util.UUID"

export interface $TeamMessage {
"date"(): long
"sender"(): $UUID
"text"(): $Component
}

export namespace $TeamMessage {
const probejs$$marker: never
}
export abstract class $TeamMessage$$Static implements $TeamMessage {
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$FileEvent" {
import { $ObjectStartedEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import { $BaseQuestFile, $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ObjectStartedEvent$FileEvent extends $ObjectStartedEvent<$BaseQuestFile> {
constructor(d: $QuestProgressEventData$$Type<$BaseQuestFile$$Type>)

public "getFile"(): $BaseQuestFile
get "file"(): $BaseQuestFile
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbchunks.kubejs.BeforeEventJS" {
import { $ClaimResult, $ClaimResult$$Type } from "dev.ftb.mods.ftbchunks.api.ClaimResult"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $AfterEventJS } from "dev.ftb.mods.ftbxmodcompat.ftbchunks.kubejs.AfterEventJS"
import { $ClaimedChunk$$Type } from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"

export class $BeforeEventJS extends $AfterEventJS {
constructor(source: $CommandSourceStack$$Type, chunk: $ClaimedChunk$$Type)

public "getResult"(): $ClaimResult
public "setCustomResult"(messageKey: string): void
public "setResult"(r: $ClaimResult$$Type): void
get "result"(): $ClaimResult
set "customResult"(value: string)
set "result"(value: $ClaimResult$$Type)
}
}

declare module "dev.ftb.mods.ftbquests.quest.task.CustomTask$Data" {
import { $TeamData, $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $CustomTask, $CustomTask$$Type } from "dev.ftb.mods.ftbquests.quest.task.CustomTask"
import { $Record } from "java.lang.Record"

export class $CustomTask$Data extends $Record {
constructor(task: $CustomTask$$Type, teamData: $TeamData$$Type)

public "addProgress"(l: long): void
public "getProgress"(): long
public "setProgress"(l: long): void
public "task"(): $CustomTask
public "teamData"(): $TeamData
get "progress"(): long
set "progress"(value: long)
}
}

declare module "dev.ftb.mods.ftbchunks.api.ClaimedChunkManager" {
import { $Team$$Type } from "dev.ftb.mods.ftbteams.api.Team"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ClaimedChunk, $ClaimedChunk$$Type } from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ChunkTeamData } from "dev.ftb.mods.ftbchunks.api.ChunkTeamData"
import { $ChunkDimPos$$Type } from "dev.ftb.mods.ftblibrary.math.ChunkDimPos"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Protection$$Type } from "dev.ftb.mods.ftbchunks.api.Protection"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map } from "java.util.Map"
import { $Long2ObjectMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ClaimedChunkManager {
"getAllClaimedChunks"(): $Collection<$ClaimedChunk>
"getBypassProtection"(uUID0: $UUID$$Type): boolean
"getChunk"(chunkDimPos0: $ChunkDimPos$$Type): $ClaimedChunk
"getClaimedChunksByTeam"(predicate0: $Predicate$$Type<$ClaimedChunk$$Type>): $Map<$UUID, $Collection<$ClaimedChunk>>
"getForceLoadedChunks"(): $Map<$ResourceKey<$Level>, $Long2ObjectMap<$UUID>>
"getForceLoadedChunks"(resourceKey0: $ResourceKey$$Type<$Level>): $Long2ObjectMap<$UUID>
"getOrCreateData"(serverPlayer0: $ServerPlayer$$Type): $ChunkTeamData
"getOrCreateData"(team0: $Team$$Type): $ChunkTeamData
"getPersonalData"(uUID0: $UUID$$Type): $ChunkTeamData
"isChunkForceLoaded"(chunkDimPos0: $ChunkDimPos$$Type): boolean
"setBypassProtection"(uUID0: $UUID$$Type, boolean1: boolean): void
"shouldPreventInteraction"(entity0: $Entity$$Type, interactionHand1: $InteractionHand$$Type, blockPos2: $BlockPos$$Type, protection3: $Protection$$Type, entity4: $Entity$$Type): boolean
get "allClaimedChunks"(): $Collection<$ClaimedChunk>
get "forceLoadedChunks"(): $Map<$ResourceKey<$Level>, $Long2ObjectMap<$UUID>>
}

export namespace $ClaimedChunkManager {
const probejs$$marker: never
}
export abstract class $ClaimedChunkManager$$Static implements $ClaimedChunkManager {
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent" {
import { $ObjectProgressEvent } from "dev.ftb.mods.ftbquests.events.ObjectProgressEvent"
import { $EventActor } from "dev.architectury.event.EventActor"
import { $ObjectStartedEvent$TaskEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$TaskEvent"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $ObjectStartedEvent$ChapterEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$ChapterEvent"
import { $ObjectStartedEvent$FileEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$FileEvent"
import { $ObjectStartedEvent$QuestEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$QuestEvent"
import { $Event } from "dev.architectury.event.Event"

export class $ObjectStartedEvent<T extends $QuestObject = $QuestObject> extends $ObjectProgressEvent<T> {
static readonly "CHAPTER": $Event<$EventActor<$ObjectStartedEvent$ChapterEvent>>
static readonly "FILE": $Event<$EventActor<$ObjectStartedEvent$FileEvent>>
static readonly "GENERIC": $Event<$EventActor<$ObjectStartedEvent<any>>>
static readonly "QUEST": $Event<$EventActor<$ObjectStartedEvent$QuestEvent>>
static readonly "TASK": $Event<$EventActor<$ObjectStartedEvent$TaskEvent>>

}
}

declare module "dev.ftb.mods.ftbteams.api.property.PrivacyMode" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $PrivacyMode extends $Enum<$PrivacyMode> implements $StringRepresentable {
static readonly "ALLIES": $PrivacyMode
static readonly "NAME_MAP": $NameMap<$PrivacyMode>
static readonly "PRIVATE": $PrivacyMode
static readonly "PUBLIC": $PrivacyMode
static readonly "VALUES": $PrivacyMode[]
readonly "name": string

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(name: string): $PrivacyMode
public static "values"(): $PrivacyMode[]
get "serializedName"(): string
}
}

declare module "dev.ftb.mods.ftbquests.quest.task.CustomTask" {
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $Predicate } from "java.util.function.Predicate"
import { $CustomTask$Check$$Type } from "dev.ftb.mods.ftbquests.quest.task.CustomTask$Check"
import { $QuestObjectBase } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import { $Task } from "dev.ftb.mods.ftbquests.quest.task.Task"

export class $CustomTask extends $Task {
static readonly "PREDICATE": $Predicate<$QuestObjectBase>

constructor(id: long, quest: $Quest$$Type)

public "setCheck"(check: $CustomTask$Check$$Type): void
public "setCheckTimer"(checkTimer: integer): void
public "setEnableButton"(enableButton: boolean): void
public "setMaxProgress"(maxProgress: long): void
set "check"(value: $CustomTask$Check$$Type)
set "checkTimer"(value: integer)
set "enableButton"(value: boolean)
set "maxProgress"(value: long)
}
}

declare module "dev.ftb.mods.ftbessentials.mixin.PlayerListAccess" {
import { $Map } from "java.util.Map"
import { $ServerStatsCounter } from "net.minecraft.stats.ServerStatsCounter"
import { $UUID } from "java.util.UUID"

export interface $PlayerListAccess {
"getStats"(): $Map<$UUID, $ServerStatsCounter>
get "stats"(): $Map<$UUID, $ServerStatsCounter>
}

export namespace $PlayerListAccess {
const probejs$$marker: never
}
export abstract class $PlayerListAccess$$Static implements $PlayerListAccess {
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$TaskEvent" {
import { $ObjectStartedEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import { $Task, $Task$$Type } from "dev.ftb.mods.ftbquests.quest.task.Task"

export class $ObjectStartedEvent$TaskEvent extends $ObjectStartedEvent<$Task> {
constructor(d: $QuestProgressEventData$$Type<$Task$$Type>)

public "getTask"(): $Task
get "task"(): $Task
}
}

declare module "dev.ftb.mods.ftblibrary.config.StringConfig" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $ConfigFromString } from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $Pattern, $Pattern$$Type } from "java.util.regex.Pattern"

export class $StringConfig extends $ConfigFromString<string> {
static readonly "COLOR": $Color4I
readonly "pattern": $Pattern

constructor(p: $Pattern$$Type)
constructor()

public "getColor"(v: string): $Color4I
public "getStringForGUI"(v: string): $Component
}
}

declare module "dev.ftb.mods.ftblibrary.config.Tristate" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Enum } from "java.lang.Enum"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $Tristate extends $Enum<$Tristate> {
static readonly "DEFAULT": $Tristate
static readonly "FALSE": $Tristate
static readonly "NAME_MAP": $NameMap<$Tristate>
static readonly "TRUE": $Tristate
static readonly "VALUES": $Tristate[]
readonly "color": $Color4I
readonly "displayName": string
readonly "icon": $Icon
readonly "name": string
readonly "result": $InteractionResult

public "get"(def: boolean): boolean
public "getOpposite"(): $Tristate
public "isDefault"(): boolean
public "isFalse"(): boolean
public "isTrue"(): boolean
public static "read"(nbt: $CompoundTag$$Type, key: string): $Tristate
public static "read"(buffer: $FriendlyByteBuf$$Type): $Tristate
public static "valueOf"(name: string): $Tristate
public static "values"(): $Tristate[]
public "write"(buffer: $FriendlyByteBuf$$Type): void
public "write"(nbt: $CompoundTag$$Type, key: string): void
get "opposite"(): $Tristate
get "default"(): boolean
get "false"(): boolean
get "true"(): boolean
}
}

declare module "dev.ftb.mods.ftblibrary.icon.Icon" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $PixelBuffer } from "dev.ftb.mods.ftblibrary.math.PixelBuffer"
import { $Drawable } from "dev.ftb.mods.ftblibrary.icon.Drawable"
import { $Color4I, $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"

export class $Icon implements $Drawable {
constructor()

public "aspectRatio"(): double
public "combineWith"(icon: $Icon$$Type): $Icon
public "combineWith"(...icons: $Icon$$Type[]): $Icon
public "copy"(): $Icon
public "createPixelBuffer"(): $PixelBuffer
/** Client only, do not use in server scripts */
public "draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
/** Client only, do not use in server scripts */
public "draw3D"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public static "empty"(): $Color4I
public static "getIcon"(id: string): $Icon
public static "getIcon"(json: $JsonElement$$Type): $Icon
public static "getIcon"(id: $ResourceLocation$$Type): $Icon
public "getIngredient"(): any
public "getJson"(): $JsonElement
public "getPixelBufferFrameCount"(): integer
public "hasPixelBuffer"(): boolean
public "isEmpty"(): boolean
public "withBorder"(color: $Color4I$$Type, roundEdges: boolean): $Icon
public "withColor"(color: $Color4I$$Type): $Icon
public "withPadding"(padding: integer): $Icon
public "withTint"(color: $Color4I$$Type): $Icon
public "withUV"(u0: float, v0: float, u1: float, v1: float): $Icon
public "withUV"(x: float, y: float, w: float, h: float, tw: float, th: float): $Icon
get "ingredient"(): any
get "json"(): $JsonElement
get "pixelBufferFrameCount"(): integer
}
}

declare module "dev.ftb.mods.ftbteams.api.Team" {
import { $TeamRank, $TeamRank$$Type } from "dev.ftb.mods.ftbteams.api.TeamRank"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Collection } from "java.util.Collection"
import { $TeamPropertyCollection } from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"
import { $Set } from "java.util.Set"
import { $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $TeamProperty$$Type } from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import { $TeamMessage } from "dev.ftb.mods.ftbteams.api.TeamMessage"
import { $Map } from "java.util.Map"

export interface $Team {
"createParty"(string0: string, color4I1: $Color4I$$Type): $Team
"getColoredName"(): $Component
"getExtraData"(): $CompoundTag
"getId"(): $UUID
"getMembers"(): $Set<$UUID>
"getMessageHistory"(): $List<$TeamMessage>
"getName"(): $Component
"getOnlineMembers"(): $Collection<$ServerPlayer>
"getOwner"(): $UUID
"getPlayersByRank"(teamRank0: $TeamRank$$Type): $Map<$UUID, $TeamRank>
"getProperties"(): $TeamPropertyCollection
"getProperty"<T>(teamProperty0: $TeamProperty$$Type<T>): T
"getRankForPlayer"(uUID0: $UUID$$Type): $TeamRank
"getShortName"(): string
"getTeamId"(): $UUID
"getTeamInfo"(): $List<$Component>
"getTypeTranslationKey"(): string
"isClientTeam"(): boolean
"isPartyTeam"(): boolean
"isPlayerTeam"(): boolean
"isServerTeam"(): boolean
"isValid"(): boolean
"markDirty"(): void
"sendMessage"(uUID0: $UUID$$Type, string1: string): void
"setProperty"<T>(teamProperty0: $TeamProperty$$Type<T>, t1: T): void
get "coloredName"(): $Component
get "extraData"(): $CompoundTag
get "id"(): $UUID
get "members"(): $Set<$UUID>
get "messageHistory"(): $List<$TeamMessage>
get "name"(): $Component
get "onlineMembers"(): $Collection<$ServerPlayer>
get "owner"(): $UUID
get "properties"(): $TeamPropertyCollection
get "shortName"(): string
get "teamId"(): $UUID
get "teamInfo"(): $List<$Component>
get "typeTranslationKey"(): string
get "clientTeam"(): boolean
get "partyTeam"(): boolean
get "playerTeam"(): boolean
get "serverTeam"(): boolean
get "valid"(): boolean
}

export namespace $Team {
const probejs$$marker: never
}
export abstract class $Team$$Static implements $Team {
}
}

declare module "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag" {
import { $List } from "java.util.List"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Class$$Type } from "java.lang.Class"
import { $ListTag } from "net.minecraft.nbt.ListTag"

export class $SNBTCompoundTag extends $CompoundTag {
constructor()

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "comment"(key: string, comment: string): void
public "comment"(key: string, ...comment: string[]): void
public "getAsString"(): string
public "getComment"(key: string): string
public "getCompound"(string: string): $SNBTCompoundTag
public "getList"<T extends $Tag>(key: string, type: $Class$$Type<T>): $List<T>
public "getNullableList"(key: string, type: byte): $ListTag
public "isBoolean"(key: string): boolean
public static "of"(tag: $Tag$$Type): $SNBTCompoundTag
public "putNull"(key: string): void
public "putNumber"(key: string, number: number): void
public "singleLine"(key: string): void
public "singleLine"(): void
get "asString"(): string
}
}

declare module "dev.ftb.mods.ftbteams.api.TeamRank" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Component } from "net.minecraft.network.chat.Component"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Optional } from "java.util.Optional"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $TeamRank extends $Enum<$TeamRank> implements $StringRepresentable {
static readonly "ALLY": $TeamRank
static readonly "ENEMY": $TeamRank
static readonly "INVITED": $TeamRank
static readonly "MEMBER": $TeamRank
static readonly "NAME_MAP": $NameMap<$TeamRank>
static readonly "NONE": $TeamRank
static readonly "OFFICER": $TeamRank
static readonly "OWNER": $TeamRank

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getDisplayName"(): $Component
public "getIcon"(): $Optional<$Icon>
public "getPower"(): integer
public "getSerializedName"(): string
public "isAllyOrBetter"(): boolean
public "isAtLeast"(rank: $TeamRank$$Type): boolean
public "isEnemyOrWorse"(): boolean
public "isInvitedOrBetter"(): boolean
public "isMemberOrBetter"(): boolean
public "isNoneOrBetter"(): boolean
public "isOfficerOrBetter"(): boolean
public "isOwner"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(name: string): $TeamRank
public static "values"(): $TeamRank[]
get "displayName"(): $Component
get "icon"(): $Optional<$Icon>
get "power"(): integer
get "serializedName"(): string
get "allyOrBetter"(): boolean
get "enemyOrWorse"(): boolean
get "invitedOrBetter"(): boolean
get "memberOrBetter"(): boolean
get "noneOrBetter"(): boolean
get "officerOrBetter"(): boolean
get "owner"(): boolean
}
}

declare module "dev.ftb.mods.ftbchunks.api.ChunkTeamData" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Team } from "dev.ftb.mods.ftbteams.api.Team"
import { $PrivacyProperty$$Type } from "dev.ftb.mods.ftbteams.api.property.PrivacyProperty"
import { $ClaimResult } from "dev.ftb.mods.ftbchunks.api.ClaimResult"
import { $ClaimedChunkManager } from "dev.ftb.mods.ftbchunks.api.ClaimedChunkManager"
import { $TeamManager } from "dev.ftb.mods.ftbteams.api.TeamManager"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Collection } from "java.util.Collection"
import { $UUID$$Type } from "java.util.UUID"
import { $ClaimedChunk } from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import { $ChunkDimPos$$Type } from "dev.ftb.mods.ftblibrary.math.ChunkDimPos"

export interface $ChunkTeamData {
"allowMobGriefing"(): boolean
"allowPVP"(): boolean
"canDoOfflineForceLoading"(): boolean
"canExplosionsDamageTerrain"(): boolean
"canPlayerUse"(serverPlayer0: $ServerPlayer$$Type, privacyProperty1: $PrivacyProperty$$Type): boolean
"checkMemberForceLoading"(uUID0: $UUID$$Type): void
"claim"(commandSourceStack0: $CommandSourceStack$$Type, chunkDimPos1: $ChunkDimPos$$Type, boolean2: boolean): $ClaimResult
"forceLoad"(commandSourceStack0: $CommandSourceStack$$Type, chunkDimPos1: $ChunkDimPos$$Type, boolean2: boolean): $ClaimResult
"getClaimedChunks"(): $Collection<$ClaimedChunk>
"getExtraClaimChunks"(): integer
"getExtraForceLoadChunks"(): integer
"getForceLoadedChunks"(): $Collection<$ClaimedChunk>
"getLastLoginTime"(): long
"getManager"(): $ClaimedChunkManager
"getMaxClaimChunks"(): integer
"getMaxForceLoadChunks"(): integer
"getTeam"(): $Team
"getTeamManager"(): $TeamManager
"isAlly"(uUID0: $UUID$$Type): boolean
"isTeamMember"(uUID0: $UUID$$Type): boolean
"setExtraClaimChunks"(int0: integer): void
"setExtraForceLoadChunks"(int0: integer): void
"shouldHideClaims"(): boolean
"unForceLoad"(commandSourceStack0: $CommandSourceStack$$Type, chunkDimPos1: $ChunkDimPos$$Type, boolean2: boolean): $ClaimResult
"unclaim"(commandSourceStack0: $CommandSourceStack$$Type, chunkDimPos1: $ChunkDimPos$$Type, boolean2: boolean): $ClaimResult
get "claimedChunks"(): $Collection<$ClaimedChunk>
get "extraClaimChunks"(): integer
get "extraForceLoadChunks"(): integer
get "forceLoadedChunks"(): $Collection<$ClaimedChunk>
get "lastLoginTime"(): long
get "manager"(): $ClaimedChunkManager
get "maxClaimChunks"(): integer
get "maxForceLoadChunks"(): integer
get "team"(): $Team
get "teamManager"(): $TeamManager
set "extraClaimChunks"(value: integer)
set "extraForceLoadChunks"(value: integer)
}

export namespace $ChunkTeamData {
const probejs$$marker: never
}
export abstract class $ChunkTeamData$$Static implements $ChunkTeamData {
}
}

declare module "dev.ftb.mods.ftblibrary.util.BooleanConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanConsumer {
"accept"(boolean0: boolean): void
}

export namespace $BooleanConsumer {
const probejs$$marker: never
}
export abstract class $BooleanConsumer$$Static implements $BooleanConsumer {
}
}

declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection" {
import { $TeamProperty$$Type } from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $TeamPropertyValue$$Type } from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $TeamPropertyCollection {
"copy"(): $TeamPropertyCollection
"forEach"<T>(biConsumer0: $BiConsumer$$Type<$TeamProperty$$Type<T>, $TeamPropertyValue$$Type<T>>): void
"get"<T>(teamProperty0: $TeamProperty$$Type<T>): T
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"set"<T>(teamProperty0: $TeamProperty$$Type<T>, t1: T): void
"updateFrom"(teamPropertyCollection0: $TeamPropertyCollection$$Type): void
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}

export namespace $TeamPropertyCollection {
const probejs$$marker: never
}
export abstract class $TeamPropertyCollection$$Static implements $TeamPropertyCollection {
}
}

declare module "dev.ftb.mods.ftbquests.quest.QuestLink" {
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Quest, $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Optional } from "java.util.Optional"
import { $Excludable } from "dev.ftb.mods.ftbquests.quest.Excludable"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"
import { $Movable } from "dev.ftb.mods.ftbquests.quest.Movable"

export class $QuestLink extends $QuestObject implements $Movable, $Excludable {
constructor(id: long, chapter: $Chapter$$Type, linkId: long)

public "copyToClipboard"(): void
/** Client only, do not use in server scripts */
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getChapter"(): $Chapter
public "getHeight"(): double
public "getId"(): long
public "getMovableID"(): long
public "getQuest"(): $Optional<$Quest>
public "getShape"(): string
public "getTitle"(): $Component
public "getWidth"(): double
public "getX"(): double
public "getY"(): double
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "linksTo"(quest: $Quest$$Type): boolean
public "move"(to: $Chapter$$Type, x: double, y: double): void
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "setPosition"(qx: double, qy: double): void
get "chapter"(): $Chapter
get "height"(): double
get "id"(): long
get "movableID"(): long
get "quest"(): $Optional<$Quest>
get "shape"(): string
get "title"(): $Component
get "width"(): double
get "x"(): double
get "y"(): double
}
}

declare module "dev.ftb.mods.ftblibrary.config.ui.SelectableResource" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $FluidStack, $FluidStack$$Type } from "dev.architectury.fluid.FluidStack"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"

export interface $SelectableResource<T = any> {
"copyWithCount"(long0: long): $SelectableResource<T>
"getCount"(): long
"getIcon"(): $Icon
"getName"(): $Component
"getTag"(): $CompoundTag
"isEmpty"(): boolean
"setCount"(int0: integer): void
"setTag"(compoundTag0: $CompoundTag$$Type): void
"stack"(): T
get "count"(): long
get "icon"(): $Icon
get "name"(): $Component
get "tag"(): $CompoundTag
get "empty"(): boolean
set "count"(value: integer)
set "tag"(value: $CompoundTag$$Type)
}

export namespace $SelectableResource {
function fluid(stack: $FluidStack$$Type): $SelectableResource<$FluidStack>
function item(stack: $ItemStack$$Type): $SelectableResource<$ItemStack>
}
export abstract class $SelectableResource$$Static<T = any> implements $SelectableResource<T> {
static "fluid"(stack: $FluidStack$$Type): $SelectableResource<$FluidStack>
static "item"(stack: $ItemStack$$Type): $SelectableResource<$ItemStack>
}
}

declare module "dev.ftb.mods.ftblibrary.sidebar.SidebarButtonGroup" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Comparable } from "java.lang.Comparable"
import { $SidebarButton } from "dev.ftb.mods.ftblibrary.sidebar.SidebarButton"

export class $SidebarButtonGroup implements $Comparable<$SidebarButtonGroup> {
/** @deprecated */
constructor(id: $ResourceLocation$$Type, y: integer)
constructor(id: $ResourceLocation$$Type, y: integer, isPinned: boolean)

public "compareTo"(group: $SidebarButtonGroup$$Type): integer
public "getButtons"(): $List<$SidebarButton>
public "getId"(): $ResourceLocation
public "getLangKey"(): string
public "getY"(): integer
public "isPinned"(): boolean
get "buttons"(): $List<$SidebarButton>
get "id"(): $ResourceLocation
get "langKey"(): string
get "y"(): integer
get "pinned"(): boolean
}
}

declare module "dev.ftb.mods.ftblibrary.config.NameMap$Builder" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $Function$$Type } from "java.util.function.Function"

export class $NameMap$Builder<T = any> {
public "baseNameKey"(key: string): $NameMap$Builder<T>
public "color"(p: $Function$$Type<T, $Color4I>): $NameMap$Builder<T>
public "create"(): $NameMap<T>
public "icon"(p: $Function$$Type<T, $Icon>): $NameMap$Builder<T>
public "id"(p: $Function$$Type<T, string>): $NameMap$Builder<T>
public "name"(p: $Function$$Type<T, $Component>): $NameMap$Builder<T>
public "nameKey"(p: $Function$$Type<T, string>): $NameMap$Builder<T>
}
}

declare module "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyModifiers {
static readonly "NONE": $KeyModifiers
readonly "modifiers": integer

constructor(m: integer)

public "alt"(): boolean
public "capsLock"(): boolean
public "control"(): boolean
public "numLock"(): boolean
public "onlyControl"(): boolean
public "shift"(): boolean
public "start"(): boolean
}
}

declare module "dev.ftb.mods.ftbchunks.api.ProtectionPolicy" {
import { $Enum } from "java.lang.Enum"

export class $ProtectionPolicy extends $Enum<$ProtectionPolicy> {
static readonly "ALLOW": $ProtectionPolicy
static readonly "CHECK": $ProtectionPolicy
static readonly "DENY": $ProtectionPolicy

public "isOverride"(): boolean
public "shouldPreventInteraction"(): boolean
public static "valueOf"(name: string): $ProtectionPolicy
public static "values"(): $ProtectionPolicy[]
get "override"(): boolean
}
}

declare module "dev.ftb.mods.ftbchunks.core.BlockStateFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateFTBC {
"getFTBCIsWater"(): boolean
get "fTBCIsWater"(): boolean
}

export namespace $BlockStateFTBC {
const probejs$$marker: never
}
export abstract class $BlockStateFTBC$$Static implements $BlockStateFTBC {
}
}

declare module "dev.ftb.mods.ftbquests.quest.task.CustomTask$Check" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CustomTask$Data$$Type } from "dev.ftb.mods.ftbquests.quest.task.CustomTask$Data"

export interface $CustomTask$Check {
"check"(data0: $CustomTask$Data$$Type, serverPlayer1: $ServerPlayer$$Type): void
}

export namespace $CustomTask$Check {
const probejs$$marker: never
}
export abstract class $CustomTask$Check$$Static implements $CustomTask$Check {
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbteams.kubejs.KJSTeamWrapper" {
import { $Team$$Type } from "dev.ftb.mods.ftbteams.api.Team"
import { $UUID } from "java.util.UUID"

export class $KJSTeamWrapper {
constructor(team: $Team$$Type)

public "getId"(): $UUID
public "getName"(): string
public "isPartyTeam"(): boolean
get "id"(): $UUID
get "name"(): string
get "partyTeam"(): boolean
}
}

declare module "dev.ftb.mods.ftblibrary.config.BooleanConfig" {
import { $ConfigWithVariants } from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"

export class $BooleanConfig extends $ConfigWithVariants<boolean> {
static readonly "FALSE_TEXT": $Component
static readonly "TRUE_TEXT": $Component

constructor()

public "getColor"(v: boolean): $Color4I
public "getIcon"(v: boolean): $Icon
public "getIteration"(currentValue: boolean, next: boolean): boolean
public "getStringForGUI"(v: boolean): $Component
}
}

declare module "dev.ftb.mods.ftblibrary.icon.IResourceIcon" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $IResourceIcon {
"getResourceLocation"(): $ResourceLocation
get "resourceLocation"(): $ResourceLocation
}

export namespace $IResourceIcon {
const probejs$$marker: never
}
export abstract class $IResourceIcon$$Static implements $IResourceIcon {
}
}

declare module "dev.ftb.mods.ftbquests.util.ProgressChange" {
import { $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $Date } from "java.util.Date"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $QuestObjectBase$$Type } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $ProgressChange {
constructor(file: $BaseQuestFile$$Type, origin: $QuestObjectBase$$Type, playerId: $UUID$$Type)
constructor(f: $BaseQuestFile$$Type, buffer: $FriendlyByteBuf$$Type)

public "getDate"(): $Date
public "getPlayerId"(): $UUID
public "maybeForceProgress"(teamId: $UUID$$Type): void
public "setReset"(reset: boolean): $ProgressChange
public "shouldNotify"(): boolean
public "shouldReset"(): boolean
public "withNotifications"(): $ProgressChange
public "write"(buffer: $FriendlyByteBuf$$Type): void
get "date"(): $Date
get "playerId"(): $UUID
set "reset"(value: boolean)
}
}

declare module "dev.ftb.mods.ftblibrary.config.ConfigGroup" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $NameMap$$Type } from "dev.ftb.mods.ftblibrary.config.NameMap"
import { $ListConfig } from "dev.ftb.mods.ftblibrary.config.ListConfig"
import { $ConfigCallback$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import { $Tristate, $Tristate$$Type } from "dev.ftb.mods.ftblibrary.config.Tristate"
import { $ImageResourceConfig } from "dev.ftb.mods.ftblibrary.config.ImageResourceConfig"
import { $IntConfig } from "dev.ftb.mods.ftblibrary.config.IntConfig"
import { $ItemStackConfig } from "dev.ftb.mods.ftblibrary.config.ItemStackConfig"
import { $LongConfig } from "dev.ftb.mods.ftblibrary.config.LongConfig"
import { $Component } from "net.minecraft.network.chat.Component"
import { $EnumConfig } from "dev.ftb.mods.ftblibrary.config.EnumConfig"
import { $FluidConfig } from "dev.ftb.mods.ftblibrary.config.FluidConfig"
import { $StringConfig } from "dev.ftb.mods.ftblibrary.config.StringConfig"
import { $Collection } from "java.util.Collection"
import { $ColorConfig } from "dev.ftb.mods.ftblibrary.config.ColorConfig"
import { $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $BooleanConfig } from "dev.ftb.mods.ftblibrary.config.BooleanConfig"
import { $ConfigValue, $ConfigValue$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigValue"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DoubleConfig } from "dev.ftb.mods.ftblibrary.config.DoubleConfig"
import { $List$$Type } from "java.util.List"
import { $Comparable } from "java.lang.Comparable"
import { $FluidStack$$Type } from "dev.architectury.fluid.FluidStack"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Pattern$$Type } from "java.util.regex.Pattern"

export class $ConfigGroup implements $Comparable<$ConfigGroup> {
constructor(id: string, savedCallback: $ConfigCallback$$Type)
constructor(id: string)

public "add"<T, CV extends $ConfigValue<T>>(id: string, type: CV, value: T, setter: $Consumer$$Type<T>, defaultValue: T): CV
public "addBool"(id: string, value: boolean, setter: $Consumer$$Type<boolean>, def: boolean): $BooleanConfig
public "addColor"(id: string, value: $Color4I$$Type, setter: $Consumer$$Type<$Color4I$$Type>, def: $Color4I$$Type): $ColorConfig
public "addDouble"(id: string, value: double, setter: $Consumer$$Type<double>, def: double, min: double, max: double): $DoubleConfig
public "addEnum"<E>(id: string, value: E, setter: $Consumer$$Type<E>, nameMap: $NameMap$$Type<E>, def: E): $EnumConfig<E>
public "addEnum"<E>(id: string, value: E, setter: $Consumer$$Type<E>, nameMap: $NameMap$$Type<E>): $EnumConfig<E>
public "addFluidStack"(id: string, value: $FluidStack$$Type, setter: $Consumer$$Type<$FluidStack$$Type>, def: $FluidStack$$Type, fixedSize: long): $FluidConfig
public "addFluidStack"(id: string, value: $FluidStack$$Type, setter: $Consumer$$Type<$FluidStack$$Type>, def: $FluidStack$$Type, allowEmpty: boolean): $FluidConfig
public "addImage"(id: string, value: $ResourceLocation$$Type, setter: $Consumer$$Type<$ResourceLocation$$Type>, def: $ResourceLocation$$Type): $ImageResourceConfig
public "addInt"(id: string, value: integer, setter: $Consumer$$Type<integer>, def: integer, min: integer, max: integer): $IntConfig
public "addItemStack"(id: string, value: $ItemStack$$Type, setter: $Consumer$$Type<$ItemStack$$Type>, def: $ItemStack$$Type, fixedSize: integer): $ItemStackConfig
public "addItemStack"(id: string, value: $ItemStack$$Type, setter: $Consumer$$Type<$ItemStack$$Type>, def: $ItemStack$$Type, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig
public "addList"<E, CV extends $ConfigValue<E>>(id: string, c: $List$$Type<E>, type: CV, def: E): $ListConfig<E, CV>
public "addList"<E, CV extends $ConfigValue<E>>(id: string, value: $List$$Type<E>, type: CV, setter: $Consumer$$Type<$List$$Type<E>>, def: E): $ListConfig<E, CV>
public "addLong"(id: string, value: long, setter: $Consumer$$Type<long>, def: long, min: long, max: long): $LongConfig
public "addString"(id: string, value: string, setter: $Consumer$$Type<string>, def: string, pattern: $Pattern$$Type): $StringConfig
public "addString"(id: string, value: string, setter: $Consumer$$Type<string>, def: string): $StringConfig
public "addTristate"(id: string, value: $Tristate$$Type, setter: $Consumer$$Type<$Tristate$$Type>, def: $Tristate$$Type): $EnumConfig<$Tristate>
public "addTristate"(id: string, value: $Tristate$$Type, setter: $Consumer$$Type<$Tristate$$Type>): $EnumConfig<$Tristate>
public "compareTo"(o: $ConfigGroup$$Type): integer
public "getId"(): string
public "getName"(): $Component
public "getNameKey"(): string
public "getOrCreateSubgroup"(id: string, displayOrder: integer): $ConfigGroup
public "getOrCreateSubgroup"(id: string): $ConfigGroup
public "getParent"(): $ConfigGroup
public "getPath"(): string
public "getSubgroups"(): $Collection<$ConfigGroup>
public "getTooltip"(): $Component
public "getValues"(): $Collection<$ConfigValue<any>>
public "save"(accepted: boolean): void
public "setNameKey"(key: string): $ConfigGroup
get "id"(): string
get "name"(): $Component
get "nameKey"(): string
get "parent"(): $ConfigGroup
get "path"(): string
get "subgroups"(): $Collection<$ConfigGroup>
get "tooltip"(): $Component
get "values"(): $Collection<$ConfigValue<any>>
set "nameKey"(value: string)
}
}

declare module "dev.ftb.mods.ftblibrary.util.TooltipList" {
import { $List } from "java.util.List"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export class $TooltipList {
constructor()

public "add"(component: $Component$$Type): void
public "blankLine"(): void
public "getLines"(): $List<$Component>
/** Client only, do not use in server scripts */
public "render"(graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, screenWidth: integer, screenHeight: integer, font: $Font$$Type): void
public "reset"(): void
public "shouldRender"(): boolean
public "string"(text: string): void
public "styledString"(text: string, style: $Style$$Type): void
public "styledString"(text: string, color: $ChatFormatting$$Type): void
public "styledTranslate"(key: string, style: $Style$$Type, ...objects: any[]): void
public "translate"(key: string, ...objects: any[]): void
get "backgroundColor"(): integer
set "backgroundColor"(value: integer)
get "borderColorEnd"(): integer
set "borderColorEnd"(value: integer)
get "borderColorStart"(): integer
set "borderColorStart"(value: integer)
get "maxWidth"(): integer
set "maxWidth"(value: integer)
get "xOffset"(): integer
set "xOffset"(value: integer)
get "yOffset"(): integer
set "yOffset"(value: integer)
get "zOffset"(): integer
set "zOffset"(value: integer)
get "zOffsetItemTooltip"(): integer
set "zOffsetItemTooltip"(value: integer)
get "lines"(): $List<$Component>
}
}

declare module "dev.ftb.mods.ftbquests.quest.task.Task" {
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $Button$$Type } from "dev.ftb.mods.ftblibrary.ui.Button"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Quest, $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $TooltipList$$Type } from "dev.ftb.mods.ftblibrary.util.TooltipList"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PositionedIngredient } from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import { $Widget$$Type } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Optional } from "java.util.Optional"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TaskType } from "dev.ftb.mods.ftbquests.quest.task.TaskType"

export class $Task extends $QuestObject {
constructor(id: long, quest: $Quest$$Type)

/** Client only, do not use in server scripts */
public "addMouseOverHeader"(list: $TooltipList$$Type, teamData: $TeamData$$Type, advanced: boolean): void
/** Client only, do not use in server scripts */
public "addMouseOverText"(list: $TooltipList$$Type, teamData: $TeamData$$Type): void
/** Client only, do not use in server scripts */
public "addTitleInMouseOverText"(): boolean
public "autoSubmitOnPlayerTick"(): integer
public "canInsertItem"(): boolean
public "checkOnLogin"(): boolean
public "consumesResources"(): boolean
/** Client only, do not use in server scripts */
public "drawGUI"(teamData: $TeamData$$Type, graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "formatMaxProgress"(): string
public "formatProgress"(teamData: $TeamData$$Type, progress: long): string
/** Client only, do not use in server scripts */
public "getButtonText"(): $MutableComponent
/** Client only, do not use in server scripts */
public "getIngredient"(widget: $Widget$$Type): $Optional<$PositionedIngredient>
public "getMaxProgress"(): long
public "getQuest"(): $Quest
public "getType"(): $TaskType
public "hideProgressNumbers"(): boolean
/** Client only, do not use in server scripts */
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "submitItemsOnInventoryChange"(): boolean
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type, craftedItem: $ItemStack$$Type): void
get "buttonText"(): $MutableComponent
get "maxProgress"(): long
get "quest"(): $Quest
get "type"(): $TaskType
}
}

declare module "dev.ftb.mods.ftbquests.quest.Movable" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"

export interface $Movable {
"copyToClipboard"(): void
/** Client only, do not use in server scripts */
"drawMoved"(graphics: $GuiGraphics$$Type): void
"getChapter"(): $Chapter
"getHeight"(): double
"getMovableID"(): long
"getShape"(): string
"getTitle"(): $Component
"getWidth"(): double
"getX"(): double
"getY"(): double
/** Client only, do not use in server scripts */
"move"(chapter0: $Chapter$$Type, double1: double, double2: double): void
"onMoved"(double0: double, double1: double, long2: long): void
get "chapter"(): $Chapter
get "height"(): double
get "movableID"(): long
get "shape"(): string
get "title"(): $Component
get "width"(): double
get "x"(): double
get "y"(): double
}

export namespace $Movable {
const probejs$$marker: never
}
export abstract class $Movable$$Static implements $Movable {
}
}

declare module "dev.ftb.mods.ftbquests.quest.ChapterGroup" {
import { $List } from "java.util.List"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $BaseQuestFile, $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"

export class $ChapterGroup extends $QuestObject {
constructor(id: long, file: $BaseQuestFile$$Type)

public "addChapter"(chapter: $Chapter$$Type): void
public "clearChapters"(): void
public "getChapters"(): $List<$Chapter>
public "getFile"(): $BaseQuestFile
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "getVisibleChapters"(data: $TeamData$$Type): $List<$Chapter>
public "isDefaultGroup"(): boolean
public "isFirstGroup"(): boolean
public "isGuiCollapsed"(): boolean
public "isLastGroup"(): boolean
public "moveChapterWithinGroup"(chapter: $Chapter$$Type, movingUp: boolean): boolean
public "removeChapter"(chapter: $Chapter$$Type): void
public "sortChapters"(c: $Comparator$$Type<$Chapter$$Type>): void
public "toggleCollapsed"(): void
get "chapters"(): $List<$Chapter>
get "file"(): $BaseQuestFile
get "defaultGroup"(): boolean
get "firstGroup"(): boolean
get "guiCollapsed"(): boolean
get "lastGroup"(): boolean
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.CustomTaskEventJS" {
import { $CustomTask } from "dev.ftb.mods.ftbquests.quest.task.CustomTask"
import { $CustomTask$Check$$Type } from "dev.ftb.mods.ftbquests.quest.task.CustomTask$Check"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $CustomTaskEvent } from "dev.ftb.mods.ftbquests.events.CustomTaskEvent"

export class $CustomTaskEventJS extends $EventJS {
readonly "event": $CustomTaskEvent

public "getTask"(): $CustomTask
public "setCheck"(c: $CustomTask$Check$$Type): void
public "setCheckTimer"(t: integer): void
public "setEnableButton"(b: boolean): void
public "setMaxProgress"(max: long): void
get "task"(): $CustomTask
set "check"(value: $CustomTask$Check$$Type)
set "checkTimer"(value: integer)
set "enableButton"(value: boolean)
set "maxProgress"(value: long)
}
}

declare module "dev.ftb.mods.ftbquests.quest.QuestObjectBase" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Set } from "java.util.Set"
import { $QuestObjectType } from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Chapter } from "dev.ftb.mods.ftbquests.quest.Chapter"
import { $ConfigGroup, $ConfigGroup$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ProgressChange$$Type } from "dev.ftb.mods.ftbquests.util.ProgressChange"
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $BaseQuestFile } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $Optional } from "java.util.Optional"
import { $Comparable } from "java.lang.Comparable"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RecipeModHelper$Components } from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"

export class $QuestObjectBase implements $Comparable<$QuestObjectBase> {
readonly "id": long

constructor(id: long)

public "clearCachedData"(): void
public "compareTo"(other: $QuestObjectBase$$Type): integer
public "componentsToRefresh"(): $Set<$RecipeModHelper$Components>
public static "copy"<T extends $QuestObjectBase>(orig: T, factory: $Supplier$$Type<T>): T
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "deleteChildren"(): void
public "deleteSelf"(): void
/** Client only, do not use in server scripts */
public "editedFromGUI"(): void
public "editedFromGUIOnServer"(): void
/** Client only, do not use in server scripts */
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "forceProgressRaw"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
/** Client only, do not use in server scripts */
public "getAltIcon"(): $Icon
/** Client only, do not use in server scripts */
public "getAltTitle"(): $Component
public static "getCodeString"(id: long): string
public "getCodeString"(): string
public static "getCodeString"(object: $QuestObjectBase$$Type): string
public static "getID"(object: $QuestObjectBase$$Type): long
/** Client only, do not use in server scripts */
public "getIcon"(): $Icon
public "getId"(): long
/** Client only, do not use in server scripts */
public "getMutableTitle"(): $MutableComponent
public "getObjectType"(): $QuestObjectType
public "getParentID"(): long
public "getPath"(): $Optional<string>
public "getQuestChapter"(): $Chapter
public "getQuestFile"(): $BaseQuestFile
public "getRawTitle"(): string
public "getTags"(): $Set<string>
/** Client only, do not use in server scripts */
public "getTitle"(): $Component
public "hasTag"(tag: string): boolean
public static "isNull"(object: $QuestObjectBase$$Type): boolean
public "isValid"(): boolean
public "onCreated"(): void
/** Client only, do not use in server scripts */
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public static "parseCodeString"(id: string): long
public static "parseHexId"(id: string): $Optional<long>
public "readData"(nbt: $CompoundTag$$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$$Type): void
public "setRawIcon"(rawIcon: $ItemStack$$Type): void
public "setRawTitle"(rawTitle: string): void
public static "shouldSendNotifications"(): boolean
public static "titleToID"(s: string): $Optional<string>
public "writeData"(nbt: $CompoundTag$$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$$Type): void
get "altIcon"(): $Icon
get "altTitle"(): $Component
get "codeString"(): string
get "icon"(): $Icon
get "mutableTitle"(): $MutableComponent
get "objectType"(): $QuestObjectType
get "parentID"(): long
get "path"(): $Optional<string>
get "questChapter"(): $Chapter
get "questFile"(): $BaseQuestFile
get "rawTitle"(): string
get "tags"(): $Set<string>
get "title"(): $Component
get "valid"(): boolean
set "rawIcon"(value: $ItemStack$$Type)
set "rawTitle"(value: string)
}
}

declare module "dev.ftb.mods.ftblibrary.config.DoubleConfig" {
import { $NumberConfig } from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import { $Optional } from "java.util.Optional"

export class $DoubleConfig extends $NumberConfig<double> {
constructor(mn: double, mx: double)

public "getStringFromValue"(v: double): string
public "scrollValue"(currentValue: double, forward: boolean): $Optional<double>
}
}

declare module "dev.ftb.mods.ftblibrary.icon.Color4I" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MutableColor4I } from "dev.ftb.mods.ftblibrary.icon.MutableColor4I"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $Style } from "net.minecraft.network.chat.Style"

export class $Color4I extends $Icon {
static readonly "BLACK": $Color4I
static readonly "BLUE": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GRAY": $Color4I
static readonly "GREEN": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "RED": $Color4I
static readonly "WHITE": $Color4I

public static "HSBtoRGB"(hue: float, saturation: float, brightness: float): integer
public static "RGBtoHSB"(r: integer, g: integer, b: integer, hsbvals: float[]): float[]
public "addBrightness"(percent: float): $Color4I
public "alphaf"(): float
public "alphai"(): integer
public "bluef"(): float
public "bluei"(): integer
public "copy"(): $Color4I
/** Client only, do not use in server scripts */
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
/** Client only, do not use in server scripts */
public "draw3D"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public static "fromJson"(element: $JsonElement$$Type): $Color4I
public static "fromString"(s: string): $Color4I
public static "get256"(id: integer): $Color4I
public static "getChatFormattingColor"(id: integer): $Color4I
public static "getChatFormattingColor"(formatting: $ChatFormatting$$Type): $Color4I
public "greenf"(): float
public "greeni"(): integer
public static "hsb"(h: float, s: float, b: float): $Color4I
public "isMutable"(): boolean
public "lerp"(col: $Color4I$$Type, m: float): $Color4I
public "mutable"(): $MutableColor4I
public "redf"(): float
public "redi"(): integer
public static "rgb"(color: $Vec3$$Type): $Color4I
public "rgb"(): integer
public static "rgb"(col: integer): $Color4I
public static "rgb"(r: integer, g: integer, b: integer): $Color4I
public static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color4I
public static "rgba"(col: integer): $Color4I
public "rgba"(): integer
public "toStyle"(): $Style
public "whiteIfEmpty"(): $Color4I
public "withAlpha"(a: integer): $Color4I
public "withAlphaf"(alpha: float): $Color4I
public "withTint"(col: $Color4I$$Type): $Color4I
}
}

declare module "dev.ftb.mods.ftblibrary.ui.WidgetType" {
import { $Enum } from "java.lang.Enum"

export class $WidgetType extends $Enum<$WidgetType> {
static readonly "DISABLED": $WidgetType
static readonly "MOUSE_OVER": $WidgetType
static readonly "NORMAL": $WidgetType

public static "mouseOver"(mouseOver: boolean): $WidgetType
public static "valueOf"(name: string): $WidgetType
public static "values"(): $WidgetType[]
}
}

declare module "dev.ftb.mods.ftbchunks.api.ClaimResult" {
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export interface $ClaimResult {
"getMessage"(): $MutableComponent
"getResultId"(): string
"isSuccess"(): boolean
get "message"(): $MutableComponent
get "resultId"(): string
}

export namespace $ClaimResult {
function customProblem(translationKey: string): $ClaimResult
function success(): $ClaimResult
}
export abstract class $ClaimResult$$Static implements $ClaimResult {
static "customProblem"(translationKey: string): $ClaimResult
static "success"(): $ClaimResult
}
}

declare module "dev.ftb.mods.ftbquests.quest.BaseQuestFile" {
import { $Team$$Type } from "dev.ftb.mods.ftbteams.api.Team"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $RewardType } from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import { $QuestObjectType$$Type } from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"
import { $ChapterGroup, $ChapterGroup$$Type } from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import { $TeamData, $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $EntityWeight } from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import { $Reward } from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import { $Env } from "dev.architectury.utils.Env"
import { $ProgressionMode } from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $LootCrate } from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import { $Quest, $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $RewardAutoClaim } from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $RewardTable, $RewardTable$$Type } from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"
import { $Task } from "dev.ftb.mods.ftbquests.quest.task.Task"
import { $DefaultChapterGroup } from "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $QuestLink$$Type } from "dev.ftb.mods.ftbquests.quest.QuestLink"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TaskType } from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import { $QuestObjectBase, $QuestObjectBase$$Type } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import { $QuestFile } from "dev.ftb.mods.ftbquests.api.QuestFile"

export class $BaseQuestFile extends $QuestObject implements $QuestFile {
static "VERSION": integer

constructor()

public "addData"(data: $TeamData$$Type, override: boolean): void
public "addRewardTable"(rewardTable: $RewardTable$$Type): void
public "canEdit"(): boolean
public "clearCachedProgress"(): void
public "collect"<T extends $QuestObjectBase>(filter: $Predicate$$Type<$QuestObjectBase$$Type>): $List<T>
public "collect"<T extends $QuestObjectBase>(clazz: $Class$$Type<T>): $List<T>
public "create"(id: long, type: $QuestObjectType$$Type, parent: long, extra: $CompoundTag$$Type): $QuestObjectBase
public "deleteObject"(long0: long): void
public "dropBookOnDeath"(): boolean
public "forAllChapterGroups"(consumer: $Consumer$$Type<$ChapterGroup$$Type>): void
public "forAllChapters"(consumer: $Consumer$$Type<$Chapter$$Type>): void
public "forAllQuestLinks"(consumer: $Consumer$$Type<$QuestLink$$Type>): void
public "forAllQuests"(consumer: $Consumer$$Type<$Quest$$Type>): void
public "generateRewardTableName"(basename: string): string
public "get"(id: long): $QuestObject
public "getAllChapters"(): $List<$Chapter>
public "getAllObjects"(): $Collection<$QuestObjectBase>
public "getAllTasks"(): $List<$Task>
public "getAllTeamData"(): $Collection<$TeamData>
public "getBase"(id: long): $QuestObjectBase
public "getChapter"(id: long): $Chapter
public "getChapterGroup"(id: long): $ChapterGroup
public "getChapterGroups"(): $List<$ChapterGroup>
public "getChapterOrThrow"(id: long): $Chapter
public "getCraftingTasks"(): $List<$Task>
public "getDefaultChapterGroup"(): $DefaultChapterGroup
public "getDefaultQuestShape"(): string
public "getDefaultRewardAutoClaim"(): $RewardAutoClaim
public "getDetectionDelay"(): integer
public "getEmergencyItems"(): $List<$ItemStack>
public "getEmergencyItemsCooldown"(): integer
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "getFolder"(): $Path
public "getGridScale"(): double
public "getID"(obj: any): long
public "getLootCrate"(id: string): $LootCrate
public "getLootCrateNoDrop"(): $EntityWeight
public "getNullableTeamData"(id: $UUID$$Type): $TeamData
public "getOrCreateTeamData"(team: $Team$$Type): $TeamData
public "getOrCreateTeamData"(player: $Entity$$Type): $TeamData
public "getOrCreateTeamData"(teamId: $UUID$$Type): $TeamData
public "getProgressionMode"(): $ProgressionMode
public "getQuest"(id: long): $Quest
public "getReward"(id: long): $Reward
public "getRewardTable"(id: long): $RewardTable
public "getRewardTables"(): $List<$RewardTable>
public "getRewardType"(typeId: integer): $RewardType
public "getSide"(): $Env
public "getSubmitTasks"(): $List<$Task>
public "getTask"(id: long): $Task
public "getTaskType"(typeId: integer): $TaskType
public "getVisibleChapters"(data: $TeamData$$Type): $List<$Chapter>
public "isDefaultPerTeamReward"(): boolean
public "isDefaultQuestDisableJEI"(): boolean
public "isDefaultTeamConsumeItems"(): boolean
public "isDisableGui"(): boolean
public "isDropLootCrates"(): boolean
public "isHideExcludedQuests"(): boolean
public "isLoading"(): boolean
public "isPauseGame"(): boolean
public "isPlayerOnTeam"(player0: $Player$$Type, teamData1: $TeamData$$Type): boolean
public "isServerSide"(): boolean
public "makeRandomLootCrate"(entity: $Entity$$Type, random: $RandomSource$$Type): $Optional<$LootCrate>
public "markDirty"(): void
public "moveChapterGroup"(id: long, movingUp: boolean): boolean
public "newID"(): long
public "readDataFull"(folder: $Path$$Type): void
public "readID"(tag: $Tag$$Type): long
public "readID"(id: long): long
public "readNetDataFull"(buffer: $FriendlyByteBuf$$Type): void
public "refreshGui"(): void
public "refreshIDMap"(): void
public "remove"(id: long): $QuestObjectBase
public "removeEmptyRewardTables"(source: $CommandSourceStack$$Type): integer
public "removeRewardTable"(rewardTable: $RewardTable$$Type): void
public "showLockIcons"(): boolean
public "updateLootCrates"(): void
public "writeDataFull"(folder: $Path$$Type): void
public "writeNetDataFull"(buffer: $FriendlyByteBuf$$Type): void
get "allChapters"(): $List<$Chapter>
get "allObjects"(): $Collection<$QuestObjectBase>
get "allTasks"(): $List<$Task>
get "allTeamData"(): $Collection<$TeamData>
get "chapterGroups"(): $List<$ChapterGroup>
get "craftingTasks"(): $List<$Task>
get "defaultChapterGroup"(): $DefaultChapterGroup
get "defaultQuestShape"(): string
get "defaultRewardAutoClaim"(): $RewardAutoClaim
get "detectionDelay"(): integer
get "emergencyItems"(): $List<$ItemStack>
get "emergencyItemsCooldown"(): integer
get "folder"(): $Path
get "gridScale"(): double
get "lootCrateNoDrop"(): $EntityWeight
get "progressionMode"(): $ProgressionMode
get "rewardTables"(): $List<$RewardTable>
get "side"(): $Env
get "submitTasks"(): $List<$Task>
get "defaultPerTeamReward"(): boolean
get "defaultQuestDisableJEI"(): boolean
get "defaultTeamConsumeItems"(): boolean
get "disableGui"(): boolean
get "dropLootCrates"(): boolean
get "hideExcludedQuests"(): boolean
get "loading"(): boolean
get "pauseGame"(): boolean
get "serverSide"(): boolean
}
}

declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue" {
import { $TeamProperty, $TeamProperty$$Type } from "dev.ftb.mods.ftbteams.api.property.TeamProperty"

export class $TeamPropertyValue<T = any> {
constructor(property: $TeamProperty$$Type<T>, value: T)
constructor(k: $TeamProperty$$Type<T>)

public "copy"(): $TeamPropertyValue<T>
public "getProperty"(): $TeamProperty<T>
public "getValue"(): T
public "setValue"(value: T): void
get "property"(): $TeamProperty<T>
get "value"(): T
set "value"(value: T)
}
}

declare module "dev.ftb.mods.ftbquests.quest.TeamData" {
import { $QuestObject$$Type } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $Date, $Date$$Type } from "java.util.Date"
import { $Collection } from "java.util.Collection"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $RewardClaimType } from "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Task$$Type } from "dev.ftb.mods.ftbquests.quest.task.Task"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BaseQuestFile, $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $Reward$$Type } from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import { $Optional } from "java.util.Optional"
import { $SNBTCompoundTag, $SNBTCompoundTag$$Type } from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import { $LongSet } from "it.unimi.dsi.fastutil.longs.LongSet"

export class $TeamData {
static readonly "AUTO_PIN_ID": integer
static readonly "VERSION": integer

constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type)
constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type, name: string)

public "addProgress"(task: $Task$$Type, progress: long): void
public "areDependenciesComplete"(quest: $Quest$$Type): boolean
public "areDependenciesVisible"(quest: $Quest$$Type): boolean
public "areRewardsBlocked"(): boolean
public "canStartTasks"(quest: $Quest$$Type): boolean
public "checkAutoCompletion"(quest: $Quest$$Type): void
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean): void
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean, when: long): void
public "clearCachedProgress"(): void
public "clearRepeatCooldown"(q: $Quest$$Type): void
public "copyData"(from: $TeamData$$Type): void
public "deleteReward"(reward: $Reward$$Type): void
public "deserializeNBT"(nbt: $SNBTCompoundTag$$Type): void
public static "get"(player: $Player$$Type): $TeamData
public "getCanEdit"(player: $Player$$Type): boolean
public "getCannotStartReason"(quest: $Quest$$Type): $Component
public "getClaimType"(player: $UUID$$Type, reward: $Reward$$Type): $RewardClaimType
public "getCompletedTime"(questId: long): $Optional<$Date>
public "getCompletionCount"(quest: $Quest$$Type): integer
public "getFile"(): $BaseQuestFile
public "getMilliSecondsUntilRepeatable"(quest: $Quest$$Type): long
public "getName"(): string
public "getOnlineMembers"(): $Collection<$ServerPlayer>
public "getPinnedQuestIds"(player: $Player$$Type): $LongSet
public "getProgress"(task: $Task$$Type): long
public "getProgress"(taskId: long): long
public "getRelativeProgress"(object: $QuestObject$$Type): integer
public "getRewardClaimTime"(player: $UUID$$Type, reward: $Reward$$Type): $Optional<$Date>
public "getStartedTime"(questId: long): $Optional<$Date>
public "getTeamId"(): $UUID
public "hasUnclaimedRewards"(player: $UUID$$Type, object: $QuestObject$$Type): boolean
public "isChapterPinned"(player: $Player$$Type): boolean
public "isCompleted"(object: $QuestObject$$Type): boolean
public "isExcludedByOtherQuestline"(qo: $QuestObject$$Type): boolean
public "isLocked"(): boolean
public "isQuestPinned"(player: $Player$$Type, id: long): boolean
public "isRewardBlocked"(reward: $Reward$$Type): boolean
public "isRewardClaimed"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "isStarted"(object: $QuestObject$$Type): boolean
public "markDirty"(): void
public "markRewardAsClaimed"(player: $UUID$$Type, reward: $Reward$$Type, date: long): boolean
public "markTaskCompleted"(task: $Task$$Type): void
public "mergeClaimedRewards"(from: $TeamData$$Type): void
public "mergeData"(from: $TeamData$$Type): void
public "read"(buffer: $FriendlyByteBuf$$Type, self: boolean): void
public "resetProgress"(task: $Task$$Type): void
public "resetReward"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "saveIfChanged"(): void
public "serializeNBT"(): $SNBTCompoundTag
public "setCanEdit"(player: $Player$$Type, newCanEdit: boolean): boolean
public "setChapterPinned"(player: $Player$$Type, pinned: boolean): void
public "setCompleted"(id: long, time: $Date$$Type): boolean
public "setLocked"(newLocked: boolean): boolean
public "setName"(name: string): void
public "setProgress"(task: $Task$$Type, progress: long): void
public "setQuestPinned"(player: $Player$$Type, id: long, pinned: boolean): void
public "setRewardsBlocked"(rewardsBlocked: boolean): boolean
public "setStarted"(questId: long, time: $Date$$Type): boolean
public "write"(buffer: $FriendlyByteBuf$$Type, self: boolean): void
get "file"(): $BaseQuestFile
get "name"(): string
get "onlineMembers"(): $Collection<$ServerPlayer>
get "teamId"(): $UUID
get "locked"(): boolean
set "locked"(value: boolean)
set "name"(value: string)
set "rewardsBlocked"(value: boolean)
}
}

declare module "dev.ftb.mods.ftblibrary.config.NameMap" {
import { $NameMap$Builder } from "dev.ftb.mods.ftblibrary.config.NameMap$Builder"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Iterator } from "java.util.Iterator"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $Random$$Type } from "java.util.Random"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Iterable } from "java.lang.Iterable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $Map } from "java.util.Map"
import { $Spliterator } from "java.util.Spliterator"

export class $NameMap<E = any> implements $Iterable<E> {
readonly "defaultValue": E
readonly "keys": $List<string>
readonly "map": $Map<string, E>
readonly "values": $List<E>

public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(s: string): E
public "get"(index: integer): E
public "getColor"(value: E): $Color4I
public "getDisplayName"(value: E): $Component
public "getIcon"(v: E): $Icon
public "getIndex"(e: E): integer
public "getName"(value: E): string
public "getNext"(value: E): E
public "getNullable"(s: string): E
public "getPrevious"(value: E): E
public "getRandom"(rand: $Random$$Type): E
public "getStringIndex"(s: string): integer
public "iterator"(): $Iterator<E>
public static "of"<T>(defaultValue: T, values: $List$$Type<T>): $NameMap$Builder<T>
public static "of"<T>(defaultValue: T, values: T[]): $NameMap$Builder<T>
public "offset"(value: E, index: integer): E
public "read"(data: $FriendlyByteBuf$$Type): E
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "withDefault"(def: E): $NameMap<E>
public "write"(data: $FriendlyByteBuf$$Type, object: E): void
[Symbol.iterator](): IterableIterator<E>;
}
}

declare module "dev.ftb.mods.ftblibrary.ui.Button" {
import { $Widget } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $MouseButton$$Type } from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import { $ButtonAccess } from "de.cadentem.obscure_tooltips_fix.mixin.ftbquests.ButtonAccess"
import { $Theme$$Type } from "dev.ftb.mods.ftblibrary.ui.Theme"
import { $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"
import { $Icon$$Type } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export class $Button extends $Widget implements $ButtonAccess {
constructor(panel: $Panel$$Type, t: $Component$$Type, i: $Icon$$Type)
constructor(panel: $Panel$$Type)

public "closeContextMenu"(): void
public "closeGui"(openPrevScreen: boolean): void
public "closeGui"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "onClicked"(mouseButton0: $MouseButton$$Type): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "openGui"(): void
public "openGuiLater"(): void
public "run"(): void
public "setIcon"(i: $Icon$$Type): $Button
public "setTitle"(s: $Component$$Type): $Button
set "icon"(value: $Icon$$Type)
set "title"(value: $Component$$Type)
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.QuestObjectStartedEventJS" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $FTBQuestsKubeJSTeamDataWrapper } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSTeamDataWrapper"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $ObjectStartedEvent, $ObjectStartedEvent$$Type } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import { $ServerEventJS } from "dev.latvian.mods.kubejs.server.ServerEventJS"

export class $QuestObjectStartedEventJS extends $ServerEventJS {
readonly "event": $ObjectStartedEvent<any>

constructor(e: $ObjectStartedEvent$$Type<any>)

public "getData"(): $FTBQuestsKubeJSTeamDataWrapper
public "getNotifiedPlayers"(): $EntityArrayList
public "getObject"(): $QuestObject
public "getOnlineMembers"(): $EntityArrayList
public "getPlayer"(): $ServerPlayer
get "data"(): $FTBQuestsKubeJSTeamDataWrapper
get "notifiedPlayers"(): $EntityArrayList
get "object"(): $QuestObject
get "onlineMembers"(): $EntityArrayList
get "player"(): $ServerPlayer
}
}

declare module "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType" {
import { $Enum } from "java.lang.Enum"

export class $RewardClaimType extends $Enum<$RewardClaimType> {
static readonly "CANT_CLAIM": $RewardClaimType
static readonly "CAN_CLAIM": $RewardClaimType
static readonly "CLAIMED": $RewardClaimType

public "canClaim"(): boolean
public "cantClaim"(): boolean
public "isClaimed"(): boolean
public static "valueOf"(name: string): $RewardClaimType
public static "values"(): $RewardClaimType[]
get "claimed"(): boolean
}
}

declare module "dev.ftb.mods.ftbchunks.api.Protection" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ProtectionPolicy } from "dev.ftb.mods.ftbchunks.api.ProtectionPolicy"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ClaimedChunk$$Type } from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"

export interface $Protection {
"getProtectionPolicy"(serverPlayer0: $ServerPlayer$$Type, blockPos1: $BlockPos$$Type, interactionHand2: $InteractionHand$$Type, claimedChunk3: $ClaimedChunk$$Type, entity4: $Entity$$Type): $ProtectionPolicy
}

export namespace $Protection {
const ATTACK_NONLIVING_ENTITY: $Protection
const EDIT_AND_INTERACT_BLOCK: $Protection
const EDIT_BLOCK: $Protection
const EDIT_FLUID: $Protection
const INTERACT_BLOCK: $Protection
const INTERACT_ENTITY: $Protection
const RIGHT_CLICK_ITEM: $Protection
function isBeneficialPotion(stack: $ItemStack$$Type): boolean
}
export abstract class $Protection$$Static implements $Protection {
static readonly "ATTACK_NONLIVING_ENTITY": $Protection
static readonly "EDIT_AND_INTERACT_BLOCK": $Protection
static readonly "EDIT_BLOCK": $Protection
static readonly "EDIT_FLUID": $Protection
static readonly "INTERACT_BLOCK": $Protection
static readonly "INTERACT_ENTITY": $Protection
static readonly "RIGHT_CLICK_ITEM": $Protection

static "isBeneficialPotion"(stack: $ItemStack$$Type): boolean
}
}

declare module "dev.ftb.mods.ftbteams.api.property.TeamProperty" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $TeamPropertyType } from "dev.ftb.mods.ftbteams.api.property.TeamPropertyType"
import { $TeamPropertyValue, $TeamPropertyValue$$Type } from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import { $Optional } from "java.util.Optional"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ConfigGroup$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigGroup"

export class $TeamProperty<T = any> {
public "config"(config: $ConfigGroup$$Type, value: $TeamPropertyValue$$Type<T>): void
public "createDefaultValue"(): $TeamPropertyValue<T>
public "createValueFromNBT"(tag: $Tag$$Type): $TeamPropertyValue<T>
public "createValueFromNetwork"(buf: $FriendlyByteBuf$$Type): $TeamPropertyValue<T>
public "fromNBT"(tag: $Tag$$Type): $Optional<T>
public "fromString"(string0: string): $Optional<T>
public "getDefaultValue"(): T
public "getId"(): $ResourceLocation
public "getTranslationKey"(prefix: string): string
public "getType"(): $TeamPropertyType<T>
public "readValue"(buf: $FriendlyByteBuf$$Type): T
public "toNBT"(value: T): $Tag
public "toString"(value: T): string
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "writeValue"(buf: $FriendlyByteBuf$$Type, value: T): void
get "defaultValue"(): T
get "id"(): $ResourceLocation
get "type"(): $TeamPropertyType<T>
}
}

declare module "dev.ftb.mods.ftbquests.quest.loot.RewardTable" {
import { $List } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Quest } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $BaseQuestFile, $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $Collection } from "java.util.Collection"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TooltipList$$Type } from "dev.ftb.mods.ftblibrary.util.TooltipList"
import { $WeightedReward, $WeightedReward$$Type } from "dev.ftb.mods.ftbquests.quest.loot.WeightedReward"
import { $LootCrate } from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import { $QuestObjectBase } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $RewardTable extends $QuestObjectBase {
constructor(id: long, file: $BaseQuestFile$$Type, filename: string)
constructor(id: long, file: $BaseQuestFile$$Type)

public "addMouseOverText"(list: $TooltipList$$Type, includeWeight: boolean, includeEmpty: boolean): void
public "addReward"(weightedReward: $WeightedReward$$Type): void
public "generateWeightedRandomRewards"(random: $RandomSource$$Type, nAttempts: integer, includeEmpty: boolean): $Collection<$WeightedReward>
public "getFakeQuest"(): $Quest
public "getFile"(): $BaseQuestFile
public "getFilename"(): string
public "getLootCrate"(): $LootCrate
public "getTitleOrElse"(def: $Component$$Type): $Component
public "getTotalWeight"(includeEmpty: boolean): float
public "getWeightedRewards"(): $List<$WeightedReward>
public "makeWeightedItemReward"(stack: $ItemStack$$Type, weight: float): $WeightedReward
public "removeReward"(weightedReward: $WeightedReward$$Type): void
public "shouldShowTooltip"(): boolean
public "toggleLootCrate"(): $LootCrate
get "fakeQuest"(): $Quest
get "file"(): $BaseQuestFile
get "filename"(): string
get "lootCrate"(): $LootCrate
get "weightedRewards"(): $List<$WeightedReward>
}
}

declare module "dev.ftb.mods.ftbquests.quest.ProgressionMode" {
import { $Enum } from "java.lang.Enum"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $ProgressionMode extends $Enum<$ProgressionMode> {
static readonly "DEFAULT": $ProgressionMode
static readonly "FLEXIBLE": $ProgressionMode
static readonly "LINEAR": $ProgressionMode
static readonly "NAME_MAP": $NameMap<$ProgressionMode>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<$ProgressionMode>

public "getId"(): string
public static "valueOf"(name: string): $ProgressionMode
public static "values"(): $ProgressionMode[]
get "id"(): string
}
}

declare module "dev.ftb.mods.ftbquests.api.QuestFile" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Team$$Type } from "dev.ftb.mods.ftbteams.api.Team"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $TeamData } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Collection } from "java.util.Collection"
import { $QuestLink$$Type } from "dev.ftb.mods.ftbquests.quest.QuestLink"
import { $UUID$$Type } from "java.util.UUID"
import { $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"

export interface $QuestFile {
"canEdit"(): boolean
"forAllChapters"(consumer0: $Consumer$$Type<$Chapter$$Type>): void
"forAllQuestLinks"(consumer0: $Consumer$$Type<$QuestLink$$Type>): void
"forAllQuests"(consumer0: $Consumer$$Type<$Quest$$Type>): void
"getAllTeamData"(): $Collection<$TeamData>
"getNullableTeamData"(uUID0: $UUID$$Type): $TeamData
"getOrCreateTeamData"(team0: $Team$$Type): $TeamData
"getOrCreateTeamData"(uUID0: $UUID$$Type): $TeamData
"getOrCreateTeamData"(entity0: $Entity$$Type): $TeamData
"isServerSide"(): boolean
get "allTeamData"(): $Collection<$TeamData>
get "serverSide"(): boolean
}

export namespace $QuestFile {
const probejs$$marker: never
}
export abstract class $QuestFile$$Static implements $QuestFile {
}
}

declare module "dev.ftb.mods.ftblibrary.config.ConfigCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigCallback {
"save"(boolean0: boolean): void
}

export namespace $ConfigCallback {
const probejs$$marker: never
}
export abstract class $ConfigCallback$$Static implements $ConfigCallback {
}
}

declare module "dev.ftb.mods.ftbquests.api.event.CustomFilterDisplayItemsEvent" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Collection$$Type } from "java.util.Collection"
import { $Event } from "dev.architectury.event.Event"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CustomFilterDisplayItemsEvent {
static readonly "ADD_ITEMSTACK": $Event<$Consumer<$CustomFilterDisplayItemsEvent>>

constructor(callback: $Consumer$$Type<$ItemStack$$Type>)

public "add"(stack: $ItemStack$$Type): void
public "add"(stacks: $Collection$$Type<$ItemStack$$Type>): void
}
}

declare module "dev.ftb.mods.ftblibrary.config.EnumConfig" {
import { $ConfigWithVariants } from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import { $NameMap, $NameMap$$Type } from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $EnumConfig<E = any> extends $ConfigWithVariants<E> {
readonly "nameMap": $NameMap<E>

constructor(nm: $NameMap$$Type<E>)

public "getIteration"(currentValue: E, next: boolean): E
}
}

declare module "dev.ftb.mods.ftblibrary.ui.WidgetLayout" {
import { $WidgetLayout$Padding } from "dev.ftb.mods.ftblibrary.ui.WidgetLayout$Padding"
import { $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"

export interface $WidgetLayout {
"align"(panel0: $Panel$$Type): integer
"getLayoutPadding"(): $WidgetLayout$Padding
get "layoutPadding"(): $WidgetLayout$Padding
}

export namespace $WidgetLayout {
const HORIZONTAL: $WidgetLayout
const NONE: $WidgetLayout
const NO_PADDING: $WidgetLayout$Padding
const VERTICAL: $WidgetLayout
}
export abstract class $WidgetLayout$$Static implements $WidgetLayout {
static readonly "HORIZONTAL": $WidgetLayout
static readonly "NONE": $WidgetLayout
static readonly "NO_PADDING": $WidgetLayout$Padding
static readonly "VERTICAL": $WidgetLayout

}
}

declare module "dev.ftb.mods.ftbteams.api.property.PrivacyProperty" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TeamPropertyType } from "dev.ftb.mods.ftbteams.api.property.TeamPropertyType"
import { $TeamProperty } from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import { $PrivacyMode, $PrivacyMode$$Type } from "dev.ftb.mods.ftbteams.api.property.PrivacyMode"
import { $Optional } from "java.util.Optional"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $PrivacyProperty extends $TeamProperty<$PrivacyMode> {
constructor(id: $ResourceLocation$$Type, def: $Supplier$$Type<$PrivacyMode>)
constructor(id: $ResourceLocation$$Type, def: $PrivacyMode$$Type)

public "fromString"(string: string): $Optional<$PrivacyMode>
public "getType"(): $TeamPropertyType<$PrivacyMode>
public "toString"(value: $PrivacyMode$$Type): string
get "type"(): $TeamPropertyType<$PrivacyMode>
}
}

declare module "dev.ftb.mods.ftblibrary.sidebar.SidebarButton" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $List, $List$$Type } from "java.util.List"
import { $Comparable } from "java.lang.Comparable"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $SidebarButtonGroup, $SidebarButtonGroup$$Type } from "dev.ftb.mods.ftblibrary.sidebar.SidebarButtonGroup"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $SidebarButton implements $Comparable<$SidebarButton> {
constructor(id: $ResourceLocation$$Type, group: $SidebarButtonGroup$$Type, json: $JsonObject$$Type)

public "addVisibilityCondition"(supplier: $BooleanSupplier$$Type): void
public "compareTo"(button: $SidebarButton$$Type): integer
public static "copyWithoutGroup"(toCopy: $SidebarButton$$Type): $SidebarButton
public "getConfig"(): boolean
public "getCustomTextHandler"(): $Supplier<string>
public "getDefaultConfig"(): boolean
public "getGroup"(): $SidebarButtonGroup
public "getIcon"(): $Icon
public "getId"(): $ResourceLocation
public "getJson"(): $JsonObject
public "getLangKey"(): string
public "getTooltipHandler"(): $Consumer<$List<string>>
public "getTooltipLangKey"(): string
public "getX"(): integer
public "isActuallyVisible"(): boolean
public "isVisible"(): boolean
public "onClicked"(shift: boolean): void
public "setConfig"(value: boolean): void
public "setCustomTextHandler"(text: $Supplier$$Type<string>): void
public "setTooltipHandler"(text: $Consumer$$Type<$List$$Type<string>>): void
get "config"(): boolean
get "customTextHandler"(): $Supplier<string>
get "defaultConfig"(): boolean
get "group"(): $SidebarButtonGroup
get "icon"(): $Icon
get "id"(): $ResourceLocation
get "json"(): $JsonObject
get "langKey"(): string
get "tooltipHandler"(): $Consumer<$List<string>>
get "tooltipLangKey"(): string
get "x"(): integer
get "actuallyVisible"(): boolean
get "visible"(): boolean
set "config"(value: boolean)
set "customTextHandler"(value: $Supplier$$Type<string>)
set "tooltipHandler"(value: $Consumer$$Type<$List$$Type<string>>)
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$FileEvent" {
import { $ObjectCompletedEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import { $BaseQuestFile, $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ObjectCompletedEvent$FileEvent extends $ObjectCompletedEvent<$BaseQuestFile> {
constructor(d: $QuestProgressEventData$$Type<$BaseQuestFile$$Type>)

public "getFile"(): $BaseQuestFile
get "file"(): $BaseQuestFile
}
}

declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyType" {
import { $List } from "java.util.List"
import { $TeamProperty, $TeamProperty$$Type } from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import { $PrivacyMode } from "dev.ftb.mods.ftbteams.api.property.PrivacyMode"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $TeamPropertyType<T = any> {
static readonly "BOOLEAN": $TeamPropertyType<boolean>
static readonly "COLOR": $TeamPropertyType<$Color4I>
static readonly "DOUBLE": $TeamPropertyType<double>
static readonly "ENUM": $TeamPropertyType<string>
static readonly "INT": $TeamPropertyType<integer>
static readonly "PRIVACY_MODE": $TeamPropertyType<$PrivacyMode>
static readonly "STRING": $TeamPropertyType<string>
static readonly "STRING_LIST": $TeamPropertyType<$List<string>>

public static "read"(buf: $FriendlyByteBuf$$Type): $TeamProperty<any>
public static "write"(buf: $FriendlyByteBuf$$Type, p: $TeamProperty$$Type<any>): void
}
}

declare module "dev.ftb.mods.ftblibrary.config.FluidConfig" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $ResourceConfigValue } from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"
import { $SelectableResource } from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import { $FluidStack, $FluidStack$$Type } from "dev.architectury.fluid.FluidStack"

export class $FluidConfig extends $ResourceConfigValue<$FluidStack> {
constructor(allowEmpty: boolean)
constructor(fixedSize: long)

public "getResource"(): $SelectableResource<$FluidStack>
public "getStringForGUI"(v: $FluidStack$$Type): $Component
public "showAmount"(show: boolean): $FluidConfig
get "resource"(): $SelectableResource<$FluidStack>
}
}

declare module "dev.ftb.mods.ftblibrary.ui.ContextMenuItem" {
import { $ContextMenu$$Type } from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import { $Button$$Type } from "dev.ftb.mods.ftblibrary.ui.Button"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $MouseButton$$Type } from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import { $Icon, $Icon$$Type } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $TooltipList$$Type } from "dev.ftb.mods.ftblibrary.util.TooltipList"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Widget } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $List$$Type } from "java.util.List"
import { $Theme$$Type } from "dev.ftb.mods.ftblibrary.ui.Theme"
import { $Comparable } from "java.lang.Comparable"
import { $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"

export class $ContextMenuItem implements $Comparable<$ContextMenuItem> {
static readonly "SEPARATOR": $ContextMenuItem

constructor(title: $Component$$Type, icon: $Icon$$Type, callback: $Consumer$$Type<$Button$$Type>)

public "addMouseOverText"(list: $TooltipList$$Type): void
public "compareTo"(o: $ContextMenuItem$$Type): integer
public "createWidget"(panel: $ContextMenu$$Type): $Widget
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getIcon"(): $Icon
public "getTitle"(): $Component
public "getYesNoText"(): $Component
public "isClickable"(): boolean
public "isEnabled"(): boolean
public "onClicked"(button: $Button$$Type, panel: $Panel$$Type, mouseButton: $MouseButton$$Type): void
public static "separator"(): $ContextMenuItem
public "setCloseMenu"(v: boolean): $ContextMenuItem
public "setEnabled"(enabled: boolean): $ContextMenuItem
public "setYesNoText"(s: $Component$$Type): $ContextMenuItem
public static "subMenu"(title: $Component$$Type, icon: $Icon$$Type, subItems: $List$$Type<$ContextMenuItem$$Type>): $ContextMenuItem
public static "title"(title: $Component$$Type): $ContextMenuItem
get "icon"(): $Icon
get "yesNoText"(): $Component
get "clickable"(): boolean
get "enabled"(): boolean
set "closeMenu"(value: boolean)
set "enabled"(value: boolean)
set "yesNoText"(value: $Component$$Type)
}
}

declare module "dev.ftb.mods.ftbquests.events.QuestProgressEventData" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $QuestObject, $QuestObject$$Type } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $List } from "java.util.List"
import { $Date, $Date$$Type } from "java.util.Date"
import { $TeamData, $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Collection$$Type } from "java.util.Collection"

export class $QuestProgressEventData<T extends $QuestObject = $QuestObject> {
constructor(date: $Date$$Type, teamData: $TeamData$$Type, object: T, online: $Collection$$Type<$ServerPlayer$$Type>, notified: $Collection$$Type<$ServerPlayer$$Type>)

public "getNotifiedPlayers"(): $List<$ServerPlayer>
public "getObject"(): T
public "getOnlineMembers"(): $List<$ServerPlayer>
public "getTeamData"(): $TeamData
public "getTime"(): $Date
public "notifyPlayers"(id: long): void
public "setCompleted"(id: long): void
public "setStarted"(id: long): void
public "withObject"<N extends $QuestObject>(o: N): $QuestProgressEventData<N>
get "notifiedPlayers"(): $List<$ServerPlayer>
get "object"(): T
get "onlineMembers"(): $List<$ServerPlayer>
get "teamData"(): $TeamData
get "time"(): $Date
set "completed"(value: long)
set "started"(value: long)
}
}

declare module "dev.ftb.mods.ftblibrary.math.PixelBuffer" {
import { $BufferedImage, $BufferedImage$$Type } from "java.awt.image.BufferedImage"
import { $ByteBuffer } from "java.nio.ByteBuffer"
import { $InputStream$$Type } from "java.io.InputStream"

export class $PixelBuffer {
constructor(w: integer, h: integer)

public "copy"(): $PixelBuffer
public "fill"(startX: integer, startY: integer, w: integer, h: integer, col: integer): void
public "fill"(col: integer): void
public static "from"(stream: $InputStream$$Type): $PixelBuffer
public static "from"(img: $BufferedImage$$Type): $PixelBuffer
public "getHeight"(): integer
public "getPixels"(): integer[]
public "getRGB"(startX: integer, startY: integer, w: integer, h: integer, p: integer[]): integer[]
public "getRGB"(x: integer, y: integer): integer
public "getSubimage"(x: integer, y: integer, w: integer, h: integer): $PixelBuffer
public "getWidth"(): integer
public "setPixels"(p: integer[]): void
public "setRGB"(startX: integer, startY: integer, buffer: $PixelBuffer$$Type): void
public "setRGB"(startX: integer, startY: integer, w: integer, h: integer, rgbArray: integer[]): void
public "setRGB"(x: integer, y: integer, col: integer): void
public "toByteBuffer"(alpha: boolean): $ByteBuffer
public "toImage"(type: integer): $BufferedImage
get "height"(): integer
get "pixels"(): integer[]
get "width"(): integer
set "pixels"(value: integer[])
}
}

declare module "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer" {
import { $Enum } from "java.lang.Enum"

export class $Widget$DrawLayer extends $Enum<$Widget$DrawLayer> {
static readonly "BACKGROUND": $Widget$DrawLayer
static readonly "FOREGROUND": $Widget$DrawLayer

public static "valueOf"(name: string): $Widget$DrawLayer
public static "values"(): $Widget$DrawLayer[]
}
}

declare module "dev.ftb.mods.ftbquests.quest.QuestObject" {
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Collection } from "java.util.Collection"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $UUID$$Type } from "java.util.UUID"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import { $QuestObjectBase } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $QuestObject extends $QuestObjectBase {
constructor(id: long)

public "cacheProgress"(): boolean
public "getChildren"(): $Collection<$QuestObject>
/** Client only, do not use in server scripts */
public "getProgressColor"(data: $TeamData$$Type, dim: boolean): $Color4I
/** Client only, do not use in server scripts */
public "getProgressColor"(data: $TeamData$$Type): $Color4I
public "getRelativeProgressFromChildren"(teamData0: $TeamData$$Type): integer
public static "getRelativeProgressFromChildren"(progressSum: integer, count: integer): integer
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "isOptionalForProgression"(teamData: $TeamData$$Type): boolean
public "isSearchable"(data: $TeamData$$Type): boolean
public "isVisible"(data: $TeamData$$Type): boolean
public "onCompleted"(data: $QuestProgressEventData$$Type<any>): void
public "onStarted"(data: $QuestProgressEventData$$Type<any>): void
get "children"(): $Collection<$QuestObject>
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbchunks.kubejs.AfterEventJS" {
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ClaimedChunk, $ClaimedChunk$$Type } from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

export class $AfterEventJS extends $EntityEventJS {
readonly "chunk": $ClaimedChunk
readonly "source": $CommandSourceStack

constructor(s: $CommandSourceStack$$Type, c: $ClaimedChunk$$Type)

public "getClaimPos"(): $BlockPos
get "claimPos"(): $BlockPos
}
}

declare module "dev.ftb.mods.ftbquests.quest.ChapterImage" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $TooltipList$$Type } from "dev.ftb.mods.ftblibrary.util.TooltipList"
import { $Icon, $Icon$$Type } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"
import { $ConfigGroup$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $Movable } from "dev.ftb.mods.ftbquests.quest.Movable"

export class $ChapterImage implements $Movable {
static readonly "FTBQ_IMAGE": string
static "clipboard": $WeakReference<$ChapterImage>

constructor(c: $Chapter$$Type)

public "addHoverText"(list: $TooltipList$$Type): void
public "copy"(newChapter: $Chapter$$Type, newX: double, newY: double): $ChapterImage
public "copyToClipboard"(): void
/** Client only, do not use in server scripts */
public "drawMoved"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "fixupAspectRatio"(adjustWidth: boolean): void
public "getAlpha"(): integer
public "getChapter"(): $Chapter
public "getClick"(): string
public "getColor"(): $Color4I
public "getHeight"(): double
public "getImage"(): $Icon
public "getMovableID"(): long
public "getOrder"(): integer
public "getRotation"(): double
public "getShape"(): string
public "getTitle"(): $Component
public "getWidth"(): double
public "getX"(): double
public "getY"(): double
public "isAlignToCorner"(): boolean
public "isAspectRatioOff"(): boolean
public static "isImageInClipboard"(): boolean
/** Client only, do not use in server scripts */
public "move"(to: $Chapter$$Type, _x: double, _y: double): void
public "onMoved"(x: double, y: double, chapterId: long): void
public "readData"(nbt: $CompoundTag$$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$$Type): void
public "setImage"(image: $Icon$$Type): $ChapterImage
public "setPosition"(x: double, y: double): $ChapterImage
public "shouldShowImage"(teamData: $TeamData$$Type): boolean
public "writeData"(nbt: $CompoundTag$$Type): $CompoundTag
public "writeNetData"(buffer: $FriendlyByteBuf$$Type): void
get "alpha"(): integer
get "chapter"(): $Chapter
get "click"(): string
get "color"(): $Color4I
get "height"(): double
get "image"(): $Icon
get "movableID"(): long
get "order"(): integer
get "rotation"(): double
get "shape"(): string
get "title"(): $Component
get "width"(): double
get "x"(): double
get "y"(): double
get "alignToCorner"(): boolean
get "aspectRatioOff"(): boolean
set "image"(value: $Icon$$Type)
}
}

declare module "dev.ftb.mods.ftblibrary.ui.Widget" {
import { $Window } from "com.mojang.blaze3d.platform.Window"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MouseButton$$Type } from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import { $IScreenWrapper } from "dev.ftb.mods.ftblibrary.ui.IScreenWrapper"
import { $KeyModifiers$$Type } from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import { $BaseScreen } from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import { $TooltipList$$Type } from "dev.ftb.mods.ftblibrary.util.TooltipList"
import { $Key$$Type } from "dev.ftb.mods.ftblibrary.ui.input.Key"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Widget$DrawLayer, $Widget$DrawLayer$$Type } from "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer"
import { $PositionedIngredient } from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import { $WidgetType } from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import { $Optional } from "java.util.Optional"
import { $Theme$$Type } from "dev.ftb.mods.ftblibrary.ui.Theme"
import { $CursorType } from "dev.ftb.mods.ftblibrary.ui.CursorType"
import { $Comparable } from "java.lang.Comparable"
import { $Panel, $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"

export class $Widget implements $IScreenWrapper, $Comparable<$Widget> {
constructor(p: $Panel$$Type)

public "acceptGhostIngredient"(ingredient: any): void
public "addMouseOverText"(list: $TooltipList$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "closeContextMenu"(): void
public "closeGui"(openPrevScreen: boolean): void
public "closeGui"(): void
public "collidesWith"(x: integer, y: integer, w: integer, h: integer): boolean
public "compareTo"(widget: $Widget$$Type): integer
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public static "getClipboardString"(): string
public "getCursor"(): $CursorType
public "getDrawLayer"(): $Widget$DrawLayer
public "getGui"(): $BaseScreen
public "getHeight"(): integer
public "getIngredientUnderMouse"(): $Optional<$PositionedIngredient>
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getParent"(): $Panel
public "getPartialTicks"(): float
public "getPosX"(): integer
public "getPosY"(): integer
public "getScreen"(): $Window
public "getTitle"(): $Component
public "getWidgetType"(): $WidgetType
public "getWidth"(): integer
public "getX"(): integer
public "getY"(): integer
public "handleClick"(click: string): boolean
public "handleClick"(scheme: string, path: string): boolean
public static "isCtrlKeyDown"(): boolean
public "isEnabled"(): boolean
public "isGhostIngredientTarget"(ingredient: any): boolean
public static "isKeyDown"(key: integer): boolean
public static "isMouseButtonDown"(button: $MouseButton$$Type): boolean
public "isMouseOver"(): boolean
public static "isShiftKeyDown"(): boolean
public "keyPressed"(key: $Key$$Type): boolean
public "keyReleased"(key: $Key$$Type): void
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mousePressed"(button: $MouseButton$$Type): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseScrolled"(scroll: double): boolean
public "onClosed"(): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "openGui"(): void
public "openGuiLater"(): void
public "playClickSound"(): void
public "run"(): void
public static "setClipboardString"(string: string): void
public "setDrawLayer"(drawLayer: $Widget$DrawLayer$$Type): void
public "setHeight"(v: integer): void
public "setPos"(x: integer, y: integer): void
public "setPosAndSize"(x: integer, y: integer, w: integer, h: integer): $Widget
public "setSize"(w: integer, h: integer): void
public "setWidth"(v: integer): void
public "setX"(v: integer): void
public "setY"(v: integer): void
public "shouldAddMouseOverText"(): boolean
public "shouldDraw"(): boolean
public "tick"(): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
get "height"(): integer
set "height"(value: integer)
get "posX"(): integer
set "posX"(value: integer)
get "posY"(): integer
set "posY"(value: integer)
get "width"(): integer
set "width"(value: integer)
get "cursor"(): $CursorType
get "drawLayer"(): $Widget$DrawLayer
get "gui"(): $BaseScreen
get "ingredientUnderMouse"(): $Optional<$PositionedIngredient>
get "mouseX"(): integer
get "mouseY"(): integer
get "parent"(): $Panel
get "partialTicks"(): float
get "screen"(): $Window
get "title"(): $Component
get "widgetType"(): $WidgetType
get "x"(): integer
get "y"(): integer
get "enabled"(): boolean
get "mouseOver"(): boolean
set "drawLayer"(value: $Widget$DrawLayer$$Type)
set "x"(value: integer)
set "y"(value: integer)
}
}

declare module "dev.ftb.mods.ftblibrary.math.ChunkDimPos" {
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Comparable } from "java.lang.Comparable"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $ChunkDimPos implements $Comparable<$ChunkDimPos> {
constructor(dim: $ResourceKey$$Type<$Level>, x: integer, z: integer)
constructor(entity: $Entity$$Type)
constructor(world: $Level$$Type, pos: $BlockPos$$Type)
constructor(dim: $ResourceKey$$Type<$Level>, pos: $ChunkPos$$Type)

public "compareTo"(o: $ChunkDimPos$$Type): integer
public "dimension"(): $ResourceKey<$Level>
public "getChunkPos"(): $ChunkPos
public "offset"(ox: integer, oz: integer): $ChunkDimPos
public "x"(): integer
public "z"(): integer
get "chunkPos"(): $ChunkPos
}
}

declare module "dev.ftb.mods.ftblibrary.ui.Theme" {
import { $Font } from "net.minecraft.client.gui.Font"
import { $List } from "java.util.List"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $WidgetType$$Type } from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import { $FormattedText, $FormattedText$$Type } from "net.minecraft.network.chat.FormattedText"
import { $ImageIcon } from "dev.ftb.mods.ftblibrary.icon.ImageIcon"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"
import { $Color4I, $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"

export class $Theme {
static readonly "BACKGROUND_SQUARES": $ImageIcon
static readonly "CENTERED": integer
static readonly "CENTERED_V": integer
static readonly "DARK": integer
static readonly "DEFAULT": $Theme
static readonly "MOUSE_OVER": integer
static readonly "SHADOW": integer
static readonly "UNICODE": integer
static "renderDebugBoxes": boolean

constructor()

public "drawButton"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawCheckbox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, selected: boolean, radioButton: boolean): void
public "drawCheckboxBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, radioButton: boolean): void
public "drawContainerSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawContextMenuBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawGui"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawHorizontalTab"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, selected: boolean): void
public "drawPanelBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawScrollBar"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, vertical: boolean): void
public "drawScrollBarBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, color: $Color4I$$Type, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer): integer
public "drawTextBox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawWidget"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "getContentColor"(type: $WidgetType$$Type): $Color4I
public "getFont"(): $Font
public "getFontHeight"(): integer
public "getInvertedContentColor"(): $Color4I
public "getStringWidth"(text: $FormattedText$$Type): integer
public "getStringWidth"(text: $FormattedCharSequence$$Type): integer
public "getStringWidth"(text: string): integer
public "listFormattedStringToWidth"(text: $FormattedText$$Type, width: integer): $List<$FormattedText>
public "trimStringToWidth"(text: string, width: integer): string
public "trimStringToWidth"(text: $FormattedText$$Type, width: integer): $FormattedText
public "trimStringToWidthReverse"(text: string, width: integer): string
get "font"(): $Font
get "fontHeight"(): integer
get "invertedContentColor"(): $Color4I
}
}

declare module "dev.ftb.mods.ftbquests.quest.reward.Reward" {
import { $Button$$Type } from "dev.ftb.mods.ftblibrary.ui.Button"
import { $Quest, $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $RewardAutoClaim } from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RewardType } from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import { $UUID$$Type } from "java.util.UUID"
import { $TooltipList$$Type } from "dev.ftb.mods.ftblibrary.util.TooltipList"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $PositionedIngredient } from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import { $Widget$$Type } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List$$Type } from "java.util.List"
import { $Optional } from "java.util.Optional"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $QuestObjectBase } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $Reward extends $QuestObjectBase {
constructor(id: long, q: $Quest$$Type)

/** Client only, do not use in server scripts */
public "addMouseOverText"(list: $TooltipList$$Type): void
/** Client only, do not use in server scripts */
public "addTitleInMouseOverText"(): boolean
public "automatedClaimPost"(blockEntity: $BlockEntity$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): void
public "automatedClaimPre"(blockEntity: $BlockEntity$$Type, items: $List$$Type<$ItemStack$$Type>, random: $RandomSource$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): boolean
public "claim"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean): void
public "getAutoClaimType"(): $RewardAutoClaim
/** Client only, do not use in server scripts */
public "getButtonText"(): string
public "getExcludeFromClaimAll"(): boolean
/** Client only, do not use in server scripts */
public "getIngredient"(widget: $Widget$$Type): $Optional<$PositionedIngredient>
public "getQuest"(): $Quest
public "getType"(): $RewardType
public "ignoreRewardBlocking"(): boolean
public "isClaimAllHardcoded"(): boolean
public "isTeamReward"(): boolean
/** Client only, do not use in server scripts */
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
get "autoClaimType"(): $RewardAutoClaim
get "buttonText"(): string
get "excludeFromClaimAll"(): boolean
get "quest"(): $Quest
get "type"(): $RewardType
get "claimAllHardcoded"(): boolean
get "teamReward"(): boolean
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$TaskEvent" {
import { $ObjectCompletedEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import { $Task, $Task$$Type } from "dev.ftb.mods.ftbquests.quest.task.Task"

export class $ObjectCompletedEvent$TaskEvent extends $ObjectCompletedEvent<$Task> {
constructor(d: $QuestProgressEventData$$Type<$Task$$Type>)

public "getTask"(): $Task
get "task"(): $Task
}
}

declare module "dev.ftb.mods.ftblibrary.config.ListConfig" {
import { $List, $List$$Type } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $ConfigValue, $ConfigValue$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ListConfig<E = any, CV extends $ConfigValue<E> = $ConfigValue<E>> extends $ConfigValue<$List<E>> {
static readonly "COLOR": $Color4I
static readonly "EMPTY_LIST": $Component
static readonly "NON_EMPTY_LIST": $Component

constructor(t: CV)

public "copy"(v: $List$$Type<E>): $List<E>
public "getColor"(v: $List$$Type<E>): $Color4I
public "getStringForGUI"(v: $List$$Type<E>): $Component
public "getType"(): CV
get "type"(): CV
}
}

declare module "dev.ftb.mods.ftbquests.quest.reward.CustomReward" {
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $Reward } from "dev.ftb.mods.ftbquests.quest.reward.Reward"

export class $CustomReward extends $Reward {
constructor(id: long, quest: $Quest$$Type)

}
}

declare module "dev.ftb.mods.ftblibrary.ui.IOpenableScreen" {
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export interface $IOpenableScreen extends $Runnable {
"closeContextMenu"(): void
"closeGui"(): void
"closeGui"(openPrevScreen: boolean): void
"openAfter"(runnable: $Runnable$$Type): $Runnable
"openGui"(): void
"openGuiLater"(): void
"run"(): void
}

export namespace $IOpenableScreen {
const probejs$$marker: never
}
export abstract class $IOpenableScreen$$Static implements $IOpenableScreen {
}
}

declare module "dev.ftb.mods.ftblibrary.icon.ImageIcon" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IResourceIcon } from "dev.ftb.mods.ftblibrary.icon.IResourceIcon"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Color4I, $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"

export class $ImageIcon extends $Icon implements $IResourceIcon {
static readonly "MISSING_IMAGE": $ResourceLocation
readonly "texture": $ResourceLocation

constructor(tex: $ResourceLocation$$Type)

/** Client only, do not use in server scripts */
public "bindTexture"(): void
/** Client only, do not use in server scripts */
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
/** Client only, do not use in server scripts */
public "draw3D"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getResourceLocation"(): $ResourceLocation
get "color"(): $Color4I
set "color"(value: $Color4I$$Type)
get "maxU"(): float
set "maxU"(value: float)
get "maxV"(): float
set "maxV"(value: float)
get "minU"(): float
set "minU"(value: float)
get "minV"(): float
set "minV"(value: float)
get "tileSize"(): double
set "tileSize"(value: double)
get "resourceLocation"(): $ResourceLocation
}
}

declare module "dev.ftb.mods.ftblibrary.config.ConfigWithVariants" {
import { $ConfigValue } from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigWithVariants<T = any> extends $ConfigValue<T> {
constructor()

public "getIteration"(t0: T, boolean1: boolean): T
}
}

declare module "dev.ftb.mods.ftbquests.quest.Excludable" {
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"

export interface $Excludable {
"getId"(): long
"isQuestObjectExcluded"(teamData0: $TeamData$$Type): boolean
get "id"(): long
}

export namespace $Excludable {
const probejs$$marker: never
}
export abstract class $Excludable$$Static implements $Excludable {
}
}

declare module "dev.ftb.mods.ftbquests.quest.Quest" {
import { $QuestObject, $QuestObject$$Type } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Collection } from "java.util.Collection"
import { $UUID$$Type } from "java.util.UUID"
import { $Excludable } from "dev.ftb.mods.ftbquests.quest.Excludable"
import { $Task, $Task$$Type } from "dev.ftb.mods.ftbquests.quest.task.Task"
import { $Tristate } from "dev.ftb.mods.ftblibrary.config.Tristate"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TeamData$$Type } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Reward, $Reward$$Type } from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import { $ProgressionMode } from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import { $Movable } from "dev.ftb.mods.ftbquests.quest.Movable"

export class $Quest extends $QuestObject implements $Movable, $Excludable {
static readonly "PAGEBREAK_CODE": string

constructor(id: long, chapter: $Chapter$$Type)

public "addDependency"(object: $QuestObject$$Type): void
public "addReward"(reward: $Reward$$Type): void
public "addTask"(task: $Task$$Type): void
public "allTasksCompleted"(teamData: $TeamData$$Type): boolean
public "areDependenciesComplete"(teamData: $TeamData$$Type): boolean
public "areDependenciesVisible"(teamData: $TeamData$$Type): boolean
public "buildDescriptionIndex"(): $List<$Pair<integer, integer>>
public "canBeRepeated"(): boolean
public "checkRepeatable"(data: $TeamData$$Type, player: $UUID$$Type): boolean
public "clearDependencies"(): void
public "copyToClipboard"(): void
/** Client only, do not use in server scripts */
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getChapter"(): $Chapter
public "getDependants"(): $Collection<$QuestObject>
/** Client only, do not use in server scripts */
public "getDescription"(): $List<$Component>
public "getGuidePage"(): string
public "getHeight"(): double
public "getHideTextUntilComplete"(): $Tristate
public "getIconScale"(): double
public "getId"(): long
public "getMinRequiredDependencies"(): integer
public "getMinWidth"(): integer
public "getMovableID"(): long
public "getProgressionMode"(): $ProgressionMode
public "getRawDescription"(): $List<string>
public "getRawSubtitle"(): string
public "getRepeatCooldown"(): integer
public "getRequireSequentialTasks"(): boolean
public "getRewards"(): $Collection<$Reward>
public "getShape"(): string
public "getSize"(): double
/** Client only, do not use in server scripts */
public "getSubtitle"(): $Component
public "getTasks"(): $Collection<$Task>
public "getTasksAsList"(): $List<$Task>
public "getTitle"(): $Component
public "getWidth"(): double
public "getX"(): double
public "getY"(): double
public "hasDependencies"(): boolean
public "hasDependency"(object: $QuestObject$$Type): boolean
public "hideDetailsUntilStartable"(): boolean
public "ignoreRewardBlocking"(): boolean
public "isExclusiveQuest"(): boolean
public "isOptional"(): boolean
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
/** Client only, do not use in server scripts */
public "move"(to: $Chapter$$Type, x: double, y: double): void
public "moveRewardLeft"(reward: $Reward$$Type): void
public "moveRewardRight"(reward: $Reward$$Type): void
public "moveTaskLeft"(task: $Task$$Type): void
public "moveTaskRight"(task: $Task$$Type): void
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "removeDependency"(object: $QuestObject$$Type): void
public "removeInvalidDependencies"(): void
public "removeReward"(reward: $Reward$$Type): void
public "removeTask"(task: $Task$$Type): void
public "setRawSubtitle"(rawSubtitle: string): void
public "setRewardList"(rewards: $List$$Type<$Reward$$Type>): void
public "setSize"(size: double): void
public "setTaskList"(tasks: $List$$Type<$Task$$Type>): void
public "setX"(x: double): void
public "setY"(y: double): void
public "shouldHideDependencyLines"(): boolean
public "shouldHideDependentLines"(): boolean
public "shouldHideLockIcon"(): boolean
public "showInRecipeMod"(): boolean
public "streamDependencies"(): $Stream<$QuestObject>
public "verifyDependencies"(autofix: boolean): boolean
public "writeRewards"(tag: $CompoundTag$$Type): void
public "writeTasks"(tag: $CompoundTag$$Type): void
get "chapter"(): $Chapter
get "dependants"(): $Collection<$QuestObject>
get "description"(): $List<$Component>
get "guidePage"(): string
get "height"(): double
get "hideTextUntilComplete"(): $Tristate
get "iconScale"(): double
get "id"(): long
get "minRequiredDependencies"(): integer
get "minWidth"(): integer
get "movableID"(): long
get "progressionMode"(): $ProgressionMode
get "rawDescription"(): $List<string>
get "rawSubtitle"(): string
get "repeatCooldown"(): integer
get "requireSequentialTasks"(): boolean
get "rewards"(): $Collection<$Reward>
get "shape"(): string
get "size"(): double
get "subtitle"(): $Component
get "tasks"(): $Collection<$Task>
get "tasksAsList"(): $List<$Task>
get "title"(): $Component
get "width"(): double
get "x"(): double
get "y"(): double
get "exclusiveQuest"(): boolean
get "optional"(): boolean
set "rawSubtitle"(value: string)
set "rewardList"(value: $List$$Type<$Reward$$Type>)
set "size"(value: double)
set "taskList"(value: $List$$Type<$Task$$Type>)
set "x"(value: double)
set "y"(value: double)
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.CustomRewardEventJS" {
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $CustomRewardEvent$$Type } from "dev.ftb.mods.ftbquests.events.CustomRewardEvent"
import { $CustomReward } from "dev.ftb.mods.ftbquests.quest.reward.CustomReward"

export class $CustomRewardEventJS extends $PlayerEventJS {
constructor(e: $CustomRewardEvent$$Type)

public "getNotify"(): boolean
public "getReward"(): $CustomReward
get "notify"(): boolean
get "reward"(): $CustomReward
}
}

declare module "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup" {
import { $ChapterGroup } from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import { $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"

export class $DefaultChapterGroup extends $ChapterGroup {
constructor(f: $BaseQuestFile$$Type)

}
}

declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RewardType$GuiProvider, $RewardType$GuiProvider$$Type } from "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider"
import { $RewardType$Provider$$Type } from "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $Reward } from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $RewardType {
constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<$Icon>)

public "createReward"(id: long, quest: $Quest$$Type): $Reward
public static "createReward"(id: long, quest: $Quest$$Type, typeId: string): $Reward
public "getDisplayName"(): $Component
public "getExcludeFromListRewards"(): boolean
public "getGuiProvider"(): $RewardType$GuiProvider
public "getIconSupplier"(): $Icon
public "getTypeForNBT"(): string
public "getTypeId"(): $ResourceLocation
public "setDisplayName"(name: $Component$$Type): $RewardType
public "setExcludeFromListRewards"(v: boolean): $RewardType
public "setGuiProvider"(p: $RewardType$GuiProvider$$Type): $RewardType
get "intId"(): integer
set "intId"(value: integer)
get "displayName"(): $Component
get "excludeFromListRewards"(): boolean
get "guiProvider"(): $RewardType$GuiProvider
get "iconSupplier"(): $Icon
get "typeForNBT"(): string
get "typeId"(): $ResourceLocation
set "displayName"(value: $Component$$Type)
set "excludeFromListRewards"(value: boolean)
set "guiProvider"(value: $RewardType$GuiProvider$$Type)
}
}

declare module "dev.ftb.mods.ftbquests.events.CustomRewardEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $EventActor } from "dev.architectury.event.EventActor"
import { $Event } from "dev.architectury.event.Event"
import { $CustomReward, $CustomReward$$Type } from "dev.ftb.mods.ftbquests.quest.reward.CustomReward"

export class $CustomRewardEvent {
static readonly "EVENT": $Event<$EventActor<$CustomRewardEvent>>

constructor(reward: $CustomReward$$Type, player: $ServerPlayer$$Type, notify: boolean)

public "getNotify"(): boolean
public "getPlayer"(): $ServerPlayer
public "getReward"(): $CustomReward
get "notify"(): boolean
get "player"(): $ServerPlayer
get "reward"(): $CustomReward
}
}

declare module "dev.ftb.mods.ftblibrary.icon.MutableColor4I" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Color4I, $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"

export class $MutableColor4I extends $Color4I {
static readonly "TEMP": $Color4I

public "addBrightness"(b: integer): $Color4I
/** Client only, do not use in server scripts */
public "draw3D"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "set"(col: integer, a: integer): $Color4I
public "set"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "set"(col: $Color4I$$Type, a: integer): $Color4I
public "set"(col: $Color4I$$Type): $Color4I
public "set"(col: integer): $Color4I
public "setAlpha"(a: integer): $Color4I
public "setFromHSB"(h: float, s: float, b: float): $Color4I
set "alpha"(value: integer)
}
}

declare module "dev.ftb.mods.ftbquests.quest.Chapter" {
import { $ChapterGroup, $ChapterGroup$$Type } from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import { $List } from "java.util.List"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $ChapterImage, $ChapterImage$$Type } from "dev.ftb.mods.ftbquests.quest.ChapterImage"
import { $Quest, $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $BaseQuestFile, $BaseQuestFile$$Type } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $QuestLink, $QuestLink$$Type } from "dev.ftb.mods.ftbquests.quest.QuestLink"
import { $Optional } from "java.util.Optional"
import { $ProgressionMode } from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import { $Movable } from "dev.ftb.mods.ftbquests.quest.Movable"

export class $Chapter extends $QuestObject {
readonly "file": $BaseQuestFile

constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type, filename: string)

public "addImage"(image: $ChapterImage$$Type): void
public "addQuest"(quest: $Quest$$Type): void
public "addQuestLink"(link: $QuestLink$$Type): void
public "consumeItems"(): boolean
public "getAutofocus"(): $Optional<$Movable>
public "getDefaultMinWidth"(): integer
public "getDefaultQuestShape"(): string
public "getDefaultQuestSize"(): double
public "getFilename"(): string
public "getGroup"(): $ChapterGroup
public "getImages"(): $List<$ChapterImage>
public "getIndex"(): integer
public "getProgressionMode"(): $ProgressionMode
public "getQuestLinks"(): $List<$QuestLink>
public "getQuests"(): $List<$Quest>
public "getRawSubtitle"(): $List<string>
public "hasAnyVisibleChildren"(): boolean
public "hasGroup"(): boolean
public "hideQuestDetailsUntilStartable"(): boolean
public "hideQuestUntilDepsComplete"(): boolean
public "isAlwaysInvisible"(): boolean
public "isAutofocus"(id: long): boolean
public "isDefaultRepeatable"(): boolean
public "isHideQuestUntilDepsVisible"(): boolean
public "isRequireSequentialTasks"(): boolean
public "removeImage"(image: $ChapterImage$$Type): void
public "removeQuest"(quest: $Quest$$Type): void
public "removeQuestLink"(link: $QuestLink$$Type): void
public "setAutofocus"(id: long): void
public "setDefaultQuestShape"(defaultQuestShape: string): void
get "autofocus"(): $Optional<$Movable>
get "defaultMinWidth"(): integer
get "defaultQuestShape"(): string
get "defaultQuestSize"(): double
get "filename"(): string
get "group"(): $ChapterGroup
get "images"(): $List<$ChapterImage>
get "index"(): integer
get "progressionMode"(): $ProgressionMode
get "questLinks"(): $List<$QuestLink>
get "quests"(): $List<$Quest>
get "rawSubtitle"(): $List<string>
get "alwaysInvisible"(): boolean
get "defaultRepeatable"(): boolean
get "hideQuestUntilDepsVisible"(): boolean
get "requireSequentialTasks"(): boolean
set "autofocus"(value: long)
set "defaultQuestShape"(value: string)
}
}

declare module "dev.ftb.mods.ftblibrary.sidebar.SidebarButtonCreatedEvent" {
import { $Consumer } from "java.util.function.Consumer"
import { $Event } from "dev.architectury.event.Event"
import { $Event as $Event$0 } from "net.minecraftforge.eventbus.api.Event"
import { $SidebarButton, $SidebarButton$$Type } from "dev.ftb.mods.ftblibrary.sidebar.SidebarButton"

export class $SidebarButtonCreatedEvent extends $Event$0 {
static readonly "EVENT": $Event<$Consumer<$SidebarButtonCreatedEvent>>

constructor(b: $SidebarButton$$Type)
constructor()

public "getButton"(): $SidebarButton
get "button"(): $SidebarButton
}
}

declare module "dev.ftb.mods.ftblibrary.ui.WidgetLayout$Padding" {
import { $Record } from "java.lang.Record"

export class $WidgetLayout$Padding extends $Record {
constructor(vertical: integer, horizontal: integer)

public "horizontal"(): integer
public "vertical"(): integer
}
}

declare module "dev.ftb.mods.ftbquests.quest.loot.EntityWeight" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $EntityWeight {
constructor()

public "getWeight"(entity: $Entity$$Type): integer
public "readData"(nbt: $CompoundTag$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
get "boss"(): integer
set "boss"(value: integer)
get "monster"(): integer
set "monster"(value: integer)
get "passive"(): integer
set "passive"(value: integer)
}
}

declare module "dev.ftb.mods.ftblibrary.core.ItemFTBL" {
import { $Item$$Type } from "net.minecraft.world.item.Item"

export interface $ItemFTBL {
"setCraftingRemainingItemFTBL"(item0: $Item$$Type): void
set "craftingRemainingItemFTBL"(value: $Item$$Type)
}

export namespace $ItemFTBL {
const probejs$$marker: never
}
export abstract class $ItemFTBL$$Static implements $ItemFTBL {
}
}

declare module "dev.ftb.mods.ftblibrary.ui.CursorType" {
import { $Enum } from "java.lang.Enum"
import { $CursorTypeAccess } from "io.github.fishstiz.minecraftcursor.mixin.compat.ftblibrary.CursorTypeAccess"

export class $CursorType extends $Enum<$CursorType> implements $CursorTypeAccess {
static readonly "ARROW": $CursorType
static readonly "CROSSHAIR": $CursorType
static readonly "HAND": $CursorType
static readonly "HRESIZE": $CursorType
static readonly "IBEAM": $CursorType
static readonly "VRESIZE": $CursorType

/** Client only, do not use in server scripts */
public static "set"(type: $CursorType$$Type): void
public static "valueOf"(name: string): $CursorType
public static "values"(): $CursorType[]
}
}

declare module "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components" {
import { $Enum } from "java.lang.Enum"

export class $RecipeModHelper$Components extends $Enum<$RecipeModHelper$Components> {
static readonly "LOOT_CRATES": $RecipeModHelper$Components
static readonly "QUESTS": $RecipeModHelper$Components

public static "valueOf"(name: string): $RecipeModHelper$Components
public static "values"(): $RecipeModHelper$Components[]
}
}

declare module "dev.ftb.mods.ftblibrary.config.ResourceConfigValue" {
import { $OptionalLong } from "java.util.OptionalLong"
import { $SelectableResource, $SelectableResource$$Type } from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import { $ConfigValue } from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ResourceConfigValue<T = any> extends $ConfigValue<T> {
constructor()

public "allowEmptyResource"(): boolean
public "canHaveNBT"(): boolean
public "fixedResourceSize"(): $OptionalLong
public "getResource"(): $SelectableResource<T>
public "isEmpty"(): boolean
public "setAllowNBTEdit"(allow: boolean): $ResourceConfigValue<T>
public "setResource"(selectableResource0: $SelectableResource$$Type<T>): boolean
get "resource"(): $SelectableResource<T>
get "empty"(): boolean
set "allowNBTEdit"(value: boolean)
set "resource"(value: $SelectableResource$$Type<T>)
}
}

declare module "dev.ftb.mods.ftbquests.quest.QuestObjectType" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"
import { $QuestObjectBase, $QuestObjectBase$$Type } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $QuestObjectType extends $Enum<$QuestObjectType> implements $Predicate<$QuestObjectBase> {
static readonly "ALL_PROGRESSING": $Predicate<$QuestObjectBase>
static readonly "ALL_PROGRESSING_OR_NULL": $Predicate<$QuestObjectBase>
static readonly "CHAPTER": $QuestObjectType
static readonly "CHAPTER_GROUP": $QuestObjectType
static readonly "FILE": $QuestObjectType
static readonly "NAME_MAP": $NameMap<$QuestObjectType>
static readonly "NULL": $QuestObjectType
static readonly "QUEST": $QuestObjectType
static readonly "QUEST_LINK": $QuestObjectType
static readonly "REWARD": $QuestObjectType
static readonly "REWARD_TABLE": $QuestObjectType
static readonly "TASK": $QuestObjectType

public "and"(predicate0: $Predicate$$Type<$QuestObjectBase$$Type>): $Predicate<$QuestObjectBase>
public "getColor"(): $ChatFormatting
public "getCompletedMessage"(): $Component
public "getDescription"(): $Component
public "getId"(): string
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$QuestObjectBase>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$QuestObjectBase$$Type>): $Predicate<$QuestObjectBase>
public "test"(object: $QuestObjectBase$$Type): boolean
public static "valueOf"(name: string): $QuestObjectType
public static "values"(): $QuestObjectType[]
get "color"(): $ChatFormatting
get "completedMessage"(): $Component
get "description"(): $Component
get "id"(): string
}
}

declare module "dev.ftb.mods.ftblibrary.config.ImageResourceConfig" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ResourceConfigValue } from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"
import { $SelectableResource } from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import { $Icon$$Type } from "dev.ftb.mods.ftblibrary.icon.Icon"

export class $ImageResourceConfig extends $ResourceConfigValue<$ResourceLocation> {
static readonly "NONE": $ResourceLocation

constructor()

public "getResource"(): $SelectableResource<$ResourceLocation>
public static "getResourceLocation"(icon: $Icon$$Type): $ResourceLocation
public "setAllowEmpty"(allowEmpty: boolean): void
get "resource"(): $SelectableResource<$ResourceLocation>
set "allowEmpty"(value: boolean)
}
}

declare module "dev.ftb.mods.ftblibrary.config.ConfigValue" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Widget$$Type } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MouseButton$$Type } from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $Comparable } from "java.lang.Comparable"
import { $TooltipList$$Type } from "dev.ftb.mods.ftblibrary.util.TooltipList"
import { $Icon, $Icon$$Type } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $ConfigCallback$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import { $ConfigGroup, $ConfigGroup$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigGroup"

export class $ConfigValue<T = any> implements $Comparable<$ConfigValue<T>> {
static readonly "NULL_TEXT": $Component

constructor()

public "addInfo"(list: $TooltipList$$Type): void
public "applyValue"(): void
public "compareTo"(o: $ConfigValue$$Type<T>): integer
public "copy"(value: T): T
public "getCanEdit"(): boolean
public "getColor"(v: T): $Color4I
public "getColor"(): $Color4I
public "getDefaultValue"(): T
public "getGroup"(): $ConfigGroup
public "getIcon"(v: T): $Icon
public "getIcon"(): $Icon
public "getName"(): string
public "getNameKey"(): string
public "getPath"(): string
public "getStringForGUI"(): $Component
public "getStringForGUI"(v: T): $Component
public "getTooltip"(): string
public "getValue"(): T
public static "info"(key: string, value: any): $Component
public "init"(group: $ConfigGroup$$Type, id: string, value: T, setter: $Consumer$$Type<T>, defaultValue: T): $ConfigValue<T>
public "isEqual"(v1: T, v2: T): boolean
public "onClicked"(widget0: $Widget$$Type, mouseButton1: $MouseButton$$Type, configCallback2: $ConfigCallback$$Type): void
public "setCanEdit"(e: boolean): $ConfigValue<T>
public "setCurrentValue"(v: T): boolean
public "setDefaultValue"(defaultValue: T): void
public "setIcon"(i: $Icon$$Type): $ConfigValue<T>
public "setNameKey"(key: string): $ConfigValue<T>
public "setOrder"(o: integer): $ConfigValue<T>
public "setValue"(value: T): void
get "id"(): string
set "id"(value: string)
get "canEdit"(): boolean
get "color"(): $Color4I
get "defaultValue"(): T
get "group"(): $ConfigGroup
get "icon"(): $Icon
get "name"(): string
get "nameKey"(): string
get "path"(): string
get "stringForGUI"(): $Component
get "tooltip"(): string
get "value"(): T
set "canEdit"(value: boolean)
set "currentValue"(value: T)
set "defaultValue"(value: T)
set "icon"(value: $Icon$$Type)
set "nameKey"(value: string)
set "order"(value: integer)
set "value"(value: T)
}
}

declare module "dev.ftb.mods.ftblibrary.ui.Panel" {
import { $Widget, $Widget$$Type } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $List } from "java.util.List"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $WidgetLayout$$Type } from "dev.ftb.mods.ftblibrary.ui.WidgetLayout"
import { $Theme$$Type } from "dev.ftb.mods.ftblibrary.ui.Theme"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $Panel extends $Widget {
constructor(panel: $Panel$$Type)

public "add"(widget: $Widget$$Type): void
public "addAll"(list: $Iterable$$Type<$Widget$$Type>): void
public "addWidgets"(): void
public "align"(layout: $WidgetLayout$$Type): integer
public "alignWidgets"(): void
public "clearWidgets"(): void
public "closeContextMenu"(): void
public "closeGui"(openPrevScreen: boolean): void
public "closeGui"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawOffsetBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawWidget"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, widget: $Widget$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getContentHeight"(): integer
public "getContentWidth"(): integer
public "getOnlyInteractWithWidgetsInside"(): boolean
public "getOnlyRenderWidgetsInside"(): boolean
public "getScrollStep"(): double
public "getScrollX"(): double
public "getScrollY"(): double
public "getWidget"(index: integer): $Widget
public "getWidgets"(): $List<$Widget>
public "isDefaultScrollVertical"(): boolean
public "isMouseOverAnyWidget"(): boolean
public "isOffset"(): boolean
public "movePanelScroll"(dx: double, dy: double): boolean
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "openGui"(): void
public "openGuiLater"(): void
public "refreshWidgets"(): void
public "run"(): void
public "scrollPanel"(scroll: double): boolean
public "setOffset"(flag: boolean): void
public "setOnlyInteractWithWidgetsInside"(value: boolean): void
public "setOnlyRenderWidgetsInside"(value: boolean): void
public "setScrollStep"(s: double): void
public "setScrollX"(scroll: double): void
public "setScrollY"(scroll: double): void
get "contentHeight"(): integer
get "contentWidth"(): integer
get "onlyInteractWithWidgetsInside"(): boolean
get "onlyRenderWidgetsInside"(): boolean
get "scrollStep"(): double
get "scrollX"(): double
get "scrollY"(): double
get "widgets"(): $List<$Widget>
get "defaultScrollVertical"(): boolean
get "mouseOverAnyWidget"(): boolean
get "offset"(): boolean
set "offset"(value: boolean)
set "onlyInteractWithWidgetsInside"(value: boolean)
set "onlyRenderWidgetsInside"(value: boolean)
set "scrollStep"(value: double)
set "scrollX"(value: double)
set "scrollY"(value: double)
}
}

declare module "dev.ftb.mods.ftblibrary.config.NumberConfig" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $ConfigFromString } from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"

export class $NumberConfig<T extends number = number> extends $ConfigFromString<T> {
static readonly "COLOR": $Color4I
"fader": boolean
readonly "max": T
readonly "min": T

constructor(mn: T, mx: T)

public "fader"(v: boolean): $NumberConfig<T>
public "getColor"(v: T): $Color4I
public "getStringForGUI"(v: T): $Component
public "withScrollIncrement"(increment: T): $NumberConfig<T>
}
}

declare module "dev.ftb.mods.ftblibrary.ui.BaseScreen" {
import { $ContextMenu, $ContextMenu$$Type } from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import { $BooleanConsumer$$Type } from "dev.ftb.mods.ftblibrary.util.BooleanConsumer"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BaseScreenAccessor } from "dev.uncandango.alltheleaks.mixin.core.accessor.BaseScreenAccessor"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ContextMenuItem$$Type } from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import { $Key$$Type } from "dev.ftb.mods.ftblibrary.ui.input.Key"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Widget$$Type } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $List$$Type } from "java.util.List"
import { $ModalPanel, $ModalPanel$$Type } from "dev.ftb.mods.ftblibrary.ui.ModalPanel"
import { $Optional } from "java.util.Optional"
import { $Theme, $Theme$$Type } from "dev.ftb.mods.ftblibrary.ui.Theme"
import { $Panel } from "dev.ftb.mods.ftblibrary.ui.Panel"

export class $BaseScreen extends $Panel implements $BaseScreenAccessor {
constructor(previousScreen: $Screen$$Type)
constructor()

public "anyModalPanelOpen"(): boolean
public "closeContextMenu"(): void
public "closeGui"(openPrevScreen: boolean): void
public "closeGui"(): void
public "closeModalPanel"(panel: $ModalPanel$$Type): void
public "doesGuiPauseGame"(): boolean
public "drawDefaultBackground"(graphics: $GuiGraphics$$Type): boolean
public "drawForeground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getContextMenu"(): $Optional<$ModalPanel>
public "getPrevScreen"(): $Screen
public "getTheme"(): $Theme
public "initGui"(): void
public "isMouseOver"(x: integer, y: integer, w: integer, h: integer): boolean
public "isMouseOver"(widget: $Widget$$Type): boolean
public "onBack"(): void
public "onClosedByKey"(key: $Key$$Type): boolean
public "onInit"(): boolean
public "onPostInit"(): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "openContextMenu"(menuItems: $List$$Type<$ContextMenuItem$$Type>): $ContextMenu
public "openContextMenu"(newContextMenu: $ContextMenu$$Type): void
public "openGui"(): void
public "openGuiLater"(): void
public "openYesNo"(title: $Component$$Type, desc: $Component$$Type, callback: $Runnable$$Type): void
public "openYesNoFull"(title: $Component$$Type, desc: $Component$$Type, callback: $BooleanConsumer$$Type): void
public "popModalPanel"(): $ModalPanel
public "pushModalPanel"(modalPanel: $ModalPanel$$Type): void
public "run"(): void
public "setFocusedWidget"(widget: $Widget$$Type): void
public "shouldCloseOnEsc"(): boolean
public "updateGui"(mx: integer, my: integer, pt: float): void
public "usePreviousScreenOnBack"(): boolean
get "contextMenu"(): $Optional<$ModalPanel>
get "prevScreen"(): $Screen
get "theme"(): $Theme
set "focusedWidget"(value: $Widget$$Type)
}
}

declare module "dev.ftb.mods.ftblibrary.config.IntConfig" {
import { $NumberConfig } from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import { $Optional } from "java.util.Optional"

export class $IntConfig extends $NumberConfig<integer> {
constructor(mn: integer, mx: integer)

public "scrollValue"(currentValue: integer, forward: boolean): $Optional<integer>
}
}

declare module "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim" {
import { $Enum } from "java.lang.Enum"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $RewardAutoClaim extends $Enum<$RewardAutoClaim> {
static readonly "DEFAULT": $RewardAutoClaim
static readonly "DISABLED": $RewardAutoClaim
static readonly "ENABLED": $RewardAutoClaim
static readonly "INVISIBLE": $RewardAutoClaim
static readonly "NAME_MAP": $NameMap<$RewardAutoClaim>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<$RewardAutoClaim>
static readonly "NO_TOAST": $RewardAutoClaim

public static "valueOf"(name: string): $RewardAutoClaim
public static "values"(): $RewardAutoClaim[]
get "id"(): string
set "id"(value: string)
}
}

declare module "dev.ftb.mods.ftbchunks.api.ClaimedChunk" {
import { $ClaimResult } from "dev.ftb.mods.ftbchunks.api.ClaimResult"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $ChunkTeamData } from "dev.ftb.mods.ftbchunks.api.ChunkTeamData"
import { $ChunkDimPos } from "dev.ftb.mods.ftblibrary.math.ChunkDimPos"

export interface $ClaimedChunk extends $ClaimResult {
"getForceLoadExpiryTime"(): long
"getForceLoadedTime"(): long
"getMessage"(): $MutableComponent
"getPos"(): $ChunkDimPos
"getResultId"(): string
"getTeamData"(): $ChunkTeamData
"getTimeClaimed"(): long
"hasForceLoadExpired"(long0: long): boolean
"isActuallyForceLoaded"(): boolean
"isForceLoaded"(): boolean
"isSuccess"(): boolean
"setForceLoadExpiryTime"(long0: long): void
"unclaim"(commandSourceStack0: $CommandSourceStack$$Type, boolean1: boolean): void
"unload"(commandSourceStack0: $CommandSourceStack$$Type): void
get "forceLoadExpiryTime"(): long
get "forceLoadedTime"(): long
get "message"(): $MutableComponent
get "pos"(): $ChunkDimPos
get "resultId"(): string
get "teamData"(): $ChunkTeamData
get "timeClaimed"(): long
get "actuallyForceLoaded"(): boolean
get "forceLoaded"(): boolean
set "forceLoadExpiryTime"(value: long)
}

export namespace $ClaimedChunk {
function customProblem(translationKey: string): $ClaimResult
function success(): $ClaimResult
}
export abstract class $ClaimedChunk$$Static implements $ClaimedChunk {
static "customProblem"(translationKey: string): $ClaimResult
static "success"(): $ClaimResult
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$QuestEvent" {
import { $Quest, $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $ObjectStartedEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ObjectStartedEvent$QuestEvent extends $ObjectStartedEvent<$Quest> {
constructor(d: $QuestProgressEventData$$Type<$Quest$$Type>)

public "getQuest"(): $Quest
get "quest"(): $Quest
}
}

declare module "dev.ftb.mods.ftbquests.events.CustomTaskEvent" {
import { $EventActor } from "dev.architectury.event.EventActor"
import { $Event } from "dev.architectury.event.Event"
import { $CustomTask, $CustomTask$$Type } from "dev.ftb.mods.ftbquests.quest.task.CustomTask"

export class $CustomTaskEvent {
static readonly "EVENT": $Event<$EventActor<$CustomTaskEvent>>

constructor(t: $CustomTask$$Type)

public "getTask"(): $CustomTask
get "task"(): $CustomTask
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbteams.kubejs.PlayerTeamEventJS" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Team$$Type } from "dev.ftb.mods.ftbteams.api.Team"
import { $KJSTeamWrapper } from "dev.ftb.mods.ftbxmodcompat.ftbteams.kubejs.KJSTeamWrapper"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

export class $PlayerTeamEventJS extends $PlayerEventJS {
constructor(player: $ServerPlayer$$Type, currentTeam: $Team$$Type, prevTeam: $Team$$Type)

public "getCurrentTeam"(): $KJSTeamWrapper
public "getPrevTeam"(): $KJSTeamWrapper
get "currentTeam"(): $KJSTeamWrapper
get "prevTeam"(): $KJSTeamWrapper
}
}

declare module "dev.ftb.mods.ftblibrary.icon.Drawable" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

export interface $Drawable {
/** Client only, do not use in server scripts */
"draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
/** Client only, do not use in server scripts */
"draw3D"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
"drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
}

export namespace $Drawable {
const probejs$$marker: never
}
export abstract class $Drawable$$Static implements $Drawable {
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSPlayerData" {
import { $FTBQuestsKubeJSTeamData } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSTeamData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $FTBQuestsKubeJSPlayerData extends $FTBQuestsKubeJSTeamData {
constructor(p: $Player$$Type)

}
}

declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $Reward$$Type } from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import { $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"

export interface $RewardType$GuiProvider {
/** Client only, do not use in server scripts */
"openCreationGui"(panel0: $Panel$$Type, quest1: $Quest$$Type, consumer2: $Consumer$$Type<$Reward$$Type>): void
}

export namespace $RewardType$GuiProvider {
const probejs$$marker: never
}
export abstract class $RewardType$GuiProvider$$Static implements $RewardType$GuiProvider {
}
}

declare module "dev.ftb.mods.ftblibrary.ui.ContextMenu" {
import { $List$$Type } from "java.util.List"
import { $ModalPanel } from "dev.ftb.mods.ftblibrary.ui.ModalPanel"
import { $ContextMenuItem$$Type } from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import { $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export class $ContextMenu extends $ModalPanel {
constructor(panel: $Panel$$Type, i: $List$$Type<$ContextMenuItem$$Type>)

public "closeContextMenu"(): void
public "closeGui"(openPrevScreen: boolean): void
public "closeGui"(): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "openGui"(): void
public "openGuiLater"(): void
public "run"(): void
public "setDrawVerticalSeparators"(drawVerticalSeparators: boolean): void
public "setMaxRows"(maxRows: integer): void
set "drawVerticalSeparators"(value: boolean)
set "maxRows"(value: integer)
}
}

declare module "dev.ftb.mods.ftbquests.quest.task.TaskType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $TaskType$GuiProvider, $TaskType$GuiProvider$$Type } from "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"
import { $Task } from "dev.ftb.mods.ftbquests.quest.task.Task"

export class $TaskType {
public "createTask"(id: long, quest: $Quest$$Type): $Task
public static "createTask"(id: long, quest: $Quest$$Type, typeId: string): $Task
public "getDisplayName"(): $Component
public "getGuiProvider"(): $TaskType$GuiProvider
public "getIconSupplier"(): $Icon
public "getTypeForNBT"(): string
public "getTypeId"(): $ResourceLocation
public "setDisplayName"(name: $Component$$Type): $TaskType
public "setGuiProvider"(p: $TaskType$GuiProvider$$Type): $TaskType
get "internalId"(): integer
set "internalId"(value: integer)
get "displayName"(): $Component
get "guiProvider"(): $TaskType$GuiProvider
get "iconSupplier"(): $Icon
get "typeForNBT"(): string
get "typeId"(): $ResourceLocation
set "displayName"(value: $Component$$Type)
set "guiProvider"(value: $TaskType$GuiProvider$$Type)
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbfiltersystem.kubejs.CustomFilterEventJS" {
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CustomFilterEventJS extends $EventJS {
constructor(stack: $ItemStack$$Type, data: string)

public "getData"(): string
public "getStack"(): $ItemStack
get "data"(): string
get "stack"(): $ItemStack
}
}

declare module "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient" {
import { $Widget$$Type } from "dev.ftb.mods.ftblibrary.ui.Widget"
import { $Rect2i, $Rect2i$$Type } from "net.minecraft.client.renderer.Rect2i"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"

export class $PositionedIngredient extends $Record {
constructor(ingredient: any, area: $Rect2i$$Type, tooltip: boolean)

public "area"(): $Rect2i
public "ingredient"(): any
public static "of"(ingredient: any, widget: $Widget$$Type, tooltip: boolean): $Optional<$PositionedIngredient>
public static "of"(ingredient: any, widget: $Widget$$Type): $Optional<$PositionedIngredient>
public "tooltip"(): boolean
}
}

declare module "dev.ftb.mods.ftblibrary.config.ItemStackConfig" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $ResourceConfigValue } from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $SelectableResource } from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"

export class $ItemStackConfig extends $ResourceConfigValue<$ItemStack> {
constructor(single: boolean, empty: boolean)
constructor(fixedSize: long)

public "copy"(value: $ItemStack$$Type): $ItemStack
public "getResource"(): $SelectableResource<$ItemStack>
public "getStringForGUI"(v: $ItemStack$$Type): $Component
get "resource"(): $SelectableResource<$ItemStack>
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.QuestObjectCompletedEventJS" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $FTBQuestsKubeJSTeamDataWrapper } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSTeamDataWrapper"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $ObjectCompletedEvent, $ObjectCompletedEvent$$Type } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import { $ServerEventJS } from "dev.latvian.mods.kubejs.server.ServerEventJS"

export class $QuestObjectCompletedEventJS extends $ServerEventJS {
readonly "event": $ObjectCompletedEvent<any>

constructor(e: $ObjectCompletedEvent$$Type<any>)

public "getData"(): $FTBQuestsKubeJSTeamDataWrapper
public "getNotifiedPlayers"(): $EntityArrayList
public "getObject"(): $QuestObject
public "getOnlineMembers"(): $EntityArrayList
public "getPlayer"(): $ServerPlayer
get "data"(): $FTBQuestsKubeJSTeamDataWrapper
get "notifiedPlayers"(): $EntityArrayList
get "object"(): $QuestObject
get "onlineMembers"(): $EntityArrayList
get "player"(): $ServerPlayer
}
}

declare module "dev.ftb.mods.ftblibrary.config.ConfigFromString" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Optional } from "java.util.Optional"
import { $ConfigValue } from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigFromString<T = any> extends $ConfigValue<T> {
constructor()

public "canScroll"(): boolean
public "getStringFromValue"(v: T): string
public "parse"(consumer0: $Consumer$$Type<T>, string1: string): boolean
public "scrollValue"(currentValue: T, forward: boolean): $Optional<T>
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$ChapterEvent" {
import { $ObjectStartedEvent } from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"

export class $ObjectStartedEvent$ChapterEvent extends $ObjectStartedEvent<$Chapter> {
constructor(d: $QuestProgressEventData$$Type<$Chapter$$Type>)

public "getChapter"(): $Chapter
get "chapter"(): $Chapter
}
}

declare module "dev.ftb.mods.ftbquests.quest.loot.LootCrate" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $EntityWeight } from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import { $Color4I } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $RewardTable, $RewardTable$$Type } from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"
import { $ConfigGroup$$Type } from "dev.ftb.mods.ftblibrary.config.ConfigGroup"

export class $LootCrate {
static "LOOT_CRATES": $Map<string, $LootCrate>

constructor(table: $RewardTable$$Type, initFromTable: boolean)

public static "allCrateStacks"(): $Collection<$ItemStack>
public "createStack"(): $ItemStack
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getColor"(): $Color4I
public "getDrops"(): $EntityWeight
public "getItemName"(): string
public "getStringID"(): string
public "getTable"(): $RewardTable
public "initFromTable"(): void
public "isGlow"(): boolean
public "readData"(nbt: $CompoundTag$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
get "color"(): $Color4I
get "drops"(): $EntityWeight
get "itemName"(): string
get "stringID"(): string
get "table"(): $RewardTable
get "glow"(): boolean
}
}

declare module "dev.ftb.mods.ftblibrary.ui.ModalPanel" {
import { $Panel, $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export class $ModalPanel extends $Panel {
constructor(panel: $Panel$$Type)

public "closeContextMenu"(): void
public "closeGui"(openPrevScreen: boolean): void
public "closeGui"(): void
public "getExtraZlevel"(): integer
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "openGui"(): void
public "openGuiLater"(): void
public "run"(): void
public "setExtraZlevel"(extraZlevel: integer): void
get "extraZlevel"(): integer
set "extraZlevel"(value: integer)
}
}

declare module "dev.ftb.mods.ftblibrary.ui.IScreenWrapper" {
import { $IOpenableScreen } from "dev.ftb.mods.ftblibrary.ui.IOpenableScreen"
import { $BaseScreen } from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export interface $IScreenWrapper extends $IOpenableScreen {
"closeContextMenu"(): void
"closeGui"(openPrevScreen: boolean): void
"closeGui"(): void
"getGui"(): $BaseScreen
"openAfter"(runnable: $Runnable$$Type): $Runnable
"openGui"(): void
"openGuiLater"(): void
"run"(): void
get "gui"(): $BaseScreen
}

export namespace $IScreenWrapper {
const probejs$$marker: never
}
export abstract class $IScreenWrapper$$Static implements $IScreenWrapper {
}
}

declare module "dev.ftb.mods.ftbchunks.core.BiomeFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeFTBC {
"getFTBCBiomeColorIndex"(): integer
"setFTBCBiomeColorIndex"(int0: integer): void
get "fTBCBiomeColorIndex"(): integer
set "fTBCBiomeColorIndex"(value: integer)
}

export namespace $BiomeFTBC {
const probejs$$marker: never
}
export abstract class $BiomeFTBC$$Static implements $BiomeFTBC {
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent" {
import { $ObjectCompletedEvent$ChapterEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$ChapterEvent"
import { $ObjectProgressEvent } from "dev.ftb.mods.ftbquests.events.ObjectProgressEvent"
import { $EventActor } from "dev.architectury.event.EventActor"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $Event } from "dev.architectury.event.Event"
import { $ObjectCompletedEvent$FileEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$FileEvent"
import { $ObjectCompletedEvent$QuestEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$QuestEvent"
import { $ObjectCompletedEvent$TaskEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$TaskEvent"

export class $ObjectCompletedEvent<T extends $QuestObject = $QuestObject> extends $ObjectProgressEvent<T> {
static readonly "CHAPTER": $Event<$EventActor<$ObjectCompletedEvent$ChapterEvent>>
static readonly "FILE": $Event<$EventActor<$ObjectCompletedEvent$FileEvent>>
static readonly "GENERIC": $Event<$EventActor<$ObjectCompletedEvent<any>>>
static readonly "QUEST": $Event<$EventActor<$ObjectCompletedEvent$QuestEvent>>
static readonly "TASK": $Event<$EventActor<$ObjectCompletedEvent$TaskEvent>>

}
}

declare module "dev.ftb.mods.ftbteams.api.TeamManager" {
import { $Team } from "dev.ftb.mods.ftbteams.api.Team"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export interface $TeamManager {
"arePlayersInSameTeam"(uUID0: $UUID$$Type, uUID1: $UUID$$Type): boolean
"createPartyTeam"(serverPlayer0: $ServerPlayer$$Type, string1: string, string2: string, color4I3: $Color4I$$Type): $Team
"createServerTeam"(commandSourceStack0: $CommandSourceStack$$Type, string1: string, string2: string, color4I3: $Color4I$$Type, uUID4: $UUID$$Type): $Team
"createServerTeam"(commandSourceStack: $CommandSourceStack$$Type, name: string, description: string, color: $Color4I$$Type): $Team
"getExtraData"(): $CompoundTag
"getId"(): $UUID
"getKnownPlayerTeams"(): $Map<$UUID, $Team>
"getPlayerTeamForPlayerID"(uUID0: $UUID$$Type): $Optional<$Team>
"getServer"(): $MinecraftServer
"getTeamByID"(uUID0: $UUID$$Type): $Optional<$Team>
"getTeamByName"(string0: string): $Optional<$Team>
"getTeamForPlayer"(serverPlayer0: $ServerPlayer$$Type): $Optional<$Team>
"getTeamForPlayerID"(uUID0: $UUID$$Type): $Optional<$Team>
"getTeams"(): $Collection<$Team>
"markDirty"(): void
get "extraData"(): $CompoundTag
get "id"(): $UUID
get "knownPlayerTeams"(): $Map<$UUID, $Team>
get "server"(): $MinecraftServer
get "teams"(): $Collection<$Team>
}

export namespace $TeamManager {
const probejs$$marker: never
}
export abstract class $TeamManager$$Static implements $TeamManager {
}
}

declare module "dev.ftb.mods.ftbquests.quest.QuestShape" {
import { $List$$Type } from "java.util.List"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $NameMap } from "dev.ftb.mods.ftblibrary.config.NameMap"
import { $ImageIcon } from "dev.ftb.mods.ftblibrary.icon.ImageIcon"
import { $PixelBuffer } from "dev.ftb.mods.ftblibrary.math.PixelBuffer"
import { $Map } from "java.util.Map"
import { $Icon } from "dev.ftb.mods.ftblibrary.icon.Icon"

export class $QuestShape extends $Icon {
static "idMap": $NameMap<string>
static "idMapWithDefault": $NameMap<string>

constructor(id: string)

/** Client only, do not use in server scripts */
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
/** Client only, do not use in server scripts */
public "draw3D"(graphics: $GuiGraphics$$Type): void
/** Client only, do not use in server scripts */
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public static "get"(id: string): $QuestShape
public "getBackground"(): $ImageIcon
public "getOutline"(): $ImageIcon
public "getShape"(): $ImageIcon
public "getShapePixels"(): $PixelBuffer
public static "map"(): $Map<string, $QuestShape>
public static "reload"(list: $List$$Type<string>): void
public "shouldDraw"(): boolean
get "background"(): $ImageIcon
get "outline"(): $ImageIcon
get "shape"(): $ImageIcon
get "shapePixels"(): $PixelBuffer
}
}

declare module "dev.ftb.mods.ftbquests.quest.loot.WeightedReward" {
import { $Reward, $Reward$$Type } from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import { $Comparable } from "java.lang.Comparable"

export class $WeightedReward implements $Comparable<$WeightedReward> {
constructor(reward: $Reward$$Type, weight: float)

public static "chanceString"(weight: float, totalWeight: float): string
public static "chanceString"(weight: float, totalWeight: float, empty: boolean): string
public "compareTo"(o: $WeightedReward$$Type): integer
public "getReward"(): $Reward
public "getWeight"(): float
public "setWeight"(weight: float): void
get "reward"(): $Reward
get "weight"(): float
set "weight"(value: float)
}
}

declare module "dev.ftb.mods.ftblibrary.config.LongConfig" {
import { $NumberConfig } from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import { $Optional } from "java.util.Optional"

export class $LongConfig extends $NumberConfig<long> {
constructor(mn: long, mx: long)

public "scrollValue"(currentValue: long, forward: boolean): $Optional<long>
}
}

declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider" {
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $Reward } from "dev.ftb.mods.ftbquests.quest.reward.Reward"

export interface $RewardType$Provider {
"create"(long0: long, quest1: $Quest$$Type): $Reward
}

export namespace $RewardType$Provider {
const probejs$$marker: never
}
export abstract class $RewardType$Provider$$Static implements $RewardType$Provider {
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$ChapterEvent" {
import { $ObjectCompletedEvent } from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import { $QuestProgressEventData$$Type } from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import { $Chapter, $Chapter$$Type } from "dev.ftb.mods.ftbquests.quest.Chapter"

export class $ObjectCompletedEvent$ChapterEvent extends $ObjectCompletedEvent<$Chapter> {
constructor(d: $QuestProgressEventData$$Type<$Chapter$$Type>)

public "getChapter"(): $Chapter
get "chapter"(): $Chapter
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.CustomFilterItemEventJS" {
import { $CustomFilterDisplayItemsEvent$$Type } from "dev.ftb.mods.ftbquests.api.event.CustomFilterDisplayItemsEvent"
import { $Collection$$Type } from "java.util.Collection"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CustomFilterItemEventJS extends $EventJS {
constructor(event: $CustomFilterDisplayItemsEvent$$Type)

public "addStack"(stack: $ItemStack$$Type): void
public "addStacks"(stacks: $Collection$$Type<$ItemStack$$Type>): void
}
}

declare module "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Quest$$Type } from "dev.ftb.mods.ftbquests.quest.Quest"
import { $Panel$$Type } from "dev.ftb.mods.ftblibrary.ui.Panel"
import { $Task$$Type } from "dev.ftb.mods.ftbquests.quest.task.Task"

export interface $TaskType$GuiProvider {
/** Client only, do not use in server scripts */
"openCreationGui"(panel0: $Panel$$Type, quest1: $Quest$$Type, consumer2: $Consumer$$Type<$Task$$Type>): void
}

export namespace $TaskType$GuiProvider {
const probejs$$marker: never
}
export abstract class $TaskType$GuiProvider$$Static implements $TaskType$GuiProvider {
}
}

declare module "dev.ftb.mods.ftbquests.events.ObjectProgressEvent" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $QuestObject } from "dev.ftb.mods.ftbquests.quest.QuestObject"
import { $TeamData } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $Date } from "java.util.Date"

export class $ObjectProgressEvent<T extends $QuestObject = $QuestObject> {
public "getData"(): $TeamData
public "getNotifiedPlayers"(): $List<$ServerPlayer>
public "getObject"(): T
public "getOnlineMembers"(): $List<$ServerPlayer>
public "getTime"(): $Date
public "isCancelable"(): boolean
get "data"(): $TeamData
get "notifiedPlayers"(): $List<$ServerPlayer>
get "object"(): T
get "onlineMembers"(): $List<$ServerPlayer>
get "time"(): $Date
get "cancelable"(): boolean
}
}

declare module "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSWrapper" {
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $TeamData } from "dev.ftb.mods.ftbquests.quest.TeamData"
import { $BaseQuestFile } from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import { $QuestShape } from "dev.ftb.mods.ftbquests.quest.QuestShape"
import { $Map } from "java.util.Map"
import { $UUID$$Type } from "java.util.UUID"
import { $QuestObjectType } from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $QuestObjectBase } from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import { $FTBQuestsKubeJSPlayerData } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSPlayerData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $FTBQuestsKubeJSWrapper {
static readonly "INSTANCE": $FTBQuestsKubeJSWrapper

constructor()

public "getData"(level: $Level$$Type, uuid: $UUID$$Type): $TeamData
public "getData"(player: $Player$$Type): $TeamData
public "getFile"(level: $Level$$Type): $BaseQuestFile
public "getObject"(level: $Level$$Type, id: any): $QuestObjectBase
public "getQuestObjectTypes"(): $Map<string, $QuestObjectType>
public "getQuestShapes"(): $Map<string, $QuestShape>
public "getServerDataFromPlayer"(player: $Player$$Type): $FTBQuestsKubeJSPlayerData
public "getServerDataFromSource"(source: $CommandSourceStack$$Type): $FTBQuestsKubeJSPlayerData
get "questObjectTypes"(): $Map<string, $QuestObjectType>
get "questShapes"(): $Map<string, $QuestShape>
}
}

declare module "dev.ftb.mods.ftblibrary.config.ColorConfig" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Color4I, $Color4I$$Type } from "dev.ftb.mods.ftblibrary.icon.Color4I"
import { $ConfigValue } from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ColorConfig extends $ConfigValue<$Color4I> {
constructor()

public "getStringForGUI"(v: $Color4I$$Type): $Component
public "isAllowAlphaEdit"(): boolean
public "withAlphaEditing"(): $ColorConfig
get "allowAlphaEdit"(): boolean
}
}

declare module "dev.ftb.mods.ftblibrary.core.DisplayInfoFTBL" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $DisplayInfoFTBL {
"getIconStackFTBL"(): $ItemStack
get "iconStackFTBL"(): $ItemStack
}

export namespace $DisplayInfoFTBL {
const probejs$$marker: never
}
export abstract class $DisplayInfoFTBL$$Static implements $DisplayInfoFTBL {
}
}

