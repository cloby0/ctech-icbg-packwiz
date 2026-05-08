declare module "net.minecraft.client.multiplayer.ClientAdvancements$Listener" {
import { $AdvancementList$Listener } from "net.minecraft.advancements.AdvancementList$Listener"
import { $AdvancementProgress$$Type } from "net.minecraft.advancements.AdvancementProgress"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"

export interface $ClientAdvancements$Listener extends $AdvancementList$Listener {
"onAddAdvancementRoot"(advancement0: $Advancement$$Type): void
"onAddAdvancementTask"(advancement0: $Advancement$$Type): void
"onAdvancementsCleared"(): void
"onRemoveAdvancementRoot"(advancement0: $Advancement$$Type): void
"onRemoveAdvancementTask"(advancement0: $Advancement$$Type): void
"onSelectedTabChanged"(advancement0: $Advancement$$Type): void
"onUpdateAdvancementProgress"(advancement0: $Advancement$$Type, advancementProgress1: $AdvancementProgress$$Type): void
}

export namespace $ClientAdvancements$Listener {
const probejs$$marker: never
}
export abstract class $ClientAdvancements$Listener$$Static implements $ClientAdvancements$Listener {
}
}

declare module "net.minecraft.client.multiplayer.chat.ChatLog" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoggedChatEvent, $LoggedChatEvent$$Type } from "net.minecraft.client.multiplayer.chat.LoggedChatEvent"

export class $ChatLog {
constructor(int0: integer)

public static "codec"(int0: integer): $Codec<$ChatLog>
public "end"(): integer
public "lookup"(int0: integer): $LoggedChatEvent
public "push"(loggedChatEvent0: $LoggedChatEvent$$Type): void
public "start"(): integer
}
}

declare module "net.minecraft.client.multiplayer.chat.report.ReportEnvironment" {
import { $AbuseReportRequest$RealmInfo } from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo"
import { $AbuseReportRequest$ThirdPartyServerInfo } from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo"
import { $Record } from "java.lang.Record"
import { $ReportEnvironment$Server, $ReportEnvironment$Server$$Type } from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment$Server"
import { $RealmsServer$$Type } from "com.mojang.realmsclient.dto.RealmsServer"
import { $AbuseReportRequest$ClientInfo } from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo"

export class $ReportEnvironment extends $Record {
constructor(string0: string, server1: $ReportEnvironment$Server$$Type)

public "clientInfo"(): $AbuseReportRequest$ClientInfo
public "clientVersion"(): string
public static "create"(server0: $ReportEnvironment$Server$$Type): $ReportEnvironment
public static "local"(): $ReportEnvironment
public static "realm"(realmsServer0: $RealmsServer$$Type): $ReportEnvironment
public "realmInfo"(): $AbuseReportRequest$RealmInfo
public "server"(): $ReportEnvironment$Server
public static "thirdParty"(string0: string): $ReportEnvironment
public "thirdPartyServerInfo"(): $AbuseReportRequest$ThirdPartyServerInfo
}
}

declare module "net.minecraft.client.multiplayer.chat.report.ChatReportBuilder$ChatReport" {
import { $UUID$$Type } from "java.util.UUID"
import { $AbuseReportLimits$$Type } from "com.mojang.authlib.minecraft.report.AbuseReportLimits"

export class $ChatReportBuilder$ChatReport {
public "copy"(): $ChatReportBuilder$ChatReport
public "isReportedPlayer"(uUID0: $UUID$$Type): boolean
public "toggleReported"(int0: integer, abuseReportLimits1: $AbuseReportLimits$$Type): void
}
}

declare module "net.minecraft.client.multiplayer.chat.report.AbuseReportSender" {
import { $AbuseReport$$Type } from "com.mojang.authlib.minecraft.report.AbuseReport"
import { $Unit } from "com.mojang.datafixers.util.Unit"
import { $ReportEnvironment$$Type } from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $UUID$$Type } from "java.util.UUID"
import { $AbuseReportLimits } from "com.mojang.authlib.minecraft.report.AbuseReportLimits"
import { $UserApiService$$Type } from "com.mojang.authlib.minecraft.UserApiService"

export interface $AbuseReportSender {
"isEnabled"(): boolean
"reportLimits"(): $AbuseReportLimits
"send"(uUID0: $UUID$$Type, abuseReport1: $AbuseReport$$Type): $CompletableFuture<$Unit>
get "enabled"(): boolean
}

export namespace $AbuseReportSender {
function create(reportEnvironment0: $ReportEnvironment$$Type, userApiService1: $UserApiService$$Type): $AbuseReportSender
}
export abstract class $AbuseReportSender$$Static implements $AbuseReportSender {
static "create"(reportEnvironment0: $ReportEnvironment$$Type, userApiService1: $UserApiService$$Type): $AbuseReportSender
}
}

declare module "net.minecraft.client.multiplayer.chat.LoggedChatEvent$Type" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
static readonly "PLAYER": $LoggedChatEvent$Type
static readonly "SYSTEM": $LoggedChatEvent$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $LoggedChatEvent$Type
public static "values"(): $LoggedChatEvent$Type[]
get "serializedName"(): string
}
}

declare module "net.minecraft.client.multiplayer.chat.ChatListener" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $MessageSignature$$Type } from "net.minecraft.network.chat.MessageSignature"

export class $ChatListener {
constructor(minecraft0: $Minecraft$$Type)

public "acceptNextDelayedMessage"(): void
public "clearQueue"(): void
public "handleDisguisedChatMessage"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type): void
public "handlePlayerChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, gameProfile1: $GameProfile$$Type, bound2: $ChatType$Bound$$Type): void
public "handleSystemMessage"(component0: $Component$$Type, boolean1: boolean): void
public "queueSize"(): long
public "removeFromDelayedMessageQueue"(messageSignature0: $MessageSignature$$Type): boolean
public "setMessageDelay"(double0: double): void
public "tick"(): void
set "messageDelay"(value: double)
}
}

declare module "net.minecraft.client.multiplayer.ClientLevel" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $AbstractClientPlayer$$Type } from "net.minecraft.client.player.AbstractClientPlayer"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $ProfilerFiller } from "net.minecraft.util.profiling.ProfilerFiller"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $ClientLevelAccessor } from "rbasamoyai.createbigcannons.mixin.client.ClientLevelAccessor"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $BlockPos$MutableBlockPos$$Type } from "net.minecraft.core.BlockPos$MutableBlockPos"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $ClientLevelKJS } from "dev.latvian.mods.kubejs.core.ClientLevelKJS"
import { $ClientLevelAccessor as $ClientLevelAccessor$0 } from "com.gregtechceu.gtceu.core.mixins.client.ClientLevelAccessor"
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ClientWorldAccessor } from "com.abdelaziz.canary.common.client.ClientWorldAccessor"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $ClonedClientLevel, $ClonedClientLevel$$Type } from "com.sonicether.soundphysics.world.ClonedClientLevel"
import { $TransientEntitySectionManager } from "net.minecraft.world.level.entity.TransientEntitySectionManager"
import { $ClientCloudManager } from "dev.nonamecrackers2.simpleclouds.client.world.ClientCloudManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Entity$RemovalReason$$Type } from "net.minecraft.world.entity.Entity$RemovalReason"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $CachingClientLevel } from "com.sonicether.soundphysics.world.CachingClientLevel"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType$$Type } from "net.minecraft.world.level.dimension.DimensionType"
import { $ClientPacketListener$$Type } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $ChunkTracker } from "me.jellysquid.mods.sodium.client.render.chunk.map.ChunkTracker"
import { $BiomeSeedProvider } from "me.jellysquid.mods.sodium.client.world.BiomeSeedProvider"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $DimensionSpecialEffects } from "net.minecraft.client.renderer.DimensionSpecialEffects"
import { $ClientLevel$ClientLevelData$$Type } from "net.minecraft.client.multiplayer.ClientLevel$ClientLevelData"
import { $Scoreboard$$Type } from "net.minecraft.world.scores.Scoreboard"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $CloudManagerHolder } from "dev.nonamecrackers2.simpleclouds.common.world.CloudManagerHolder"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $ChunkTrackerHolder } from "me.jellysquid.mods.sodium.client.render.chunk.map.ChunkTrackerHolder"

