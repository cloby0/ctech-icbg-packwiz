declare module "net.minecraftforge.event.level.ChunkWatchEvent$UnWatch" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ChunkWatchEvent } from "net.minecraftforge.event.level.ChunkWatchEvent"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ChunkWatchEvent$UnWatch extends $ChunkWatchEvent {
constructor(serverPlayer0: $ServerPlayer$$Type, chunkPos1: $ChunkPos$$Type, serverLevel2: $ServerLevel$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.PistonEvent$Post" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $PistonEvent$PistonMoveType$$Type } from "net.minecraftforge.event.level.PistonEvent$PistonMoveType"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $PistonEvent } from "net.minecraftforge.event.level.PistonEvent"

export class $PistonEvent$Post extends $PistonEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, pistonMoveType3: $PistonEvent$PistonMoveType$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.ChunkEvent$Unload" {
import { $ChunkEvent } from "net.minecraftforge.event.level.ChunkEvent"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ChunkEvent$Unload extends $ChunkEvent {
constructor(chunkAccess0: $ChunkAccess$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.SaplingGrowTreeEvent" {
import { $ConfiguredFeature, $ConfiguredFeature$$Type } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $SaplingGrowTreeEvent extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, holder3: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>)
constructor()

public "getFeature"(): $Holder<$ConfiguredFeature<any, any>>
public "getPos"(): $BlockPos
public "getRandomSource"(): $RandomSource
public "setFeature"(holder0: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>): void
public "setFeature"(resourceKey0: $ResourceKey$$Type<$ConfiguredFeature<any, any>>): void
get "feature"(): $Holder<$ConfiguredFeature<any, any>>
get "pos"(): $BlockPos
get "randomSource"(): $RandomSource
set "feature"(value: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>)
set "feature"(value: $ResourceKey$$Type<$ConfiguredFeature<any, any>>)
}
}

declare module "net.minecraftforge.event.level.NoteBlockEvent$Change" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $NoteBlockEvent$Octave } from "net.minecraftforge.event.level.NoteBlockEvent$Octave"
import { $NoteBlockEvent$Note } from "net.minecraftforge.event.level.NoteBlockEvent$Note"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $NoteBlockEvent } from "net.minecraftforge.event.level.NoteBlockEvent"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $NoteBlockEvent$Change extends $NoteBlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, int3: integer, int4: integer)

public "getOldNote"(): $NoteBlockEvent$Note
public "getOldOctave"(): $NoteBlockEvent$Octave
get "oldNote"(): $NoteBlockEvent$Note
get "oldOctave"(): $NoteBlockEvent$Octave
}
}

declare module "net.minecraftforge.event.level.LevelEvent$PotentialSpawns" {
import { $List } from "java.util.List"
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $WeightedRandomList$$Type } from "net.minecraft.util.random.WeightedRandomList"

export class $LevelEvent$PotentialSpawns extends $LevelEvent {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, mobCategory1: $MobCategory$$Type, blockPos2: $BlockPos$$Type, weightedRandomList3: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)

public "addSpawnerData"(spawnerData0: $MobSpawnSettings$SpawnerData$$Type): void
public "getMobCategory"(): $MobCategory
public "getPos"(): $BlockPos
public "getSpawnerDataList"(): $List<$MobSpawnSettings$SpawnerData>
public "removeSpawnerData"(spawnerData0: $MobSpawnSettings$SpawnerData$$Type): boolean
get "mobCategory"(): $MobCategory
get "pos"(): $BlockPos
get "spawnerDataList"(): $List<$MobSpawnSettings$SpawnerData>
}
}

declare module "net.minecraftforge.event.level.ExplosionEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Explosion, $Explosion$$Type } from "net.minecraft.world.level.Explosion"

export class $ExplosionEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, explosion1: $Explosion$$Type)

public "getExplosion"(): $Explosion
public "getLevel"(): $Level
get "explosion"(): $Explosion
get "level"(): $Level
}
}

declare module "net.minecraftforge.event.level.ChunkEvent$Load" {
import { $ChunkEvent } from "net.minecraftforge.event.level.ChunkEvent"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ChunkEvent$Load extends $ChunkEvent {
constructor(chunkAccess0: $ChunkAccess$$Type, boolean1: boolean)
constructor()

public "isNewChunk"(): boolean
get "newChunk"(): boolean
}
}

