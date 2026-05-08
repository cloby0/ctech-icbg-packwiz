declare module "net.minecraft.world.level.redstone.NeighborUpdater" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $NeighborUpdater {
"neighborChanged"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, blockPos2: $BlockPos$$Type): void
"neighborChanged"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean): void
"shapeUpdate"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
"updateNeighborsAtExceptFromFacing"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, direction2: $Direction$$Type): void
}

export namespace $NeighborUpdater {
const UPDATE_ORDER: $Direction[]
function executeShapeUpdate(levelAccessor0: $LevelAccessor$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type, int5: integer, int6: integer): void
function executeUpdate(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, block3: $Block$$Type, blockPos4: $BlockPos$$Type, boolean5: boolean): void
}
export abstract class $NeighborUpdater$$Static implements $NeighborUpdater {
static readonly "UPDATE_ORDER": $Direction[]

static "executeShapeUpdate"(levelAccessor0: $LevelAccessor$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type, int5: integer, int6: integer): void
static "executeUpdate"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, block3: $Block$$Type, blockPos4: $BlockPos$$Type, boolean5: boolean): void
}
}