export class $ClientLevel extends $Level implements $ClientWorldAccessor, $ClientLevelKJS, $ClientLevelAccessor, $CloudManagerHolder, $ClientLevelAccessor$0, $CachingClientLevel, $BiomeSeedProvider, $ChunkTrackerHolder {
readonly "entityStorage": $TransientEntitySectionManager<$Entity>

constructor(clientPacketListener0: $ClientPacketListener$$Type, clientLevelData1: $ClientLevel$ClientLevelData$$Type, resourceKey2: $ResourceKey$$Type<$Level>, holder3: $Holder$$Type<$DimensionType$$Type>, int4: integer, int5: integer, supplier6: $Supplier$$Type<$ProfilerFiller>, levelRenderer7: $LevelRenderer$$Type, boolean8: boolean, long9: long)

public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "addPlayer"(int0: integer, abstractClientPlayer1: $AbstractClientPlayer$$Type): void
public "animateTick"(int0: integer, int1: integer, int2: integer): void
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "calculateBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public static "clearNullReferences"(): void
public "clearTintCaches"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "doAnimateTick"(int0: integer, int1: integer, int2: integer, int3: integer, randomSource4: $RandomSource$$Type, block5: $Block$$Type, mutableBlockPos6: $BlockPos$MutableBlockPos$$Type): void
public "effects"(): $DimensionSpecialEffects
public "enabledFeatures"(): $FeatureFlagSet
public "entitiesForRendering"(): $Iterable<$Entity>
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public static "get"(clientLevel0: $ClientLevel$$Type): $ChunkTracker
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public static "getBiomeSeed"(clientLevel0: $ClientLevel$$Type): long
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTickAccess<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCloudColor"(float0: float): $Vec3
public "getCloudManager"(): $ClientCloudManager
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getEntityCount"(): integer
public "getEntityManager"(): $TransientEntitySectionManager
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidTicks"(): $LevelTickAccess<$Fluid>
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getServerSimulationDistance"(): integer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getSkyColor"(vec30: $Vec3$$Type, float1: float): $Vec3
public "getSkyDarken"(float0: float): float
public "getSkyFlashTime"(): integer
public "getStarBrightness"(float0: float): float
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "handleBlockChangedAck"(int0: integer): void
public "handler$cic000$tickEntity"(entity: $Entity$$Type, info: $CallbackInfo$$Type): void
public "handler$fdp000$simpleclouds$modifySkyColor_getSkyColor"(vec30: $Vec3$$Type, float1: float, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "handler$fdp000$simpleclouds$modifySkyDarken_getSkyDarken"(float0: float, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$fdp001$simpleclouds$createCloudManager_init"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ffi000$addBuddingAmethystParticles"(int0: integer, int1: integer, int2: integer, int3: integer, randomSource4: $RandomSource$$Type, block5: $Block$$Type, mutableBlockPos6: $BlockPos$MutableBlockPos$$Type, callbackInfo7: $CallbackInfo$$Type, int8: integer, int9: integer, int10: integer, blockState11: $BlockState$$Type): void
public "handler$hhd000$onSetBlocksDirty"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isLightUpdateQueueEmpty"(): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "onChunkLoaded"(chunkPos0: $ChunkPos$$Type): void
public "overrideMapData"(string0: string, mapItemSavedData1: $MapItemSavedData$$Type): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "pollLightUpdates"(): void
public "putNonPlayerEntity"(int0: integer, entity1: $Entity$$Type): void
public "queueLightUpdate"(runnable0: $Runnable$$Type): void
public "removeEntity"(int0: integer, removalReason1: $Entity$RemovalReason$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "setDayTime"(long0: long): void
public "setDefaultSpawnPos"(blockPos0: $BlockPos$$Type, float1: float): void
public "setGameTime"(long0: long): void
public "setScoreboard"(scoreboard0: $Scoreboard$$Type): void
public "setSectionDirtyWithNeighbors"(int0: integer, int1: integer, int2: integer): void
public "setServerSimulationDistance"(int0: integer): void
public "setServerVerifiedBlockState"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "sodium$getBiomeSeed"(): long
public "sodium$getTracker"(): $ChunkTracker
public "sound_physics_remastered$getCachedClone"(): $ClonedClientLevel
public "sound_physics_remastered$setCachedClone"(clonedClientLevel0: $ClonedClientLevel$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "syncBlockState"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, vec32: $Vec3$$Type): void
public "tell"(message: $Component$$Type): void
public "tick"(booleanSupplier0: $BooleanSupplier$$Type): void
public "tickEntities"(): void
public "tickNonPassenger"(entity0: $Entity$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "unload"(levelChunk0: $LevelChunk$$Type): void
public "wrap"(): $WeakReference<$Trackable>
get "blockTicks"(): $LevelTickAccess<$Block>
get "cloudManager"(): $ClientCloudManager
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "entityCount"(): integer
get "entityManager"(): $TransientEntitySectionManager
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "maxLightLevel"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "players"(): $EntityArrayList
get "serverSimulationDistance"(): integer
get "side"(): $ScriptType
get "skyFlashTime"(): integer
get "lightUpdateQueueEmpty"(): boolean
get "overworld"(): boolean
set "gameTime"(value: long)
set "scoreboard"(value: $Scoreboard$$Type)
set "serverSimulationDistance"(value: integer)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "net.minecraft.client.multiplayer.chat.report.ReportingContext" {
import { $ChatReportBuilder$ChatReport$$Type } from "net.minecraft.client.multiplayer.chat.report.ChatReportBuilder$ChatReport"
import { $ChatLog, $ChatLog$$Type } from "net.minecraft.client.multiplayer.chat.ChatLog"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $AbuseReportSender, $AbuseReportSender$$Type } from "net.minecraft.client.multiplayer.chat.report.AbuseReportSender"
import { $ReportEnvironment$$Type } from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $UUID$$Type } from "java.util.UUID"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $UserApiService$$Type } from "com.mojang.authlib.minecraft.UserApiService"

export class $ReportingContext {
constructor(abuseReportSender0: $AbuseReportSender$$Type, reportEnvironment1: $ReportEnvironment$$Type, chatLog2: $ChatLog$$Type)

public "chatLog"(): $ChatLog
public static "create"(reportEnvironment0: $ReportEnvironment$$Type, userApiService1: $UserApiService$$Type): $ReportingContext
public "draftReportHandled"(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type, runnable2: $Runnable$$Type, boolean3: boolean): void
public "hasDraftReport"(): boolean
public "hasDraftReportFor"(uUID0: $UUID$$Type): boolean
public "matches"(reportEnvironment0: $ReportEnvironment$$Type): boolean
public "sender"(): $AbuseReportSender
public "setChatReportDraft"(chatReport0: $ChatReportBuilder$ChatReport$$Type): void
set "chatReportDraft"(value: $ChatReportBuilder$ChatReport$$Type)
}
}

declare module "net.minecraft.client.multiplayer.ServerData$ServerPackStatus" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
static readonly "DISABLED": $ServerData$ServerPackStatus
static readonly "ENABLED": $ServerData$ServerPackStatus
static readonly "PROMPT": $ServerData$ServerPackStatus

public "getName"(): $Component
public static "valueOf"(string0: string): $ServerData$ServerPackStatus
public static "values"(): $ServerData$ServerPackStatus[]
get "name"(): $Component
}
}

