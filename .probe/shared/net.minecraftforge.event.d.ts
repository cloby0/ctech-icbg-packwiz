declare module "net.minecraftforge.event.TickEvent$Type" {
import { $Enum } from "java.lang.Enum"

export class $TickEvent$Type extends $Enum<$TickEvent$Type> {
static readonly "CLIENT": $TickEvent$Type
static readonly "LEVEL": $TickEvent$Type
static readonly "PLAYER": $TickEvent$Type
static readonly "RENDER": $TickEvent$Type
static readonly "SERVER": $TickEvent$Type

public static "valueOf"(string0: string): $TickEvent$Type
public static "values"(): $TickEvent$Type[]
}
}

declare module "net.minecraftforge.event.TagsUpdatedEvent" {
import { $TagsUpdatedEvent$UpdateCause } from "net.minecraftforge.event.TagsUpdatedEvent$UpdateCause"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"

export class $TagsUpdatedEvent extends $Event {
constructor(registryAccess0: $RegistryAccess$$Type, boolean1: boolean, boolean2: boolean)
constructor()

public "getRegistryAccess"(): $RegistryAccess
public "getUpdateCause"(): $TagsUpdatedEvent$UpdateCause
public "shouldUpdateStaticData"(): boolean
get "registryAccess"(): $RegistryAccess
get "updateCause"(): $TagsUpdatedEvent$UpdateCause
}
}

declare module "net.minecraftforge.event.ServerChatEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ServerChatEvent extends $Event {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, string1: string, component2: $Component$$Type)

public "getMessage"(): $Component
public "getPlayer"(): $ServerPlayer
public "getRawText"(): string
public "getUsername"(): string
public "setMessage"(component0: $Component$$Type): void
get "message"(): $Component
get "player"(): $ServerPlayer
get "rawText"(): string
get "username"(): string
set "message"(value: $Component$$Type)
}
}

declare module "net.minecraftforge.event.RegisterCommandsEvent" {
import { $CommandDispatcher, $CommandDispatcher$$Type } from "com.mojang.brigadier.CommandDispatcher"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Commands$CommandSelection, $Commands$CommandSelection$$Type } from "net.minecraft.commands.Commands$CommandSelection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $CommandBuildContext, $CommandBuildContext$$Type } from "net.minecraft.commands.CommandBuildContext"

export class $RegisterCommandsEvent extends $Event {
constructor(commandDispatcher0: $CommandDispatcher$$Type<$CommandSourceStack$$Type>, commandSelection1: $Commands$CommandSelection$$Type, commandBuildContext2: $CommandBuildContext$$Type)
constructor()

public "getBuildContext"(): $CommandBuildContext
public "getCommandSelection"(): $Commands$CommandSelection
public "getDispatcher"(): $CommandDispatcher<$CommandSourceStack>
get "buildContext"(): $CommandBuildContext
get "commandSelection"(): $Commands$CommandSelection
get "dispatcher"(): $CommandDispatcher<$CommandSourceStack>
}
}

declare module "net.minecraftforge.event.LootTableLoadEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $LootTable, $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"

export class $LootTableLoadEvent extends $Event {
constructor(resourceLocation0: $ResourceLocation$$Type, lootTable1: $LootTable$$Type)
constructor()

public "getName"(): $ResourceLocation
public "getTable"(): $LootTable
public "setTable"(lootTable0: $LootTable$$Type): void
get "name"(): $ResourceLocation
get "table"(): $LootTable
set "table"(value: $LootTable$$Type)
}
}

declare module "net.minecraftforge.event.GameShuttingDownEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $GameShuttingDownEvent extends $Event {
constructor()

}
}

declare module "net.minecraftforge.event.ModMismatchEvent$MismatchResolutionResult" {
import { $ModContainer, $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ModMismatchEvent$MismatchedVersionInfo, $ModMismatchEvent$MismatchedVersionInfo$$Type } from "net.minecraftforge.event.ModMismatchEvent$MismatchedVersionInfo"
import { $Record } from "java.lang.Record"

export class $ModMismatchEvent$MismatchResolutionResult extends $Record {
constructor(modid: string, versionDifference: $ModMismatchEvent$MismatchedVersionInfo$$Type, resolver: $ModContainer$$Type)

public "modid"(): string
public "resolver"(): $ModContainer
public "versionDifference"(): $ModMismatchEvent$MismatchedVersionInfo
public "wasSelfResolved"(): boolean
}
}

