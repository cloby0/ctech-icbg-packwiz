declare module "net.minecraft.network.protocol.status.ServerStatus$Players" {
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Record } from "java.lang.Record"

export class $ServerStatus$Players extends $Record {
static readonly "CODEC": $Codec<$ServerStatus$Players>

constructor(max: integer, online: integer, sample: $List$$Type<$GameProfile$$Type>)

public "max"(): integer
public "online"(): integer
public "sample"(): $List<$GameProfile>
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $EntityAnchorArgument$Anchor, $EntityAnchorArgument$Anchor$$Type } from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ClientboundPlayerLookAtPacket implements $Packet<$ClientGamePacketListener> {
constructor(anchor0: $EntityAnchorArgument$Anchor$$Type, double1: double, double2: double, double3: double)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(anchor0: $EntityAnchorArgument$Anchor$$Type, entity1: $Entity$$Type, anchor2: $EntityAnchorArgument$Anchor$$Type)

public "getFromAnchor"(): $EntityAnchorArgument$Anchor
public "getPosition"(level0: $Level$$Type): $Vec3
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "fromAnchor"(): $EntityAnchorArgument$Anchor
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetActionBarTextPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type)

public "getText"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "text"(): $Component
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List, $List$$Type } from "java.util.List"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPlayerInfoRemovePacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(list0: $List$$Type<$UUID$$Type>)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "profileIds"(): $List<$UUID>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetChunkCacheRadiusPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "getRadius"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "radius"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.PacketFlow" {
import { $Enum } from "java.lang.Enum"

export class $PacketFlow extends $Enum<$PacketFlow> {
static readonly "CLIENTBOUND": $PacketFlow
static readonly "SERVERBOUND": $PacketFlow

public "getOpposite"(): $PacketFlow
public static "valueOf"(string0: string): $PacketFlow
public static "values"(): $PacketFlow[]
get "opposite"(): $PacketFlow
}
}

