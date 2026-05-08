declare module "net.minecraft.world.scores.Score" {
import { $Objective, $Objective$$Type } from "net.minecraft.world.scores.Objective"
import { $Scoreboard, $Scoreboard$$Type } from "net.minecraft.world.scores.Scoreboard"
import { $Comparator } from "java.util.Comparator"

export class $Score {
static readonly "SCORE_COMPARATOR": $Comparator<$Score>

constructor(scoreboard0: $Scoreboard$$Type, objective1: $Objective$$Type, string2: string)

public "add"(int0: integer): void
public "getObjective"(): $Objective
public "getOwner"(): string
public "getScore"(): integer
public "getScoreboard"(): $Scoreboard
public "increment"(): void
public "isLocked"(): boolean
public "reset"(): void
public "setLocked"(boolean0: boolean): void
public "setScore"(int0: integer): void
get "objective"(): $Objective
get "owner"(): string
get "score"(): integer
get "scoreboard"(): $Scoreboard
get "locked"(): boolean
set "locked"(value: boolean)
set "score"(value: integer)
}
}

declare module "net.minecraft.world.scores.Objective" {
import { $Scoreboard, $Scoreboard$$Type } from "net.minecraft.world.scores.Scoreboard"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ObjectiveCriteria, $ObjectiveCriteria$$Type } from "net.minecraft.world.scores.criteria.ObjectiveCriteria"
import { $ObjectiveCriteria$RenderType, $ObjectiveCriteria$RenderType$$Type } from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $Objective {
constructor(scoreboard0: $Scoreboard$$Type, string1: string, objectiveCriteria2: $ObjectiveCriteria$$Type, component3: $Component$$Type, renderType4: $ObjectiveCriteria$RenderType$$Type)

public "getCriteria"(): $ObjectiveCriteria
public "getDisplayName"(): $Component
public "getFormattedDisplayName"(): $Component
public "getName"(): string
public "getRenderType"(): $ObjectiveCriteria$RenderType
public "getScoreboard"(): $Scoreboard
public "setDisplayName"(component0: $Component$$Type): void
public "setRenderType"(renderType0: $ObjectiveCriteria$RenderType$$Type): void
get "criteria"(): $ObjectiveCriteria
get "displayName"(): $Component
get "formattedDisplayName"(): $Component
get "name"(): string
get "renderType"(): $ObjectiveCriteria$RenderType
get "scoreboard"(): $Scoreboard
set "displayName"(value: $Component$$Type)
set "renderType"(value: $ObjectiveCriteria$RenderType$$Type)
}
}

declare module "net.minecraft.world.scores.Team$Visibility" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $Team$Visibility extends $Enum<$Team$Visibility> {
static readonly "ALWAYS": $Team$Visibility
static readonly "HIDE_FOR_OTHER_TEAMS": $Team$Visibility
static readonly "HIDE_FOR_OWN_TEAM": $Team$Visibility
static readonly "NEVER": $Team$Visibility
readonly "id": integer
readonly "name": string

public static "byName"(string0: string): $Team$Visibility
public static "getAllNames"(): string[]
public "getDisplayName"(): $Component
public static "valueOf"(string0: string): $Team$Visibility
public static "values"(): $Team$Visibility[]
get "displayName"(): $Component
}
}

declare module "net.minecraft.world.scores.Team" {
import { $Team$CollisionRule } from "net.minecraft.world.scores.Team$CollisionRule"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"
import { $Collection } from "java.util.Collection"
import { $Team$Visibility } from "net.minecraft.world.scores.Team$Visibility"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $Team {
constructor()

public "canSeeFriendlyInvisibles"(): boolean
public "getCollisionRule"(): $Team$CollisionRule
public "getColor"(): $ChatFormatting
public "getDeathMessageVisibility"(): $Team$Visibility
public "getFormattedName"(component0: $Component$$Type): $MutableComponent
public "getName"(): string
public "getNameTagVisibility"(): $Team$Visibility
public "getPlayers"(): $Collection<string>
public "isAlliedTo"(team0: $Team$$Type): boolean
public "isAllowFriendlyFire"(): boolean
get "collisionRule"(): $Team$CollisionRule
get "color"(): $ChatFormatting
get "deathMessageVisibility"(): $Team$Visibility
get "name"(): string
get "nameTagVisibility"(): $Team$Visibility
get "players"(): $Collection<string>
get "allowFriendlyFire"(): boolean
}
}

declare module "net.minecraft.world.scores.ScoreboardSaveData" {
import { $Scoreboard$$Type } from "net.minecraft.world.scores.Scoreboard"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SavedData } from "net.minecraft.world.level.saveddata.SavedData"