declare module "net.minecraftforge.event.AnvilUpdateEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AnvilUpdateEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, string2: string, int3: integer, player4: $Player$$Type)

public "getCost"(): integer
public "getLeft"(): $ItemStack
public "getMaterialCost"(): integer
public "getName"(): string
public "getOutput"(): $ItemStack
public "getPlayer"(): $Player
public "getRight"(): $ItemStack
public "setCost"(int0: integer): void
public "setMaterialCost"(int0: integer): void
public "setOutput"(itemStack0: $ItemStack$$Type): void
get "cost"(): integer
get "left"(): $ItemStack
get "materialCost"(): integer
get "name"(): string
get "output"(): $ItemStack
get "player"(): $Player
get "right"(): $ItemStack
set "cost"(value: integer)
set "materialCost"(value: integer)
set "output"(value: $ItemStack$$Type)
}
}

declare module "net.minecraftforge.event.PlayLevelSoundEvent$AtPosition" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayLevelSoundEvent } from "net.minecraftforge.event.PlayLevelSoundEvent"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $PlayLevelSoundEvent$AtPosition extends $PlayLevelSoundEvent {
constructor(level0: $Level$$Type, vec31: $Vec3$$Type, holder2: $Holder$$Type<$SoundEvent$$Type>, soundSource3: $SoundSource$$Type, float4: float, float5: float)
constructor()

public "getPosition"(): $Vec3
get "position"(): $Vec3
}
}

declare module "net.minecraftforge.event.ModMismatchEvent$MismatchedVersionInfo" {
import { $ArtifactVersion, $ArtifactVersion$$Type } from "org.apache.maven.artifact.versioning.ArtifactVersion"
import { $Record } from "java.lang.Record"

export class $ModMismatchEvent$MismatchedVersionInfo extends $Record {
constructor(oldVersion: $ArtifactVersion$$Type, newVersion: $ArtifactVersion$$Type)

public "isMissing"(): boolean
public "newVersion"(): $ArtifactVersion
public "oldVersion"(): $ArtifactVersion
public "wasUpgrade"(): boolean
get "missing"(): boolean
}
}

declare module "net.minecraftforge.event.GrindstoneEvent$OnTakeItem" {
import { $GrindstoneEvent } from "net.minecraftforge.event.GrindstoneEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GrindstoneEvent$OnTakeItem extends $GrindstoneEvent {
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, int2: integer)
constructor()

public "getNewBottomItem"(): $ItemStack
public "getNewTopItem"(): $ItemStack
public "setNewBottomItem"(itemStack0: $ItemStack$$Type): void
public "setNewTopItem"(itemStack0: $ItemStack$$Type): void
get "newBottomItem"(): $ItemStack
get "newTopItem"(): $ItemStack
set "newBottomItem"(value: $ItemStack$$Type)
set "newTopItem"(value: $ItemStack$$Type)
}
}

declare module "net.minecraftforge.event.PlayLevelSoundEvent" {
import { $SoundSource, $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $PlayLevelSoundEvent extends $Event {
constructor(level0: $Level$$Type, holder1: $Holder$$Type<$SoundEvent$$Type>, soundSource2: $SoundSource$$Type, float3: float, float4: float)
constructor()

public "getLevel"(): $Level
public "getNewPitch"(): float
public "getNewVolume"(): float
public "getOriginalPitch"(): float
public "getOriginalVolume"(): float
public "getSound"(): $Holder<$SoundEvent>
public "getSource"(): $SoundSource
public "setNewPitch"(float0: float): void
public "setNewVolume"(float0: float): void
public "setSound"(holder0: $Holder$$Type<$SoundEvent$$Type>): void
public "setSource"(soundSource0: $SoundSource$$Type): void
get "level"(): $Level
get "newPitch"(): float
get "newVolume"(): float
get "originalPitch"(): float
get "originalVolume"(): float
get "sound"(): $Holder<$SoundEvent>
get "source"(): $SoundSource
set "newPitch"(value: float)
set "newVolume"(value: float)
set "sound"(value: $Holder$$Type<$SoundEvent$$Type>)
set "source"(value: $SoundSource$$Type)
}
}

declare module "net.minecraftforge.event.TickEvent$LevelTickEvent" {
import { $TickEvent$Phase$$Type } from "net.minecraftforge.event.TickEvent$Phase"
import { $TickEvent } from "net.minecraftforge.event.TickEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $TickEvent$LevelTickEvent extends $TickEvent {
readonly "level": $Level

constructor(logicalSide0: $LogicalSide$$Type, phase1: $TickEvent$Phase$$Type, level2: $Level$$Type, booleanSupplier3: $BooleanSupplier$$Type)
constructor()

public "haveTime"(): boolean
}
}

