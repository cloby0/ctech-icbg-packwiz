declare module "com.aetherteam.aether.event.EggLayEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"

export class $EggLayEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, soundEvent1: $SoundEvent$$Type, float2: float, float3: float, item4: $Item$$Type)
constructor()

public "getItem"(): $Item
public "getPitch"(): float
public "getSound"(): $SoundEvent
public "getVolume"(): float
public "setItem"(item0: $Item$$Type): void
public "setPitch"(float0: float): void
public "setSound"(soundEvent0: $SoundEvent$$Type): void
public "setVolume"(float0: float): void
get "item"(): $Item
get "pitch"(): float
get "sound"(): $SoundEvent
get "volume"(): float
set "item"(value: $Item$$Type)
set "pitch"(value: float)
set "sound"(value: $SoundEvent$$Type)
set "volume"(value: float)
}
}

declare module "com.aetherteam.aether.event.PlacementConvertEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $PlacementConvertEvent extends $Event {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type)
constructor()

public "getLevel"(): $LevelAccessor
public "getNewBlockState"(): $BlockState
public "getOldBlockState"(): $BlockState
public "getPos"(): $BlockPos
public "setNewBlockState"(blockState0: $BlockState$$Type): void
get "level"(): $LevelAccessor
get "newBlockState"(): $BlockState
get "oldBlockState"(): $BlockState
get "pos"(): $BlockPos
set "newBlockState"(value: $BlockState$$Type)
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.ScreenAccessor" {
import { $List } from "java.util.List"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"

export interface $ScreenAccessor {
"aether$getNarratables"(): $List<$NarratableEntry>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BushBlockAccessor" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BushBlockAccessor {
"callMayPlaceOn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
}

export namespace $BushBlockAccessor {
const probejs$$marker: never
}
export abstract class $BushBlockAccessor$$Static implements $BushBlockAccessor {
}
}

declare module "com.aetherteam.aether.event.PlacementBanEvent$SpawnParticles" {
import { $PlacementBanEvent } from "com.aetherteam.aether.event.PlacementBanEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $PlacementBanEvent$SpawnParticles extends $PlacementBanEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, itemStack3: $ItemStack$$Type, blockState4: $BlockState$$Type)
constructor()

public "getBlockState"(): $BlockState
public "getFace"(): $Direction
public "getItemStack"(): $ItemStack
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
get "blockState"(): $BlockState
get "face"(): $Direction
get "itemStack"(): $ItemStack
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {
"callHurtCurrentlyUsedShield"(float0: float): void
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
export abstract class $PlayerAccessor$$Static implements $PlayerAccessor {
}
}

declare module "com.aetherteam.cumulus.mixin.mixins.client.accessor.ScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ScreenAccessor {
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.SoundEngineAccessor" {
import { $Map } from "java.util.Map"
import { $SoundInstance } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $ChannelAccess$ChannelHandle } from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"

export interface $SoundEngineAccessor {
"aether$getInstanceToChannel"(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>
}

export namespace $SoundEngineAccessor {
const probejs$$marker: never
}
export abstract class $SoundEngineAccessor$$Static implements $SoundEngineAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor {
"aether$setAboveGroundTickCount"(int0: integer): void
"aether$setAboveGroundVehicleTickCount"(int0: integer): void
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
export abstract class $ServerGamePacketListenerImplAccessor$$Static implements $ServerGamePacketListenerImplAccessor {
}
}

declare module "com.aetherteam.aether.event.BossFightEvent$AddPlayer" {
import { $BossFightEvent } from "com.aetherteam.aether.event.BossFightEvent"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BossRoomTracker$$Type } from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$AddPlayer extends $BossFightEvent {
constructor(entity0: $Entity$$Type, bossRoomTracker1: $BossRoomTracker$$Type<any>, serverPlayer2: $ServerPlayer$$Type)
constructor()

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BeeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BeeAccessor {
"callGetCropsGrownSincePollination"(): integer
"callIncrementNumCropsGrownSincePollination"(): void
"callIsHiveValid"(): boolean
}

export namespace $BeeAccessor {
const probejs$$marker: never
}
export abstract class $BeeAccessor$$Static implements $BeeAccessor {
}
}

declare module "com.aetherteam.aether.event.BossFightEvent$Stop" {
import { $BossFightEvent } from "com.aetherteam.aether.event.BossFightEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BossRoomTracker$$Type } from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$Stop extends $BossFightEvent {
constructor(entity0: $Entity$$Type, bossRoomTracker1: $BossRoomTracker$$Type<any>)
constructor()

}
}