declare module "net.minecraftforge.event.level.ExplosionEvent$Start" {
import { $ExplosionEvent } from "net.minecraftforge.event.level.ExplosionEvent"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"

export class $ExplosionEvent$Start extends $ExplosionEvent {
constructor(level0: $Level$$Type, explosion1: $Explosion$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent" {
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$FluidPlaceBlockEvent extends $BlockEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type)
constructor()

public "getLiquidPos"(): $BlockPos
public "getNewState"(): $BlockState
public "getOriginalState"(): $BlockState
public "setNewState"(blockState0: $BlockState$$Type): void
get "liquidPos"(): $BlockPos
get "newState"(): $BlockState
get "originalState"(): $BlockState
set "newState"(value: $BlockState$$Type)
}
}

declare module "net.minecraftforge.event.level.PistonEvent" {
import { $PistonStructureResolver } from "net.minecraft.world.level.block.piston.PistonStructureResolver"
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $PistonEvent$PistonMoveType, $PistonEvent$PistonMoveType$$Type } from "net.minecraftforge.event.level.PistonEvent$PistonMoveType"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $PistonEvent extends $BlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, pistonMoveType3: $PistonEvent$PistonMoveType$$Type)

public "getDirection"(): $Direction
public "getFaceOffsetPos"(): $BlockPos
public "getPistonMoveType"(): $PistonEvent$PistonMoveType
public "getStructureHelper"(): $PistonStructureResolver
get "direction"(): $Direction
get "faceOffsetPos"(): $BlockPos
get "pistonMoveType"(): $PistonEvent$PistonMoveType
get "structureHelper"(): $PistonStructureResolver
}
}

declare module "net.minecraftforge.event.level.PistonEvent$PistonMoveType" {
import { $Enum } from "java.lang.Enum"

export class $PistonEvent$PistonMoveType extends $Enum<$PistonEvent$PistonMoveType> {
static readonly "EXTEND": $PistonEvent$PistonMoveType
static readonly "RETRACT": $PistonEvent$PistonMoveType
readonly "isExtend": boolean

public static "valueOf"(string0: string): $PistonEvent$PistonMoveType
public static "values"(): $PistonEvent$PistonMoveType[]
}
}

declare module "net.minecraftforge.event.level.SleepFinishedTimeEvent" {
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $SleepFinishedTimeEvent extends $LevelEvent {
constructor(serverLevel0: $ServerLevel$$Type, long1: long, long2: long)
constructor()

public "getNewTime"(): long
public "setTimeAddition"(long0: long): boolean
get "newTime"(): long
set "timeAddition"(value: long)
}
}

declare module "net.minecraftforge.event.level.BlockEvent$CropGrowEvent$Post" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEvent$CropGrowEvent } from "net.minecraftforge.event.level.BlockEvent$CropGrowEvent"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlockEvent$CropGrowEvent$Post extends $BlockEvent$CropGrowEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type)
constructor()

public "getOriginalState"(): $BlockState
get "originalState"(): $BlockState
}
}

declare module "net.minecraftforge.event.level.NoteBlockEvent$Octave" {
import { $Enum } from "java.lang.Enum"

export class $NoteBlockEvent$Octave extends $Enum<$NoteBlockEvent$Octave> {
static readonly "HIGH": $NoteBlockEvent$Octave
static readonly "LOW": $NoteBlockEvent$Octave
static readonly "MID": $NoteBlockEvent$Octave

public static "valueOf"(string0: string): $NoteBlockEvent$Octave
public static "values"(): $NoteBlockEvent$Octave[]
}
}

declare module "net.minecraftforge.event.level.ChunkDataEvent" {
import { $ChunkEvent } from "net.minecraftforge.event.level.ChunkEvent"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ChunkDataEvent extends $ChunkEvent {
constructor(chunkAccess0: $ChunkAccess$$Type, compoundTag1: $CompoundTag$$Type)
constructor()
constructor(chunkAccess0: $ChunkAccess$$Type, levelAccessor1: $LevelAccessor$$Type, compoundTag2: $CompoundTag$$Type)

public "getData"(): $CompoundTag
get "data"(): $CompoundTag
}
}

declare module "net.minecraftforge.event.level.ChunkWatchEvent$Watch" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $LevelChunk, $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $ChunkWatchEvent } from "net.minecraftforge.event.level.ChunkWatchEvent"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ChunkWatchEvent$Watch extends $ChunkWatchEvent {
constructor(serverPlayer0: $ServerPlayer$$Type, levelChunk1: $LevelChunk$$Type, serverLevel2: $ServerLevel$$Type)
constructor()

public "getChunk"(): $LevelChunk
get "chunk"(): $LevelChunk
}
}