declare module "net.minecraftforge.event.TickEvent$PlayerTickEvent" {
import { $TickEvent$Phase$$Type } from "net.minecraftforge.event.TickEvent$Phase"
import { $TickEvent } from "net.minecraftforge.event.TickEvent"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TickEvent$PlayerTickEvent extends $TickEvent {
readonly "player": $Player

constructor(phase0: $TickEvent$Phase$$Type, player1: $Player$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.RegisterStructureConversionsEvent" {
import { $Map$$Type } from "java.util.Map"
import { $StructuresBecomeConfiguredFix$Conversion$$Type } from "net.minecraft.util.datafix.fixes.StructuresBecomeConfiguredFix$Conversion"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RegisterStructureConversionsEvent extends $Event {
constructor(map0: $Map$$Type<string, $StructuresBecomeConfiguredFix$Conversion$$Type>)
constructor()

public "register"(string0: string, conversion1: $StructuresBecomeConfiguredFix$Conversion$$Type): void
}
}

declare module "net.minecraftforge.event.TickEvent$ClientTickEvent" {
import { $TickEvent$Phase$$Type } from "net.minecraftforge.event.TickEvent$Phase"
import { $TickEvent } from "net.minecraftforge.event.TickEvent"

export class $TickEvent$ClientTickEvent extends $TickEvent {
constructor(phase0: $TickEvent$Phase$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.BuildCreativeModeTabContentsEvent" {
import { $CreativeModeTab, $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Collection$$Type } from "java.util.Collection"
import { $MutableHashedLinkedMap, $MutableHashedLinkedMap$$Type } from "net.minecraftforge.common.util.MutableHashedLinkedMap"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $CreativeModeTab$Output } from "net.minecraft.world.item.CreativeModeTab$Output"
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type } from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$$Type } from "net.minecraft.world.item.CreativeModeTab$TabVisibility"

export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent, $CreativeModeTab$Output {
constructor()
constructor(creativeModeTab0: $CreativeModeTab$$Type, resourceKey1: $ResourceKey$$Type<$CreativeModeTab>, itemDisplayParameters2: $CreativeModeTab$ItemDisplayParameters$$Type, mutableHashedLinkedMap3: $MutableHashedLinkedMap$$Type<$ItemStack$$Type, $CreativeModeTab$TabVisibility$$Type>)

public "accept"(itemStack0: $ItemStack$$Type, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(supplier0: $Supplier$$Type<$ItemLike>): void
public "accept"(supplier0: $Supplier$$Type<$ItemLike>, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(itemStack0: $ItemStack$$Type): void
public "accept"(itemLike0: $ItemLike$$Type, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(itemLike0: $ItemLike$$Type): void
public "acceptAll"(collection0: $Collection$$Type<$ItemStack$$Type>, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "acceptAll"(collection0: $Collection$$Type<$ItemStack$$Type>): void
public "getEntries"(): $MutableHashedLinkedMap<$ItemStack, $CreativeModeTab$TabVisibility>
public "getFlags"(): $FeatureFlagSet
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "getTab"(): $CreativeModeTab
public "getTabKey"(): $ResourceKey<$CreativeModeTab>
public "hasPermissions"(): boolean
get "entries"(): $MutableHashedLinkedMap<$ItemStack, $CreativeModeTab$TabVisibility>
get "flags"(): $FeatureFlagSet
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
get "tab"(): $CreativeModeTab
get "tabKey"(): $ResourceKey<$CreativeModeTab>
}
}

declare module "net.minecraftforge.event.OnDatapackSyncEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $PlayerList, $PlayerList$$Type } from "net.minecraft.server.players.PlayerList"

export class $OnDatapackSyncEvent extends $Event {
constructor(playerList0: $PlayerList$$Type, serverPlayer1: $ServerPlayer$$Type)
constructor()

public "getPlayer"(): $ServerPlayer
public "getPlayerList"(): $PlayerList
public "getPlayers"(): $List<$ServerPlayer>
get "player"(): $ServerPlayer
get "playerList"(): $PlayerList
get "players"(): $List<$ServerPlayer>
}
}

declare module "net.minecraftforge.event.TickEvent$RenderTickEvent" {
import { $TickEvent$Phase$$Type } from "net.minecraftforge.event.TickEvent$Phase"
import { $TickEvent } from "net.minecraftforge.event.TickEvent"

export class $TickEvent$RenderTickEvent extends $TickEvent {
readonly "renderTickTime": float

constructor(phase0: $TickEvent$Phase$$Type, float1: float)
constructor()

}
}

declare module "net.minecraftforge.event.RegisterGameTestsEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Set$$Type } from "java.util.Set"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Class$$Type } from "java.lang.Class"
import { $Method$$Type } from "java.lang.reflect.Method"

export class $RegisterGameTestsEvent extends $Event implements $IModBusEvent {
constructor(set0: $Set$$Type<$Method$$Type>)
constructor()

public "register"(method0: $Method$$Type): void
public "register"(class0: $Class$$Type<any>): void
}
}

declare module "net.minecraftforge.event.AddReloadListenerEvent" {
import { $List } from "java.util.List"
import { $PreparableReloadListener, $PreparableReloadListener$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "net.minecraft.server.ReloadableServerResources"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ICondition$IContext } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"

export class $AddReloadListenerEvent extends $Event {
constructor(reloadableServerResources0: $ReloadableServerResources$$Type, registryAccess1: $RegistryAccess$$Type)
constructor()

public "addListener"(preparableReloadListener0: $PreparableReloadListener$$Type): void
public "getConditionContext"(): $ICondition$IContext
public "getListeners"(): $List<$PreparableReloadListener>
public "getRegistryAccess"(): $RegistryAccess
public "getServerResources"(): $ReloadableServerResources
get "conditionContext"(): $ICondition$IContext
get "listeners"(): $List<$PreparableReloadListener>
get "registryAccess"(): $RegistryAccess
get "serverResources"(): $ReloadableServerResources
}
}

declare module "net.minecraftforge.event.GrindstoneEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $GrindstoneEvent extends $Event {
constructor()

public "getBottomItem"(): $ItemStack
public "getTopItem"(): $ItemStack
public "getXp"(): integer
public "setXp"(int0: integer): void
get "bottomItem"(): $ItemStack
get "topItem"(): $ItemStack
get "xp"(): integer
set "xp"(value: integer)
}
}

declare module "net.minecraftforge.event.PlayLevelSoundEvent$AtEntity" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayLevelSoundEvent } from "net.minecraftforge.event.PlayLevelSoundEvent"