declare module "com.aetherteam.nitrogen.entity.BossMob" {
import { $TargetingConditions } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Mob } from "net.minecraft.world.entity.Mob"
import { $BossRoomTracker, $BossRoomTracker$$Type } from "com.aetherteam.nitrogen.entity.BossRoomTracker"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $BossMob<T extends ($Mob & $BossMob<T>) = ($Mob & $BossMob<T>)> {
"addBossSaveData"(compoundTag0: $CompoundTag$$Type): void
"closeRoom"(): void
"convertBlock"(blockState0: $BlockState$$Type): $BlockState
"displayTooFarMessage"(player0: $Player$$Type): void
"getBossName"(): $Component
"getDeathScore"(): integer
"getDungeon"(): $BossRoomTracker<T>
"isBossFight"(): boolean
"onDungeonPlayerAdded"(player0: $Player$$Type): void
"onDungeonPlayerRemoved"(player0: $Player$$Type): void
"openRoom"(): void
"readBossSaveData"(compoundTag0: $CompoundTag$$Type): void
"reset"(): void
"setBossFight"(boolean0: boolean): void
"setBossName"(component0: $Component$$Type): void
"setDungeon"(bossRoomTracker0: $BossRoomTracker$$Type<T>): void
"tearDownRoom"(): void
"trackDungeon"(): void
get "bossName"(): $Component
get "deathScore"(): integer
get "dungeon"(): $BossRoomTracker<T>
get "bossFight"(): boolean
set "bossFight"(value: boolean)
set "bossName"(value: $Component$$Type)
set "dungeon"(value: $BossRoomTracker$$Type<T>)
}

export namespace $BossMob {
const NON_COMBAT: $TargetingConditions
}
export abstract class $BossMob$$Static<T extends ($Mob & $BossMob<T>) = ($Mob & $BossMob<T>)> implements $BossMob<T> {
static readonly "NON_COMBAT": $TargetingConditions

}
}

declare module "com.aetherteam.aether.event.TriggerTrapEvent" {
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TriggerTrapEvent extends $BlockEvent {
constructor(player0: $Player$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type)
constructor()

public "getPlayer"(): $Player
get "player"(): $Player
}
}

declare module "com.aetherteam.aether.event.ValkyrieTeleportEvent" {
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ValkyrieTeleportEvent extends $EntityTeleportEvent {
constructor(entity0: $Entity$$Type, double1: double, double2: double, double3: double)
constructor()

}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ConcretePowderBlockAccessor" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $ConcretePowderBlockAccessor {
"aether$getConcrete"(): $BlockState
}

export namespace $ConcretePowderBlockAccessor {
const probejs$$marker: never
}
export abstract class $ConcretePowderBlockAccessor$$Static implements $ConcretePowderBlockAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.LevelRendererAccessor" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BufferBuilder$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $VertexBuffer, $VertexBuffer$$Type } from "com.mojang.blaze3d.vertex.VertexBuffer"
import { $CloudStatus, $CloudStatus$$Type } from "net.minecraft.client.CloudStatus"
import { $BufferBuilder$RenderedBuffer } from "com.mojang.blaze3d.vertex.BufferBuilder$RenderedBuffer"