declare module "net.minecraftforge.event.level.ChunkTicketLevelUpdatedEvent" {
import { $ChunkHolder, $ChunkHolder$$Type } from "net.minecraft.server.level.ChunkHolder"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ChunkTicketLevelUpdatedEvent extends $Event {
constructor(serverLevel0: $ServerLevel$$Type, long1: long, int2: integer, int3: integer, chunkHolder4: $ChunkHolder$$Type)
constructor()

public "getChunkHolder"(): $ChunkHolder
public "getChunkPos"(): long
public "getLevel"(): $ServerLevel
public "getNewTicketLevel"(): integer
public "getOldTicketLevel"(): integer
get "chunkHolder"(): $ChunkHolder
get "chunkPos"(): long
get "level"(): $ServerLevel
get "newTicketLevel"(): integer
get "oldTicketLevel"(): integer
}
}

declare module "net.minecraftforge.event.level.LevelEvent$Save" {
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$Save extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.LevelEvent$Load" {
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$Load extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.BlockEvent$EntityMultiPlaceEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockSnapshot, $BlockSnapshot$$Type } from "net.minecraftforge.common.util.BlockSnapshot"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEvent$EntityPlaceEvent } from "net.minecraftforge.event.level.BlockEvent$EntityPlaceEvent"

export class $BlockEvent$EntityMultiPlaceEvent extends $BlockEvent$EntityPlaceEvent {
constructor(list0: $List$$Type<$BlockSnapshot$$Type>, blockState1: $BlockState$$Type, entity2: $Entity$$Type)
constructor()

public "getReplacedBlockSnapshots"(): $List<$BlockSnapshot>
get "replacedBlockSnapshots"(): $List<$BlockSnapshot>
}
}

declare module "net.minecraftforge.event.level.ChunkWatchEvent" {
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ChunkWatchEvent extends $Event {
constructor(serverPlayer0: $ServerPlayer$$Type, chunkPos1: $ChunkPos$$Type, serverLevel2: $ServerLevel$$Type)
constructor()

public "getLevel"(): $ServerLevel
public "getPlayer"(): $ServerPlayer
public "getPos"(): $ChunkPos
get "level"(): $ServerLevel
get "player"(): $ServerPlayer
get "pos"(): $ChunkPos
}
}

declare module "net.minecraftforge.event.level.BlockEvent$CropGrowEvent" {
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlockEvent$CropGrowEvent extends $BlockEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.BlockEvent$CropGrowEvent$Pre" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEvent$CropGrowEvent } from "net.minecraftforge.event.level.BlockEvent$CropGrowEvent"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlockEvent$CropGrowEvent$Pre extends $BlockEvent$CropGrowEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.BlockEvent$BlockToolModificationEvent" {
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $ToolAction, $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $UseOnContext, $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Player } from "net.minecraft.world.entity.player.Player"

export class $BlockEvent$BlockToolModificationEvent extends $BlockEvent {
constructor(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean)
constructor()

public "getContext"(): $UseOnContext
public "getFinalState"(): $BlockState
public "getHeldItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getToolAction"(): $ToolAction
public "isSimulated"(): boolean
public "setFinalState"(blockState0: $BlockState$$Type): void
get "context"(): $UseOnContext
get "finalState"(): $BlockState
get "heldItemStack"(): $ItemStack
get "player"(): $Player
get "toolAction"(): $ToolAction
get "simulated"(): boolean
set "finalState"(value: $BlockState$$Type)
}
}

declare module "net.minecraftforge.event.level.BlockEvent$BreakEvent" {
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $BlockEvent$BreakEvent extends $BlockEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, player3: $Player$$Type)
constructor()

public "getExpToDrop"(): integer
public "getPlayer"(): $Player
public "setExpToDrop"(int0: integer): void
get "expToDrop"(): integer
get "player"(): $Player
set "expToDrop"(value: integer)
}
}

declare module "net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent" {
import { $PortalShape, $PortalShape$$Type } from "net.minecraft.world.level.portal.PortalShape"
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$PortalSpawnEvent extends $BlockEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, portalShape3: $PortalShape$$Type)
constructor()

public "getPortalSize"(): $PortalShape
get "portalSize"(): $PortalShape
}
}