export class $PlayLevelSoundEvent$AtEntity extends $PlayLevelSoundEvent {
constructor(entity0: $Entity$$Type, holder1: $Holder$$Type<$SoundEvent$$Type>, soundSource2: $SoundSource$$Type, float3: float, float4: float)
constructor()

public "getEntity"(): $Entity
get "entity"(): $Entity
}
}

declare module "net.minecraftforge.event.CommandEvent" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ParseResults, $ParseResults$$Type } from "com.mojang.brigadier.ParseResults"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CommandEvent extends $Event {
constructor(parseResults0: $ParseResults$$Type<$CommandSourceStack$$Type>)
constructor()

public "getException"(): $Throwable
public "getParseResults"(): $ParseResults<$CommandSourceStack>
public "setException"(throwable0: $Throwable$$Type): void
public "setParseResults"(parseResults0: $ParseResults$$Type<$CommandSourceStack$$Type>): void
get "exception"(): $Throwable
get "parseResults"(): $ParseResults<$CommandSourceStack>
set "exception"(value: $Throwable$$Type)
set "parseResults"(value: $ParseResults$$Type<$CommandSourceStack$$Type>)
}
}

declare module "net.minecraftforge.event.TickEvent$ServerTickEvent" {
import { $TickEvent$Phase$$Type } from "net.minecraftforge.event.TickEvent$Phase"
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $TickEvent } from "net.minecraftforge.event.TickEvent"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $TickEvent$ServerTickEvent extends $TickEvent {
constructor(phase0: $TickEvent$Phase$$Type, booleanSupplier1: $BooleanSupplier$$Type, minecraftServer2: $MinecraftServer$$Type)
constructor()

public "getServer"(): $MinecraftServer
public "haveTime"(): boolean
get "server"(): $MinecraftServer
}
}

