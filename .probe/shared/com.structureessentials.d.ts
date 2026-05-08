declare module "com.structureessentials.IGeneratorNearbyStructureHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGeneratorNearbyStructureHolder {
"getNearby"(long0: long): string
"setNearby"(long0: long, string1: string): void
}

export namespace $IGeneratorNearbyStructureHolder {
const probejs$$marker: never
}
export abstract class $IGeneratorNearbyStructureHolder$$Static implements $IGeneratorNearbyStructureHolder {
}
}

declare module "com.structureessentials.IStructureModifier" {
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export interface $IStructureModifier {
"setStructureBiomes"(holderSet0: $HolderSet$$Type<$Biome$$Type>): void
set "structureBiomes"(value: $HolderSet$$Type<$Biome$$Type>)
}

export namespace $IStructureModifier {
const probejs$$marker: never
}
export abstract class $IStructureModifier$$Static implements $IStructureModifier {
}
}

