declare module "net.minecraft.world.level.block.grower.AbstractTreeGrower" {
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $AbstractTreeGrower {
constructor()

public "growTree"(serverLevel0: $ServerLevel$$Type, chunkGenerator1: $ChunkGenerator$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, randomSource4: $RandomSource$$Type): boolean
}
}

