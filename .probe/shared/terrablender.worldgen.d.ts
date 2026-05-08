declare module "terrablender.worldgen.IExtendedBiomeSource" {
import { $List$$Type } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export interface $IExtendedBiomeSource {
"appendDeferredBiomesList"(list0: $List$$Type<$Holder$$Type<$Biome$$Type>>): void
}

export namespace $IExtendedBiomeSource {
const probejs$$marker: never
}
export abstract class $IExtendedBiomeSource$$Static implements $IExtendedBiomeSource {
}
}

declare module "terrablender.worldgen.IExtendedParameterList" {
import { $Climate$TargetPoint$$Type } from "net.minecraft.world.level.biome.Climate$TargetPoint"
import { $RegionType$$Type } from "terrablender.api.RegionType"
import { $Climate$RTree } from "net.minecraft.world.level.biome.Climate$RTree"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"

export interface $IExtendedParameterList<T = any> {
"findValuePositional"(targetPoint0: $Climate$TargetPoint$$Type, int1: integer, int2: integer, int3: integer): T
"getTree"(int0: integer): $Climate$RTree
"getTreeCount"(): integer
"getUniqueness"(int0: integer, int1: integer, int2: integer): integer
"initializeForTerraBlender"(registryAccess0: $RegistryAccess$$Type, regionType1: $RegionType$$Type, long2: long): void
"isInitialized"(): boolean
get "treeCount"(): integer
get "initialized"(): boolean
}

export namespace $IExtendedParameterList {
const probejs$$marker: never
}
export abstract class $IExtendedParameterList$$Static<T = any> implements $IExtendedParameterList<T> {
}
}

declare module "terrablender.worldgen.IExtendedNoiseGeneratorSettings" {
import { $RegionType, $RegionType$$Type } from "terrablender.api.RegionType"

export interface $IExtendedNoiseGeneratorSettings {
"getRegionType"(): $RegionType
"setRegionType"(regionType0: $RegionType$$Type): void
get "regionType"(): $RegionType
set "regionType"(value: $RegionType$$Type)
}

export namespace $IExtendedNoiseGeneratorSettings {
const probejs$$marker: never
}
export abstract class $IExtendedNoiseGeneratorSettings$$Static implements $IExtendedNoiseGeneratorSettings {
}
}