export class $ScoreboardSaveData extends $SavedData {
static readonly "FILE_ID": string

constructor(scoreboard0: $Scoreboard$$Type)

public "load"(compoundTag0: $CompoundTag$$Type): $ScoreboardSaveData
}
}

declare module "net.minecraft.world.scores.PlayerTeam" {
import { $Scoreboard, $Scoreboard$$Type } from "net.minecraft.world.scores.Scoreboard"
import { $Team$CollisionRule$$Type } from "net.minecraft.world.scores.Team$CollisionRule"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"
import { $Team$Visibility$$Type } from "net.minecraft.world.scores.Team$Visibility"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Team, $Team$$Type } from "net.minecraft.world.scores.Team"

export class $PlayerTeam extends $Team {
constructor(scoreboard0: $Scoreboard$$Type, string1: string)

public static "formatNameForTeam"(team0: $Team$$Type, component1: $Component$$Type): $MutableComponent
public "getDisplayName"(): $Component
public "getFormattedDisplayName"(): $MutableComponent
public "getPlayerPrefix"(): $Component
public "getPlayerSuffix"(): $Component
public "getScoreboard"(): $Scoreboard
public "packOptions"(): integer
public "setAllowFriendlyFire"(boolean0: boolean): void
public "setCollisionRule"(collisionRule0: $Team$CollisionRule$$Type): void
public "setColor"(chatFormatting0: $ChatFormatting$$Type): void
public "setDeathMessageVisibility"(visibility0: $Team$Visibility$$Type): void
public "setDisplayName"(component0: $Component$$Type): void
public "setNameTagVisibility"(visibility0: $Team$Visibility$$Type): void
public "setPlayerPrefix"(component0: $Component$$Type): void
public "setPlayerSuffix"(component0: $Component$$Type): void
public "setSeeFriendlyInvisibles"(boolean0: boolean): void
public "unpackOptions"(int0: integer): void
get "displayName"(): $Component
get "formattedDisplayName"(): $MutableComponent
get "playerPrefix"(): $Component
get "playerSuffix"(): $Component
get "scoreboard"(): $Scoreboard
set "allowFriendlyFire"(value: boolean)
set "collisionRule"(value: $Team$CollisionRule$$Type)
set "color"(value: $ChatFormatting$$Type)
set "deathMessageVisibility"(value: $Team$Visibility$$Type)
set "displayName"(value: $Component$$Type)
set "nameTagVisibility"(value: $Team$Visibility$$Type)
set "playerPrefix"(value: $Component$$Type)
set "playerSuffix"(value: $Component$$Type)
set "seeFriendlyInvisibles"(value: boolean)
}
}

declare module "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $ObjectiveCriteria$RenderType extends $Enum<$ObjectiveCriteria$RenderType> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<$ObjectiveCriteria$RenderType>
static readonly "HEARTS": $ObjectiveCriteria$RenderType
static readonly "INTEGER": $ObjectiveCriteria$RenderType

public static "byId"(string0: string): $ObjectiveCriteria$RenderType
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getId"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $ObjectiveCriteria$RenderType
public static "values"(): $ObjectiveCriteria$RenderType[]
get "id"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.scores.criteria.ObjectiveCriteria" {
import { $Optional } from "java.util.Optional"
import { $Set } from "java.util.Set"
import { $ObjectiveCriteria$RenderType } from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $ObjectiveCriteria {
static readonly "AIR": $ObjectiveCriteria
static readonly "ARMOR": $ObjectiveCriteria
static readonly "DEATH_COUNT": $ObjectiveCriteria
static readonly "DUMMY": $ObjectiveCriteria
static readonly "EXPERIENCE": $ObjectiveCriteria
static readonly "FOOD": $ObjectiveCriteria
static readonly "HEALTH": $ObjectiveCriteria
static readonly "KILLED_BY_TEAM": $ObjectiveCriteria[]
static readonly "KILL_COUNT_ALL": $ObjectiveCriteria
static readonly "KILL_COUNT_PLAYERS": $ObjectiveCriteria
static readonly "LEVEL": $ObjectiveCriteria
static readonly "TEAM_KILL": $ObjectiveCriteria[]
static readonly "TRIGGER": $ObjectiveCriteria

public static "byName"(string0: string): $Optional<$ObjectiveCriteria>
public static "getCustomCriteriaNames"(): $Set<string>
public "getDefaultRenderType"(): $ObjectiveCriteria$RenderType
public "getName"(): string
public "isReadOnly"(): boolean
get "defaultRenderType"(): $ObjectiveCriteria$RenderType
get "name"(): string
get "readOnly"(): boolean
}
}