declare module "net.minecraftforge.event.TagsUpdatedEvent$UpdateCause" {
import { $Enum } from "java.lang.Enum"

export class $TagsUpdatedEvent$UpdateCause extends $Enum<$TagsUpdatedEvent$UpdateCause> {
static readonly "CLIENT_PACKET_RECEIVED": $TagsUpdatedEvent$UpdateCause
static readonly "SERVER_DATA_LOAD": $TagsUpdatedEvent$UpdateCause

public static "valueOf"(string0: string): $TagsUpdatedEvent$UpdateCause
public static "values"(): $TagsUpdatedEvent$UpdateCause[]
}
}

declare module "net.minecraftforge.event.GrindstoneEvent$OnPlaceItem" {
import { $GrindstoneEvent } from "net.minecraftforge.event.GrindstoneEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $GrindstoneEvent$OnPlaceItem extends $GrindstoneEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, int2: integer)

public "getOutput"(): $ItemStack
public "setOutput"(itemStack0: $ItemStack$$Type): void
get "output"(): $ItemStack
set "output"(value: $ItemStack$$Type)
}
}

declare module "net.minecraftforge.event.VanillaGameEvent" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $GameEvent, $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $GameEvent$Context, $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"

export class $VanillaGameEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type, context3: $GameEvent$Context$$Type)

public "getCause"(): $Entity
public "getContext"(): $GameEvent$Context
public "getEventPosition"(): $Vec3
public "getLevel"(): $Level
public "getVanillaEvent"(): $GameEvent
get "cause"(): $Entity
get "context"(): $GameEvent$Context
get "eventPosition"(): $Vec3
get "level"(): $Level
get "vanillaEvent"(): $GameEvent
}
}

declare module "net.minecraftforge.event.ItemStackedOnOtherEvent" {
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ClickAction, $ClickAction$$Type } from "net.minecraft.world.inventory.ClickAction"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $SlotAccess, $SlotAccess$$Type } from "net.minecraft.world.entity.SlotAccess"

export class $ItemStackedOnOtherEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, slot2: $Slot$$Type, clickAction3: $ClickAction$$Type, player4: $Player$$Type, slotAccess5: $SlotAccess$$Type)
constructor()

public "getCarriedItem"(): $ItemStack
public "getCarriedSlotAccess"(): $SlotAccess
public "getClickAction"(): $ClickAction
public "getPlayer"(): $Player
public "getSlot"(): $Slot
public "getStackedOnItem"(): $ItemStack
get "carriedItem"(): $ItemStack
get "carriedSlotAccess"(): $SlotAccess
get "clickAction"(): $ClickAction
get "player"(): $Player
get "slot"(): $Slot
get "stackedOnItem"(): $ItemStack
}
}

declare module "net.minecraftforge.event.TickEvent$Phase" {
import { $Enum } from "java.lang.Enum"

export class $TickEvent$Phase extends $Enum<$TickEvent$Phase> {
static readonly "END": $TickEvent$Phase
static readonly "START": $TickEvent$Phase

public static "valueOf"(string0: string): $TickEvent$Phase
public static "values"(): $TickEvent$Phase[]
}
}