declare module "net.minecraftforge.event.level.ExplosionEvent$Detonate" {
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ExplosionEvent } from "net.minecraftforge.event.level.ExplosionEvent"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"

export class $ExplosionEvent$Detonate extends $ExplosionEvent {
constructor(level0: $Level$$Type, explosion1: $Explosion$$Type, list2: $List$$Type<$Entity$$Type>)
constructor()

public "getAffectedBlocks"(): $List<$BlockPos>
public "getAffectedEntities"(): $List<$Entity>
get "affectedBlocks"(): $List<$BlockPos>
get "affectedEntities"(): $List<$Entity>
}
}

declare module "net.minecraftforge.event.level.PistonEvent$Pre" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $PistonEvent$PistonMoveType$$Type } from "net.minecraftforge.event.level.PistonEvent$PistonMoveType"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $PistonEvent } from "net.minecraftforge.event.level.PistonEvent"

export class $PistonEvent$Pre extends $PistonEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, pistonMoveType3: $PistonEvent$PistonMoveType$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.ChunkEvent" {
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ChunkEvent extends $LevelEvent {
constructor(chunkAccess0: $ChunkAccess$$Type)
constructor()
constructor(chunkAccess0: $ChunkAccess$$Type, levelAccessor1: $LevelAccessor$$Type)

public "getChunk"(): $ChunkAccess
get "chunk"(): $ChunkAccess
}
}

declare module "net.minecraftforge.event.level.NoteBlockEvent$Play" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $NoteBlockInstrument, $NoteBlockInstrument$$Type } from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import { $NoteBlockEvent } from "net.minecraftforge.event.level.NoteBlockEvent"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $NoteBlockEvent$Play extends $NoteBlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, int3: integer, noteBlockInstrument4: $NoteBlockInstrument$$Type)

public "getInstrument"(): $NoteBlockInstrument
public "setInstrument"(noteBlockInstrument0: $NoteBlockInstrument$$Type): void
get "instrument"(): $NoteBlockInstrument
set "instrument"(value: $NoteBlockInstrument$$Type)
}
}

declare module "net.minecraftforge.event.level.LevelEvent" {
import { $EventHandlerImplCommon$LevelEventAttachment } from "dev.architectury.event.forge.EventHandlerImplCommon$LevelEventAttachment"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

public "architectury$attachLevel"(level: $LevelAccessor$$Type): void
public "architectury$getAttachedLevel"(): $LevelAccessor
public "getLevel"(): $LevelAccessor
get "level"(): $LevelAccessor
}
}

declare module "net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent" {
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EnumSet, $EnumSet$$Type } from "java.util.EnumSet"

export class $BlockEvent$NeighborNotifyEvent extends $BlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, enumSet3: $EnumSet$$Type<$Direction$$Type>, boolean4: boolean)

public "getForceRedstoneUpdate"(): boolean
public "getNotifiedSides"(): $EnumSet<$Direction>
get "forceRedstoneUpdate"(): boolean
get "notifiedSides"(): $EnumSet<$Direction>
}
}

declare module "net.minecraftforge.event.level.BlockEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $BlockEvent extends $Event {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "net.minecraftforge.event.level.NoteBlockEvent" {
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $NoteBlockEvent$Octave, $NoteBlockEvent$Octave$$Type } from "net.minecraftforge.event.level.NoteBlockEvent$Octave"
import { $NoteBlockEvent$Note, $NoteBlockEvent$Note$$Type } from "net.minecraftforge.event.level.NoteBlockEvent$Note"

export class $NoteBlockEvent extends $BlockEvent {
constructor()

public "getNote"(): $NoteBlockEvent$Note
public "getOctave"(): $NoteBlockEvent$Octave
public "getVanillaNoteId"(): integer
public "setNote"(note0: $NoteBlockEvent$Note$$Type, octave1: $NoteBlockEvent$Octave$$Type): void
get "note"(): $NoteBlockEvent$Note
get "octave"(): $NoteBlockEvent$Octave
get "vanillaNoteId"(): integer
}
}

declare module "net.minecraftforge.event.level.AlterGroundEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelSimulatedReader, $LevelSimulatedReader$$Type } from "net.minecraft.world.level.LevelSimulatedReader"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $AlterGroundEvent extends $Event {
constructor(levelSimulatedReader0: $LevelSimulatedReader$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type)
constructor()

