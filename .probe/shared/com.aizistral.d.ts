declare module "com.aizistral.enigmaticlegacy.api.events.SummonedEntityEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SummonedEntityEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, entity1: $Entity$$Type)
constructor()

public "getSummonedEntity"(): $Entity
get "summonedEntity"(): $Entity
}
}

declare module "com.aizistral.enigmaticlegacy.api.events.EnterBlockEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $EnterBlockEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, blockState1: $BlockState$$Type)
constructor()

public "getBlockState"(): $BlockState
get "blockState"(): $BlockState
}
}

declare module "com.aizistral.enigmaticlegacy.mixin.AccessorAbstractArrowEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorAbstractArrowEntity {
"clearHitEntities"(): void
}

export namespace $AccessorAbstractArrowEntity {
const probejs$$marker: never
}
export abstract class $AccessorAbstractArrowEntity$$Static implements $AccessorAbstractArrowEntity {
}
}

declare module "com.aizistral.enigmaticlegacy.api.quack.IAbyssalHeartBearer" {
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IAbyssalHeartBearer {
"dropAbyssalHeart"(player0: $Player$$Type): void
}

export namespace $IAbyssalHeartBearer {
const probejs$$marker: never
}
export abstract class $IAbyssalHeartBearer$$Static implements $IAbyssalHeartBearer {
}
}

declare module "com.aizistral.enigmaticlegacy.api.quack.IProperShieldUser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProperShieldUser {
"isActuallyReallyBlocking"(): boolean
get "actuallyReallyBlocking"(): boolean
}

export namespace $IProperShieldUser {
const probejs$$marker: never
}
export abstract class $IProperShieldUser$$Static implements $IProperShieldUser {
}
}

declare module "com.aizistral.enigmaticlegacy.api.events.EndPortalActivatedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $EndPortalActivatedEvent extends $PlayerEvent {
constructor(player0: $Player$$Type, blockPos1: $BlockPos$$Type)
constructor()

public "getPos"(): $BlockPos
get "pos"(): $BlockPos
}
}

