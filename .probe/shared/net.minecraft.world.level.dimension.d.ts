declare module "net.minecraft.world.level.dimension.DimensionType$MonsterSettings" {
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Record } from "java.lang.Record"

export class $DimensionType$MonsterSettings extends $Record {
static readonly "CODEC": $MapCodec<$DimensionType$MonsterSettings>

constructor(boolean0: boolean, boolean1: boolean, intProvider2: $IntProvider$$Type, int3: integer)

public "hasRaids"(): boolean
public "monsterSpawnBlockLightLimit"(): integer
public "monsterSpawnLightTest"(): $IntProvider
public "piglinSafe"(): boolean
}
}

declare module "net.minecraft.world.level.dimension.LevelStem" {
import { $ChunkGenerator, $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Record } from "java.lang.Record"
import { $DimensionType, $DimensionType$$Type } from "net.minecraft.world.level.dimension.DimensionType"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export class $LevelStem extends $Record {
static readonly "CODEC": $Codec<$LevelStem>
static readonly "END": $ResourceKey<$LevelStem>
static readonly "NETHER": $ResourceKey<$LevelStem>
static readonly "OVERWORLD": $ResourceKey<$LevelStem>

constructor(holder0: $Holder$$Type<$DimensionType$$Type>, chunkGenerator1: $ChunkGenerator$$Type)

public "generator"(): $ChunkGenerator
public "type"(): $Holder<$DimensionType>
}
}

declare module "net.minecraft.world.level.dimension.end.EndDragonFight" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $EndCrystal$$Type } from "net.minecraft.world.entity.boss.enderdragon.EndCrystal"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $EnderDragon$$Type } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $EndDragonFight$Data, $EndDragonFight$Data$$Type } from "net.minecraft.world.level.dimension.end.EndDragonFight$Data"
import { $UUID } from "java.util.UUID"
import { $EndDragonFightMixin } from "wootrevived.woot.mixins.impl.EndDragonFightMixin"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $EndDragonFight implements $EndDragonFightMixin {
static readonly "ARENA_TICKET_LEVEL": integer
static readonly "DRAGON_SPAWN_Y": integer
static readonly "TIME_BETWEEN_PLAYER_SCANS": integer

constructor(serverLevel0: $ServerLevel$$Type, long1: long, data2: $EndDragonFight$Data$$Type)
constructor(serverLevel0: $ServerLevel$$Type, long1: long, data2: $EndDragonFight$Data$$Type, blockPos3: $BlockPos$$Type)

public "addPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "getCrystalsAlive"(): integer
public "getDragonUUID"(): $UUID
public "hasPreviouslyKilledDragon"(): boolean
public "onCrystalDestroyed"(endCrystal0: $EndCrystal$$Type, damageSource1: $DamageSource$$Type): void
/** @deprecated */
public "removeAllGateways"(): void
public "removePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "resetSpikeCrystals"(): void
public "saveData"(): $EndDragonFight$Data
public "setDragonKilled"(enderDragon0: $EnderDragon$$Type): void
/** @deprecated */
public "skipArenaLoadedCheck"(): void
public "tick"(): void
public "tryRespawn"(): void
public "updateDragon"(enderDragon0: $EnderDragon$$Type): void
get "crystalsAlive"(): integer
get "dragonUUID"(): $UUID
set "dragonKilled"(value: $EnderDragon$$Type)
}
}

declare module "net.minecraft.world.level.dimension.end.EndDragonFight$Data" {
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $EndDragonFight$Data extends $Record {
static readonly "CODEC": $Codec<$EndDragonFight$Data>
static readonly "DEFAULT": $EndDragonFight$Data

constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: $Optional$$Type<$UUID$$Type>, exitPortalLocation: $Optional$$Type<$BlockPos$$Type>, gateways: $Optional$$Type<$List$$Type<integer>>)

public "dragonKilled"(): boolean
public "dragonUUID"(): $Optional<$UUID>
public "exitPortalLocation"(): $Optional<$BlockPos>
public "gateways"(): $Optional<$List<integer>>
public "isRespawning"(): boolean
public "needsStateScanning"(): boolean
public "previouslyKilled"(): boolean
get "respawning"(): boolean
}
}

