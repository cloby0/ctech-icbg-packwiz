declare module "corgitaco.corgilib.entity.IsInsideStructureTracker" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $IsInsideStructureTracker$IsInside, $IsInsideStructureTracker$IsInside$$Type } from "corgitaco.corgilib.entity.IsInsideStructureTracker$IsInside"

export class $IsInsideStructureTracker {
constructor()

public "getTracker"(): $IsInsideStructureTracker$IsInside
public "setInside"(world: $Level$$Type, entity: $Entity$$Type, isInside: $IsInsideStructureTracker$IsInside$$Type): void
get "tracker"(): $IsInsideStructureTracker$IsInside
}
}

declare module "corgitaco.corgilib.entity.IsInsideStructureTracker$IsInside" {
import { $Codec } from "com.mojang.serialization.Codec"

export class $IsInsideStructureTracker$IsInside {
static readonly "CODEC": $Codec<$IsInsideStructureTracker$IsInside>

constructor(insideStructure: boolean, insideStructurePiece: boolean)

public "isInsideStructure"(): boolean
public "isInsideStructurePiece"(): boolean
public "setInsideStructure"(insideStructure: boolean): $IsInsideStructureTracker$IsInside
public "setInsideStructurePiece"(insideStructurePiece: boolean): $IsInsideStructureTracker$IsInside
get "insideStructure"(): boolean
get "insideStructurePiece"(): boolean
set "insideStructure"(value: boolean)
set "insideStructurePiece"(value: boolean)
}
}

declare module "corgitaco.corgilib.world.level.RandomTickScheduler" {
import { $List } from "java.util.List"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $RandomTickScheduler {
"getScheduledRandomTicks"(): $List<$BlockPos>
"scheduleRandomTick"(blockPos0: $BlockPos$$Type): void
get "scheduledRandomTicks"(): $List<$BlockPos>
}

export namespace $RandomTickScheduler {
const probejs$$marker: never
}
export abstract class $RandomTickScheduler$$Static implements $RandomTickScheduler {
}
}

declare module "corgitaco.corgilib.entity.IsInsideStructureTracker$Access" {
import { $IsInsideStructureTracker } from "corgitaco.corgilib.entity.IsInsideStructureTracker"

export interface $IsInsideStructureTracker$Access {
"getIsInsideStructureTracker"(): $IsInsideStructureTracker
get "isInsideStructureTracker"(): $IsInsideStructureTracker
}

export namespace $IsInsideStructureTracker$Access {
const probejs$$marker: never
}
export abstract class $IsInsideStructureTracker$Access$$Static implements $IsInsideStructureTracker$Access {
}
}