public "getLevel"(): $LevelSimulatedReader
public "getNewAlteredState"(): $BlockState
public "getOriginalAlteredState"(): $BlockState
public "getPos"(): $BlockPos
public "getRandom"(): $RandomSource
public "setNewAlteredState"(blockState0: $BlockState$$Type): void
get "level"(): $LevelSimulatedReader
get "newAlteredState"(): $BlockState
get "originalAlteredState"(): $BlockState
get "pos"(): $BlockPos
get "random"(): $RandomSource
set "newAlteredState"(value: $BlockState$$Type)
}
}

declare module "net.minecraftforge.event.level.LevelEvent$CreateSpawnPosition" {
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ServerLevelData, $ServerLevelData$$Type } from "net.minecraft.world.level.storage.ServerLevelData"

export class $LevelEvent$CreateSpawnPosition extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, serverLevelData1: $ServerLevelData$$Type)
constructor()

public "getSettings"(): $ServerLevelData
get "settings"(): $ServerLevelData
}
}

declare module "net.minecraftforge.event.level.NoteBlockEvent$Note" {
import { $Enum } from "java.lang.Enum"

export class $NoteBlockEvent$Note extends $Enum<$NoteBlockEvent$Note> {
static readonly "A": $NoteBlockEvent$Note
static readonly "A_SHARP": $NoteBlockEvent$Note
static readonly "B": $NoteBlockEvent$Note
static readonly "C": $NoteBlockEvent$Note
static readonly "C_SHARP": $NoteBlockEvent$Note
static readonly "D": $NoteBlockEvent$Note
static readonly "D_SHARP": $NoteBlockEvent$Note
static readonly "E": $NoteBlockEvent$Note
static readonly "F": $NoteBlockEvent$Note
static readonly "F_SHARP": $NoteBlockEvent$Note
static readonly "G": $NoteBlockEvent$Note
static readonly "G_SHARP": $NoteBlockEvent$Note

public static "valueOf"(string0: string): $NoteBlockEvent$Note
public static "values"(): $NoteBlockEvent$Note[]
}
}

declare module "net.minecraftforge.event.level.BlockEvent$EntityPlaceEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockSnapshot, $BlockSnapshot$$Type } from "net.minecraftforge.common.util.BlockSnapshot"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$EntityPlaceEvent extends $BlockEvent {
constructor(blockSnapshot0: $BlockSnapshot$$Type, blockState1: $BlockState$$Type, entity2: $Entity$$Type)
constructor()

public "getBlockSnapshot"(): $BlockSnapshot
public "getEntity"(): $Entity
public "getPlacedAgainst"(): $BlockState
public "getPlacedBlock"(): $BlockState
get "blockSnapshot"(): $BlockSnapshot
get "entity"(): $Entity
get "placedAgainst"(): $BlockState
get "placedBlock"(): $BlockState
}
}

declare module "net.minecraftforge.event.level.BlockEvent$CreateFluidSourceEvent" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlockEvent$CreateFluidSourceEvent extends $Event {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "net.minecraftforge.event.level.ChunkDataEvent$Load" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ChunkDataEvent } from "net.minecraftforge.event.level.ChunkDataEvent"
import { $ChunkStatus$ChunkType, $ChunkStatus$ChunkType$$Type } from "net.minecraft.world.level.chunk.ChunkStatus$ChunkType"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ChunkDataEvent$Load extends $ChunkDataEvent {
constructor(chunkAccess0: $ChunkAccess$$Type, compoundTag1: $CompoundTag$$Type, chunkType2: $ChunkStatus$ChunkType$$Type)
constructor()

public "getStatus"(): $ChunkStatus$ChunkType
get "status"(): $ChunkStatus$ChunkType
}
}

declare module "net.minecraftforge.event.level.LevelEvent$Unload" {
import { $LevelEvent } from "net.minecraftforge.event.level.LevelEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$Unload extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.ChunkDataEvent$Save" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ChunkDataEvent } from "net.minecraftforge.event.level.ChunkDataEvent"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ChunkDataEvent$Save extends $ChunkDataEvent {
constructor(chunkAccess0: $ChunkAccess$$Type, levelAccessor1: $LevelAccessor$$Type, compoundTag2: $CompoundTag$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.level.BlockEvent$FarmlandTrampleEvent" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlockEvent$FarmlandTrampleEvent extends $BlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, float3: float, entity4: $Entity$$Type)

public "getEntity"(): $Entity
public "getFallDistance"(): float
get "entity"(): $Entity
get "fallDistance"(): float
}
}