export interface $LevelRendererAccessor {
"aether$getCloudBuffer"(): $VertexBuffer
"aether$getPrevCloudsType"(): $CloudStatus
"aether$getSkyBuffer"(): $VertexBuffer
"aether$getStarBuffer"(): $VertexBuffer
"aether$isGenerateClouds"(): boolean
"aether$setCloudBuffer"(vertexBuffer0: $VertexBuffer$$Type): void
"aether$setGenerateClouds"(boolean0: boolean): void
"aether$setPrevCloudsType"(cloudStatus0: $CloudStatus$$Type): void
"callBuildClouds"(bufferBuilder0: $BufferBuilder$$Type, double1: double, double2: double, double3: double, vec34: $Vec3$$Type): $BufferBuilder$RenderedBuffer
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.ButtonAccessor" {
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export interface $ButtonAccessor {
"callCreateNarrationMessage"(): $MutableComponent
}

export namespace $ButtonAccessor {
const probejs$$marker: never
}
export abstract class $ButtonAccessor$$Static implements $ButtonAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.LevelAccessor" {
import { $WritableLevelData, $WritableLevelData$$Type } from "net.minecraft.world.level.storage.WritableLevelData"

export interface $LevelAccessor {
"aether$getLevelData"(): $WritableLevelData
"aether$setLevelData"(writableLevelData0: $WritableLevelData$$Type): void
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
export abstract class $LevelAccessor$$Static implements $LevelAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.FireBlockAccessor" {
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $FireBlockAccessor {
"callSetFlammable"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockAccessor$$Static implements $FireBlockAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.PlayerModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerModelAccessor {
"aether$getSlim"(): boolean
}

export namespace $PlayerModelAccessor {
const probejs$$marker: never
}
export abstract class $PlayerModelAccessor$$Static implements $PlayerModelAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.AbstractContainerMenuAccessor" {
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"

export interface $AbstractContainerMenuAccessor {
"aether$getLastSlots"(): $NonNullList<$ItemStack>
"aether$getRemoteSlots"(): $NonNullList<$ItemStack>
"aether$setContainerId"(int0: integer): void
"aether$setMenuType"(menuType0: $MenuType$$Type<any>): void
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerMenuAccessor$$Static implements $AbstractContainerMenuAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.AbstractFurnaceBlockEntityAccessor" {
import { $Container } from "net.minecraft.world.Container"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $NonNullList, $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $RecipeManager$CachedCheck } from "net.minecraft.world.item.crafting.RecipeManager$CachedCheck"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AbstractCookingRecipe } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"

export interface $AbstractFurnaceBlockEntityAccessor {
"aether$getCookingProgress"(): integer
"aether$getCookingTotalTime"(): integer
"aether$getItems"(): $NonNullList<$ItemStack>
"aether$getLitTime"(): integer
"aether$getQuickCheck"(): $RecipeManager$CachedCheck<$Container, $AbstractCookingRecipe>
"aether$setCookingProgress"(int0: integer): void
"aether$setCookingTotalTime"(int0: integer): void
"aether$setLitDuration"(int0: integer): void
"aether$setLitTime"(int0: integer): void
"callCanBurn"(registryAccess0: $RegistryAccess$$Type, recipe1: $Recipe$$Type<any>, nonNullList2: $NonNullList$$Type<$ItemStack$$Type>, int3: integer): boolean
"callGetBurnDuration"(itemStack0: $ItemStack$$Type): integer
"callIsLit"(): boolean
}

export namespace $AbstractFurnaceBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $AbstractFurnaceBlockEntityAccessor$$Static implements $AbstractFurnaceBlockEntityAccessor {
}
}

declare module "com.aetherteam.aether.event.PlacementBanEvent$CheckBlock" {
import { $PlacementBanEvent } from "com.aetherteam.aether.event.PlacementBanEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $PlacementBanEvent$CheckBlock extends $PlacementBanEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

public "getBlockState"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "isBanned"(): boolean
public "setBanned"(boolean0: boolean): void
get "blockState"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "banned"(): boolean
set "banned"(value: boolean)
}
}

