declare module "com.structureessentials.IGeneratorNearbyStructureHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGeneratorNearbyStructureHolder$$Type = ($IGeneratorNearbyStructureHolder);
}

declare module "com.structureessentials.IStructureModifier" {
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IStructureModifier$$Type = ($IStructureModifier | ((arg0: $HolderSet<$Biome>) => void));
}