declare module "net.minecraft.world.scores.Scoreboard" {
import { $Objective, $Objective$$Type } from "net.minecraft.world.scores.Objective"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PlayerTeam, $PlayerTeam$$Type } from "net.minecraft.world.scores.PlayerTeam"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Collection } from "java.util.Collection"
import { $Map } from "java.util.Map"
import { $Score, $Score$$Type } from "net.minecraft.world.scores.Score"
import { $ObjectiveCriteria$$Type } from "net.minecraft.world.scores.criteria.ObjectiveCriteria"
import { $ObjectiveCriteria$RenderType$$Type } from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $Scoreboard {
static readonly "DISPLAY_SLOTS": integer
static readonly "DISPLAY_SLOT_BELOW_NAME": integer
static readonly "DISPLAY_SLOT_LIST": integer
static readonly "DISPLAY_SLOT_SIDEBAR": integer
static readonly "DISPLAY_SLOT_TEAMS_SIDEBAR_END": integer
static readonly "DISPLAY_SLOT_TEAMS_SIDEBAR_START": integer

constructor()

public "addObjective"(string0: string, objectiveCriteria1: $ObjectiveCriteria$$Type, component2: $Component$$Type, renderType3: $ObjectiveCriteria$RenderType$$Type): $Objective
public "addPlayerTeam"(string0: string): $PlayerTeam
public "addPlayerToTeam"(string0: string, playerTeam1: $PlayerTeam$$Type): boolean
public "entityRemoved"(entity0: $Entity$$Type): void
public "forAllObjectives"(objectiveCriteria0: $ObjectiveCriteria$$Type, string1: string, consumer2: $Consumer$$Type<$Score$$Type>): void
public "getDisplayObjective"(int0: integer): $Objective
public static "getDisplaySlotByName"(string0: string): integer
public static "getDisplaySlotName"(int0: integer): string
public static "getDisplaySlotNames"(): string[]
public "getObjective"(string0: string): $Objective
public "getObjectiveNames"(): $Collection<string>
public "getObjectives"(): $Collection<$Objective>
public "getOrCreateObjective"(string0: string): $Objective
public "getOrCreatePlayerScore"(string0: string, objective1: $Objective$$Type): $Score
public "getPlayerScores"(string0: string): $Map<$Objective, $Score>
public "getPlayerScores"(objective0: $Objective$$Type): $Collection<$Score>
public "getPlayerTeam"(string0: string): $PlayerTeam
public "getPlayerTeams"(): $Collection<$PlayerTeam>
public "getPlayersTeam"(string0: string): $PlayerTeam
public "getTeamNames"(): $Collection<string>
public "getTrackedPlayers"(): $Collection<string>
public "hasObjective"(string0: string): boolean
public "hasPlayerScore"(string0: string, objective1: $Objective$$Type): boolean
public "onObjectiveAdded"(objective0: $Objective$$Type): void
public "onObjectiveChanged"(objective0: $Objective$$Type): void
public "onObjectiveRemoved"(objective0: $Objective$$Type): void
public "onPlayerRemoved"(string0: string): void
public "onPlayerScoreRemoved"(string0: string, objective1: $Objective$$Type): void
public "onScoreChanged"(score0: $Score$$Type): void
public "onTeamAdded"(playerTeam0: $PlayerTeam$$Type): void
public "onTeamChanged"(playerTeam0: $PlayerTeam$$Type): void
public "onTeamRemoved"(playerTeam0: $PlayerTeam$$Type): void
public "removeObjective"(objective0: $Objective$$Type): void
public "removePlayerFromTeam"(string0: string): boolean
public "removePlayerFromTeam"(string0: string, playerTeam1: $PlayerTeam$$Type): void
public "removePlayerTeam"(playerTeam0: $PlayerTeam$$Type): void
public "resetPlayerScore"(string0: string, objective1: $Objective$$Type): void
public "setDisplayObjective"(int0: integer, objective1: $Objective$$Type): void
get "objectiveNames"(): $Collection<string>
get "objectives"(): $Collection<$Objective>
get "playerTeams"(): $Collection<$PlayerTeam>
get "teamNames"(): $Collection<string>
get "trackedPlayers"(): $Collection<string>
}
}

declare module "net.minecraft.world.scores.Team$CollisionRule" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $Team$CollisionRule extends $Enum<$Team$CollisionRule> {
static readonly "ALWAYS": $Team$CollisionRule
static readonly "NEVER": $Team$CollisionRule
static readonly "PUSH_OTHER_TEAMS": $Team$CollisionRule
static readonly "PUSH_OWN_TEAM": $Team$CollisionRule
readonly "id": integer
readonly "name": string

public static "byName"(string0: string): $Team$CollisionRule
public "getDisplayName"(): $Component
public static "valueOf"(string0: string): $Team$CollisionRule
public static "values"(): $Team$CollisionRule[]
get "displayName"(): $Component
}
}

