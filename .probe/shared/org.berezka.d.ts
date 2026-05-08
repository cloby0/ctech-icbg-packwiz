declare module "org.berezka.berezka_api.events.onStructureSpawned" {
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $List, $List$$Type } from "java.util.List"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $StructurePiece, $StructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePiece"

export class $onStructureSpawned extends $Event {
constructor(list0: $List$$Type<$StructurePiece$$Type>, string1: string, blockPos2: $BlockPos$$Type, list3: $List$$Type<$ChunkPos$$Type>)
constructor()

public "getBlockPos"(): $BlockPos
public "getOccupiedChunks"(): $List<$ChunkPos>
public "getPieces"(): $List<$StructurePiece>
public "getStructureName"(): string
get "blockPos"(): $BlockPos
get "occupiedChunks"(): $List<$ChunkPos>
get "pieces"(): $List<$StructurePiece>
get "structureName"(): string
}
}