declare module "com.aetherteam.nitrogen.entity.BossRoomTracker" {
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BossMob, $BossMob$$Type } from "com.aetherteam.nitrogen.entity.BossMob"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Function$$Type } from "java.util.function.Function"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $BossRoomTracker<T extends ($Mob & $BossMob<T>) = ($Mob & $BossMob<T>)> extends $Record {
constructor(boss: T, originCoordinates: $Vec3$$Type, roomBounds: $AABB$$Type, dungeonPlayers: $List$$Type<$UUID$$Type>)

public "addAdditionalSaveData"(): $CompoundTag
public "boss"(): T
public "dungeonPlayers"(): $List<$UUID>
public "grantAdvancements"(damageSource0: $DamageSource$$Type): void
public "isBossWithinRoom"(): boolean
public "isPlayerTracked"(player0: $Player$$Type): boolean
public "isPlayerWithinRoom"(entity0: $Entity$$Type): boolean
public "isPlayerWithinRoomInterior"(entity0: $Entity$$Type): boolean
public "modifyRoom"(function0: $Function$$Type<$BlockState$$Type, $BlockState>): void
public "originCoordinates"(): $Vec3
public static "readAdditionalSaveData"<T extends ($Mob & $BossMob<T>)>(compoundTag0: $CompoundTag$$Type, t1: T): $BossRoomTracker<T>
public "roomBounds"(): $AABB
public "trackPlayers"(): void
get "bossWithinRoom"(): boolean
}
}

declare module "com.aetherteam.aether.event.BossFightEvent$RemovePlayer" {
import { $BossFightEvent } from "com.aetherteam.aether.event.BossFightEvent"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BossRoomTracker$$Type } from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$RemovePlayer extends $BossFightEvent {
constructor(entity0: $Entity$$Type, bossRoomTracker1: $BossRoomTracker$$Type<any>, serverPlayer2: $ServerPlayer$$Type)
constructor()

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.EntityAccessor" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $BlockUtil$FoundRectangle$$Type } from "net.minecraft.BlockUtil$FoundRectangle"

export interface $EntityAccessor {
"aether$getPortalEntrancePos"(): $BlockPos
"aether$getRandom"(): $RandomSource
"aether$isIsInsidePortal"(): boolean
"aether$setPortalEntrancePos"(blockPos0: $BlockPos$$Type): void
"callGetRelativePortalPosition"(axis0: $Direction$Axis$$Type, foundRectangle1: $BlockUtil$FoundRectangle$$Type): $Vec3
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "com.aetherteam.aether.event.BossFightEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $BossRoomTracker, $BossRoomTracker$$Type } from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent extends $EntityEvent {
constructor(entity0: $Entity$$Type, bossRoomTracker1: $BossRoomTracker$$Type<any>)
constructor()

public "getDungeon"(): $BossRoomTracker<any>
get "dungeon"(): $BossRoomTracker<any>
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.StoredUserListAccessor" {
import { $StoredUserEntry, $StoredUserEntry$$Type } from "net.minecraft.server.players.StoredUserEntry"

export interface $StoredUserListAccessor {
"callContains"<K, V extends $StoredUserEntry<K>>(k0: K): boolean
}

export namespace $StoredUserListAccessor {
const probejs$$marker: never
}
export abstract class $StoredUserListAccessor$$Static implements $StoredUserListAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.SpreadingSnowyDirtBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpreadingSnowyDirtBlockAccessor {
}

export namespace $SpreadingSnowyDirtBlockAccessor {
const probejs$$marker: never
}
export abstract class $SpreadingSnowyDirtBlockAccessor$$Static implements $SpreadingSnowyDirtBlockAccessor {
}
}

declare module "com.aetherteam.cumulus.mixin.mixins.client.accessor.CreateWorldScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CreateWorldScreenAccessor {
}

export namespace $CreateWorldScreenAccessor {
const probejs$$marker: never
}
export abstract class $CreateWorldScreenAccessor$$Static implements $CreateWorldScreenAccessor {
}
}

declare module "com.aetherteam.aether.event.FreezeEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $FreezeEvent extends $Event {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type)
constructor()