declare module "net.minecraft.network.protocol.game.ClientboundRecipePacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $ClientboundRecipePacket$State, $ClientboundRecipePacket$State$$Type } from "net.minecraft.network.protocol.game.ClientboundRecipePacket$State"
import { $List } from "java.util.List"
import { $Collection$$Type } from "java.util.Collection"
import { $RecipeBookSettings, $RecipeBookSettings$$Type } from "net.minecraft.stats.RecipeBookSettings"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundRecipePacket implements $Packet<$ClientGamePacketListener> {
constructor(state0: $ClientboundRecipePacket$State$$Type, collection1: $Collection$$Type<$ResourceLocation$$Type>, collection2: $Collection$$Type<$ResourceLocation$$Type>, recipeBookSettings3: $RecipeBookSettings$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getBookSettings"(): $RecipeBookSettings
public "getHighlights"(): $List<$ResourceLocation>
public "getRecipes"(): $List<$ResourceLocation>
public "getState"(): $ClientboundRecipePacket$State
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "bookSettings"(): $RecipeBookSettings
get "highlights"(): $List<$ResourceLocation>
get "recipes"(): $List<$ResourceLocation>
get "state"(): $ClientboundRecipePacket$State
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerGamePacketListener" {
import { $ServerboundSwingPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSwingPacket"
import { $ServerboundCommandSuggestionPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket"
import { $ServerboundAcceptTeleportationPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket"
import { $ServerboundContainerClickPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundContainerClickPacket"
import { $ServerboundPlayerInputPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket"
import { $ServerboundRecipeBookSeenRecipePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket"
import { $ServerboundResourcePackPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundResourcePackPacket"
import { $ServerboundSignUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket"
import { $ServerboundPickItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPickItemPacket"
import { $ServerboundChatSessionUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket"
import { $ServerboundClientInformationPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundClientInformationPacket"
import { $ServerboundCustomPayloadPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundCustomPayloadPacket"
import { $ServerboundJigsawGeneratePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket"
import { $ServerboundPlayerCommandPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket"
import { $ServerboundTeleportToEntityPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket"
import { $ServerboundEntityTagQuery$$Type } from "net.minecraft.network.protocol.game.ServerboundEntityTagQuery"
import { $ServerboundMovePlayerPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket"
import { $ServerboundChatAckPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatAckPacket"
import { $ServerboundClientCommandPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundClientCommandPacket"
import { $ServerboundPlayerActionPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket"
import { $ServerboundKeepAlivePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundKeepAlivePacket"
import { $ServerboundPaddleBoatPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket"
import { $ServerboundSetCommandBlockPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket"
import { $ServerboundBlockEntityTagQuery$$Type } from "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQuery"
import { $ServerboundSelectTradePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSelectTradePacket"
import { $ServerboundSeenAdvancementsPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket"
import { $ServerboundInteractPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundInteractPacket"
import { $ServerboundSetCreativeModeSlotPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket"
import { $ServerPacketListener } from "net.minecraft.network.protocol.game.ServerPacketListener"
import { $ServerboundRecipeBookChangeSettingsPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket"
import { $ServerboundSetStructureBlockPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket"
import { $ServerboundPlaceRecipePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket"
import { $ServerboundUseItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundUseItemPacket"
import { $ServerboundChangeDifficultyPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket"
import { $ServerboundSetJigsawBlockPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket"
import { $ServerboundSetCarriedItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket"
import { $ServerboundUseItemOnPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket"
import { $ServerboundContainerButtonClickPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket"
import { $ServerboundEditBookPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundEditBookPacket"
import { $ServerboundRenameItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundRenameItemPacket"
import { $ServerboundPlayerAbilitiesPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket"
import { $ServerboundSetBeaconPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket"
import { $ServerboundSetCommandMinecartPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket"
import { $ServerboundMoveVehiclePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket"
import { $ServerboundChatCommandPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatCommandPacket"
import { $ServerboundContainerClosePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundContainerClosePacket"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ServerboundPongPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPongPacket"
import { $ServerboundLockDifficultyPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket"
import { $ServerboundChatPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatPacket"

export interface $ServerGamePacketListener extends $ServerPacketListener {
"handleAcceptTeleportPacket"(serverboundAcceptTeleportationPacket0: $ServerboundAcceptTeleportationPacket$$Type): void
"handleAnimate"(serverboundSwingPacket0: $ServerboundSwingPacket$$Type): void
"handleBlockEntityTagQuery"(serverboundBlockEntityTagQuery0: $ServerboundBlockEntityTagQuery$$Type): void
"handleChangeDifficulty"(serverboundChangeDifficultyPacket0: $ServerboundChangeDifficultyPacket$$Type): void
"handleChat"(serverboundChatPacket0: $ServerboundChatPacket$$Type): void
"handleChatAck"(serverboundChatAckPacket0: $ServerboundChatAckPacket$$Type): void
"handleChatCommand"(serverboundChatCommandPacket0: $ServerboundChatCommandPacket$$Type): void
"handleChatSessionUpdate"(serverboundChatSessionUpdatePacket0: $ServerboundChatSessionUpdatePacket$$Type): void
"handleClientCommand"(serverboundClientCommandPacket0: $ServerboundClientCommandPacket$$Type): void
"handleClientInformation"(serverboundClientInformationPacket0: $ServerboundClientInformationPacket$$Type): void
"handleContainerButtonClick"(serverboundContainerButtonClickPacket0: $ServerboundContainerButtonClickPacket$$Type): void
"handleContainerClick"(serverboundContainerClickPacket0: $ServerboundContainerClickPacket$$Type): void
"handleContainerClose"(serverboundContainerClosePacket0: $ServerboundContainerClosePacket$$Type): void
"handleCustomCommandSuggestions"(serverboundCommandSuggestionPacket0: $ServerboundCommandSuggestionPacket$$Type): void
"handleCustomPayload"(serverboundCustomPayloadPacket0: $ServerboundCustomPayloadPacket$$Type): void
"handleEditBook"(serverboundEditBookPacket0: $ServerboundEditBookPacket$$Type): void
"handleEntityTagQuery"(serverboundEntityTagQuery0: $ServerboundEntityTagQuery$$Type): void
"handleInteract"(serverboundInteractPacket0: $ServerboundInteractPacket$$Type): void
"handleJigsawGenerate"(serverboundJigsawGeneratePacket0: $ServerboundJigsawGeneratePacket$$Type): void
"handleKeepAlive"(serverboundKeepAlivePacket0: $ServerboundKeepAlivePacket$$Type): void
"handleLockDifficulty"(serverboundLockDifficultyPacket0: $ServerboundLockDifficultyPacket$$Type): void
"handleMovePlayer"(serverboundMovePlayerPacket0: $ServerboundMovePlayerPacket$$Type): void
"handleMoveVehicle"(serverboundMoveVehiclePacket0: $ServerboundMoveVehiclePacket$$Type): void
"handlePaddleBoat"(serverboundPaddleBoatPacket0: $ServerboundPaddleBoatPacket$$Type): void
"handlePickItem"(serverboundPickItemPacket0: $ServerboundPickItemPacket$$Type): void
"handlePlaceRecipe"(serverboundPlaceRecipePacket0: $ServerboundPlaceRecipePacket$$Type): void
"handlePlayerAbilities"(serverboundPlayerAbilitiesPacket0: $ServerboundPlayerAbilitiesPacket$$Type): void
"handlePlayerAction"(serverboundPlayerActionPacket0: $ServerboundPlayerActionPacket$$Type): void
"handlePlayerCommand"(serverboundPlayerCommandPacket0: $ServerboundPlayerCommandPacket$$Type): void
"handlePlayerInput"(serverboundPlayerInputPacket0: $ServerboundPlayerInputPacket$$Type): void
"handlePong"(serverboundPongPacket0: $ServerboundPongPacket$$Type): void
"handleRecipeBookChangeSettingsPacket"(serverboundRecipeBookChangeSettingsPacket0: $ServerboundRecipeBookChangeSettingsPacket$$Type): void
"handleRecipeBookSeenRecipePacket"(serverboundRecipeBookSeenRecipePacket0: $ServerboundRecipeBookSeenRecipePacket$$Type): void
"handleRenameItem"(serverboundRenameItemPacket0: $ServerboundRenameItemPacket$$Type): void
"handleResourcePackResponse"(serverboundResourcePackPacket0: $ServerboundResourcePackPacket$$Type): void
"handleSeenAdvancements"(serverboundSeenAdvancementsPacket0: $ServerboundSeenAdvancementsPacket$$Type): void
"handleSelectTrade"(serverboundSelectTradePacket0: $ServerboundSelectTradePacket$$Type): void
"handleSetBeaconPacket"(serverboundSetBeaconPacket0: $ServerboundSetBeaconPacket$$Type): void
"handleSetCarriedItem"(serverboundSetCarriedItemPacket0: $ServerboundSetCarriedItemPacket$$Type): void
"handleSetCommandBlock"(serverboundSetCommandBlockPacket0: $ServerboundSetCommandBlockPacket$$Type): void
"handleSetCommandMinecart"(serverboundSetCommandMinecartPacket0: $ServerboundSetCommandMinecartPacket$$Type): void
"handleSetCreativeModeSlot"(serverboundSetCreativeModeSlotPacket0: $ServerboundSetCreativeModeSlotPacket$$Type): void
"handleSetJigsawBlock"(serverboundSetJigsawBlockPacket0: $ServerboundSetJigsawBlockPacket$$Type): void
"handleSetStructureBlock"(serverboundSetStructureBlockPacket0: $ServerboundSetStructureBlockPacket$$Type): void
"handleSignUpdate"(serverboundSignUpdatePacket0: $ServerboundSignUpdatePacket$$Type): void
"handleTeleportToEntityPacket"(serverboundTeleportToEntityPacket0: $ServerboundTeleportToEntityPacket$$Type): void
"handleUseItem"(serverboundUseItemPacket0: $ServerboundUseItemPacket$$Type): void
"handleUseItemOn"(serverboundUseItemOnPacket0: $ServerboundUseItemOnPacket$$Type): void
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
}

export namespace $ServerGamePacketListener {
const probejs$$marker: never
}
export abstract class $ServerGamePacketListener$$Static implements $ServerGamePacketListener {
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPlaceRecipePacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, recipe1: $Recipe$$Type<any>, boolean2: boolean)

public "getContainerId"(): integer
public "getRecipe"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isShiftDown"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "recipe"(): $ResourceLocation
get "shiftDown"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetHealthPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetHealthPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(float0: float, int1: integer, float2: float)

public "getFood"(): integer
public "getHealth"(): float
public "getSaturation"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "food"(): integer
get "health"(): float
get "saturation"(): float
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetExperiencePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(float0: float, int1: integer, int2: integer)

public "getExperienceLevel"(): integer
public "getExperienceProgress"(): float
public "getTotalExperience"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "experienceLevel"(): integer
get "experienceProgress"(): float
get "totalExperience"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundAddPlayerPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $UUID } from "java.util.UUID"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ClientboundAddPlayerPacket implements $Packet<$ClientGamePacketListener> {
constructor(player0: $Player$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntityId"(): integer
public "getPlayerId"(): $UUID
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "getxRot"(): byte
public "getyRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityId"(): integer
get "playerId"(): $UUID
get "x"(): double
get "y"(): double
get "z"(): double
get "xRot"(): byte
get "yRot"(): byte
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientGamePacketListener" {
import { $ClientboundPlayerInfoUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket"
import { $ClientboundCustomChatCompletionsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket"
import { $ClientboundSetChunkCacheRadiusPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket"
import { $ClientboundUpdateRecipesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket"
import { $ClientboundRecipePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRecipePacket"
import { $ClientboundMapItemDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket"
import { $ClientboundRotateHeadPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket"
import { $ClientboundSetBorderWarningDelayPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket"
import { $ClientboundSetCameraPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetCameraPacket"
import { $ClientboundCommandsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCommandsPacket"
import { $ClientboundPlayerCombatKillPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket"
import { $ClientboundTabListPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTabListPacket"
import { $ClientboundSelectAdvancementsTabPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket"
import { $ClientboundSectionBlocksUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket"
import { $ClientboundSetEntityMotionPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket"
import { $ClientboundMoveEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket"
import { $ClientboundForgetLevelChunkPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket"
import { $ClientboundDamageEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDamageEventPacket"
import { $ClientboundHorseScreenOpenPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket"
import { $ClientboundLevelChunkWithLightPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket"
import { $ClientboundPlayerLookAtPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket"
import { $ClientboundSetExperiencePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket"
import { $ClientboundContainerSetSlotPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket"
import { $ClientboundBlockChangedAckPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket"
import { $ClientboundSetPlayerTeamPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket"
import { $ClientboundSetSubtitleTextPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket"
import { $ClientboundSetTitleTextPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket"
import { $ClientboundLevelEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLevelEventPacket"
import { $ClientboundChunksBiomesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket"
import { $ClientboundSetBorderCenterPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket"
import { $ClientboundSetActionBarTextPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket"
import { $ClientboundAddExperienceOrbPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAddExperienceOrbPacket"
import { $ClientboundBlockUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket"
import { $ClientboundPingPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPingPacket"
import { $ClientboundSetBorderSizePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket"
import { $ClientboundLightUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket"
import { $ClientboundPlayerCombatEndPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket"
import { $ClientboundSoundPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSoundPacket"
import { $ClientboundSetSimulationDistancePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket"
import { $ClientboundPlayerInfoRemovePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket"
import { $ClientboundSetEntityLinkPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket"
import { $ClientboundSetDisplayObjectivePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ClientboundKeepAlivePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundKeepAlivePacket"
import { $ClientboundSoundEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket"
import { $PacketListener } from "net.minecraft.network.PacketListener"
import { $ClientboundBlockEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEventPacket"
import { $ClientboundSystemChatPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSystemChatPacket"
import { $ClientboundSetEquipmentPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket"
import { $ClientboundOpenScreenPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundOpenScreenPacket"
import { $ClientboundChangeDifficultyPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket"
import { $ClientboundPlayerPositionPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket"
import { $ClientboundSetTimePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetTimePacket"
import { $ClientboundGameEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundGameEventPacket"
import { $ClientboundSetChunkCacheCenterPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket"
import { $ClientboundBundlePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBundlePacket"
import { $ClientboundPlayerChatPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket"
import { $ClientboundEntityEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundEntityEventPacket"
import { $ClientboundExplodePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundExplodePacket"
import { $ClientboundLevelParticlesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket"
import { $ClientboundBossEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBossEventPacket"
import { $ClientboundPlaceGhostRecipePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket"
import { $ClientboundCommandSuggestionsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket"
import { $ClientboundPlayerCombatEnterPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket"
import { $ClientboundContainerClosePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerClosePacket"
import { $ClientboundMoveVehiclePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket"
import { $ClientboundSetPassengersPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket"
import { $ClientboundSetHealthPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetHealthPacket"
import { $ClientboundAddPlayerPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAddPlayerPacket"
import { $ClientboundRemoveEntitiesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket"
import { $ClientboundStopSoundPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundStopSoundPacket"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ClientboundCooldownPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCooldownPacket"
import { $ClientboundUpdateAttributesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket"
import { $ClientboundDisconnectPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDisconnectPacket"
import { $ClientboundSetDefaultSpawnPositionPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket"
import { $ClientboundUpdateMobEffectPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket"
import { $ClientboundTeleportEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket"
import { $ClientboundUpdateAdvancementsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket"
import { $ClientboundMerchantOffersPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket"
import { $ClientboundBlockDestructionPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket"
import { $ClientboundRemoveMobEffectPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket"
import { $ClientboundDeleteChatPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket"
import { $ClientboundOpenSignEditorPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket"
import { $ClientboundTakeItemEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket"
import { $ClientboundAwardStatsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket"
import { $ClientboundPlayerAbilitiesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket"
import { $ClientboundCustomPayloadPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCustomPayloadPacket"
import { $ClientboundTagQueryPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTagQueryPacket"
import { $ClientboundResourcePackPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundResourcePackPacket"
import { $ClientboundSetScorePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetScorePacket"
import { $ClientboundOpenBookPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundOpenBookPacket"
import { $ClientboundSetBorderLerpSizePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket"
import { $ClientboundServerDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundServerDataPacket"
import { $ClientboundDisguisedChatPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket"
import { $ClientboundSetTitlesAnimationPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket"
import { $ClientboundInitializeBorderPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket"
import { $ClientboundUpdateTagsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateTagsPacket"
import { $ClientboundHurtAnimationPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket"
import { $ClientboundSetObjectivePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket"
import { $ClientboundClearTitlesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket"
import { $ClientboundAnimatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAnimatePacket"
import { $ClientboundSetBorderWarningDistancePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket"
import { $ClientboundLoginPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLoginPacket"
import { $ClientboundAddEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import { $ClientboundRespawnPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRespawnPacket"
import { $ClientboundSetEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket"
import { $ClientboundSetCarriedItemPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetCarriedItemPacket"
import { $ClientboundContainerSetContentPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket"
import { $ClientboundContainerSetDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket"
import { $ClientboundUpdateEnabledFeaturesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateEnabledFeaturesPacket"

export interface $ClientGamePacketListener extends $PacketListener {
"handleAddEntity"(clientboundAddEntityPacket0: $ClientboundAddEntityPacket$$Type): void
"handleAddExperienceOrb"(clientboundAddExperienceOrbPacket0: $ClientboundAddExperienceOrbPacket$$Type): void
"handleAddObjective"(clientboundSetObjectivePacket0: $ClientboundSetObjectivePacket$$Type): void
"handleAddOrRemoveRecipes"(clientboundRecipePacket0: $ClientboundRecipePacket$$Type): void
"handleAddPlayer"(clientboundAddPlayerPacket0: $ClientboundAddPlayerPacket$$Type): void
"handleAnimate"(clientboundAnimatePacket0: $ClientboundAnimatePacket$$Type): void
"handleAwardStats"(clientboundAwardStatsPacket0: $ClientboundAwardStatsPacket$$Type): void
"handleBlockChangedAck"(clientboundBlockChangedAckPacket0: $ClientboundBlockChangedAckPacket$$Type): void
"handleBlockDestruction"(clientboundBlockDestructionPacket0: $ClientboundBlockDestructionPacket$$Type): void
"handleBlockEntityData"(clientboundBlockEntityDataPacket0: $ClientboundBlockEntityDataPacket$$Type): void
"handleBlockEvent"(clientboundBlockEventPacket0: $ClientboundBlockEventPacket$$Type): void
"handleBlockUpdate"(clientboundBlockUpdatePacket0: $ClientboundBlockUpdatePacket$$Type): void
"handleBossUpdate"(clientboundBossEventPacket0: $ClientboundBossEventPacket$$Type): void
"handleBundlePacket"(clientboundBundlePacket0: $ClientboundBundlePacket$$Type): void
"handleChangeDifficulty"(clientboundChangeDifficultyPacket0: $ClientboundChangeDifficultyPacket$$Type): void
"handleChunkBlocksUpdate"(clientboundSectionBlocksUpdatePacket0: $ClientboundSectionBlocksUpdatePacket$$Type): void
"handleChunksBiomes"(clientboundChunksBiomesPacket0: $ClientboundChunksBiomesPacket$$Type): void
"handleCommandSuggestions"(clientboundCommandSuggestionsPacket0: $ClientboundCommandSuggestionsPacket$$Type): void
"handleCommands"(clientboundCommandsPacket0: $ClientboundCommandsPacket$$Type): void
"handleContainerClose"(clientboundContainerClosePacket0: $ClientboundContainerClosePacket$$Type): void
"handleContainerContent"(clientboundContainerSetContentPacket0: $ClientboundContainerSetContentPacket$$Type): void
"handleContainerSetData"(clientboundContainerSetDataPacket0: $ClientboundContainerSetDataPacket$$Type): void
"handleContainerSetSlot"(clientboundContainerSetSlotPacket0: $ClientboundContainerSetSlotPacket$$Type): void
"handleCustomChatCompletions"(clientboundCustomChatCompletionsPacket0: $ClientboundCustomChatCompletionsPacket$$Type): void
"handleCustomPayload"(clientboundCustomPayloadPacket0: $ClientboundCustomPayloadPacket$$Type): void
"handleDamageEvent"(clientboundDamageEventPacket0: $ClientboundDamageEventPacket$$Type): void
"handleDeleteChat"(clientboundDeleteChatPacket0: $ClientboundDeleteChatPacket$$Type): void
"handleDisconnect"(clientboundDisconnectPacket0: $ClientboundDisconnectPacket$$Type): void
"handleDisguisedChat"(clientboundDisguisedChatPacket0: $ClientboundDisguisedChatPacket$$Type): void
"handleEnabledFeatures"(clientboundUpdateEnabledFeaturesPacket0: $ClientboundUpdateEnabledFeaturesPacket$$Type): void
"handleEntityEvent"(clientboundEntityEventPacket0: $ClientboundEntityEventPacket$$Type): void
"handleEntityLinkPacket"(clientboundSetEntityLinkPacket0: $ClientboundSetEntityLinkPacket$$Type): void
"handleExplosion"(clientboundExplodePacket0: $ClientboundExplodePacket$$Type): void
"handleForgetLevelChunk"(clientboundForgetLevelChunkPacket0: $ClientboundForgetLevelChunkPacket$$Type): void
"handleGameEvent"(clientboundGameEventPacket0: $ClientboundGameEventPacket$$Type): void
"handleHorseScreenOpen"(clientboundHorseScreenOpenPacket0: $ClientboundHorseScreenOpenPacket$$Type): void
"handleHurtAnimation"(clientboundHurtAnimationPacket0: $ClientboundHurtAnimationPacket$$Type): void
"handleInitializeBorder"(clientboundInitializeBorderPacket0: $ClientboundInitializeBorderPacket$$Type): void
"handleItemCooldown"(clientboundCooldownPacket0: $ClientboundCooldownPacket$$Type): void
"handleKeepAlive"(clientboundKeepAlivePacket0: $ClientboundKeepAlivePacket$$Type): void
"handleLevelChunkWithLight"(clientboundLevelChunkWithLightPacket0: $ClientboundLevelChunkWithLightPacket$$Type): void
"handleLevelEvent"(clientboundLevelEventPacket0: $ClientboundLevelEventPacket$$Type): void
"handleLightUpdatePacket"(clientboundLightUpdatePacket0: $ClientboundLightUpdatePacket$$Type): void
"handleLogin"(clientboundLoginPacket0: $ClientboundLoginPacket$$Type): void
"handleLookAt"(clientboundPlayerLookAtPacket0: $ClientboundPlayerLookAtPacket$$Type): void
"handleMapItemData"(clientboundMapItemDataPacket0: $ClientboundMapItemDataPacket$$Type): void
"handleMerchantOffers"(clientboundMerchantOffersPacket0: $ClientboundMerchantOffersPacket$$Type): void
"handleMoveEntity"(clientboundMoveEntityPacket0: $ClientboundMoveEntityPacket$$Type): void
"handleMovePlayer"(clientboundPlayerPositionPacket0: $ClientboundPlayerPositionPacket$$Type): void
"handleMoveVehicle"(clientboundMoveVehiclePacket0: $ClientboundMoveVehiclePacket$$Type): void
"handleOpenBook"(clientboundOpenBookPacket0: $ClientboundOpenBookPacket$$Type): void
"handleOpenScreen"(clientboundOpenScreenPacket0: $ClientboundOpenScreenPacket$$Type): void
"handleOpenSignEditor"(clientboundOpenSignEditorPacket0: $ClientboundOpenSignEditorPacket$$Type): void
"handleParticleEvent"(clientboundLevelParticlesPacket0: $ClientboundLevelParticlesPacket$$Type): void
"handlePing"(clientboundPingPacket0: $ClientboundPingPacket$$Type): void
"handlePlaceRecipe"(clientboundPlaceGhostRecipePacket0: $ClientboundPlaceGhostRecipePacket$$Type): void
"handlePlayerAbilities"(clientboundPlayerAbilitiesPacket0: $ClientboundPlayerAbilitiesPacket$$Type): void
"handlePlayerChat"(clientboundPlayerChatPacket0: $ClientboundPlayerChatPacket$$Type): void
"handlePlayerCombatEnd"(clientboundPlayerCombatEndPacket0: $ClientboundPlayerCombatEndPacket$$Type): void
"handlePlayerCombatEnter"(clientboundPlayerCombatEnterPacket0: $ClientboundPlayerCombatEnterPacket$$Type): void
"handlePlayerCombatKill"(clientboundPlayerCombatKillPacket0: $ClientboundPlayerCombatKillPacket$$Type): void
"handlePlayerInfoRemove"(clientboundPlayerInfoRemovePacket0: $ClientboundPlayerInfoRemovePacket$$Type): void
"handlePlayerInfoUpdate"(clientboundPlayerInfoUpdatePacket0: $ClientboundPlayerInfoUpdatePacket$$Type): void
"handleRemoveEntities"(clientboundRemoveEntitiesPacket0: $ClientboundRemoveEntitiesPacket$$Type): void
"handleRemoveMobEffect"(clientboundRemoveMobEffectPacket0: $ClientboundRemoveMobEffectPacket$$Type): void
"handleResourcePack"(clientboundResourcePackPacket0: $ClientboundResourcePackPacket$$Type): void
"handleRespawn"(clientboundRespawnPacket0: $ClientboundRespawnPacket$$Type): void
"handleRotateMob"(clientboundRotateHeadPacket0: $ClientboundRotateHeadPacket$$Type): void
"handleSelectAdvancementsTab"(clientboundSelectAdvancementsTabPacket0: $ClientboundSelectAdvancementsTabPacket$$Type): void
"handleServerData"(clientboundServerDataPacket0: $ClientboundServerDataPacket$$Type): void
"handleSetBorderCenter"(clientboundSetBorderCenterPacket0: $ClientboundSetBorderCenterPacket$$Type): void
"handleSetBorderLerpSize"(clientboundSetBorderLerpSizePacket0: $ClientboundSetBorderLerpSizePacket$$Type): void
"handleSetBorderSize"(clientboundSetBorderSizePacket0: $ClientboundSetBorderSizePacket$$Type): void
"handleSetBorderWarningDelay"(clientboundSetBorderWarningDelayPacket0: $ClientboundSetBorderWarningDelayPacket$$Type): void
"handleSetBorderWarningDistance"(clientboundSetBorderWarningDistancePacket0: $ClientboundSetBorderWarningDistancePacket$$Type): void
"handleSetCamera"(clientboundSetCameraPacket0: $ClientboundSetCameraPacket$$Type): void
"handleSetCarriedItem"(clientboundSetCarriedItemPacket0: $ClientboundSetCarriedItemPacket$$Type): void
"handleSetChunkCacheCenter"(clientboundSetChunkCacheCenterPacket0: $ClientboundSetChunkCacheCenterPacket$$Type): void
"handleSetChunkCacheRadius"(clientboundSetChunkCacheRadiusPacket0: $ClientboundSetChunkCacheRadiusPacket$$Type): void
"handleSetDisplayObjective"(clientboundSetDisplayObjectivePacket0: $ClientboundSetDisplayObjectivePacket$$Type): void
"handleSetEntityData"(clientboundSetEntityDataPacket0: $ClientboundSetEntityDataPacket$$Type): void
"handleSetEntityMotion"(clientboundSetEntityMotionPacket0: $ClientboundSetEntityMotionPacket$$Type): void
"handleSetEntityPassengersPacket"(clientboundSetPassengersPacket0: $ClientboundSetPassengersPacket$$Type): void
"handleSetEquipment"(clientboundSetEquipmentPacket0: $ClientboundSetEquipmentPacket$$Type): void
"handleSetExperience"(clientboundSetExperiencePacket0: $ClientboundSetExperiencePacket$$Type): void
"handleSetHealth"(clientboundSetHealthPacket0: $ClientboundSetHealthPacket$$Type): void
"handleSetPlayerTeamPacket"(clientboundSetPlayerTeamPacket0: $ClientboundSetPlayerTeamPacket$$Type): void
"handleSetScore"(clientboundSetScorePacket0: $ClientboundSetScorePacket$$Type): void
"handleSetSimulationDistance"(clientboundSetSimulationDistancePacket0: $ClientboundSetSimulationDistancePacket$$Type): void
"handleSetSpawn"(clientboundSetDefaultSpawnPositionPacket0: $ClientboundSetDefaultSpawnPositionPacket$$Type): void
"handleSetTime"(clientboundSetTimePacket0: $ClientboundSetTimePacket$$Type): void
"handleSoundEntityEvent"(clientboundSoundEntityPacket0: $ClientboundSoundEntityPacket$$Type): void
"handleSoundEvent"(clientboundSoundPacket0: $ClientboundSoundPacket$$Type): void
"handleStopSoundEvent"(clientboundStopSoundPacket0: $ClientboundStopSoundPacket$$Type): void
"handleSystemChat"(clientboundSystemChatPacket0: $ClientboundSystemChatPacket$$Type): void
"handleTabListCustomisation"(clientboundTabListPacket0: $ClientboundTabListPacket$$Type): void
"handleTagQueryPacket"(clientboundTagQueryPacket0: $ClientboundTagQueryPacket$$Type): void
"handleTakeItemEntity"(clientboundTakeItemEntityPacket0: $ClientboundTakeItemEntityPacket$$Type): void
"handleTeleportEntity"(clientboundTeleportEntityPacket0: $ClientboundTeleportEntityPacket$$Type): void
"handleTitlesClear"(clientboundClearTitlesPacket0: $ClientboundClearTitlesPacket$$Type): void
"handleUpdateAdvancementsPacket"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type): void
"handleUpdateAttributes"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type): void
"handleUpdateMobEffect"(clientboundUpdateMobEffectPacket0: $ClientboundUpdateMobEffectPacket$$Type): void
"handleUpdateRecipes"(clientboundUpdateRecipesPacket0: $ClientboundUpdateRecipesPacket$$Type): void
"handleUpdateTags"(clientboundUpdateTagsPacket0: $ClientboundUpdateTagsPacket$$Type): void
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"setActionBarText"(clientboundSetActionBarTextPacket0: $ClientboundSetActionBarTextPacket$$Type): void
"setSubtitleText"(clientboundSetSubtitleTextPacket0: $ClientboundSetSubtitleTextPacket$$Type): void
"setTitleText"(clientboundSetTitleTextPacket0: $ClientboundSetTitleTextPacket$$Type): void
"setTitlesAnimation"(clientboundSetTitlesAnimationPacket0: $ClientboundSetTitlesAnimationPacket$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
set "actionBarText"(value: $ClientboundSetActionBarTextPacket$$Type)
set "subtitleText"(value: $ClientboundSetSubtitleTextPacket$$Type)
set "titleText"(value: $ClientboundSetTitleTextPacket$$Type)
set "titlesAnimation"(value: $ClientboundSetTitlesAnimationPacket$$Type)
}

export namespace $ClientGamePacketListener {
const probejs$$marker: never
}
export abstract class $ClientGamePacketListener$$Static implements $ClientGamePacketListener {
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPaddleBoatPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(boolean0: boolean, boolean1: boolean)

public "getLeft"(): boolean
public "getRight"(): boolean
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "left"(): boolean
get "right"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundClientInformationPacket" {
import { $HumanoidArm, $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import { $ChatVisiblity, $ChatVisiblity$$Type } from "net.minecraft.world.entity.player.ChatVisiblity"

export class $ServerboundClientInformationPacket extends $Record implements $Packet<$ServerGamePacketListener> {
static readonly "MAX_LANGUAGE_LENGTH": integer

constructor(string0: string, int1: integer, chatVisiblity2: $ChatVisiblity$$Type, boolean3: boolean, int4: integer, humanoidArm5: $HumanoidArm$$Type, boolean6: boolean, boolean7: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "allowsListing"(): boolean
public "chatColors"(): boolean
public "chatVisibility"(): $ChatVisiblity
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "language"(): string
public "mainHand"(): $HumanoidArm
public "modelCustomisation"(): integer
public "textFilteringEnabled"(): boolean
public "viewDistance"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import { $BaseCommandBlock } from "net.minecraft.world.level.BaseCommandBlock"

export class $ServerboundSetCommandMinecartPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, string1: string, boolean2: boolean)

public "getCommand"(): string
public "getCommandBlock"(level0: $Level$$Type): $BaseCommandBlock
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "isTrackOutput"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "command"(): string
get "skippable"(): boolean
get "trackOutput"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundMoveEntityPacket implements $Packet<$ClientGamePacketListener> {
public "getEntity"(level0: $Level$$Type): $Entity
public "getXa"(): short
public "getYa"(): short
public "getZa"(): short
public "getxRot"(): byte
public "getyRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "hasPosition"(): boolean
public "hasRotation"(): boolean
public "isOnGround"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "xa"(): short
get "ya"(): short
get "za"(): short
get "xRot"(): byte
get "yRot"(): byte
get "onGround"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPlaceGhostRecipePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, recipe1: $Recipe$$Type<any>)

public "getContainerId"(): integer
public "getRecipe"(): $ResourceLocation
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "recipe"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetDefaultSpawnPositionPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockPos0: $BlockPos$$Type, float1: float)

public "getAngle"(): float
public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "angle"(): float
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundCommandsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $SharedSuggestionProvider, $SharedSuggestionProvider$$Type } from "net.minecraft.commands.SharedSuggestionProvider"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $RootCommandNode, $RootCommandNode$$Type } from "com.mojang.brigadier.tree.RootCommandNode"
import { $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"

export class $ClientboundCommandsPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(rootCommandNode0: $RootCommandNode$$Type<$SharedSuggestionProvider$$Type>)

public "getRoot"(commandBuildContext0: $CommandBuildContext$$Type): $RootCommandNode<$SharedSuggestionProvider>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ClientboundSetPlayerTeamPacket$Action extends $Enum<$ClientboundSetPlayerTeamPacket$Action> {
static readonly "ADD": $ClientboundSetPlayerTeamPacket$Action
static readonly "REMOVE": $ClientboundSetPlayerTeamPacket$Action

public static "valueOf"(string0: string): $ClientboundSetPlayerTeamPacket$Action
public static "values"(): $ClientboundSetPlayerTeamPacket$Action[]
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Function$$Type } from "java.util.function.Function"

export class $ClientboundBlockEntityDataPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "create"(blockEntity0: $BlockEntity$$Type, function1: $Function$$Type<$BlockEntity$$Type, $CompoundTag>): $ClientboundBlockEntityDataPacket
public static "create"(blockEntity0: $BlockEntity$$Type): $ClientboundBlockEntityDataPacket
public "getPos"(): $BlockPos
public "getTag"(): $CompoundTag
public "getType"(): $BlockEntityType<any>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "tag"(): $CompoundTag
get "type"(): $BlockEntityType<any>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List } from "java.util.List"
import { $ClientboundPlayerInfoUpdatePacket$Action, $ClientboundPlayerInfoUpdatePacket$Action$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action"
import { $Collection$$Type } from "java.util.Collection"
import { $ClientboundPlayerInfoUpdatePacket$Entry } from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $EnumSet, $EnumSet$$Type } from "java.util.EnumSet"

export class $ClientboundPlayerInfoUpdatePacket implements $Packet<$ClientGamePacketListener> {
constructor(enumSet0: $EnumSet$$Type<$ClientboundPlayerInfoUpdatePacket$Action$$Type>, collection1: $Collection$$Type<$ServerPlayer$$Type>)
constructor(action0: $ClientboundPlayerInfoUpdatePacket$Action$$Type, serverPlayer1: $ServerPlayer$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "actions"(): $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action>
public static "createPlayerInitializing"(collection0: $Collection$$Type<$ServerPlayer$$Type>): $ClientboundPlayerInfoUpdatePacket
public "entries"(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "newEntries"(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.Packet" {
import { $PacketListener, $PacketListener$$Type } from "net.minecraft.network.PacketListener"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $Packet<T extends $PacketListener = $PacketListener> {
"handle"(t0: T): void
"isSkippable"(): boolean
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}

export namespace $Packet {
const probejs$$marker: never
}
export abstract class $Packet$$Static<T extends $PacketListener = $PacketListener> implements $Packet<T> {
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket" {
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $ClientboundLevelChunkPacketData } from "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $LevelLightEngine$$Type } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $ClientboundLightUpdatePacketData } from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $BitSet$$Type } from "java.util.BitSet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundLevelChunkWithLightPacket implements $Packet<$ClientGamePacketListener> {
constructor(levelChunk0: $LevelChunk$$Type, levelLightEngine1: $LevelLightEngine$$Type, bitSet2: $BitSet$$Type, bitSet3: $BitSet$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getChunkData"(): $ClientboundLevelChunkPacketData
public "getLightData"(): $ClientboundLightUpdatePacketData
public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "chunkData"(): $ClientboundLevelChunkPacketData
get "lightData"(): $ClientboundLightUpdatePacketData
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSetCarriedItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "getSlot"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPongPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPongPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.BundleDelimiterPacket" {
import { $PacketListener, $PacketListener$$Type } from "net.minecraft.network.PacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $BundleDelimiterPacket<T extends $PacketListener = $PacketListener> implements $Packet<T> {
constructor()

public "handle"(t0: T): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPlayerCombatKillPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, component1: $Component$$Type)

public "getMessage"(): $Component
public "getPlayerId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "message"(): $Component
get "playerId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetTitleTextPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type)

public "getText"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "text"(): $Component
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundHurtAnimationPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(livingEntity0: $LivingEntity$$Type)
constructor(int0: integer, float1: float)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "id"(): integer
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "yaw"(): float
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundAnimatePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundAnimatePacket implements $Packet<$ClientGamePacketListener> {
static readonly "CRITICAL_HIT": integer
static readonly "MAGIC_CRITICAL_HIT": integer
static readonly "SWING_MAIN_HAND": integer
static readonly "SWING_OFF_HAND": integer
static readonly "WAKE_UP": integer

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, int1: integer)

public "getAction"(): integer
public "getId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): integer
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ClientboundPlayerInfoUpdatePacket$Action extends $Enum<$ClientboundPlayerInfoUpdatePacket$Action> {
static readonly "ADD_PLAYER": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "INITIALIZE_CHAT": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_DISPLAY_NAME": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_GAME_MODE": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_LATENCY": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_LISTED": $ClientboundPlayerInfoUpdatePacket$Action

public static "valueOf"(string0: string): $ClientboundPlayerInfoUpdatePacket$Action
public static "values"(): $ClientboundPlayerInfoUpdatePacket$Action[]
}
}

declare module "net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundJigsawGeneratePacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockPos0: $BlockPos$$Type, int1: integer, boolean2: boolean)

public "getPos"(): $BlockPos
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "keepJigsaws"(): boolean
public "levels"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ClientboundCustomChatCompletionsPacket$Action extends $Enum<$ClientboundCustomChatCompletionsPacket$Action> {
static readonly "ADD": $ClientboundCustomChatCompletionsPacket$Action
static readonly "REMOVE": $ClientboundCustomChatCompletionsPacket$Action
static readonly "SET": $ClientboundCustomChatCompletionsPacket$Action

public static "valueOf"(string0: string): $ClientboundCustomChatCompletionsPacket$Action
public static "values"(): $ClientboundCustomChatCompletionsPacket$Action[]
}
}

declare module "net.minecraft.network.protocol.game.ClientboundKeepAlivePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundKeepAlivePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(long0: long)

public "getId"(): long
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): long
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List, $List$$Type } from "java.util.List"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"

export class $ClientboundSetEquipmentPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, list1: $List$$Type<$Pair$$Type<$EquipmentSlot$$Type, $ItemStack$$Type>>)

public "getEntity"(): integer
public "getSlots"(): $List<$Pair<$EquipmentSlot, $ItemStack>>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entity"(): integer
get "slots"(): $List<$Pair<$EquipmentSlot, $ItemStack>>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Suggestions, $Suggestions$$Type } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundCommandSuggestionsPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, suggestions1: $Suggestions$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getSuggestions"(): $Suggestions
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "suggestions"(): $Suggestions
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundAddEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundAddEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(entity0: $Entity$$Type, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, int1: integer, blockPos2: $BlockPos$$Type)
constructor(int0: integer, uUID1: $UUID$$Type, double2: double, double3: double, double4: double, float5: float, float6: float, entityType7: $EntityType$$Type<any>, int8: integer, vec39: $Vec3$$Type, double10: double)

public "getData"(): integer
public "getId"(): integer
public "getType"(): $EntityType<any>
public "getUUID"(): $UUID
public "getX"(): double
public "getXRot"(): float
public "getXa"(): double
public "getY"(): double
public "getYHeadRot"(): float
public "getYRot"(): float
public "getYa"(): double
public "getZ"(): double
public "getZa"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): integer
get "id"(): integer
get "type"(): $EntityType<any>
get "uUID"(): $UUID
get "x"(): double
get "xRot"(): float
get "xa"(): double
get "y"(): double
get "yHeadRot"(): float
get "yRot"(): float
get "ya"(): double
get "z"(): double
get "za"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerPacketListener" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PacketListener } from "net.minecraft.network.PacketListener"

export interface $ServerPacketListener extends $PacketListener {
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
}

export namespace $ServerPacketListener {
const probejs$$marker: never
}
export abstract class $ServerPacketListener$$Static implements $ServerPacketListener {
}
}

declare module "net.minecraft.network.protocol.game.ServerboundContainerClosePacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundContainerClosePacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List, $List$$Type } from "java.util.List"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $SynchedEntityData$DataValue, $SynchedEntityData$DataValue$$Type } from "net.minecraft.network.syncher.SynchedEntityData$DataValue"

export class $ClientboundSetEntityDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
static readonly "EOF_MARKER": integer

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, list1: $List$$Type<$SynchedEntityData$DataValue$$Type<any>>)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "id"(): integer
public "isSkippable"(): boolean
public "packedItems"(): $List<$SynchedEntityData$DataValue<any>>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetBorderLerpSizePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(worldBorder0: $WorldBorder$$Type)

public "getLerpTime"(): long
public "getNewSize"(): double
public "getOldSize"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lerpTime"(): long
get "newSize"(): double
get "oldSize"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"

export class $ClientboundChangeDifficultyPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(difficulty0: $Difficulty$$Type, boolean1: boolean)

public "getDifficulty"(): $Difficulty
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isLocked"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "difficulty"(): $Difficulty
get "locked"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundExplodePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List, $List$$Type } from "java.util.List"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundExplodePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(double0: double, double1: double, double2: double, float3: float, list4: $List$$Type<$BlockPos$$Type>, vec35: $Vec3$$Type)

public "getKnockbackX"(): float
public "getKnockbackY"(): float
public "getKnockbackZ"(): float
public "getPower"(): float
public "getToBlow"(): $List<$BlockPos>
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "knockbackX"(): float
get "knockbackY"(): float
get "knockbackZ"(): float
get "power"(): float
get "toBlow"(): $List<$BlockPos>
get "x"(): double
get "y"(): double
get "z"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $ClientboundRemoveMobEffectPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, mobEffect1: $MobEffect$$Type)

public "getEffect"(): $MobEffect
public "getEntity"(level0: $Level$$Type): $Entity
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "effect"(): $MobEffect
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundClearTitlesPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(boolean0: boolean)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "shouldResetTimes"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $RemoteChatSession$Data, $RemoteChatSession$Data$$Type } from "net.minecraft.network.chat.RemoteChatSession$Data"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"

export class $ClientboundPlayerInfoUpdatePacket$Entry extends $Record {
constructor(uUID0: $UUID$$Type, gameProfile1: $GameProfile$$Type, boolean2: boolean, int3: integer, gameType4: $GameType$$Type, component5: $Component$$Type, data6: $RemoteChatSession$Data$$Type)

public "chatSession"(): $RemoteChatSession$Data
public "displayName"(): $Component
public "gameMode"(): $GameType
public "latency"(): integer
public "listed"(): boolean
public "profile"(): $GameProfile
public "profileId"(): $UUID
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPlayerCombatEnterPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor()

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List, $List$$Type } from "java.util.List"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ClientboundCustomChatCompletionsPacket$Action, $ClientboundCustomChatCompletionsPacket$Action$$Type } from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action"

export class $ClientboundCustomChatCompletionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ClientboundCustomChatCompletionsPacket$Action$$Type, list1: $List$$Type<string>)

public "action"(): $ClientboundCustomChatCompletionsPacket$Action
public "entries"(): $List<string>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundBlockChangedAckPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "sequence"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ServerboundClientCommandPacket$Action extends $Enum<$ServerboundClientCommandPacket$Action> {
static readonly "PERFORM_RESPAWN": $ServerboundClientCommandPacket$Action
static readonly "REQUEST_STATS": $ServerboundClientCommandPacket$Action

public static "valueOf"(string0: string): $ServerboundClientCommandPacket$Action
public static "values"(): $ServerboundClientCommandPacket$Action[]
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $List } from "java.util.List"
import { $LevelLightEngine$$Type } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BitSet, $BitSet$$Type } from "java.util.BitSet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundLightUpdatePacketData {
constructor(chunkPos0: $ChunkPos$$Type, levelLightEngine1: $LevelLightEngine$$Type, bitSet2: $BitSet$$Type, bitSet3: $BitSet$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type, int1: integer, int2: integer)

public "getBlockUpdates"(): $List<byte[]>
public "getBlockYMask"(): $BitSet
public "getEmptyBlockYMask"(): $BitSet
public "getEmptySkyYMask"(): $BitSet
public "getSkyUpdates"(): $List<byte[]>
public "getSkyYMask"(): $BitSet
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "blockUpdates"(): $List<byte[]>
get "blockYMask"(): $BitSet
get "emptyBlockYMask"(): $BitSet
get "emptySkyYMask"(): $BitSet
get "skyUpdates"(): $List<byte[]>
get "skyYMask"(): $BitSet
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket" {
import { $Objective$$Type } from "net.minecraft.world.scores.Objective"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ObjectiveCriteria$RenderType } from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $ClientboundSetObjectivePacket implements $Packet<$ClientGamePacketListener> {
static readonly "METHOD_ADD": integer
static readonly "METHOD_CHANGE": integer
static readonly "METHOD_REMOVE": integer

constructor(objective0: $Objective$$Type, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDisplayName"(): $Component
public "getMethod"(): integer
public "getObjectiveName"(): string
public "getRenderType"(): $ObjectiveCriteria$RenderType
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "displayName"(): $Component
get "method"(): integer
get "objectiveName"(): string
get "renderType"(): $ObjectiveCriteria$RenderType
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetSimulationDistancePacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "simulationDistance"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.BundlePacket" {
import { $PacketListener, $PacketListener$$Type } from "net.minecraft.network.PacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Iterable } from "java.lang.Iterable"

export class $BundlePacket<T extends $PacketListener = $PacketListener> implements $Packet<T> {
public "handle"(t0: T): void
public "isSkippable"(): boolean
public "subPackets"(): $Iterable<$Packet<T>>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSetCreativeModeSlotPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, itemStack1: $ItemStack$$Type)

public "getItem"(): $ItemStack
public "getSlotNum"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "item"(): $ItemStack
get "slotNum"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $IntList, $IntList$$Type } from "it.unimi.dsi.fastutil.ints.IntList"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundRemoveEntitiesPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(...int0s: integer[])
constructor(intList0: $IntList$$Type)

public "getEntityIds"(): $IntList
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityIds"(): $IntList
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundCooldownPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundCooldownPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(item0: $Item$$Type, int1: integer)

public "getDuration"(): integer
public "getItem"(): $Item
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "duration"(): integer
get "item"(): $Item
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundCustomPayloadPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IWrappedPacket } from "com.connectivity.networkstats.IWrappedPacket"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import { $NetworkDirection } from "net.minecraftforge.network.NetworkDirection"
import { $ICustomPacket } from "net.minecraftforge.network.ICustomPacket"

export class $ServerboundCustomPayloadPacket implements $Packet<$ServerGamePacketListener>, $ICustomPacket<$ServerboundCustomPayloadPacket>, $IWrappedPacket {
static readonly "BRAND": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getData"(): $FriendlyByteBuf
public "getDirection"(): $NetworkDirection
public "getIdentifier"(): $ResourceLocation
public "getIndex"(): integer
public "getInternalData"(): $FriendlyByteBuf
public "getName"(): $ResourceLocation
public "getOriginalMsg"(): any
public "getThis"(): $ServerboundCustomPayloadPacket
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "setOrgMsg"(object0: any): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): $FriendlyByteBuf
get "direction"(): $NetworkDirection
get "identifier"(): $ResourceLocation
get "index"(): integer
get "internalData"(): $FriendlyByteBuf
get "name"(): $ResourceLocation
get "originalMsg"(): any
get "this"(): $ServerboundCustomPayloadPacket
get "skippable"(): boolean
set "orgMsg"(value: any)
}
}

declare module "net.minecraft.network.protocol.game.ClientboundRespawnPacket" {
import { $GlobalPos, $GlobalPos$$Type } from "net.minecraft.core.GlobalPos"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $Level } from "net.minecraft.world.level.Level"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $ClientboundRespawnPacket implements $Packet<$ClientGamePacketListener> {
static readonly "KEEP_ALL_DATA": byte
static readonly "KEEP_ATTRIBUTES": byte
static readonly "KEEP_ENTITY_DATA": byte

constructor(resourceKey0: $ResourceKey$$Type<$DimensionType>, resourceKey1: $ResourceKey$$Type<$Level>, long2: long, gameType3: $GameType$$Type, gameType4: $GameType$$Type, boolean5: boolean, boolean6: boolean, byte7: byte, optional8: $Optional$$Type<$GlobalPos$$Type>, int9: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDimension"(): $ResourceKey<$Level>
public "getDimensionType"(): $ResourceKey<$DimensionType>
public "getLastDeathLocation"(): $Optional<$GlobalPos>
public "getPlayerGameType"(): $GameType
public "getPortalCooldown"(): integer
public "getPreviousPlayerGameType"(): $GameType
public "getSeed"(): long
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isDebug"(): boolean
public "isFlat"(): boolean
public "isSkippable"(): boolean
public "shouldKeep"(byte0: byte): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "dimension"(): $ResourceKey<$Level>
get "dimensionType"(): $ResourceKey<$DimensionType>
get "lastDeathLocation"(): $Optional<$GlobalPos>
get "playerGameType"(): $GameType
get "portalCooldown"(): integer
get "previousPlayerGameType"(): $GameType
get "seed"(): long
get "debug"(): boolean
get "flat"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket" {
import { $Abilities$$Type } from "net.minecraft.world.entity.player.Abilities"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPlayerAbilitiesPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(abilities0: $Abilities$$Type)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isFlying"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "flying"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundChatAckPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundChatAckPacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "offset"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket" {
import { $SignedMessageBody$Packed, $SignedMessageBody$Packed$$Type } from "net.minecraft.network.chat.SignedMessageBody$Packed"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $FilterMask, $FilterMask$$Type } from "net.minecraft.network.chat.FilterMask"
import { $ChatType$BoundNetwork, $ChatType$BoundNetwork$$Type } from "net.minecraft.network.chat.ChatType$BoundNetwork"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPlayerChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(uUID0: $UUID$$Type, int1: integer, messageSignature2: $MessageSignature$$Type, packed3: $SignedMessageBody$Packed$$Type, component4: $Component$$Type, filterMask5: $FilterMask$$Type, boundNetwork6: $ChatType$BoundNetwork$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "body"(): $SignedMessageBody$Packed
public "chatType"(): $ChatType$BoundNetwork
public "filterMask"(): $FilterMask
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "index"(): integer
public "isSkippable"(): boolean
public "sender"(): $UUID
public "signature"(): $MessageSignature
public "unsignedContent"(): $Component
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $UUID$$Type } from "java.util.UUID"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundTeleportToEntityPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(uUID0: $UUID$$Type)

public "getEntity"(serverLevel0: $ServerLevel$$Type): $Entity
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $RelativeMovement, $RelativeMovement$$Type } from "net.minecraft.world.entity.RelativeMovement"

export class $ClientboundPlayerPositionPacket implements $Packet<$ClientGamePacketListener> {
constructor(double0: double, double1: double, double2: double, float3: float, float4: float, set5: $Set$$Type<$RelativeMovement$$Type>, int6: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getRelativeArguments"(): $Set<$RelativeMovement>
public "getX"(): double
public "getXRot"(): float
public "getY"(): double
public "getYRot"(): float
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "relativeArguments"(): $Set<$RelativeMovement>
get "x"(): double
get "xRot"(): float
get "y"(): double
get "yRot"(): float
get "z"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MapItemSavedData$MapPatch, $MapItemSavedData$MapPatch$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch"
import { $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $Collection$$Type } from "java.util.Collection"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $MapDecoration$$Type } from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $IMapDataPacketExtension } from "net.mehvahdjukaar.moonlight.core.misc.IMapDataPacketExtension"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export class $ClientboundMapItemDataPacket implements $Packet<$ClientGamePacketListener>, $IMapDataPacketExtension {
constructor(int0: integer, byte1: byte, boolean2: boolean, collection3: $Collection$$Type<$MapDecoration$$Type>, mapPatch4: $MapItemSavedData$MapPatch$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "applyToMap"(mapItemSavedData0: $MapItemSavedData$$Type): void
public "getMapId"(): integer
public "getScale"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isLocked"(): boolean
public "isSkippable"(): boolean
public "moonlight$getColorPatch"(): $MapItemSavedData$MapPatch
public "moonlight$getCustomMapDataTag"(): $CompoundTag
public "moonlight$getDimension"(): $ResourceKey
public "moonlight$sendCustomDecorations"(decorations: $Collection$$Type): void
public "moonlight$sendCustomMapDataTag"(dataTag: $CompoundTag$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "mapId"(): integer
get "scale"(): byte
get "locked"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.BundlerInfo" {
import { $AttributeKey } from "io.netty.util.AttributeKey"
import { $BundlePacket, $BundlePacket$$Type } from "net.minecraft.network.protocol.BundlePacket"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BundlerInfo$Provider } from "net.minecraft.network.protocol.BundlerInfo$Provider"
import { $PacketListener, $PacketListener$$Type } from "net.minecraft.network.PacketListener"
import { $BundleDelimiterPacket$$Type } from "net.minecraft.network.protocol.BundleDelimiterPacket"
import { $BundlerInfo$Bundler } from "net.minecraft.network.protocol.BundlerInfo$Bundler"
import { $Class$$Type } from "java.lang.Class"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"

export interface $BundlerInfo {
"startPacketBundling"(packet0: $Packet$$Type<any>): $BundlerInfo$Bundler
"unbundlePacket"(packet0: $Packet$$Type<any>, consumer1: $Consumer$$Type<$Packet$$Type<any>>): void
}

export namespace $BundlerInfo {
const BUNDLER_PROVIDER: $AttributeKey<$BundlerInfo$Provider>
const BUNDLE_SIZE_LIMIT: integer
const EMPTY: $BundlerInfo
function createForPacket<T extends $PacketListener, P extends $BundlePacket<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$Iterable$$Type<$Packet$$Type<T>>, P>, bundleDelimiterPacket2: $BundleDelimiterPacket$$Type<T>): $BundlerInfo
}
export abstract class $BundlerInfo$$Static implements $BundlerInfo {
static readonly "BUNDLER_PROVIDER": $AttributeKey<$BundlerInfo$Provider>
static readonly "BUNDLE_SIZE_LIMIT": integer
static readonly "EMPTY": $BundlerInfo

static "createForPacket"<T extends $PacketListener, P extends $BundlePacket<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$Iterable$$Type<$Packet$$Type<T>>, P>, bundleDelimiterPacket2: $BundleDelimiterPacket$$Type<T>): $BundlerInfo
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetEntityLinkPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, entity1: $Entity$$Type)

public "getDestId"(): integer
public "getSourceId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "destId"(): integer
get "sourceId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ClientboundGameEventPacket$Type {
constructor(int0: integer)

}
}

declare module "net.minecraft.network.protocol.game.ServerboundSelectTradePacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSelectTradePacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "getItem"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "item"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List } from "java.util.List"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundContainerSetContentPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer, nonNullList2: $NonNullList$$Type<$ItemStack$$Type>, itemStack3: $ItemStack$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCarriedItem"(): $ItemStack
public "getContainerId"(): integer
public "getItems"(): $List<$ItemStack>
public "getStateId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "carriedItem"(): $ItemStack
get "containerId"(): integer
get "items"(): $List<$ItemStack>
get "stateId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundCommandSuggestionPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, string1: string)

public "getCommand"(): string
public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "command"(): string
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket" {
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundUseItemOnPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(interactionHand0: $InteractionHand$$Type, blockHitResult1: $BlockHitResult$$Type, int2: integer)

public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getSequence"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "hitResult"(): $BlockHitResult
get "sequence"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetTimePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetTimePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(long0: long, long1: long, boolean2: boolean)

public "getDayTime"(): long
public "getGameTime"(): long
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "dayTime"(): long
get "gameTime"(): long
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ClientboundRotateHeadPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, byte1: byte)

public "getEntity"(level0: $Level$$Type): $Entity
public "getYHeadRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "yHeadRot"(): byte
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSoundPacket" {
import { $SoundSource, $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSoundPacket implements $Packet<$ClientGamePacketListener> {
static readonly "LOCATION_ACCURACY": float

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, soundSource1: $SoundSource$$Type, double2: double, double3: double, double4: double, float5: float, float6: float, long7: long)

public "getPitch"(): float
public "getSeed"(): long
public "getSound"(): $Holder<$SoundEvent>
public "getSource"(): $SoundSource
public "getVolume"(): float
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pitch"(): float
get "seed"(): long
get "sound"(): $Holder<$SoundEvent>
get "source"(): $SoundSource
get "volume"(): float
get "x"(): double
get "y"(): double
get "z"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundEntityEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ClientboundEntityEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, byte1: byte)

public "getEntity"(level0: $Level$$Type): $Entity
public "getEventId"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "eventId"(): byte
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundTeleportEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "getxRot"(): byte
public "getyRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isOnGround"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "x"(): double
get "y"(): double
get "z"(): double
get "xRot"(): byte
get "yRot"(): byte
get "onGround"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData" {
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundChunksBiomesPacket$ChunkBiomeData extends $Record {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(levelChunk0: $LevelChunk$$Type)
constructor(chunkPos0: $ChunkPos$$Type, byte1s: byte[])

public "buffer"(): byte[]
public static "extractChunkData"(friendlyByteBuf0: $FriendlyByteBuf$$Type, levelChunk1: $LevelChunk$$Type): void
public "getReadBuffer"(): $FriendlyByteBuf
public "pos"(): $ChunkPos
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "readBuffer"(): $FriendlyByteBuf
}
}

declare module "net.minecraft.network.protocol.game.ClientboundStopSoundPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource, $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundStopSoundPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type)

public "getName"(): $ResourceLocation
public "getSource"(): $SoundSource
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "name"(): $ResourceLocation
get "source"(): $SoundSource
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundContainerSetSlotPacket implements $Packet<$ClientGamePacketListener> {
static readonly "CARRIED_ITEM": integer
static readonly "PLAYER_INVENTORY": integer

constructor(int0: integer, int1: integer, int2: integer, itemStack3: $ItemStack$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "getItem"(): $ItemStack
public "getSlot"(): integer
public "getStateId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "item"(): $ItemStack
get "slot"(): integer
get "stateId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundAcceptTeleportationPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.BundlerInfo$Bundler" {
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"

export interface $BundlerInfo$Bundler {
"addPacket"(packet0: $Packet$$Type<any>): $Packet<any>
}

export namespace $BundlerInfo$Bundler {
const probejs$$marker: never
}
export abstract class $BundlerInfo$Bundler$$Static implements $BundlerInfo$Bundler {
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $CommandBlockEntity$Mode, $CommandBlockEntity$Mode$$Type } from "net.minecraft.world.level.block.entity.CommandBlockEntity$Mode"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSetCommandBlockPacket implements $Packet<$ServerGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, string1: string, mode2: $CommandBlockEntity$Mode$$Type, boolean3: boolean, boolean4: boolean, boolean5: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCommand"(): string
public "getMode"(): $CommandBlockEntity$Mode
public "getPos"(): $BlockPos
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isAutomatic"(): boolean
public "isConditional"(): boolean
public "isSkippable"(): boolean
public "isTrackOutput"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "command"(): string
get "mode"(): $CommandBlockEntity$Mode
get "pos"(): $BlockPos
get "automatic"(): boolean
get "conditional"(): boolean
get "skippable"(): boolean
get "trackOutput"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundResourcePackPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundResourcePackPacket implements $Packet<$ClientGamePacketListener> {
static readonly "MAX_HASH_LENGTH": integer

constructor(string0: string, string1: string, boolean2: boolean, component3: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getHash"(): string
public "getPrompt"(): $Component
public "getUrl"(): string
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isRequired"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hash"(): string
get "prompt"(): $Component
get "url"(): string
get "required"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.status.ServerStatus$Favicon" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $ServerStatus$Favicon extends $Record {
static readonly "CODEC": $Codec<$ServerStatus$Favicon>

constructor(iconBytes: byte[])

public "iconBytes"(): byte[]
}
}

declare module "net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket" {
import { $RemoteChatSession$Data, $RemoteChatSession$Data$$Type } from "net.minecraft.network.chat.RemoteChatSession$Data"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundChatSessionUpdatePacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(data0: $RemoteChatSession$Data$$Type)

public "chatSession"(): $RemoteChatSession$Data
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundContainerSetDataPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer, int2: integer)

public "getContainerId"(): integer
public "getId"(): integer
public "getValue"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "id"(): integer
get "value"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundResourcePackPacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ServerboundResourcePackPacket$Action extends $Enum<$ServerboundResourcePackPacket$Action> {
static readonly "ACCEPTED": $ServerboundResourcePackPacket$Action
static readonly "DECLINED": $ServerboundResourcePackPacket$Action
static readonly "FAILED_DOWNLOAD": $ServerboundResourcePackPacket$Action
static readonly "SUCCESSFULLY_LOADED": $ServerboundResourcePackPacket$Action

public static "valueOf"(string0: string): $ServerboundResourcePackPacket$Action
public static "values"(): $ServerboundResourcePackPacket$Action[]
}
}

declare module "net.minecraft.network.protocol.status.ServerStatus" {
import { $ServerStatusPing, $ServerStatusPing$$Type } from "net.minecraftforge.network.ServerStatusPing"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ServerStatus$Players, $ServerStatus$Players$$Type } from "net.minecraft.network.protocol.status.ServerStatus$Players"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ServerStatus$Favicon, $ServerStatus$Favicon$$Type } from "net.minecraft.network.protocol.status.ServerStatus$Favicon"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $ServerStatus$Version, $ServerStatus$Version$$Type } from "net.minecraft.network.protocol.status.ServerStatus$Version"
import { $Record } from "java.lang.Record"

export class $ServerStatus extends $Record {
static readonly "CODEC": $Codec<$ServerStatus>

constructor(description: $Component$$Type, players: $Optional$$Type<$ServerStatus$Players$$Type>, version: $Optional$$Type<$ServerStatus$Version$$Type>, favicon: $Optional$$Type<$ServerStatus$Favicon$$Type>, enforcesSecureChat: boolean, forgeData: $Optional$$Type<$ServerStatusPing$$Type>)

public "description"(): $Component
public "enforcesSecureChat"(): boolean
public "favicon"(): $Optional<$ServerStatus$Favicon>
public "forgeData"(): $Optional<$ServerStatusPing>
public "players"(): $Optional<$ServerStatus$Players>
public "version"(): $Optional<$ServerStatus$Version>
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetBorderWarningDistancePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(worldBorder0: $WorldBorder$$Type)

public "getWarningBlocks"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "warningBlocks"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetCameraPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ClientboundSetCameraPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type)

public "getEntity"(level0: $Level$$Type): $Entity
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundHorseScreenOpenPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer, int2: integer)

public "getContainerId"(): integer
public "getEntityId"(): integer
public "getSize"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "entityId"(): integer
get "size"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBlockEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundBlockEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, int3: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getB0"(): integer
public "getB1"(): integer
public "getBlock"(): $Block
public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "b0"(): integer
get "b1"(): integer
get "block"(): $Block
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetBorderWarningDelayPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(worldBorder0: $WorldBorder$$Type)

public "getWarningDelay"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "warningDelay"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundInteractPacket" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerboundInteractPacket$Handler$$Type } from "net.minecraft.network.protocol.game.ServerboundInteractPacket$Handler"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundInteractPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "createAttackPacket"(entity0: $Entity$$Type, boolean1: boolean): $ServerboundInteractPacket
public static "createInteractionPacket"(entity0: $Entity$$Type, boolean1: boolean, interactionHand2: $InteractionHand$$Type): $ServerboundInteractPacket
public static "createInteractionPacket"(entity0: $Entity$$Type, boolean1: boolean, interactionHand2: $InteractionHand$$Type, vec33: $Vec3$$Type): $ServerboundInteractPacket
public "dispatch"(handler0: $ServerboundInteractPacket$Handler$$Type): void
public "getTarget"(serverLevel0: $ServerLevel$$Type): $Entity
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "isUsingSecondaryAction"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
get "usingSecondaryAction"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $MobEffectInstance$FactorData } from "net.minecraft.world.effect.MobEffectInstance$FactorData"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $ClientboundUpdateMobEffectPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, mobEffectInstance1: $MobEffectInstance$$Type)

public "effectShowsIcon"(): boolean
public "getEffect"(): $MobEffect
public "getEffectAmplifier"(): byte
public "getEffectDurationTicks"(): integer
public "getEntityId"(): integer
public "getFactorData"(): $MobEffectInstance$FactorData
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isEffectAmbient"(): boolean
public "isEffectVisible"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "effect"(): $MobEffect
get "effectAmplifier"(): byte
get "effectDurationTicks"(): integer
get "entityId"(): integer
get "factorData"(): $MobEffectInstance$FactorData
get "effectAmbient"(): boolean
get "effectVisible"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundOpenSignEditorPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockPos0: $BlockPos$$Type, boolean1: boolean)

public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isFrontText"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "frontText"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundKeepAlivePacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundKeepAlivePacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(long0: long)

public "getId"(): long
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): long
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundMoveVehiclePacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getX"(): double
public "getXRot"(): float
public "getY"(): double
public "getYRot"(): float
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): double
get "xRot"(): float
get "y"(): double
get "yRot"(): float
get "z"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetPassengersPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type)

public "getPassengers"(): integer[]
public "getVehicle"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "passengers"(): integer[]
get "vehicle"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundClientCommandPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerboundClientCommandPacket$Action, $ServerboundClientCommandPacket$Action$$Type } from "net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundClientCommandPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ServerboundClientCommandPacket$Action$$Type)

public "getAction"(): $ServerboundClientCommandPacket$Action
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundClientCommandPacket$Action
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Rotation, $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Mirror, $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $StructureBlockEntity$UpdateType, $StructureBlockEntity$UpdateType$$Type } from "net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $StructureMode, $StructureMode$$Type } from "net.minecraft.world.level.block.state.properties.StructureMode"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSetStructureBlockPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockPos0: $BlockPos$$Type, updateType1: $StructureBlockEntity$UpdateType$$Type, structureMode2: $StructureMode$$Type, string3: string, blockPos4: $BlockPos$$Type, vec3i5: $Vec3i$$Type, mirror6: $Mirror$$Type, rotation7: $Rotation$$Type, string8: string, boolean9: boolean, boolean10: boolean, boolean11: boolean, float12: float, long13: long)

public "getData"(): string
public "getIntegrity"(): float
public "getMirror"(): $Mirror
public "getMode"(): $StructureMode
public "getName"(): string
public "getOffset"(): $BlockPos
public "getPos"(): $BlockPos
public "getRotation"(): $Rotation
public "getSeed"(): long
public "getSize"(): $Vec3i
public "getUpdateType"(): $StructureBlockEntity$UpdateType
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "handler$blc000$readInts"(buf: $FriendlyByteBuf$$Type, ci: $CallbackInfo$$Type): void
public "handler$blc000$writeInts"(buf: $FriendlyByteBuf$$Type, ci: $CallbackInfo$$Type): void
public "isIgnoreEntities"(): boolean
public "isShowAir"(): boolean
public "isShowBoundingBox"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): string
get "integrity"(): float
get "mirror"(): $Mirror
get "mode"(): $StructureMode
get "name"(): string
get "offset"(): $BlockPos
get "pos"(): $BlockPos
get "rotation"(): $Rotation
get "seed"(): long
get "size"(): $Vec3i
get "updateType"(): $StructureBlockEntity$UpdateType
get "ignoreEntities"(): boolean
get "showAir"(): boolean
get "showBoundingBox"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundDamageEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ClientboundDamageEventPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type)
constructor(int0: integer, int1: integer, int2: integer, int3: integer, optional4: $Optional$$Type<$Vec3$$Type>)

public "entityId"(): integer
public "getSource"(level0: $Level$$Type): $DamageSource
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "sourceCauseId"(): integer
public "sourceDirectId"(): integer
public "sourcePosition"(): $Optional<$Vec3>
public "sourceTypeId"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundOpenScreenPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MenuType, $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export class $ClientboundOpenScreenPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, menuType1: $MenuType$$Type<any>, component2: $Component$$Type)

public "getContainerId"(): integer
public "getTitle"(): $Component
public "getType"(): $MenuType<any>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "title"(): $Component
get "type"(): $MenuType<any>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundEntityTagQuery" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundEntityTagQuery implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer)

public "getEntityId"(): integer
public "getTransactionId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityId"(): integer
get "transactionId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundForgetLevelChunkPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer)

public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetBorderSizePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(worldBorder0: $WorldBorder$$Type)

public "getSize"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "size"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.VecDeltaCodec" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $VecDeltaCodec {
constructor()

public "decode"(long0: long, long1: long, long2: long): $Vec3
public "delta"(vec30: $Vec3$$Type): $Vec3
public "encodeX"(vec30: $Vec3$$Type): long
public "encodeY"(vec30: $Vec3$$Type): long
public "encodeZ"(vec30: $Vec3$$Type): long
public "setBase"(vec30: $Vec3$$Type): void
set "base"(value: $Vec3$$Type)
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSignUpdatePacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockPos0: $BlockPos$$Type, boolean1: boolean, string2: string, string3: string, string4: string, string5: string)

public "getLines"(): string[]
public "getPos"(): $BlockPos
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isFrontText"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lines"(): string[]
get "pos"(): $BlockPos
get "frontText"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetCarriedItemPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetCarriedItemPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "getSlot"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundRecipeBookSeenRecipePacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(recipe0: $Recipe$$Type<any>)

public "getRecipe"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "recipe"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $LevelChunkSection$$Type } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $SectionPos, $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ShortSet$$Type } from "it.unimi.dsi.fastutil.shorts.ShortSet"

export class $ClientboundSectionBlocksUpdatePacket implements $Packet<$ClientGamePacketListener> {
readonly "positions": short[]
readonly "sectionPos": $SectionPos

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(sectionPos0: $SectionPos$$Type, shortSet1: $ShortSet$$Type, levelChunkSection2: $LevelChunkSection$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "runUpdates"(biConsumer0: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundBlockUpdatePacket implements $Packet<$ClientGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type)

public "getBlockState"(): $BlockState
public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "blockState"(): $BlockState
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBossEventPacket$Handler" {
import { $BossEvent$BossBarOverlay$$Type } from "net.minecraft.world.BossEvent$BossBarOverlay"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BossEvent$BossBarColor$$Type } from "net.minecraft.world.BossEvent$BossBarColor"
import { $UUID$$Type } from "java.util.UUID"

export interface $ClientboundBossEventPacket$Handler {
"add"(uUID0: $UUID$$Type, component1: $Component$$Type, float2: float, bossBarColor3: $BossEvent$BossBarColor$$Type, bossBarOverlay4: $BossEvent$BossBarOverlay$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): void
"remove"(uUID0: $UUID$$Type): void
"updateName"(uUID0: $UUID$$Type, component1: $Component$$Type): void
"updateProgress"(uUID0: $UUID$$Type, float1: float): void
"updateProperties"(uUID0: $UUID$$Type, boolean1: boolean, boolean2: boolean, boolean3: boolean): void
"updateStyle"(uUID0: $UUID$$Type, bossBarColor1: $BossEvent$BossBarColor$$Type, bossBarOverlay2: $BossEvent$BossBarOverlay$$Type): void
}

export namespace $ClientboundBossEventPacket$Handler {
const probejs$$marker: never
}
export abstract class $ClientboundBossEventPacket$Handler$$Static implements $ClientboundBossEventPacket$Handler {
}
}

declare module "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $MerchantOffers, $MerchantOffers$$Type } from "net.minecraft.world.item.trading.MerchantOffers"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundMerchantOffersPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, merchantOffers1: $MerchantOffers$$Type, int2: integer, int3: integer, boolean4: boolean, boolean5: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "canRestock"(): boolean
public "getContainerId"(): integer
public "getOffers"(): $MerchantOffers
public "getVillagerLevel"(): integer
public "getVillagerXp"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "showProgress"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "offers"(): $MerchantOffers
get "villagerLevel"(): integer
get "villagerXp"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetScorePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $ServerScoreboard$Method, $ServerScoreboard$Method$$Type } from "net.minecraft.server.ServerScoreboard$Method"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetScorePacket implements $Packet<$ClientGamePacketListener> {
constructor(method0: $ServerScoreboard$Method$$Type, string1: string, string2: string, int3: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getMethod"(): $ServerScoreboard$Method
public "getObjectiveName"(): string
public "getOwner"(): string
public "getScore"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "method"(): $ServerScoreboard$Method
get "objectiveName"(): string
get "owner"(): string
get "score"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetChunkCacheCenterPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer)

public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundRecipePacket$State" {
import { $Enum } from "java.lang.Enum"

export class $ClientboundRecipePacket$State extends $Enum<$ClientboundRecipePacket$State> {
static readonly "ADD": $ClientboundRecipePacket$State
static readonly "INIT": $ClientboundRecipePacket$State
static readonly "REMOVE": $ClientboundRecipePacket$State

public static "valueOf"(string0: string): $ClientboundRecipePacket$State
public static "values"(): $ClientboundRecipePacket$State[]
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundBlockDestructionPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, blockPos1: $BlockPos$$Type, int2: integer)

public "getId"(): integer
public "getPos"(): $BlockPos
public "getProgress"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "pos"(): $BlockPos
get "progress"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData" {
import { $Consumer } from "java.util.function.Consumer"
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData$BlockEntityTagOutput"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundLevelChunkPacketData {
constructor(levelChunk0: $LevelChunk$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type, int1: integer, int2: integer)

public static "extractChunkData"(friendlyByteBuf0: $FriendlyByteBuf$$Type, levelChunk1: $LevelChunk$$Type): void
public "getBlockEntitiesTagsConsumer"(int0: integer, int1: integer): $Consumer<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>
public "getHeightmaps"(): $CompoundTag
public "getReadBuffer"(): $FriendlyByteBuf
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "heightmaps"(): $CompoundTag
get "readBuffer"(): $FriendlyByteBuf
}
}

declare module "net.minecraft.network.protocol.game.ServerboundContainerClickPacket" {
import { $ClickType, $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $Int2ObjectMap, $Int2ObjectMap$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundContainerClickPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer, int2: integer, int3: integer, clickType4: $ClickType$$Type, itemStack5: $ItemStack$$Type, int2ObjectMap6: $Int2ObjectMap$$Type<$ItemStack$$Type>)

public "getButtonNum"(): integer
public "getCarriedItem"(): $ItemStack
public "getChangedSlots"(): $Int2ObjectMap<$ItemStack>
public "getClickType"(): $ClickType
public "getContainerId"(): integer
public "getSlotNum"(): integer
public "getStateId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "buttonNum"(): integer
get "carriedItem"(): $ItemStack
get "changedSlots"(): $Int2ObjectMap<$ItemStack>
get "clickType"(): $ClickType
get "containerId"(): integer
get "slotNum"(): integer
get "stateId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLevelEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundLevelEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, blockPos1: $BlockPos$$Type, int2: integer, boolean3: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getData"(): integer
public "getPos"(): $BlockPos
public "getType"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isGlobalEvent"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): integer
get "pos"(): $BlockPos
get "type"(): integer
get "globalEvent"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData$BlockEntityTagOutput" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"

export interface $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
"accept"(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<any>, compoundTag2: $CompoundTag$$Type): void
}

export namespace $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
const probejs$$marker: never
}
export abstract class $ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Static implements $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
}
}

declare module "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundMovePlayerPacket implements $Packet<$ServerGamePacketListener> {
public "getX"(double0: double): double
public "getXRot"(float0: float): float
public "getY"(double0: double): double
public "getYRot"(float0: float): float
public "getZ"(double0: double): double
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "hasPosition"(): boolean
public "hasRotation"(): boolean
public "isOnGround"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "onGround"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundChatCommandPacket" {
import { $LastSeenMessages$Update, $LastSeenMessages$Update$$Type } from "net.minecraft.network.chat.LastSeenMessages$Update"
import { $ArgumentSignatures, $ArgumentSignatures$$Type } from "net.minecraft.commands.arguments.ArgumentSignatures"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundChatCommandPacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, instant1: $Instant$$Type, long2: long, argumentSignatures3: $ArgumentSignatures$$Type, update4: $LastSeenMessages$Update$$Type)

public "argumentSignatures"(): $ArgumentSignatures
public "command"(): string
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "lastSeenMessages"(): $LastSeenMessages$Update
public "salt"(): long
public "timeStamp"(): $Instant
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQuery" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundBlockEntityTagQuery implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, blockPos1: $BlockPos$$Type)

public "getPos"(): $BlockPos
public "getTransactionId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "transactionId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket" {
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List, $List$$Type } from "java.util.List"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ClientboundChunksBiomesPacket$ChunkBiomeData, $ClientboundChunksBiomesPacket$ChunkBiomeData$$Type } from "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData"

export class $ClientboundChunksBiomesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(list0: $List$$Type<$ClientboundChunksBiomesPacket$ChunkBiomeData$$Type>)

public "chunkBiomeData"(): $List<$ClientboundChunksBiomesPacket$ChunkBiomeData>
public static "forChunks"(list0: $List$$Type<$LevelChunk$$Type>): $ClientboundChunksBiomesPacket
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundLockDifficultyPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(boolean0: boolean)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isLocked"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "locked"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ServerboundPlayerActionPacket$Action extends $Enum<$ServerboundPlayerActionPacket$Action> {
static readonly "ABORT_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "DROP_ALL_ITEMS": $ServerboundPlayerActionPacket$Action
static readonly "DROP_ITEM": $ServerboundPlayerActionPacket$Action
static readonly "RELEASE_USE_ITEM": $ServerboundPlayerActionPacket$Action
static readonly "START_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "STOP_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "SWAP_ITEM_WITH_OFFHAND": $ServerboundPlayerActionPacket$Action

public static "valueOf"(string0: string): $ServerboundPlayerActionPacket$Action
public static "values"(): $ServerboundPlayerActionPacket$Action[]
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPlayerInputPacket implements $Packet<$ServerGamePacketListener> {
constructor(float0: float, float1: float, boolean2: boolean, boolean3: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getXxa"(): float
public "getZza"(): float
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isJumping"(): boolean
public "isShiftKeyDown"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "xxa"(): float
get "zza"(): float
get "jumping"(): boolean
get "shiftKeyDown"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundDisconnectPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundDisconnectPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type)

public "getReason"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "reason"(): $Component
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Advancement$Builder } from "net.minecraft.advancements.Advancement$Builder"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $AdvancementProgress, $AdvancementProgress$$Type } from "net.minecraft.advancements.AdvancementProgress"
import { $Collection$$Type } from "java.util.Collection"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundUpdateAdvancementsPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(boolean0: boolean, collection1: $Collection$$Type<$Advancement$$Type>, set2: $Set$$Type<$ResourceLocation$$Type>, map3: $Map$$Type<$ResourceLocation$$Type, $AdvancementProgress$$Type>)

public "getAdded"(): $Map<$ResourceLocation, $Advancement$Builder>
public "getProgress"(): $Map<$ResourceLocation, $AdvancementProgress>
public "getRemoved"(): $Set<$ResourceLocation>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "shouldReset"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "added"(): $Map<$ResourceLocation, $Advancement$Builder>
get "progress"(): $Map<$ResourceLocation, $AdvancementProgress>
get "removed"(): $Set<$ResourceLocation>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.BundlerInfo$Provider" {
import { $BundlerInfo } from "net.minecraft.network.protocol.BundlerInfo"
import { $PacketFlow$$Type } from "net.minecraft.network.protocol.PacketFlow"

export interface $BundlerInfo$Provider {
"getBundlerInfo"(packetFlow0: $PacketFlow$$Type): $BundlerInfo
}

export namespace $BundlerInfo$Provider {
const probejs$$marker: never
}
export abstract class $BundlerInfo$Provider$$Static implements $BundlerInfo$Provider {
}
}

declare module "net.minecraft.network.protocol.game.ClientboundTagQueryPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundTagQueryPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, compoundTag1: $CompoundTag$$Type)

public "getTag"(): $CompoundTag
public "getTransactionId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "tag"(): $CompoundTag
get "transactionId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundInteractPacket$Handler" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export interface $ServerboundInteractPacket$Handler {
"onAttack"(): void
"onInteraction"(interactionHand0: $InteractionHand$$Type): void
"onInteraction"(interactionHand0: $InteractionHand$$Type, vec31: $Vec3$$Type): void
}

export namespace $ServerboundInteractPacket$Handler {
const probejs$$marker: never
}
export abstract class $ServerboundInteractPacket$Handler$$Static implements $ServerboundInteractPacket$Handler {
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSwingPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSwingPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(interactionHand0: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ServerboundPlayerActionPacket$Action, $ServerboundPlayerActionPacket$Action$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPlayerActionPacket implements $Packet<$ServerGamePacketListener> {
constructor(action0: $ServerboundPlayerActionPacket$Action$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, int3: integer)
constructor(action0: $ServerboundPlayerActionPacket$Action$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAction"(): $ServerboundPlayerActionPacket$Action
public "getDirection"(): $Direction
public "getPos"(): $BlockPos
public "getSequence"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundPlayerActionPacket$Action
get "direction"(): $Direction
get "pos"(): $BlockPos
get "sequence"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket" {
import { $Objective$$Type } from "net.minecraft.world.scores.Objective"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetDisplayObjectivePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, objective1: $Objective$$Type)

public "getObjectiveName"(): string
public "getSlot"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "objectiveName"(): string
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket" {
import { $RecipeBookType, $RecipeBookType$$Type } from "net.minecraft.world.inventory.RecipeBookType"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundRecipeBookChangeSettingsPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(recipeBookType0: $RecipeBookType$$Type, boolean1: boolean, boolean2: boolean)

public "getBookType"(): $RecipeBookType
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isFiltering"(): boolean
public "isOpen"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "bookType"(): $RecipeBookType
get "filtering"(): boolean
get "open"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundServerDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundServerDataPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type, optional1: $Optional$$Type<byte[]>, boolean2: boolean)

public "enforcesSecureChat"(): boolean
public "getIconBytes"(): $Optional<byte[]>
public "getMotd"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "iconBytes"(): $Optional<byte[]>
get "motd"(): $Component
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundUpdateTagsPacket" {
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TagNetworkSerialization$NetworkPayload, $TagNetworkSerialization$NetworkPayload$$Type } from "net.minecraft.tags.TagNetworkSerialization$NetworkPayload"

export class $ClientboundUpdateTagsPacket implements $Packet<$ClientGamePacketListener> {
constructor(map0: $Map$$Type<$ResourceKey$$Type<$Registry$$Type<any>>, $TagNetworkSerialization$NetworkPayload$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getTags"(): $Map<$ResourceKey<$Registry<any>>, $TagNetworkSerialization$NetworkPayload>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "tags"(): $Map<$ResourceKey<$Registry<any>>, $TagNetworkSerialization$NetworkPayload>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.status.ServerStatus$Version" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $ServerStatus$Version extends $Record {
static readonly "CODEC": $Codec<$ServerStatus$Version>

constructor(name: string, protocol: integer)

public static "current"(): $ServerStatus$Version
public "name"(): string
public "protocol"(): integer
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetEntityMotionPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(int0: integer, vec31: $Vec3$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getXa"(): integer
public "getYa"(): integer
public "getZa"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "xa"(): integer
get "ya"(): integer
get "za"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetSubtitleTextPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type)

public "getText"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "text"(): $Component
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundCustomPayloadPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $IWrappedPacket } from "com.connectivity.networkstats.IWrappedPacket"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $NetworkDirection } from "net.minecraftforge.network.NetworkDirection"
import { $ICustomPacket } from "net.minecraftforge.network.ICustomPacket"

export class $ClientboundCustomPayloadPacket implements $Packet<$ClientGamePacketListener>, $ICustomPacket<$ClientboundCustomPayloadPacket>, $IWrappedPacket {
static readonly "BRAND": $ResourceLocation
static readonly "DEBUG_BEE": $ResourceLocation
static readonly "DEBUG_BRAIN": $ResourceLocation
static readonly "DEBUG_GAME_EVENT": $ResourceLocation
static readonly "DEBUG_GAME_EVENT_LISTENER": $ResourceLocation
static readonly "DEBUG_GAME_TEST_ADD_MARKER": $ResourceLocation
static readonly "DEBUG_GAME_TEST_CLEAR": $ResourceLocation
static readonly "DEBUG_GOAL_SELECTOR": $ResourceLocation
static readonly "DEBUG_HIVE": $ResourceLocation
static readonly "DEBUG_NEIGHBORSUPDATE_PACKET": $ResourceLocation
static readonly "DEBUG_PATHFINDING_PACKET": $ResourceLocation
static readonly "DEBUG_POI_ADDED_PACKET": $ResourceLocation
static readonly "DEBUG_POI_REMOVED_PACKET": $ResourceLocation
static readonly "DEBUG_POI_TICKET_COUNT_PACKET": $ResourceLocation
static readonly "DEBUG_RAIDS": $ResourceLocation
static readonly "DEBUG_STRUCTURES_PACKET": $ResourceLocation
static readonly "DEBUG_VILLAGE_SECTIONS": $ResourceLocation
static readonly "DEBUG_WORLDGENATTEMPT_PACKET": $ResourceLocation

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)

public "getData"(): $FriendlyByteBuf
public "getDirection"(): $NetworkDirection
public "getIdentifier"(): $ResourceLocation
public "getIndex"(): integer
public "getInternalData"(): $FriendlyByteBuf
public "getName"(): $ResourceLocation
public "getOriginalMsg"(): any
public "getThis"(): $ClientboundCustomPayloadPacket
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "setOrgMsg"(object0: any): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): $FriendlyByteBuf
get "direction"(): $NetworkDirection
get "identifier"(): $ResourceLocation
get "index"(): integer
get "internalData"(): $FriendlyByteBuf
get "name"(): $ResourceLocation
get "originalMsg"(): any
get "this"(): $ClientboundCustomPayloadPacket
get "skippable"(): boolean
set "orgMsg"(value: any)
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ServerboundPlayerCommandPacket$Action, $ServerboundPlayerCommandPacket$Action$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPlayerCommandPacket implements $Packet<$ServerGamePacketListener> {
constructor(entity0: $Entity$$Type, action1: $ServerboundPlayerCommandPacket$Action$$Type)
constructor(entity0: $Entity$$Type, action1: $ServerboundPlayerCommandPacket$Action$$Type, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAction"(): $ServerboundPlayerCommandPacket$Action
public "getData"(): integer
public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundPlayerCommandPacket$Action
get "data"(): integer
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundUseItemPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundUseItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(interactionHand0: $InteractionHand$$Type, int1: integer)

public "getHand"(): $InteractionHand
public "getSequence"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "sequence"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundChangeDifficultyPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(difficulty0: $Difficulty$$Type)

public "getDifficulty"(): $Difficulty
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "difficulty"(): $Difficulty
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBossEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $UUID$$Type } from "java.util.UUID"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ClientboundBossEventPacket$Handler$$Type } from "net.minecraft.network.protocol.game.ClientboundBossEventPacket$Handler"
import { $BossEvent$$Type } from "net.minecraft.world.BossEvent"

export class $ClientboundBossEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "createAddPacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createRemovePacket"(uUID0: $UUID$$Type): $ClientboundBossEventPacket
public static "createUpdateNamePacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdateProgressPacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdatePropertiesPacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdateStylePacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public "dispatch"(handler0: $ClientboundBossEventPacket$Handler$$Type): void
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundContainerButtonClickPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer)

public "getButtonId"(): integer
public "getContainerId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "buttonId"(): integer
get "containerId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundRenameItemPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundRenameItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string)

public "getName"(): string
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "name"(): string
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundContainerClosePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundContainerClosePacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerboundSeenAdvancementsPacket$Action, $ServerboundSeenAdvancementsPacket$Action$$Type } from "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundSeenAdvancementsPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ServerboundSeenAdvancementsPacket$Action$$Type, resourceLocation1: $ResourceLocation$$Type)

public static "closedScreen"(): $ServerboundSeenAdvancementsPacket
public "getAction"(): $ServerboundSeenAdvancementsPacket$Action
public "getTab"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public static "openedTab"(advancement0: $Advancement$$Type): $ServerboundSeenAdvancementsPacket
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundSeenAdvancementsPacket$Action
get "tab"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundMoveVehiclePacket implements $Packet<$ServerGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getX"(): double
public "getXRot"(): float
public "getY"(): double
public "getYRot"(): float
public "getZ"(): double
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): double
get "xRot"(): float
get "y"(): double
get "yRot"(): float
get "z"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetTitlesAnimationPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer, int2: integer)

public "getFadeIn"(): integer
public "getFadeOut"(): integer
public "getStay"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "fadeIn"(): integer
get "fadeOut"(): integer
get "stay"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatType$BoundNetwork, $ChatType$BoundNetwork$$Type } from "net.minecraft.network.chat.ChatType$BoundNetwork"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundDisguisedChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type, boundNetwork1: $ChatType$BoundNetwork$$Type)

public "chatType"(): $ChatType$BoundNetwork
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "message"(): $Component
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLoginPacket" {
import { $Set, $Set$$Type } from "java.util.Set"
import { $Record } from "java.lang.Record"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $GlobalPos, $GlobalPos$$Type } from "net.minecraft.core.GlobalPos"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type } from "net.minecraft.core.RegistryAccess$Frozen"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ClientboundLoginPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, boolean1: boolean, gameType2: $GameType$$Type, gameType3: $GameType$$Type, set4: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>, frozen5: $RegistryAccess$Frozen$$Type, resourceKey6: $ResourceKey$$Type<$DimensionType>, resourceKey7: $ResourceKey$$Type<$Level>, long8: long, int9: integer, int10: integer, int11: integer, boolean12: boolean, boolean13: boolean, boolean14: boolean, boolean15: boolean, optional16: $Optional$$Type<$GlobalPos$$Type>, int17: integer)

public "chunkRadius"(): integer
public "dimension"(): $ResourceKey<$Level>
public "dimensionType"(): $ResourceKey<$DimensionType>
public "gameType"(): $GameType
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "hardcore"(): boolean
public "isDebug"(): boolean
public "isFlat"(): boolean
public "isSkippable"(): boolean
public "lastDeathLocation"(): $Optional<$GlobalPos>
public "levels"(): $Set<$ResourceKey<$Level>>
public "maxPlayers"(): integer
public "playerId"(): integer
public "portalCooldown"(): integer
public "previousGameType"(): $GameType
public "reducedDebugInfo"(): boolean
public "registryHolder"(): $RegistryAccess$Frozen
public "seed"(): long
public "showDeathScreen"(): boolean
public "simulationDistance"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "debug"(): boolean
get "flat"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundUpdateEnabledFeaturesPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundUpdateEnabledFeaturesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(set0: $Set$$Type<$ResourceLocation$$Type>)

public "features"(): $Set<$ResourceLocation>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $LevelLightEngine$$Type } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $ClientboundLightUpdatePacketData } from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $BitSet$$Type } from "java.util.BitSet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundLightUpdatePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(chunkPos0: $ChunkPos$$Type, levelLightEngine1: $LevelLightEngine$$Type, bitSet2: $BitSet$$Type, bitSet3: $BitSet$$Type)

public "getLightData"(): $ClientboundLightUpdatePacketData
public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lightData"(): $ClientboundLightUpdatePacketData
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSystemChatPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSystemChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type, boolean1: boolean)

public "content"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "overlay"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ServerboundSeenAdvancementsPacket$Action extends $Enum<$ServerboundSeenAdvancementsPacket$Action> {
static readonly "CLOSED_SCREEN": $ServerboundSeenAdvancementsPacket$Action
static readonly "OPENED_TAB": $ServerboundSeenAdvancementsPacket$Action

public static "valueOf"(string0: string): $ServerboundSeenAdvancementsPacket$Action
public static "values"(): $ServerboundSeenAdvancementsPacket$Action[]
}
}

declare module "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $MessageSignature$Packed, $MessageSignature$Packed$$Type } from "net.minecraft.network.chat.MessageSignature$Packed"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundDeleteChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(packed0: $MessageSignature$Packed$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "messageSignature"(): $MessageSignature$Packed
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundTakeItemEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, int1: integer, int2: integer)

public "getAmount"(): integer
public "getItemId"(): integer
public "getPlayerId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "amount"(): integer
get "itemId"(): integer
get "playerId"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import { $JigsawBlockEntity$JointType, $JigsawBlockEntity$JointType$$Type } from "net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType"

export class $ServerboundSetJigsawBlockPacket implements $Packet<$ServerGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string, jointType5: $JigsawBlockEntity$JointType$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getFinalState"(): string
public "getJoint"(): $JigsawBlockEntity$JointType
public "getName"(): $ResourceLocation
public "getPool"(): $ResourceLocation
public "getPos"(): $BlockPos
public "getTarget"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "finalState"(): string
get "joint"(): $JigsawBlockEntity$JointType
get "name"(): $ResourceLocation
get "pool"(): $ResourceLocation
get "pos"(): $BlockPos
get "target"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot" {
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $ClientboundUpdateAttributesPacket$AttributeSnapshot {
constructor(attribute0: $Attribute$$Type, double1: double, collection2: $Collection$$Type<$AttributeModifier$$Type>)

public "getAttribute"(): $Attribute
public "getBase"(): double
public "getModifiers"(): $Collection<$AttributeModifier>
get "attribute"(): $Attribute
get "base"(): double
get "modifiers"(): $Collection<$AttributeModifier>
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSelectAdvancementsTabPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getTab"(): $ResourceLocation
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "tab"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundGameEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $ClientboundGameEventPacket$Type, $ClientboundGameEventPacket$Type$$Type } from "net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundGameEventPacket implements $Packet<$ClientGamePacketListener> {
static readonly "ARROW_HIT_PLAYER": $ClientboundGameEventPacket$Type
static readonly "CHANGE_GAME_MODE": $ClientboundGameEventPacket$Type
static readonly "DEMO_EVENT": $ClientboundGameEventPacket$Type
static readonly "DEMO_PARAM_HINT_1": integer
static readonly "DEMO_PARAM_HINT_2": integer
static readonly "DEMO_PARAM_HINT_3": integer
static readonly "DEMO_PARAM_HINT_4": integer
static readonly "DEMO_PARAM_INTRO": integer
static readonly "GUARDIAN_ELDER_EFFECT": $ClientboundGameEventPacket$Type
static readonly "IMMEDIATE_RESPAWN": $ClientboundGameEventPacket$Type
static readonly "NO_RESPAWN_BLOCK_AVAILABLE": $ClientboundGameEventPacket$Type
static readonly "PUFFER_FISH_STING": $ClientboundGameEventPacket$Type
static readonly "RAIN_LEVEL_CHANGE": $ClientboundGameEventPacket$Type
static readonly "START_RAINING": $ClientboundGameEventPacket$Type
static readonly "STOP_RAINING": $ClientboundGameEventPacket$Type
static readonly "THUNDER_LEVEL_CHANGE": $ClientboundGameEventPacket$Type
static readonly "WIN_GAME": $ClientboundGameEventPacket$Type

constructor(type0: $ClientboundGameEventPacket$Type$$Type, float1: float)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEvent"(): $ClientboundGameEventPacket$Type
public "getParam"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "event"(): $ClientboundGameEventPacket$Type
get "param"(): float
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundAddExperienceOrbPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ExperienceOrb$$Type } from "net.minecraft.world.entity.ExperienceOrb"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundAddExperienceOrbPacket implements $Packet<$ClientGamePacketListener> {
constructor(experienceOrb0: $ExperienceOrb$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getValue"(): integer
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "value"(): integer
get "x"(): double
get "y"(): double
get "z"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List } from "java.util.List"
import { $AttributeInstance$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import { $ClientboundUpdateAttributesPacket$AttributeSnapshot } from "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot"
import { $Collection$$Type } from "java.util.Collection"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundUpdateAttributesPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, collection1: $Collection$$Type<$AttributeInstance$$Type>)

public "getEntityId"(): integer
public "getValues"(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityId"(): integer
get "values"(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Parameters" {
import { $PlayerTeam$$Type } from "net.minecraft.world.scores.PlayerTeam"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetPlayerTeamPacket$Parameters {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(playerTeam0: $PlayerTeam$$Type)

public "getCollisionRule"(): string
public "getColor"(): $ChatFormatting
public "getDisplayName"(): $Component
public "getNametagVisibility"(): string
public "getOptions"(): integer
public "getPlayerPrefix"(): $Component
public "getPlayerSuffix"(): $Component
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "collisionRule"(): string
get "color"(): $ChatFormatting
get "displayName"(): $Component
get "nametagVisibility"(): string
get "options"(): integer
get "playerPrefix"(): $Component
get "playerSuffix"(): $Component
}
}

declare module "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket" {
import { $Stat, $Stat$$Type } from "net.minecraft.stats.Stat"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Object2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Map } from "java.util.Map"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundAwardStatsPacket implements $Packet<$ClientGamePacketListener> {
constructor(object2IntMap0: $Object2IntMap$$Type<$Stat$$Type<any>>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getStats"(): $Map<$Stat<any>, integer>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "stats"(): $Map<$Stat<any>, integer>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundInitializeBorderPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(worldBorder0: $WorldBorder$$Type)

public "getLerpTime"(): long
public "getNewAbsoluteMaxSize"(): integer
public "getNewCenterX"(): double
public "getNewCenterZ"(): double
public "getNewSize"(): double
public "getOldSize"(): double
public "getWarningBlocks"(): integer
public "getWarningTime"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lerpTime"(): long
get "newAbsoluteMaxSize"(): integer
get "newCenterX"(): double
get "newCenterZ"(): double
get "newSize"(): double
get "oldSize"(): double
get "warningBlocks"(): integer
get "warningTime"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $List } from "java.util.List"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Collection$$Type } from "java.util.Collection"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundUpdateRecipesPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(collection0: $Collection$$Type<$Recipe$$Type<any>>)

public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Recipe<any>
public "getRecipes"(): $List<$Recipe<any>>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public static "toNetwork"<T extends $Recipe<any>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "recipes"(): $List<$Recipe<any>>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundLevelParticlesPacket implements $Packet<$ClientGamePacketListener> {
constructor<T extends $ParticleOptions>(t0: T, boolean1: boolean, double2: double, double3: double, double4: double, float5: float, float6: float, float7: float, float8: float, int9: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCount"(): integer
public "getMaxSpeed"(): float
public "getParticle"(): $ParticleOptions
public "getX"(): double
public "getXDist"(): float
public "getY"(): double
public "getYDist"(): float
public "getZ"(): double
public "getZDist"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isOverrideLimiter"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "count"(): integer
get "maxSpeed"(): float
get "particle"(): $ParticleOptions
get "x"(): double
get "xDist"(): float
get "y"(): double
get "yDist"(): float
get "z"(): double
get "zDist"(): float
get "overrideLimiter"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundOpenBookPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundOpenBookPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(interactionHand0: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPickItemPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundPickItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "getSlot"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSetBorderCenterPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(worldBorder0: $WorldBorder$$Type)

public "getNewCenterX"(): double
public "getNewCenterZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "newCenterX"(): double
get "newCenterZ"(): double
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPingPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPingPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "getId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket" {
import { $SoundSource, $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundSoundEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, soundSource1: $SoundSource$$Type, entity2: $Entity$$Type, float3: float, float4: float, long5: long)

public "getId"(): integer
public "getPitch"(): float
public "getSeed"(): long
public "getSound"(): $Holder<$SoundEvent>
public "getSource"(): $SoundSource
public "getVolume"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "pitch"(): float
get "seed"(): long
get "sound"(): $Holder<$SoundEvent>
get "source"(): $SoundSource
get "volume"(): float
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundBundlePacket" {
import { $BundlePacket } from "net.minecraft.network.protocol.BundlePacket"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $ClientboundBundlePacket extends $BundlePacket<$ClientGamePacketListener> {
constructor(iterable0: $Iterable$$Type<$Packet$$Type<$ClientGamePacketListener$$Type>>)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket" {
import { $Abilities$$Type } from "net.minecraft.world.entity.player.Abilities"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPlayerAbilitiesPacket implements $Packet<$ClientGamePacketListener> {
constructor(abilities0: $Abilities$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "canFly"(): boolean
public "canInstabuild"(): boolean
public "getFlyingSpeed"(): float
public "getWalkingSpeed"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isFlying"(): boolean
public "isInvulnerable"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "flyingSpeed"(): float
set "flyingSpeed"(value: float)
get "walkingSpeed"(): float
get "flying"(): boolean
get "invulnerable"(): boolean
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundResourcePackPacket" {
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import { $ServerboundResourcePackPacket$Action, $ServerboundResourcePackPacket$Action$$Type } from "net.minecraft.network.protocol.game.ServerboundResourcePackPacket$Action"

export class $ServerboundResourcePackPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ServerboundResourcePackPacket$Action$$Type)

public "getAction"(): $ServerboundResourcePackPacket$Action
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundResourcePackPacket$Action
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundTabListPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundTabListPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type, component1: $Component$$Type)

public "getFooter"(): $Component
public "getHeader"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "footer"(): $Component
get "header"(): $Component
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $PlayerTeam$$Type } from "net.minecraft.world.scores.PlayerTeam"
import { $ClientboundSetPlayerTeamPacket$Action, $ClientboundSetPlayerTeamPacket$Action$$Type } from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action"
import { $Collection } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ClientboundSetPlayerTeamPacket$Parameters } from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Parameters"

export class $ClientboundSetPlayerTeamPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "createAddOrModifyPacket"(playerTeam0: $PlayerTeam$$Type, boolean1: boolean): $ClientboundSetPlayerTeamPacket
public static "createPlayerPacket"(playerTeam0: $PlayerTeam$$Type, string1: string, action2: $ClientboundSetPlayerTeamPacket$Action$$Type): $ClientboundSetPlayerTeamPacket
public static "createRemovePacket"(playerTeam0: $PlayerTeam$$Type): $ClientboundSetPlayerTeamPacket
public "getName"(): string
public "getParameters"(): $Optional<$ClientboundSetPlayerTeamPacket$Parameters>
public "getPlayerAction"(): $ClientboundSetPlayerTeamPacket$Action
public "getPlayers"(): $Collection<string>
public "getTeamAction"(): $ClientboundSetPlayerTeamPacket$Action
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "name"(): string
get "parameters"(): $Optional<$ClientboundSetPlayerTeamPacket$Parameters>
get "playerAction"(): $ClientboundSetPlayerTeamPacket$Action
get "players"(): $Collection<string>
get "teamAction"(): $ClientboundSetPlayerTeamPacket$Action
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundEditBookPacket" {
import { $List, $List$$Type } from "java.util.List"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundEditBookPacket implements $Packet<$ServerGamePacketListener> {
static readonly "MAX_BYTES_PER_CHAR": integer

constructor(int0: integer, list1: $List$$Type<string>, optional2: $Optional$$Type<string>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPages"(): $List<string>
public "getSlot"(): integer
public "getTitle"(): $Optional<string>
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pages"(): $List<string>
get "slot"(): integer
get "title"(): $Optional<string>
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action" {
import { $Enum } from "java.lang.Enum"

export class $ServerboundPlayerCommandPacket$Action extends $Enum<$ServerboundPlayerCommandPacket$Action> {
static readonly "OPEN_INVENTORY": $ServerboundPlayerCommandPacket$Action
static readonly "PRESS_SHIFT_KEY": $ServerboundPlayerCommandPacket$Action
static readonly "RELEASE_SHIFT_KEY": $ServerboundPlayerCommandPacket$Action
static readonly "START_FALL_FLYING": $ServerboundPlayerCommandPacket$Action
static readonly "START_RIDING_JUMP": $ServerboundPlayerCommandPacket$Action
static readonly "START_SPRINTING": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_RIDING_JUMP": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_SLEEPING": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_SPRINTING": $ServerboundPlayerCommandPacket$Action

public static "valueOf"(string0: string): $ServerboundPlayerCommandPacket$Action
public static "values"(): $ServerboundPlayerCommandPacket$Action[]
}
}

declare module "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket" {
import { $CombatTracker$$Type } from "net.minecraft.world.damagesource.CombatTracker"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundPlayerCombatEndPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)
constructor(combatTracker0: $CombatTracker$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundChatPacket" {
import { $LastSeenMessages$Update, $LastSeenMessages$Update$$Type } from "net.minecraft.network.chat.LastSeenMessages$Update"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Record } from "java.lang.Record"
import { $MessageSignature, $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Instant, $Instant$$Type } from "java.time.Instant"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"

export class $ServerboundChatPacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, instant1: $Instant$$Type, long2: long, messageSignature3: $MessageSignature$$Type, update4: $LastSeenMessages$Update$$Type)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "lastSeenMessages"(): $LastSeenMessages$Update
public "message"(): string
public "salt"(): long
public "signature"(): $MessageSignature
public "timeStamp"(): $Instant
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket" {
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $ServerboundSetBeaconPacket implements $Packet<$ServerGamePacketListener> {
constructor(optional0: $Optional$$Type<$MobEffect$$Type>, optional1: $Optional$$Type<$MobEffect$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPrimary"(): $Optional<$MobEffect>
public "getSecondary"(): $Optional<$MobEffect>
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "primary"(): $Optional<$MobEffect>
get "secondary"(): $Optional<$MobEffect>
get "skippable"(): boolean
}
}