declare module "net.minecraftforge.event.AddPackFindersEvent" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RepositorySource$$Type } from "net.minecraft.server.packs.repository.RepositorySource"
import { $PackType, $PackType$$Type } from "net.minecraft.server.packs.PackType"

export class $AddPackFindersEvent extends $Event implements $IModBusEvent {
constructor()
constructor(packType0: $PackType$$Type, consumer1: $Consumer$$Type<$RepositorySource$$Type>)

public "addRepositorySource"(repositorySource0: $RepositorySource$$Type): void
public "getPackType"(): $PackType
get "packType"(): $PackType
}
}

declare module "net.minecraftforge.event.ItemAttributeModifierEvent" {
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Collection } from "java.util.Collection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Multimap, $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $ItemAttributeModifierEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, multimap2: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>)

public "addModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "getItemStack"(): $ItemStack
public "getModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getOriginalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getSlotType"(): $EquipmentSlot
public "removeAttribute"(attribute0: $Attribute$$Type): $Collection<$AttributeModifier>
public "removeModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
get "itemStack"(): $ItemStack
get "modifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "originalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "slotType"(): $EquipmentSlot
}
}

declare module "net.minecraftforge.event.ModMismatchEvent" {
import { $ModContainer } from "net.minecraftforge.fml.ModContainer"
import { $Stream } from "java.util.stream.Stream"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Map$$Type } from "java.util.Map"
import { $ArtifactVersion, $ArtifactVersion$$Type } from "org.apache.maven.artifact.versioning.ArtifactVersion"
import { $ModMismatchEvent$MismatchedVersionInfo } from "net.minecraftforge.event.ModMismatchEvent$MismatchedVersionInfo"
import { $Optional } from "java.util.Optional"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ModMismatchEvent$MismatchResolutionResult } from "net.minecraftforge.event.ModMismatchEvent$MismatchResolutionResult"
import { $LevelStorageSource$LevelDirectory, $LevelStorageSource$LevelDirectory$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelDirectory"

export class $ModMismatchEvent extends $Event implements $IModBusEvent {
constructor(levelDirectory0: $LevelStorageSource$LevelDirectory$$Type, map1: $Map$$Type<string, $ArtifactVersion$$Type>, map2: $Map$$Type<string, $ArtifactVersion$$Type>)
constructor()

public "anyResolved"(): boolean
public "anyUnresolved"(): boolean
public "getCurrentVersion"(string0: string): $ArtifactVersion
public "getLevelDirectory"(): $LevelStorageSource$LevelDirectory
public "getPreviousVersion"(string0: string): $ArtifactVersion
public "getResolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
public "getResolver"(string0: string): $Optional<$ModContainer>
public "getUnresolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
public "getVersionDifference"(string0: string): $Optional<$ModMismatchEvent$MismatchedVersionInfo>
public "markResolved"(string0: string): void
public "wasResolved"(string0: string): boolean
get "levelDirectory"(): $LevelStorageSource$LevelDirectory
get "resolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
get "unresolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
}
}

declare module "net.minecraftforge.event.DifficultyChangeEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"

export class $DifficultyChangeEvent extends $Event {
constructor()
constructor(difficulty0: $Difficulty$$Type, difficulty1: $Difficulty$$Type)

public "getDifficulty"(): $Difficulty
public "getOldDifficulty"(): $Difficulty
get "difficulty"(): $Difficulty
get "oldDifficulty"(): $Difficulty
}
}

declare module "net.minecraftforge.event.TickEvent" {
import { $TickEvent$Phase, $TickEvent$Phase$$Type } from "net.minecraftforge.event.TickEvent$Phase"
import { $TickEvent$Type, $TickEvent$Type$$Type } from "net.minecraftforge.event.TickEvent$Type"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $LogicalSide, $LogicalSide$$Type } from "net.minecraftforge.fml.LogicalSide"

export class $TickEvent extends $Event {
readonly "phase": $TickEvent$Phase
readonly "side": $LogicalSide
readonly "type": $TickEvent$Type

constructor(type0: $TickEvent$Type$$Type, logicalSide1: $LogicalSide$$Type, phase2: $TickEvent$Phase$$Type)
constructor()

}
}