public "getFrozenBlock"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getPriorBlock"(): $BlockState
public "setFrozenBlock"(blockState0: $BlockState$$Type): void
get "frozenBlock"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "priorBlock"(): $BlockState
set "frozenBlock"(value: $BlockState$$Type)
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.WorldGenRegionAccessor" {
import { $StructureManager } from "net.minecraft.world.level.StructureManager"

export interface $WorldGenRegionAccessor {
"aether$getStructureManager"(): $StructureManager
}

export namespace $WorldGenRegionAccessor {
const probejs$$marker: never
}
export abstract class $WorldGenRegionAccessor$$Static implements $WorldGenRegionAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.BlockColorsAccessor" {
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $Map } from "java.util.Map"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $BlockColorsAccessor {
"aether$getBlockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
}

export namespace $BlockColorsAccessor {
const probejs$$marker: never
}
export abstract class $BlockColorsAccessor$$Static implements $BlockColorsAccessor {
}
}

declare module "com.aetherteam.aether.event.PlacementBanEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $PlacementBanEvent extends $Event {
constructor()

}
}

declare module "com.aetherteam.aether.event.FreezeEvent$FreezeFromBlock" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FreezeEvent } from "com.aetherteam.aether.event.FreezeEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $FreezeEvent$FreezeFromBlock extends $FreezeEvent {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockState4: $BlockState$$Type, blockState5: $BlockState$$Type)

public "getSourceBlock"(): $BlockState
public "getSourcePos"(): $BlockPos
get "sourceBlock"(): $BlockState
get "sourcePos"(): $BlockPos
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {
"callUpdateEffectVisibility"(): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "com.aetherteam.aether.event.PlacementBanEvent$CheckItem" {
import { $PlacementBanEvent } from "com.aetherteam.aether.event.PlacementBanEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $PlacementBanEvent$CheckItem extends $PlacementBanEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type)
constructor()

public "getItemStack"(): $ItemStack
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "isBanned"(): boolean
public "setBanned"(boolean0: boolean): void
get "itemStack"(): $ItemStack
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "banned"(): boolean
set "banned"(value: boolean)
}
}

declare module "com.aetherteam.cumulus.mixin.mixins.client.accessor.SplashRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SplashRendererAccessor {
"cumulus$getSplash"(): string
"cumulus$setSplash"(string0: string): void
}

export namespace $SplashRendererAccessor {
const probejs$$marker: never
}
export abstract class $SplashRendererAccessor$$Static implements $SplashRendererAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.BossHealthOverlayAccessor" {
import { $LerpingBossEvent } from "net.minecraft.client.gui.components.LerpingBossEvent"
import { $Map } from "java.util.Map"
import { $UUID } from "java.util.UUID"

export interface $BossHealthOverlayAccessor {
"getEvents"(): $Map<$UUID, $LerpingBossEvent>
get "events"(): $Map<$UUID, $LerpingBossEvent>
}

export namespace $BossHealthOverlayAccessor {
const probejs$$marker: never
}
export abstract class $BossHealthOverlayAccessor$$Static implements $BossHealthOverlayAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.HoeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HoeItemAccessor {
}

export namespace $HoeItemAccessor {
const probejs$$marker: never
}
export abstract class $HoeItemAccessor$$Static implements $HoeItemAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BoatAccessor" {
import { $Boat$Status } from "net.minecraft.world.entity.vehicle.Boat$Status"

export interface $BoatAccessor {
"aether$getDeltaRotation"(): float
"aether$getStatus"(): $Boat$Status
"aether$setDeltaRotation"(float0: float): void
"aether$setLastYd"(double0: double): void
}

export namespace $BoatAccessor {
const probejs$$marker: never
}
export abstract class $BoatAccessor$$Static implements $BoatAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BaseSpawnerAccessor" {
import { $SpawnData } from "net.minecraft.world.level.SpawnData"

export interface $BaseSpawnerAccessor {
"aether$getNextSpawnData"(): $SpawnData
}