declare module "net.minecraft.client.multiplayer.ClientSuggestionProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SharedSuggestionProvider } from "net.minecraft.commands.SharedSuggestionProvider"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ClientPacketListener$$Type } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Message } from "com.mojang.brigadier.Message"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import { $Suggestions, $Suggestions$$Type } from "com.mojang.brigadier.suggestion.Suggestions"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ClientboundCustomChatCompletionsPacket$Action$$Type } from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List$$Type } from "java.util.List"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $Level } from "net.minecraft.world.level.Level"

export class $ClientSuggestionProvider implements $SharedSuggestionProvider {
constructor(clientPacketListener0: $ClientPacketListener$$Type, minecraft1: $Minecraft$$Type)

public "completeCustomSuggestions"(int0: integer, suggestions1: $Suggestions$$Type): void
public "customSuggestion"(commandContext0: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "enabledFeatures"(): $FeatureFlagSet
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
public "getAbsoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getAllTeams"(): $Collection<string>
public "getAvailableSounds"(): $Stream<$ResourceLocation>
public "getCustomTabSugggestions"(): $Collection<string>
public "getOnlinePlayerNames"(): $Collection<string>
public "getRecipeNames"(): $Stream<$ResourceLocation>
public "getRelevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getSelectedEntities"(): $Collection<string>
public "hasPermission"(int0: integer): boolean
public "levels"(): $Set<$ResourceKey<$Level>>
public static "matchesSubStr"(string0: string, string1: string): boolean
public "modifyCustomCompletions"(action0: $ClientboundCustomChatCompletionsPacket$Action$$Type, list1: $List$$Type<string>): void
public "registryAccess"(): $RegistryAccess
public static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
public static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "availableSounds"(): $Stream<$ResourceLocation>
get "customTabSugggestions"(): $Collection<string>
get "onlinePlayerNames"(): $Collection<string>
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "selectedEntities"(): $Collection<string>
}
}

declare module "net.minecraft.client.multiplayer.ClientAdvancements" {
import { $WorldSessionTelemetryManager$$Type } from "net.minecraft.client.telemetry.WorldSessionTelemetryManager"
import { $ClientboundUpdateAdvancementsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket"
import { $AdvancementList } from "net.minecraft.advancements.AdvancementList"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $AccessorClientAdvancements } from "net.darkhax.bookshelf.mixin.accessors.client.multiplayer.AccessorClientAdvancements"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $ClientAdvancements$Listener$$Type } from "net.minecraft.client.multiplayer.ClientAdvancements$Listener"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $AccessorClientAdvancements as $AccessorClientAdvancements$0 } from "vazkii.patchouli.mixin.client.AccessorClientAdvancements"

export class $ClientAdvancements implements $AccessorClientAdvancements, $AccessorClientAdvancements$0 {
constructor(minecraft0: $Minecraft$$Type, worldSessionTelemetryManager1: $WorldSessionTelemetryManager$$Type)

public "getAdvancements"(): $AdvancementList
public "handler$foo000$patchouli_onSync"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "setListener"(listener0: $ClientAdvancements$Listener$$Type): void
public "setSelectedTab"(advancement0: $Advancement$$Type, boolean1: boolean): void
public "update"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type): void
get "advancements"(): $AdvancementList
set "listener"(value: $ClientAdvancements$Listener$$Type)
}
}

declare module "net.minecraft.client.multiplayer.ServerData" {
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ServerStatus$Players, $ServerStatus$Players$$Type } from "net.minecraft.network.protocol.status.ServerStatus$Players"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ExtendedServerListData, $ExtendedServerListData$$Type } from "net.minecraftforge.client.ExtendedServerListData"
import { $ServerData$ServerPackStatus, $ServerData$ServerPackStatus$$Type } from "net.minecraft.client.multiplayer.ServerData$ServerPackStatus"

export class $ServerData {
constructor(string0: string, string1: string, boolean2: boolean)

public "copyFrom"(serverData0: $ServerData$$Type): void
public "copyNameIconFrom"(serverData0: $ServerData$$Type): void
public "enforcesSecureChat"(): boolean
public "getIconBytes"(): byte[]
public "getResourcePackStatus"(): $ServerData$ServerPackStatus
public "isLan"(): boolean
public static "read"(compoundTag0: $CompoundTag$$Type): $ServerData
public "setEnforcesSecureChat"(boolean0: boolean): void
public "setIconBytes"(byte0s: byte[]): void
public "setResourcePackStatus"(serverPackStatus0: $ServerData$ServerPackStatus$$Type): void
public "write"(): $CompoundTag
get "forgeData"(): $ExtendedServerListData
set "forgeData"(value: $ExtendedServerListData$$Type)
get "ip"(): string
set "ip"(value: string)
get "motd"(): $Component
set "motd"(value: $Component$$Type)
get "name"(): string
set "name"(value: string)
get "ping"(): long
set "ping"(value: long)
get "pinged"(): boolean
set "pinged"(value: boolean)
get "playerList"(): $List<$Component>
set "playerList"(value: $List$$Type<$Component$$Type>)
get "players"(): $ServerStatus$Players
set "players"(value: $ServerStatus$Players$$Type)
get "protocol"(): integer
set "protocol"(value: integer)
get "status"(): $Component
set "status"(value: $Component$$Type)
get "version"(): $Component
set "version"(value: $Component$$Type)
get "iconBytes"(): byte[]
get "resourcePackStatus"(): $ServerData$ServerPackStatus
get "lan"(): boolean
set "iconBytes"(value: byte[])
set "resourcePackStatus"(value: $ServerData$ServerPackStatus$$Type)
}
}

declare module "net.minecraft.client.multiplayer.chat.LoggedChatEvent" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $LoggedChatEvent$Type } from "net.minecraft.client.multiplayer.chat.LoggedChatEvent$Type"

export interface $LoggedChatEvent {
"type"(): $LoggedChatEvent$Type
}

export namespace $LoggedChatEvent {
const CODEC: $Codec<$LoggedChatEvent>
}
export abstract class $LoggedChatEvent$$Static implements $LoggedChatEvent {
static readonly "CODEC": $Codec<$LoggedChatEvent>

}
}

declare module "net.minecraft.client.multiplayer.chat.report.ReportEnvironment$Server" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReportEnvironment$Server {
}

export namespace $ReportEnvironment$Server {
const probejs$$marker: never
}
export abstract class $ReportEnvironment$Server$$Static implements $ReportEnvironment$Server {
}
}

declare module "net.minecraft.client.multiplayer.ClientPacketListener" {
import { $CommandDispatcher, $CommandDispatcher$$Type } from "com.mojang.brigadier.CommandDispatcher"
import { $ClientboundPlayerInfoUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $ClientAdvancements } from "net.minecraft.client.multiplayer.ClientAdvancements"
import { $Connection, $Connection$$Type } from "net.minecraft.network.Connection"
import { $ClientboundCustomChatCompletionsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket"
import { $ClientboundSetChunkCacheRadiusPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket"
import { $ClientboundUpdateRecipesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket"
import { $ClientGamePacketListener } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $ClientboundRecipePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRecipePacket"
import { $ClientboundMapItemDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket"
import { $ClientboundRotateHeadPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket"
import { $ClientboundSetBorderWarningDelayPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket"
import { $ClientboundSetCameraPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetCameraPacket"
import { $ClientboundCommandsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCommandsPacket"
import { $ClientboundPlayerCombatKillPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket"
import { $ClientboundTabListPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTabListPacket"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $Set } from "java.util.Set"
import { $ClientboundSelectAdvancementsTabPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket"
import { $ClientboundSectionBlocksUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ClientboundSetEntityMotionPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $ClientboundMoveEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket"
import { $ClientboundForgetLevelChunkPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $ClientboundDamageEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDamageEventPacket"
import { $ClientboundHorseScreenOpenPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket"
import { $ClientboundLevelChunkWithLightPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket"
import { $TickablePacketListener } from "net.minecraft.network.TickablePacketListener"
import { $ClientboundPlayerLookAtPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket"
import { $ClientboundSetExperiencePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket"
import { $ClientSuggestionProvider } from "net.minecraft.client.multiplayer.ClientSuggestionProvider"
import { $ClientboundContainerSetSlotPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket"
import { $ClientboundBlockChangedAckPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket"
import { $ClientboundSetPlayerTeamPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $ClientboundSetSubtitleTextPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket"
import { $ClientboundSetTitleTextPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket"
import { $ClientboundLevelEventPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLevelEventPacket"
import { $ClientboundChunksBiomesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket"
import { $ClientboundSetBorderCenterPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket"
import { $ClientboundSetActionBarTextPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket"
import { $ProfileKeyPair$$Type } from "net.minecraft.world.entity.player.ProfileKeyPair"
import { $ClientboundAddExperienceOrbPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAddExperienceOrbPacket"
import { $ClientboundBlockUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket"
import { $AttributeInstance$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import { $ClientboundPingPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPingPacket"
import { $ClientboundSetBorderSizePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket"
import { $ClientboundLightUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket"
import { $ClientboundPlayerCombatEndPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket"
import { $ClientboundSoundPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSoundPacket"
import { $ClientboundSetSimulationDistancePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket"
import { $ClientboundPlayerInfoRemovePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket"
import { $ServerData, $ServerData$$Type } from "net.minecraft.client.multiplayer.ServerData"
import { $ClientboundSetEntityLinkPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket"
import { $ClientboundSetDisplayObjectivePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ClientboundKeepAlivePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundKeepAlivePacket"
import { $ClientboundSoundEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket"
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
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $ClientboundPlayerCombatEnterPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket"
import { $ClientboundContainerClosePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerClosePacket"
import { $DebugQueryHandler } from "net.minecraft.client.DebugQueryHandler"
import { $ClientboundMoveVehiclePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket"
import { $ClientboundSetPassengersPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket"
import { $ClientboundSetHealthPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetHealthPacket"
import { $AttributeMap$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import { $ClientboundAddPlayerPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAddPlayerPacket"
import { $ClientboundRemoveEntitiesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket"
import { $ClientboundStopSoundPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundStopSoundPacket"
import { $Collection } from "java.util.Collection"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ClientboundCooldownPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCooldownPacket"
import { $ClientboundUpdateAttributesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket"
import { $ClientboundDisconnectPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDisconnectPacket"
import { $ClientboundSetDefaultSpawnPositionPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket"
import { $ClientboundUpdateMobEffectPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket"
import { $ClientboundTeleportEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket"
import { $ClientboundUpdateAdvancementsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket"
import { $ClientboundMerchantOffersPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"
import { $Optional$$Type } from "java.util.Optional"
import { $ClientboundBlockDestructionPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket"
import { $ClientboundRemoveMobEffectPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket"
import { $Level } from "net.minecraft.world.level.Level"
import { $ClientboundDeleteChatPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket"
import { $ClientboundOpenSignEditorPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket"
import { $ClientboundTakeItemEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket"
import { $PlayerInfo } from "net.minecraft.client.multiplayer.PlayerInfo"
import { $ClientboundAwardStatsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket"
import { $SharedSuggestionProvider, $SharedSuggestionProvider$$Type } from "net.minecraft.commands.SharedSuggestionProvider"
import { $ClientboundPlayerAbilitiesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket"
import { $ClientboundCustomPayloadPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCustomPayloadPacket"
import { $ClientboundTagQueryPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundTagQueryPacket"
import { $ClientboundResourcePackPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundResourcePackPacket"
import { $ClientboundSetScorePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetScorePacket"
import { $ClientboundOpenBookPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundOpenBookPacket"
import { $ClientboundSetBorderLerpSizePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $ClientboundServerDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundServerDataPacket"
import { $ClientboundDisguisedChatPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket"
import { $ClientboundSetTitlesAnimationPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket"
import { $ClientboundInitializeBorderPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket"
import { $Iterator$$Type } from "java.util.Iterator"
import { $ClientboundUpdateTagsPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateTagsPacket"
import { $ClientboundHurtAnimationPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket"
import { $ClientboundSetObjectivePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket"
import { $ClientboundClearTitlesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket"
import { $ClientboundAnimatePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAnimatePacket"
import { $ClientboundSetBorderWarningDistancePacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket"
import { $ClientboundLoginPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundLoginPacket"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $ClientboundAddEntityPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import { $WorldSessionTelemetryManager$$Type } from "net.minecraft.client.telemetry.WorldSessionTelemetryManager"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ClientboundRespawnPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundRespawnPacket"
import { $ClientboundSetEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket"
import { $ClientboundSetCarriedItemPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundSetCarriedItemPacket"
import { $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot"
import { $ClientboundContainerSetContentPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket"
import { $ClientboundContainerSetDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket"
import { $ClientboundUpdateEnabledFeaturesPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundUpdateEnabledFeaturesPacket"

export class $ClientPacketListener implements $TickablePacketListener, $ClientGamePacketListener {
readonly "callbackScreen": $Screen

constructor(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type, connection2: $Connection$$Type, serverData3: $ServerData$$Type, gameProfile4: $GameProfile$$Type, worldSessionTelemetryManager5: $WorldSessionTelemetryManager$$Type)

public "close"(): void
public "enabledFeatures"(): $FeatureFlagSet
public "getAdvancements"(): $ClientAdvancements
public "getCommands"(): $CommandDispatcher<$SharedSuggestionProvider>
public "getConnection"(): $Connection
public "getDebugQueryHandler"(): $DebugQueryHandler
public "getId"(): $UUID
public "getLevel"(): $ClientLevel
public "getListedOnlinePlayers"(): $Collection<$PlayerInfo>
public "getLocalGameProfile"(): $GameProfile
public "getOnlinePlayerIds"(): $Collection<$UUID>
public "getOnlinePlayers"(): $Collection<$PlayerInfo>
public "getPlayerInfo"(string0: string): $PlayerInfo
public "getPlayerInfo"(uUID0: $UUID$$Type): $PlayerInfo
public "getRecipeManager"(): $RecipeManager
public "getServerData"(): $ServerData
public "getSuggestionsProvider"(): $ClientSuggestionProvider
public "handleAddEntity"(clientboundAddEntityPacket0: $ClientboundAddEntityPacket$$Type): void
public "handleAddExperienceOrb"(clientboundAddExperienceOrbPacket0: $ClientboundAddExperienceOrbPacket$$Type): void
public "handleAddObjective"(clientboundSetObjectivePacket0: $ClientboundSetObjectivePacket$$Type): void
public "handleAddOrRemoveRecipes"(clientboundRecipePacket0: $ClientboundRecipePacket$$Type): void
public "handleAddPlayer"(clientboundAddPlayerPacket0: $ClientboundAddPlayerPacket$$Type): void
public "handleAnimate"(clientboundAnimatePacket0: $ClientboundAnimatePacket$$Type): void
public "handleAwardStats"(clientboundAwardStatsPacket0: $ClientboundAwardStatsPacket$$Type): void
public "handleBlockChangedAck"(clientboundBlockChangedAckPacket0: $ClientboundBlockChangedAckPacket$$Type): void
public "handleBlockDestruction"(clientboundBlockDestructionPacket0: $ClientboundBlockDestructionPacket$$Type): void
public "handleBlockEntityData"(clientboundBlockEntityDataPacket0: $ClientboundBlockEntityDataPacket$$Type): void
public "handleBlockEvent"(clientboundBlockEventPacket0: $ClientboundBlockEventPacket$$Type): void
public "handleBlockUpdate"(clientboundBlockUpdatePacket0: $ClientboundBlockUpdatePacket$$Type): void
public "handleBossUpdate"(clientboundBossEventPacket0: $ClientboundBossEventPacket$$Type): void
public "handleBundlePacket"(clientboundBundlePacket0: $ClientboundBundlePacket$$Type): void
public "handleChangeDifficulty"(clientboundChangeDifficultyPacket0: $ClientboundChangeDifficultyPacket$$Type): void
public "handleChunkBlocksUpdate"(clientboundSectionBlocksUpdatePacket0: $ClientboundSectionBlocksUpdatePacket$$Type): void
public "handleChunksBiomes"(clientboundChunksBiomesPacket0: $ClientboundChunksBiomesPacket$$Type): void
public "handleCommandSuggestions"(clientboundCommandSuggestionsPacket0: $ClientboundCommandSuggestionsPacket$$Type): void
public "handleCommands"(clientboundCommandsPacket0: $ClientboundCommandsPacket$$Type): void
public "handleContainerClose"(clientboundContainerClosePacket0: $ClientboundContainerClosePacket$$Type): void
public "handleContainerContent"(clientboundContainerSetContentPacket0: $ClientboundContainerSetContentPacket$$Type): void
public "handleContainerSetData"(clientboundContainerSetDataPacket0: $ClientboundContainerSetDataPacket$$Type): void
public "handleContainerSetSlot"(clientboundContainerSetSlotPacket0: $ClientboundContainerSetSlotPacket$$Type): void
public "handleCustomChatCompletions"(clientboundCustomChatCompletionsPacket0: $ClientboundCustomChatCompletionsPacket$$Type): void
public "handleCustomPayload"(clientboundCustomPayloadPacket0: $ClientboundCustomPayloadPacket$$Type): void
public "handleDamageEvent"(clientboundDamageEventPacket0: $ClientboundDamageEventPacket$$Type): void
public "handleDeleteChat"(clientboundDeleteChatPacket0: $ClientboundDeleteChatPacket$$Type): void
public "handleDisconnect"(clientboundDisconnectPacket0: $ClientboundDisconnectPacket$$Type): void
public "handleDisguisedChat"(clientboundDisguisedChatPacket0: $ClientboundDisguisedChatPacket$$Type): void
public "handleEnabledFeatures"(clientboundUpdateEnabledFeaturesPacket0: $ClientboundUpdateEnabledFeaturesPacket$$Type): void
public "handleEntityEvent"(clientboundEntityEventPacket0: $ClientboundEntityEventPacket$$Type): void
public "handleEntityLinkPacket"(clientboundSetEntityLinkPacket0: $ClientboundSetEntityLinkPacket$$Type): void
public "handleExplosion"(clientboundExplodePacket0: $ClientboundExplodePacket$$Type): void
public "handleForgetLevelChunk"(clientboundForgetLevelChunkPacket0: $ClientboundForgetLevelChunkPacket$$Type): void
public "handleGameEvent"(clientboundGameEventPacket0: $ClientboundGameEventPacket$$Type): void
public "handleHorseScreenOpen"(clientboundHorseScreenOpenPacket0: $ClientboundHorseScreenOpenPacket$$Type): void
public "handleHurtAnimation"(clientboundHurtAnimationPacket0: $ClientboundHurtAnimationPacket$$Type): void
public "handleInitializeBorder"(clientboundInitializeBorderPacket0: $ClientboundInitializeBorderPacket$$Type): void
public "handleItemCooldown"(clientboundCooldownPacket0: $ClientboundCooldownPacket$$Type): void
public "handleKeepAlive"(clientboundKeepAlivePacket0: $ClientboundKeepAlivePacket$$Type): void
public "handleLevelChunkWithLight"(clientboundLevelChunkWithLightPacket0: $ClientboundLevelChunkWithLightPacket$$Type): void
public "handleLevelEvent"(clientboundLevelEventPacket0: $ClientboundLevelEventPacket$$Type): void
public "handleLightUpdatePacket"(clientboundLightUpdatePacket0: $ClientboundLightUpdatePacket$$Type): void
public "handleLogin"(clientboundLoginPacket0: $ClientboundLoginPacket$$Type): void
public "handleLookAt"(clientboundPlayerLookAtPacket0: $ClientboundPlayerLookAtPacket$$Type): void
public "handleMapItemData"(clientboundMapItemDataPacket0: $ClientboundMapItemDataPacket$$Type): void
public "handleMerchantOffers"(clientboundMerchantOffersPacket0: $ClientboundMerchantOffersPacket$$Type): void
public "handleMoveEntity"(clientboundMoveEntityPacket0: $ClientboundMoveEntityPacket$$Type): void
public "handleMovePlayer"(clientboundPlayerPositionPacket0: $ClientboundPlayerPositionPacket$$Type): void
public "handleMoveVehicle"(clientboundMoveVehiclePacket0: $ClientboundMoveVehiclePacket$$Type): void
public "handleOpenBook"(clientboundOpenBookPacket0: $ClientboundOpenBookPacket$$Type): void
public "handleOpenScreen"(clientboundOpenScreenPacket0: $ClientboundOpenScreenPacket$$Type): void
public "handleOpenSignEditor"(clientboundOpenSignEditorPacket0: $ClientboundOpenSignEditorPacket$$Type): void
public "handleParticleEvent"(clientboundLevelParticlesPacket0: $ClientboundLevelParticlesPacket$$Type): void
public "handlePing"(clientboundPingPacket0: $ClientboundPingPacket$$Type): void
public "handlePlaceRecipe"(clientboundPlaceGhostRecipePacket0: $ClientboundPlaceGhostRecipePacket$$Type): void
public "handlePlayerAbilities"(clientboundPlayerAbilitiesPacket0: $ClientboundPlayerAbilitiesPacket$$Type): void
public "handlePlayerChat"(clientboundPlayerChatPacket0: $ClientboundPlayerChatPacket$$Type): void
public "handlePlayerCombatEnd"(clientboundPlayerCombatEndPacket0: $ClientboundPlayerCombatEndPacket$$Type): void
public "handlePlayerCombatEnter"(clientboundPlayerCombatEnterPacket0: $ClientboundPlayerCombatEnterPacket$$Type): void
public "handlePlayerCombatKill"(clientboundPlayerCombatKillPacket0: $ClientboundPlayerCombatKillPacket$$Type): void
public "handlePlayerInfoRemove"(clientboundPlayerInfoRemovePacket0: $ClientboundPlayerInfoRemovePacket$$Type): void
public "handlePlayerInfoUpdate"(clientboundPlayerInfoUpdatePacket0: $ClientboundPlayerInfoUpdatePacket$$Type): void
public "handleRemoveEntities"(clientboundRemoveEntitiesPacket0: $ClientboundRemoveEntitiesPacket$$Type): void
public "handleRemoveMobEffect"(clientboundRemoveMobEffectPacket0: $ClientboundRemoveMobEffectPacket$$Type): void
public "handleResourcePack"(clientboundResourcePackPacket0: $ClientboundResourcePackPacket$$Type): void
public "handleRespawn"(clientboundRespawnPacket0: $ClientboundRespawnPacket$$Type): void
public "handleRotateMob"(clientboundRotateHeadPacket0: $ClientboundRotateHeadPacket$$Type): void
public "handleSelectAdvancementsTab"(clientboundSelectAdvancementsTabPacket0: $ClientboundSelectAdvancementsTabPacket$$Type): void
public "handleServerData"(clientboundServerDataPacket0: $ClientboundServerDataPacket$$Type): void
public "handleSetBorderCenter"(clientboundSetBorderCenterPacket0: $ClientboundSetBorderCenterPacket$$Type): void
public "handleSetBorderLerpSize"(clientboundSetBorderLerpSizePacket0: $ClientboundSetBorderLerpSizePacket$$Type): void
public "handleSetBorderSize"(clientboundSetBorderSizePacket0: $ClientboundSetBorderSizePacket$$Type): void
public "handleSetBorderWarningDelay"(clientboundSetBorderWarningDelayPacket0: $ClientboundSetBorderWarningDelayPacket$$Type): void
public "handleSetBorderWarningDistance"(clientboundSetBorderWarningDistancePacket0: $ClientboundSetBorderWarningDistancePacket$$Type): void
public "handleSetCamera"(clientboundSetCameraPacket0: $ClientboundSetCameraPacket$$Type): void
public "handleSetCarriedItem"(clientboundSetCarriedItemPacket0: $ClientboundSetCarriedItemPacket$$Type): void
public "handleSetChunkCacheCenter"(clientboundSetChunkCacheCenterPacket0: $ClientboundSetChunkCacheCenterPacket$$Type): void
public "handleSetChunkCacheRadius"(clientboundSetChunkCacheRadiusPacket0: $ClientboundSetChunkCacheRadiusPacket$$Type): void
public "handleSetDisplayObjective"(clientboundSetDisplayObjectivePacket0: $ClientboundSetDisplayObjectivePacket$$Type): void
public "handleSetEntityData"(clientboundSetEntityDataPacket0: $ClientboundSetEntityDataPacket$$Type): void
public "handleSetEntityMotion"(clientboundSetEntityMotionPacket0: $ClientboundSetEntityMotionPacket$$Type): void
public "handleSetEntityPassengersPacket"(clientboundSetPassengersPacket0: $ClientboundSetPassengersPacket$$Type): void
public "handleSetEquipment"(clientboundSetEquipmentPacket0: $ClientboundSetEquipmentPacket$$Type): void
public "handleSetExperience"(clientboundSetExperiencePacket0: $ClientboundSetExperiencePacket$$Type): void
public "handleSetHealth"(clientboundSetHealthPacket0: $ClientboundSetHealthPacket$$Type): void
public "handleSetPlayerTeamPacket"(clientboundSetPlayerTeamPacket0: $ClientboundSetPlayerTeamPacket$$Type): void
public "handleSetScore"(clientboundSetScorePacket0: $ClientboundSetScorePacket$$Type): void
public "handleSetSimulationDistance"(clientboundSetSimulationDistancePacket0: $ClientboundSetSimulationDistancePacket$$Type): void
public "handleSetSpawn"(clientboundSetDefaultSpawnPositionPacket0: $ClientboundSetDefaultSpawnPositionPacket$$Type): void
public "handleSetTime"(clientboundSetTimePacket0: $ClientboundSetTimePacket$$Type): void
public "handleSoundEntityEvent"(clientboundSoundEntityPacket0: $ClientboundSoundEntityPacket$$Type): void
public "handleSoundEvent"(clientboundSoundPacket0: $ClientboundSoundPacket$$Type): void
public "handleStopSoundEvent"(clientboundStopSoundPacket0: $ClientboundStopSoundPacket$$Type): void
public "handleSystemChat"(clientboundSystemChatPacket0: $ClientboundSystemChatPacket$$Type): void
public "handleTabListCustomisation"(clientboundTabListPacket0: $ClientboundTabListPacket$$Type): void
public "handleTagQueryPacket"(clientboundTagQueryPacket0: $ClientboundTagQueryPacket$$Type): void
public "handleTakeItemEntity"(clientboundTakeItemEntityPacket0: $ClientboundTakeItemEntityPacket$$Type): void
public "handleTeleportEntity"(clientboundTeleportEntityPacket0: $ClientboundTeleportEntityPacket$$Type): void
public "handleTitlesClear"(clientboundClearTitlesPacket0: $ClientboundClearTitlesPacket$$Type): void
public "handleUpdateAdvancementsPacket"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type): void
public "handleUpdateAttributes"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type): void
public "handleUpdateMobEffect"(clientboundUpdateMobEffectPacket0: $ClientboundUpdateMobEffectPacket$$Type): void
public "handleUpdateRecipes"(clientboundUpdateRecipesPacket0: $ClientboundUpdateRecipesPacket$$Type): void
public "handleUpdateTags"(clientboundUpdateTagsPacket0: $ClientboundUpdateTagsPacket$$Type): void
public "handler$bgi000$apoth_postAttrChangedEvent"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type, callbackInfo1: $CallbackInfo$$Type, entity2: $Entity$$Type, attributeMap3: $AttributeMap$$Type, iterator4: $Iterator$$Type, attributeSnapshot5: $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Type, attributeInstance6: $AttributeInstance$$Type): void
public "handler$bgi000$apoth_recordOldAttrValue"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type, callbackInfo1: $CallbackInfo$$Type, entity2: $Entity$$Type, attributeMap3: $AttributeMap$$Type, iterator4: $Iterator$$Type, attributeSnapshot5: $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Type, attributeInstance6: $AttributeInstance$$Type): void
public "handler$dgg000$onDisconnect"(component0: $Component$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fce000$handleLogin"(clientboundLoginPacket0: $ClientboundLoginPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fce000$handleRespawn"(clientboundRespawnPacket0: $ClientboundRespawnPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fce000$journeymap_handleDisguisedChat_onClientChatEventReceived"(clientboundDisguisedChatPacket0: $ClientboundDisguisedChatPacket$$Type, callbackInfo1: $CallbackInfo$$Type, optional2: $Optional$$Type): void
public "handler$fce000$journeymap_handleSystemChat_onClientChatEventReceived"(clientboundSystemChatPacket0: $ClientboundSystemChatPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fce000$journeymap_sendCommand_onChatEvent"(string0: string, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fce000$journeymap_sendUnsignedCommand_onChatEvent"(string0: string, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$fog000$handleBlockUpdateFTBC"(packet: $ClientboundBlockUpdatePacket$$Type, ci: $CallbackInfo$$Type): void
public "handler$fog000$handleChunkBlocksUpdateFTBC"(packet: $ClientboundSectionBlocksUpdatePacket$$Type, ci: $CallbackInfo$$Type): void
public "handler$fog000$handleLevelChunkFTBC"(packet: $ClientboundLevelChunkWithLightPacket$$Type, ci: $CallbackInfo$$Type): void
public "isAcceptingMessages"(): boolean
public "isFeatureEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "levels"(): $Set<$ResourceKey<$Level>>
public "markMessageAsProcessed"(playerChatMessage0: $PlayerChatMessage$$Type, boolean1: boolean): void
public "onDisconnect"(component0: $Component$$Type): void
public "registryAccess"(): $RegistryAccess
public "send"(packet0: $Packet$$Type<any>): void
public "sendChat"(string0: string): void
public "sendCommand"(string0: string): void
public "sendUnsignedCommand"(string0: string): boolean
public "setActionBarText"(clientboundSetActionBarTextPacket0: $ClientboundSetActionBarTextPacket$$Type): void
public "setKeyPair"(profileKeyPair0: $ProfileKeyPair$$Type): void
public "setSubtitleText"(clientboundSetSubtitleTextPacket0: $ClientboundSetSubtitleTextPacket$$Type): void
public "setTitleText"(clientboundSetTitleTextPacket0: $ClientboundSetTitleTextPacket$$Type): void
public "setTitlesAnimation"(clientboundSetTitlesAnimationPacket0: $ClientboundSetTitlesAnimationPacket$$Type): void
public "shouldPropagateHandlingExceptions"(): boolean
public "tick"(): void
get "commands"(): $CommandDispatcher<$SharedSuggestionProvider>
set "commands"(value: $CommandDispatcher$$Type<$SharedSuggestionProvider$$Type>)
get "serverChunkRadius"(): integer
set "serverChunkRadius"(value: integer)
get "advancements"(): $ClientAdvancements
get "connection"(): $Connection
get "debugQueryHandler"(): $DebugQueryHandler
get "id"(): $UUID
get "level"(): $ClientLevel
get "listedOnlinePlayers"(): $Collection<$PlayerInfo>
get "localGameProfile"(): $GameProfile
get "onlinePlayerIds"(): $Collection<$UUID>
get "onlinePlayers"(): $Collection<$PlayerInfo>
get "recipeManager"(): $RecipeManager
get "serverData"(): $ServerData
get "suggestionsProvider"(): $ClientSuggestionProvider
get "acceptingMessages"(): boolean
set "actionBarText"(value: $ClientboundSetActionBarTextPacket$$Type)
set "keyPair"(value: $ProfileKeyPair$$Type)
set "subtitleText"(value: $ClientboundSetSubtitleTextPacket$$Type)
set "titleText"(value: $ClientboundSetTitleTextPacket$$Type)
set "titlesAnimation"(value: $ClientboundSetTitlesAnimationPacket$$Type)
}
}

declare module "net.minecraft.client.multiplayer.ProfileKeyPairManager" {
import { $User$$Type } from "net.minecraft.client.User"
import { $ProfileKeyPair } from "net.minecraft.world.entity.player.ProfileKeyPair"
import { $Optional } from "java.util.Optional"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Path$$Type } from "java.nio.file.Path"
import { $UserApiService$$Type } from "com.mojang.authlib.minecraft.UserApiService"

export interface $ProfileKeyPairManager {
"prepareKeyPair"(): $CompletableFuture<$Optional<$ProfileKeyPair>>
"shouldRefreshKeyPair"(): boolean
}

export namespace $ProfileKeyPairManager {
const EMPTY_KEY_MANAGER: $ProfileKeyPairManager
function create(userApiService0: $UserApiService$$Type, user1: $User$$Type, path2: $Path$$Type): $ProfileKeyPairManager
}
export abstract class $ProfileKeyPairManager$$Static implements $ProfileKeyPairManager {
static readonly "EMPTY_KEY_MANAGER": $ProfileKeyPairManager

static "create"(userApiService0: $UserApiService$$Type, user1: $User$$Type, path2: $Path$$Type): $ProfileKeyPairManager
}
}

declare module "net.minecraft.client.multiplayer.PlayerInfo" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $PlayerTeam } from "net.minecraft.world.scores.PlayerTeam"
import { $RemoteChatSession } from "net.minecraft.network.chat.RemoteChatSession"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SignedMessageValidator } from "net.minecraft.network.chat.SignedMessageValidator"
import { $Map } from "java.util.Map"
import { $MinecraftProfileTexture$Type } from "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $PlayerInfoAccessor } from "com.gregtechceu.gtceu.core.mixins.client.PlayerInfoAccessor"
import { $GameType } from "net.minecraft.world.level.GameType"

export class $PlayerInfo implements $PlayerInfoAccessor {
readonly "textureLocations": $Map<$MinecraftProfileTexture$Type, $ResourceLocation>

constructor(gameProfile0: $GameProfile$$Type, boolean1: boolean)

public "getCapeLocation"(): $ResourceLocation
public "getChatSession"(): $RemoteChatSession
public "getElytraLocation"(): $ResourceLocation
public "getGameMode"(): $GameType
public "getLatency"(): integer
public "getMessageValidator"(): $SignedMessageValidator
public "getModelName"(): string
public "getProfile"(): $GameProfile
public "getSkinLocation"(): $ResourceLocation
public "getTabListDisplayName"(): $Component
public "getTeam"(): $PlayerTeam
public "hasVerifiableChat"(): boolean
public "isCapeLoaded"(): boolean
public "isSkinLoaded"(): boolean
public "setTabListDisplayName"(component0: $Component$$Type): void
get "capeLocation"(): $ResourceLocation
get "chatSession"(): $RemoteChatSession
get "elytraLocation"(): $ResourceLocation
get "gameMode"(): $GameType
get "latency"(): integer
get "messageValidator"(): $SignedMessageValidator
get "modelName"(): string
get "profile"(): $GameProfile
get "skinLocation"(): $ResourceLocation
get "tabListDisplayName"(): $Component
get "team"(): $PlayerTeam
get "capeLoaded"(): boolean
get "skinLoaded"(): boolean
set "tabListDisplayName"(value: $Component$$Type)
}
}

declare module "net.minecraft.client.multiplayer.ClientLevel$ClientLevelData" {
import { $SkyblockWorldInfo } from "vazkii.botania.client.core.SkyblockWorldInfo"
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $GameRules } from "net.minecraft.world.level.GameRules"
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"
import { $WritableLevelData } from "net.minecraft.world.level.storage.WritableLevelData"

export class $ClientLevel$ClientLevelData implements $WritableLevelData, $SkyblockWorldInfo {
constructor(difficulty0: $Difficulty$$Type, boolean1: boolean, boolean2: boolean)

public "fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
public "getClearColorScale"(): float
public "getDayTime"(): long
public "getDifficulty"(): $Difficulty
public "getGameRules"(): $GameRules
public "getGameTime"(): long
public "getHorizonHeight"(levelHeightAccessor0: $LevelHeightAccessor$$Type): double
public "getSpawnAngle"(): float
public "getXSpawn"(): integer
public "getYSpawn"(): integer
public "getZSpawn"(): integer
public "isDifficultyLocked"(): boolean
public "isGardenOfGlass"(): boolean
public "isHardcore"(): boolean
public "isRaining"(): boolean
public "isThundering"(): boolean
public "markGardenOfGlass"(): void
public "setDayTime"(long0: long): void
public "setDifficulty"(difficulty0: $Difficulty$$Type): void
public "setDifficultyLocked"(boolean0: boolean): void
public "setGameTime"(long0: long): void
public "setRaining"(boolean0: boolean): void
public "setSpawn"(blockPos0: $BlockPos$$Type, float1: float): void
public "setSpawnAngle"(float0: float): void
public "setXSpawn"(int0: integer): void
public "setYSpawn"(int0: integer): void
public "setZSpawn"(int0: integer): void
get "clearColorScale"(): float
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "spawnAngle"(): float
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "gardenOfGlass"(): boolean
get "hardcore"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "dayTime"(value: long)
set "difficulty"(value: $Difficulty$$Type)
set "difficultyLocked"(value: boolean)
set "gameTime"(value: long)
set "raining"(value: boolean)
set "spawnAngle"(value: float)
set "xSpawn"(value: integer)
set "ySpawn"(value: integer)
set "zSpawn"(value: integer)
}
}

declare module "net.minecraft.client.multiplayer.MultiPlayerGameMode" {
import { $ClientRecipeBook$$Type } from "net.minecraft.client.ClientRecipeBook"
import { $ClickType$$Type } from "net.minecraft.world.inventory.ClickType"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityHitResult$$Type } from "net.minecraft.world.phys.EntityHitResult"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LocalPlayer, $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $ClientPacketListener$$Type } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $StatsCounter$$Type } from "net.minecraft.stats.StatsCounter"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $AccessorMultiPlayerGameMode } from "org.violetmoon.quark.mixin.mixins.client.accessor.AccessorMultiPlayerGameMode"

export class $MultiPlayerGameMode implements $AccessorMultiPlayerGameMode {
constructor(minecraft0: $Minecraft$$Type, clientPacketListener1: $ClientPacketListener$$Type)

public "adjustPlayer"(player0: $Player$$Type): void
public "attack"(player0: $Player$$Type, entity1: $Entity$$Type): void
public "canHurtPlayer"(): boolean
public "continueDestroyBlock"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "createPlayer"(clientLevel0: $ClientLevel$$Type, statsCounter1: $StatsCounter$$Type, clientRecipeBook2: $ClientRecipeBook$$Type): $LocalPlayer
public "createPlayer"(clientLevel0: $ClientLevel$$Type, statsCounter1: $StatsCounter$$Type, clientRecipeBook2: $ClientRecipeBook$$Type, boolean3: boolean, boolean4: boolean): $LocalPlayer
public "destroyBlock"(blockPos0: $BlockPos$$Type): boolean
public "ensureHasSentCarriedItem"(): void
public "getDestroyStage"(): integer
public "getPickRange"(): float
public "getPlayerMode"(): $GameType
public "getPreviousPlayerMode"(): $GameType
public "handleCreativeModeItemAdd"(itemStack0: $ItemStack$$Type, int1: integer): void
public "handleCreativeModeItemDrop"(itemStack0: $ItemStack$$Type): void
public "handleInventoryButtonClick"(int0: integer, int1: integer): void
public "handleInventoryMouseClick"(int0: integer, int1: integer, int2: integer, clickType3: $ClickType$$Type, player4: $Player$$Type): void
public "handlePickItem"(int0: integer): void
public "handlePlaceRecipe"(int0: integer, recipe1: $Recipe$$Type<any>, boolean2: boolean): void
public "handler$cbk000$cancelBlockBreaking_FixAttackCD"(ci: $CallbackInfo$$Type): void
public "hasExperience"(): boolean
public "hasFarPickRange"(): boolean
public "hasInfiniteItems"(): boolean
public "hasMissTime"(): boolean
public "interact"(player0: $Player$$Type, entity1: $Entity$$Type, interactionHand2: $InteractionHand$$Type): $InteractionResult
public "interactAt"(player0: $Player$$Type, entity1: $Entity$$Type, entityHitResult2: $EntityHitResult$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResult
public "isAlwaysFlying"(): boolean
public "isDestroying"(): boolean
public "isServerControlledInventory"(): boolean
public "releaseUsingItem"(player0: $Player$$Type): void
public "setLocalMode"(gameType0: $GameType$$Type, gameType1: $GameType$$Type): void
public "setLocalMode"(gameType0: $GameType$$Type): void
public "startDestroyBlock"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "stopDestroyBlock"(): void
public "tick"(): void
public "useItem"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "useItemOn"(localPlayer0: $LocalPlayer$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
get "destroyBlockPos"(): $BlockPos
set "destroyBlockPos"(value: $BlockPos$$Type)
get "destroyDelay"(): integer
set "destroyDelay"(value: integer)
get "destroyProgress"(): float
set "destroyProgress"(value: float)
get "destroyStage"(): integer
get "pickRange"(): float
get "playerMode"(): $GameType
get "previousPlayerMode"(): $GameType
get "alwaysFlying"(): boolean
get "destroying"(): boolean
get "serverControlledInventory"(): boolean
set "localMode"(value: $GameType$$Type)
}
}