export namespace $BaseSpawnerAccessor {
const probejs$$marker: never
}
export abstract class $BaseSpawnerAccessor$$Static implements $BaseSpawnerAccessor {
}
}

declare module "com.aetherteam.aether.event.FreezeEvent$FreezeFromItem" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FreezeEvent } from "com.aetherteam.aether.event.FreezeEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $FreezeEvent$FreezeFromItem extends $FreezeEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, itemStack4: $ItemStack$$Type)
constructor()

public "getSourceStack"(): $ItemStack
get "sourceStack"(): $ItemStack
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ServerLevelAccessor" {
import { $ServerLevelData, $ServerLevelData$$Type } from "net.minecraft.world.level.storage.ServerLevelData"

export interface $ServerLevelAccessor {
"aether$getServerLevelData"(): $ServerLevelData
"aether$setServerLevelData"(serverLevelData0: $ServerLevelData$$Type): void
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export abstract class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ZombifiedPiglinAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombifiedPiglinAccessor {
"callAlertOthers"(): void
}

export namespace $ZombifiedPiglinAccessor {
const probejs$$marker: never
}
export abstract class $ZombifiedPiglinAccessor$$Static implements $ZombifiedPiglinAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.GuiAccessor" {
import { $RandomSource } from "net.minecraft.util.RandomSource"

export interface $GuiAccessor {
"aether$getHealthBlinkTime"(): long
"aether$getLastHealthTime"(): long
"aether$getRandom"(): $RandomSource
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
export abstract class $GuiAccessor$$Static implements $GuiAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BlockLootAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockLootAccessor {
}

export namespace $BlockLootAccessor {
const probejs$$marker: never
}
export abstract class $BlockLootAccessor$$Static implements $BlockLootAccessor {
}
}

declare module "com.aetherteam.aether.event.BossFightEvent$Start" {
import { $BossFightEvent } from "com.aetherteam.aether.event.BossFightEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BossRoomTracker$$Type } from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$Start extends $BossFightEvent {
constructor(entity0: $Entity$$Type, bossRoomTracker1: $BossRoomTracker$$Type<any>)
constructor()

}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.ItemInHandRendererAccessor" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ItemInHandRendererAccessor {
"aether$getMainHandItem"(): $ItemStack
"aether$getOffHandItem"(): $ItemStack
"callCalculateMapTilt"(float0: float): float
"callRenderMap"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, itemStack3: $ItemStack$$Type): void
}

export namespace $ItemInHandRendererAccessor {
const probejs$$marker: never
}
export abstract class $ItemInHandRendererAccessor$$Static implements $ItemInHandRendererAccessor {
}
}

declare module "com.aetherteam.aether.mixin.mixins.client.accessor.EntityRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityRendererAccessor {
"aether$getShadowRadius"(): float
"aether$setShadowRadius"(float0: float): void
}

export namespace $EntityRendererAccessor {
const probejs$$marker: never
}
export abstract class $EntityRendererAccessor$$Static implements $EntityRendererAccessor {
}
}

declare module "com.aetherteam.aether.event.ItemUseConvertEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ItemUseConvertEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, itemStack3: $ItemStack$$Type, blockState4: $BlockState$$Type, blockState5: $BlockState$$Type, recipeType6: $RecipeType$$Type<any>)
constructor()

public "getItemStack"(): $ItemStack
public "getLevel"(): $LevelAccessor
public "getNewBlockState"(): $BlockState
public "getOldBlockState"(): $BlockState
public "getPos"(): $BlockPos
public "getRecipeType"(): $RecipeType<any>
public "setNewBlockState"(blockState0: $BlockState$$Type): void
get "itemStack"(): $ItemStack
get "level"(): $LevelAccessor
get "newBlockState"(): $BlockState
get "oldBlockState"(): $BlockState
get "pos"(): $BlockPos
get "recipeType"(): $RecipeType<any>
set "newBlockState"(value: $BlockState$$Type)
}
}

